// src/components/TaxEstimator.jsx

import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { getExpenses } from '../utils/storage';
import { calculateTaxOutcome, calculateTotalByCategory } from '../utils/taxCalculations';
import { RELIEF_DETAILS } from '../utils/reliefData';
import '../styles/components.css';

const TaxEstimator = () => {
  const [incomeData, setIncomeData] = useState({
    grossIncome: '',
    pcbDeducted: ''
  });
  const [expenses, setExpenses] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncomeData({
      ...incomeData,
      [name]: value === '' ? '' : parseFloat(value)
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    if (!incomeData.grossIncome || !incomeData.pcbDeducted) {
      alert('Please enter both income and PCB deducted amounts');
      return;
    }

    let totalReliefs = 9000; // Self relief (automatic)

    // Add expense-based reliefs
    Object.entries(RELIEF_DETAILS).forEach(([key, details]) => {
      if (key !== 'self' && key !== 'epfaso' && details.limit) {
        const categoryTotal = calculateTotalByCategory(expenses, key);
        if (categoryTotal > 0) {
          totalReliefs += Math.min(categoryTotal, details.limit);
        }
      }
    });

    const outcome = calculateTaxOutcome(
      incomeData.grossIncome,
      totalReliefs,
      incomeData.pcbDeducted
    );

    setResult(outcome);
  };

  const reliefBreakdown = () => {
    let reliefs = {
      self: { value: 9000, name: 'Self Relief' }
    };

    Object.entries(RELIEF_DETAILS).forEach(([key, details]) => {
      if (key !== 'self' && key !== 'epfaso' && details.limit) {
        const categoryTotal = calculateTotalByCategory(expenses, key);
        if (categoryTotal > 0) {
          reliefs[key] = {
            value: Math.min(categoryTotal, details.limit),
            name: details.name,
            claimed: categoryTotal,
            limit: details.limit
          };
        }
      }
    });

    return reliefs;
  };

  return (
    <div className="estimator-container">
      <div className="estimator-form">
        <h3>Tax Outcome Estimator</h3>
        <form onSubmit={handleCalculate}>
          <div className="form-row">
            <div className="form-group">
              <label>Gross Annual Income (RM)</label>
              <input
                type="number"
                name="grossIncome"
                className="input"
                value={incomeData.grossIncome}
                onChange={handleInputChange}
                placeholder="e.g., 60000"
              />
              <small>Your total employment income before any deductions</small>
            </div>
            <div className="form-group">
              <label>Total PCB Deducted (RM)</label>
              <input
                type="number"
                name="pcbDeducted"
                className="input"
                value={incomeData.pcbDeducted}
                onChange={handleInputChange}
                placeholder="e.g., 2400"
              />
              <small>Total PCB deducted from your payslips throughout the year</small>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate Tax Outcome
          </button>
        </form>
      </div>

      {result && (
        <div className="estimator-results">
          <div className={`result-card ${result.status}`}>
            <h3>Your Tax Estimate</h3>
            
            <div className="result-breakdown">
              <div className="breakdown-item">
                <span>Gross Income</span>
                <span>RM {result.grossIncome.toLocaleString('en-MY', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="breakdown-item highlight">
                <span>Total Reliefs Claimed</span>
                <span>RM {result.totalReliefs.toLocaleString('en-MY', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="breakdown-item">
                <span>Taxable Income</span>
                <span>RM {result.taxableIncome.toLocaleString('en-MY', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div className="relief-breakdown-table">
              <h4>Reliefs Breakdown</h4>
              {Object.entries(reliefBreakdown()).map(([key, relief]) => (
                <div key={key} className="relief-row">
                  <span className="relief-name">{relief.name}</span>
                  <span className="relief-amount">
                    RM {relief.value.toLocaleString('en-MY', { minimumFractionDigits: 2 })}
                  </span>
                  {relief.limit && (
                    <span className="relief-limit">
                      ({relief.claimed > relief.limit ? '⚠️ ' : ''}{relief.claimed.toFixed(2)} / {relief.limit})
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className={`result-highlight ${result.status}`}>
              <h4>
                {result.status === 'refund' && '💰 Expected Refund'}
                {result.status === 'payable' && '💳 Amount Due'}
                {result.status === 'balanced' && '✅ Balanced'}
              </h4>
              <p className="result-amount">
                RM {Math.abs(result.difference).toLocaleString('en-MY', { minimumFractionDigits: 2 })}
              </p>
              <div className="result-info">
                <p>Total Tax Estimated: RM {result.totalTax.toLocaleString('en-MY', { minimumFractionDigits: 2 })}</p>
                <p>PCB Already Deducted: RM {result.pcbDeducted.toLocaleString('en-MY', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>

            <div className="disclaimer-box">
              <p><strong>⚠️ Important Disclaimer:</strong></p>
              <p>This is an estimate based on 2024 tax bands and standard assumptions. Your actual tax liability depends on your exact circumstances and LHDN assessment. Always verify with your e-Filing form before submission.</p>
            </div>
          </div>
        </div>
      )}

      <div className="estimator-tips">
        <h3>💡 Tips for Better Estimates</h3>
        <ul>
          <li>Use your payslips to find the exact PCB amount deducted each month</li>
          <li>Add all your eligible expenses in the Tracker before calculating</li>
          <li>Include spouse relief if you're married</li>
          <li>Remember to claim children relief for each dependent</li>
          <li>Don't forget insurance premiums and medical expenses</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxEstimator;
