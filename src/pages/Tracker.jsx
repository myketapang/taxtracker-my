// src/pages/Tracker.jsx

import React from 'react';
import Header from '../components/Header';
import ReliefTracker from '../components/ReliefTracker';
import '../styles/pages.css';

const Tracker = () => {
  return (
    <div className="tracker-page">
      <Header 
        title="Expense Tracker"
        subtitle="Record your tax-deductible expenses"
        icon="📊"
      />
      
      <div className="page-container">
        <div className="tracker-intro">
          <p>
            Log your expenses throughout the year to build a complete record of all your 
            potential tax relief claims. You can edit or delete entries anytime.
          </p>
          <div className="info-box">
            <strong>💡 Tip:</strong> Keep photos of receipts on your phone as you go. 
            This will save you time when filing and helps with LHDN audits.
          </div>
        </div>

        <ReliefTracker />

        <div className="tracker-tips">
          <h3>📋 What to Track</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Lifestyle Expenses</h4>
              <ul>
                <li>Books & educational materials</li>
                <li>Internet/broadband bills</li>
                <li>Sports equipment</li>
                <li>Gym membership</li>
                <li>Online courses</li>
              </ul>
              <p className="limit">Limit: RM 1,000</p>
            </div>
            <div className="tip-card">
              <h4>Medical Expenses</h4>
              <ul>
                <li>Checkups & screening</li>
                <li>Dental treatment</li>
                <li>Optical/glasses</li>
                <li>Medication</li>
              </ul>
              <p className="limit">Limit: RM 5,000</p>
            </div>
            <div className="tip-card">
              <h4>Insurance</h4>
              <ul>
                <li>Life insurance</li>
                <li>Medical insurance</li>
                <li>Accident insurance</li>
              </ul>
              <p className="limit">Limit: RM 8,000</p>
            </div>
            <div className="tip-card">
              <h4>Education</h4>
              <ul>
                <li>University/college fees</li>
                <li>PTPTN payments</li>
                <li>SSPN contributions</li>
              </ul>
              <p className="limit">Limit: RM 6,000-8,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
