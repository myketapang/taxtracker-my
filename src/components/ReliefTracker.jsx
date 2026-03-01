// src/components/ReliefTracker.jsx

import React, { useState, useEffect } from 'react';
import { Trash2, Edit2 } from 'lucide-react';
import { EXPENSE_CATEGORIES, RELIEF_DETAILS } from '../utils/reliefData';
import { getExpenses, addExpense, deleteExpense, updateExpense } from '../utils/storage';
import { calculateTotalByCategory, isCategoryLimitExceeded } from '../utils/taxCalculations';
import '../styles/components.css';

const ReliefTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: 'books',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (editingId) {
      updateExpense(editingId, formData);
      setEditingId(null);
    } else {
      addExpense(formData);
    }

    setExpenses(getExpenses());
    setFormData({
      amount: '',
      category: 'books',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this expense?')) {
      deleteExpense(id);
      setExpenses(getExpenses());
    }
  };

  const handleEdit = (expense) => {
    setFormData({
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date
    });
    setEditingId(expense.id);
  };

  const getReliefForCategory = (category) => {
    const cat = EXPENSE_CATEGORIES.find(c => c.id === category);
    return cat ? cat.relief : null;
  };

  const groupedExpenses = {};
  expenses.forEach(exp => {
    const relief = getReliefForCategory(exp.category);
    if (!groupedExpenses[relief]) {
      groupedExpenses[relief] = [];
    }
    groupedExpenses[relief].push(exp);
  });

  return (
    <div className="tracker-container">
      <div className="tracker-form">
        <h3>{editingId ? 'Edit Expense' : 'Add New Expense'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Amount (RM)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="input"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || '' })}
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className="input"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {EXPENSE_CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="input"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="e.g., Annual gym membership"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="input"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update Expense' : 'Add Expense'}
          </button>
          {editingId && (
            <button 
              type="button" 
              className="btn btn-outline"
              onClick={() => {
                setEditingId(null);
                setFormData({
                  amount: '',
                  category: 'books',
                  description: '',
                  date: new Date().toISOString().split('T')[0]
                });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="tracker-view">
        <h3>Your Expenses</h3>
        
        <div className="expense-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({expenses.length})
          </button>
          {Object.entries(RELIEF_DETAILS).map(([key, value]) => {
            const count = groupedExpenses[key]?.length || 0;
            return (
              <button
                key={key}
                className={`filter-btn ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {value.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="expenses-list">
          {(filter === 'all' ? expenses : groupedExpenses[filter] || []).length === 0 ? (
            <p className="no-data">No expenses recorded yet</p>
          ) : (
            (filter === 'all' ? expenses : groupedExpenses[filter] || []).map(exp => {
              const relief = getReliefForCategory(exp.category);
              const catName = EXPENSE_CATEGORIES.find(c => c.id === exp.category)?.label;
              const limit = RELIEF_DETAILS[relief]?.limit;
              const isOver = isCategoryLimitExceeded(expenses, relief, limit);

              return (
                <div key={exp.id} className={`expense-item ${isOver ? 'over-limit' : ''}`}>
                  <div className="expense-info">
                    <p className="expense-category">{catName}</p>
                    <p className="expense-description">{exp.description}</p>
                    <p className="expense-date">{new Date(exp.date).toLocaleDateString()}</p>
                  </div>
                  <div className="expense-amount">
                    <span className="amount">RM {parseFloat(exp.amount).toFixed(2)}</span>
                  </div>
                  <div className="expense-actions">
                    <button 
                      className="btn-icon"
                      onClick={() => handleEdit(exp)}
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      className="btn-icon danger"
                      onClick={() => handleDelete(exp.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {expenses.length > 0 && (
          <div className="tracker-summary">
            <h4>Summary by Relief Type</h4>
            {Object.entries(groupedExpenses).map(([relief, items]) => {
              const details = RELIEF_DETAILS[relief];
              const total = calculateTotalByCategory(expenses, relief);
              const isOver = isCategoryLimitExceeded(expenses, relief, details.limit);

              return (
                <div key={relief} className={`summary-item ${isOver ? 'over-limit' : ''}`}>
                  <div className="summary-info">
                    <span className="relief-name">{details.name}</span>
                    {details.limit && (
                      <span className="relief-limit">
                        {isOver ? (
                          <span className="warning">⚠️ Over limit by RM {(total - details.limit).toFixed(2)}</span>
                        ) : (
                          <span>Remaining: RM {(details.limit - total).toFixed(2)} of RM {details.limit}</span>
                        )}
                      </span>
                    )}
                  </div>
                  <span className="summary-total">RM {total.toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReliefTracker;
