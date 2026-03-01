// src/components/PreFilingChecklist.jsx

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Download } from 'lucide-react';
import { getExpenses } from '../utils/storage';
import { calculateTotalByCategory } from '../utils/taxCalculations';
import { RELIEF_DETAILS } from '../utils/reliefData';
import '../styles/components.css';

const PreFilingChecklist = () => {
  const [checklist, setChecklist] = useState({
    eaForm: false,
    receipts: false,
    expenses: false,
    calculate: false,
    pcb: false,
    review: false,
    ready: false
  });
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const toggleItem = (key) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const generateSummaryPDF = () => {
    const reliefSummary = [];
    let totalReliefs = 9000; // Self relief

    Object.entries(RELIEF_DETAILS).forEach(([key, details]) => {
      if (key !== 'self' && key !== 'epfaso' && details.limit) {
        const categoryTotal = calculateTotalByCategory(expenses, key);
        if (categoryTotal > 0) {
          const claimed = Math.min(categoryTotal, details.limit);
          totalReliefs += claimed;
          reliefSummary.push({
            name: details.name,
            amount: categoryTotal,
            claimed: claimed,
            limit: details.limit
          });
        }
      }
    });

    reliefSummary.unshift({
      name: 'Self Relief',
      amount: 9000,
      claimed: 9000,
      limit: 9000
    });

    const summaryText = `
LHDN e-FILING SUMMARY
Tax Year 2024
Generated: ${new Date().toLocaleDateString('en-MY')}

RELIEF CLAIMED SUMMARY:
${reliefSummary.map(r => `
${r.name}
  Claimed: RM ${r.claimed.toFixed(2)}
  Limit: RM ${r.limit.toFixed(2)}
`).join('')}

TOTAL RELIEFS: RM ${totalReliefs.toFixed(2)}

WHEN YOU LOG INTO e-FILING:
1. Go to https://efiling.hasil.gov.my
2. Log in with your MyAccount credentials
3. Select "Self Assessment" 
4. Fill in the relief amounts as shown above
5. Review and submit

REMEMBER:
- Keep all original receipts for 7 years
- Submit your return by 30 June
- If you get a refund, it will be credited to your bank account

Need help? Visit https://www.hasil.gov.my
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(summaryText));
    element.setAttribute('download', 'tax_summary_2024.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const allChecked = Object.values(checklist).every(v => v);

  return (
    <div className="checklist-container">
      <div className="checklist-intro">
        <h3>Pre-Filing Checklist</h3>
        <p>Complete these steps before filing your taxes in June/July</p>
      </div>

      <div className="checklist-items">
        <div className={`checklist-item ${checklist.eaForm ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('eaForm')}
          >
            {checklist.eaForm ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Received EA Form from your employer</h4>
            <p>Your employer should send this by 31 March. It shows your gross salary, deductions, and PCB paid.</p>
          </div>
        </div>

        <div className={`checklist-item ${checklist.receipts ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('receipts')}
          >
            {checklist.receipts ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Gathered all original receipts</h4>
            <p>Collect receipts for: insurance, medical, education, housing loan documents, and other expenses. Keep for 7 years.</p>
          </div>
        </div>

        <div className={`checklist-item ${checklist.expenses ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('expenses')}
          >
            {checklist.expenses ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Recorded all expenses in the Tracker</h4>
            <p>Use the Tracker tool to log all qualifying expenses with dates and amounts.</p>
            {expenses.length > 0 && (
              <p className="checklist-info">✓ You have {expenses.length} expenses recorded</p>
            )}
          </div>
        </div>

        <div className={`checklist-item ${checklist.calculate ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('calculate')}
          >
            {checklist.calculate ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Used the Estimator to calculate reliefs</h4>
            <p>Run the Tax Estimator to see your estimated refund or amount due based on reliefs claimed.</p>
          </div>
        </div>

        <div className={`checklist-item ${checklist.pcb ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('pcb')}
          >
            {checklist.pcb ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Total PCB calculated</h4>
            <p>Add up all PCB amounts from your 12 monthly payslips. This is what you've already paid.</p>
          </div>
        </div>

        <div className={`checklist-item ${checklist.review ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('review')}
          >
            {checklist.review ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Reviewed all amounts</h4>
            <p>Double-check that all relief amounts are correct before submitting to LHDN.</p>
          </div>
        </div>

        <div className={`checklist-item ${checklist.ready ? 'completed' : ''}`}>
          <button 
            className="checklist-checkbox"
            onClick={() => toggleItem('ready')}
          >
            {checklist.ready ? <CheckCircle2 /> : <Circle />}
          </button>
          <div className="checklist-content">
            <h4>Ready to file</h4>
            <p>Go to https://efiling.hasil.gov.my and submit your self-assessment return.</p>
          </div>
        </div>
      </div>

      <div className={`progress-indicator ${allChecked ? 'complete' : ''}`}>
        <p>
          {Object.values(checklist).filter(v => v).length} of {Object.keys(checklist).length} completed
        </p>
        {allChecked && <p className="success-message">✅ You're all set to file!</p>}
      </div>

      <div className="checklist-actions">
        <button 
          className="btn btn-primary"
          onClick={generateSummaryPDF}
        >
          <Download size={20} /> Generate e-Filing Summary
        </button>
      </div>

      <div className="important-notes">
        <h4>📋 Important Notes</h4>
        <ul>
          <li><strong>Filing Deadline:</strong> 30 June each year (penalties apply for late filing)</li>
          <li><strong>Keep Records:</strong> Retain all receipts for minimum 7 years for audit purposes</li>
          <li><strong>LHDN Portal:</strong> https://efiling.hasil.gov.my</li>
          <li><strong>MyAccount Login:</strong> Use your ID number as username</li>
          <li><strong>Refund Processing:</strong> Usually 6-8 weeks direct to your bank account</li>
          <li><strong>Amendments:</strong> If you find errors, file an amended return (Form BE)</li>
        </ul>
      </div>

      <div className="filing-timeline">
        <h4>📅 Typical Filing Timeline</h4>
        <div className="timeline">
          <div className="timeline-item">
            <span className="month">Jan - Feb</span>
            <span className="event">Year ends, gather receipts</span>
          </div>
          <div className="timeline-item">
            <span className="month">Mar - Apr</span>
            <span className="event">LHDN opens e-Filing, receive EA form</span>
          </div>
          <div className="timeline-item">
            <span className="month">May - Jun</span>
            <span className="event">File your return (Deadline: 30 June)</span>
          </div>
          <div className="timeline-item">
            <span className="month">Jul - Sep</span>
            <span className="event">Refunds processed to bank account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFilingChecklist;
