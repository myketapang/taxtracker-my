// src/pages/Estimator.jsx

import React, { useState } from 'react';
import Header from '../components/Header';
import TaxEstimator from '../components/TaxEstimator';
import '../styles/pages.css';

const Estimator = () => {
  const [showBands, setShowBands] = useState(false);

  return (
    <div className="estimator-page">
      <Header
        title="Tax Outcome Estimator"
        subtitle="Calculate your estimated refund or tax due for YA 2025"
        icon="🧮"
      />

      <div className="page-container">
        <div className="info-box" style={{ marginBottom: '1rem' }}>
          <strong>📌 Note:</strong> Estimate based on YA 2025 tax rates (filing 2026).
          Always verify your actual liability with LHDN before submitting.
          EA form and payslips required for exact figures.
        </div>

        <TaxEstimator />

        <div className="estimator-bottom-grid">
          <div className="estimator-help">
            <h3>Finding Your Income Info</h3>
            <div className="help-grid">
              <div className="help-item">
                <h4>Gross Annual Income</h4>
                <p>Sum of all salary from 12 monthly payslips (basic + allowances, before deductions)</p>
              </div>
              <div className="help-item">
                <h4>Total PCB Deducted</h4>
                <p>Add the "PCB" or "Tax" line from every payslip — what your employer already paid on your behalf</p>
              </div>
              <div className="help-item">
                <h4>Relief Amounts</h4>
                <p>Pulled automatically from your Expense Tracker. Add expenses there first for best results.</p>
              </div>
            </div>
          </div>

          <div className="tax-bands-info">
            <div className="tax-bands-header">
              <h3>YA 2025 Tax Bands — Malaysia</h3>
              <button
                className="btn-toggle"
                onClick={() => setShowBands(!showBands)}
              >
                {showBands ? 'Hide ▲' : 'Show ▼'}
              </button>
            </div>
            {showBands && (
              <table className="tax-bands-table">
                <thead>
                  <tr>
                    <th>Taxable Income (RM)</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>0 – 5,000</td><td>0%</td></tr>
                  <tr><td>5,001 – 20,000</td><td>1%</td></tr>
                  <tr><td>20,001 – 35,000</td><td>3%</td></tr>
                  <tr><td>35,001 – 50,000</td><td>8%</td></tr>
                  <tr><td>50,001 – 70,000</td><td>13%</td></tr>
                  <tr><td>70,001 – 100,000</td><td>21%</td></tr>
                  <tr><td>100,001 – 250,000</td><td>24%</td></tr>
                  <tr><td>250,001 – 400,000</td><td>24.5%</td></tr>
                  <tr><td>400,001 – 600,000</td><td>25%</td></tr>
                  <tr><td>600,001 – 1,000,000</td><td>26%</td></tr>
                  <tr><td>Above 1,000,000</td><td>28%</td></tr>
                </tbody>
              </table>
            )}
            {!showBands && (
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)' }}>
                11 progressive brackets from 0% to 28%. Click Show to expand.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
