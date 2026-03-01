// src/pages/Estimator.jsx

import React from 'react';
import Header from '../components/Header';
import TaxEstimator from '../components/TaxEstimator';
import '../styles/pages.css';

const Estimator = () => {
  return (
    <div className="estimator-page">
      <Header 
        title="Tax Outcome Estimator"
        subtitle="Calculate your estimated refund or tax due"
        icon="🧮"
      />
      
      <div className="page-container">
        <div className="estimator-intro">
          <p>
            Use this tool to estimate your tax outcome based on your income and claimed reliefs. 
            This gives you an idea of whether you'll get a refund or owe additional tax.
          </p>
          <div className="info-box">
            <strong>📌 Note:</strong> This estimate is based on 2024 tax rates. Your actual tax liability 
            is determined by LHDN when you file. Always keep your EA form and payslips for verification.
          </div>
        </div>

        <TaxEstimator />

        <div className="estimator-help">
          <h3>How to Find Your Income Information</h3>
          <div className="help-grid">
            <div className="help-item">
              <h4>Gross Annual Income</h4>
              <p>Add up all your salary from your 12 monthly payslips (basic pay + allowances, before any deductions)</p>
            </div>
            <div className="help-item">
              <h4>Total PCB Deducted</h4>
              <p>Sum up all "PCB" or "Tax" lines from all 12 payslips. This is what your employer deducted for income tax.</p>
            </div>
            <div className="help-item">
              <h4>Relief Amounts</h4>
              <p>Use amounts from the Expense Tracker. Don't exceed the limits shown for each relief type.</p>
            </div>
          </div>
        </div>

        <div className="tax-bands-info">
          <h3>2024 Tax Bands for Malaysia</h3>
          <table className="tax-bands-table">
            <thead>
              <tr>
                <th>Taxable Income Range</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RM 0 - RM 35,000</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>RM 35,001 - RM 80,000</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>RM 80,001 - RM 135,000</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>RM 135,001 - RM 250,000</td>
                <td>13.5%</td>
              </tr>
              <tr>
                <td>RM 250,001 - RM 400,000</td>
                <td>19%</td>
              </tr>
              <tr>
                <td>RM 400,001 - RM 600,000</td>
                <td>23%</td>
              </tr>
              <tr>
                <td>Above RM 600,000</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estimator;
