// src/pages/Wizard.jsx

import React, { useState } from 'react';
import Header from '../components/Header';
import ReliefWizard from '../components/ReliefWizard';
import '../styles/pages.css';

const Wizard = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="wizard-page">
      <Header 
        title="Relief Eligibility Wizard"
        subtitle="Discover which tax reliefs you can claim"
        icon="🧙"
      />
      
      <div className="page-container">
        <div className="wizard-intro">
          <p>
            This quick wizard will ask you simple questions about your life situation to help you 
            discover which tax reliefs you're eligible for. No tax jargon, just straightforward questions.
          </p>
        </div>

        <ReliefWizard onComplete={(reliefs) => setCompleted(true)} />

        {completed && (
          <div className="wizard-next-steps">
            <h3>What's Next?</h3>
            <ol>
              <li>Visit the <strong>Expense Tracker</strong> to record your qualifying expenses throughout the year</li>
              <li>Use the <strong>Tax Estimator</strong> to calculate your estimated refund</li>
              <li>Follow the <strong>Filing Checklist</strong> when you're ready to submit to LHDN</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wizard;
