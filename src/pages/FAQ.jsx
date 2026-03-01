// src/pages/FAQ.jsx

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import { FAQ_DATA, DISCLAIMER_TEXT } from '../utils/constants';
import '../styles/pages.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Header 
        title="FAQ & Guides"
        subtitle="Answers to common questions about Malaysian tax reliefs"
        icon="❓"
      />
      
      <div className="page-container">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedIndex === index && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="tax-reliefs-guide">
          <h2>Malaysian Tax Reliefs Overview</h2>
          <div className="reliefs-categories">
            <div className="relief-category">
              <h3>👤 Personal Reliefs</h3>
              <ul>
                <li><strong>Self Relief:</strong> RM 9,000 (Automatic for all)</li>
                <li><strong>Spouse Relief:</strong> RM 9,000 (If married)</li>
                <li><strong>Children Relief:</strong> RM 3,000 per child (Max 4 children)</li>
                <li><strong>Parents Relief:</strong> RM 2,000 each (If parents aged 60+)</li>
              </ul>
            </div>

            <div className="relief-category">
              <h3>🏥 Health & Insurance</h3>
              <ul>
                <li><strong>Medical Expenses:</strong> RM 5,000 (Checkups, dental, optical)</li>
                <li><strong>Insurance Premiums:</strong> RM 8,000 (Life, medical, accident)</li>
              </ul>
            </div>

            <div className="relief-category">
              <h3>📚 Education & Savings</h3>
              <ul>
                <li><strong>Education Fees:</strong> RM 6,000 (University/college tuition)</li>
                <li><strong>SSPN/PTPTN:</strong> RM 8,000 (Education savings/loan payments)</li>
              </ul>
            </div>

            <div className="relief-category">
              <h3>🏠 Housing & Lifestyle</h3>
              <ul>
                <li><strong>Housing Loan Interest:</strong> RM 6,000 (Residential properties only)</li>
                <li><strong>Lifestyle Expenses:</strong> RM 1,000 (Books, internet, sports, gym)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="important-tips">
          <h2>📌 Important Tips for Tax Compliance</h2>
          <div className="tips-container">
            <div className="tip">
              <h4>Keep All Receipts</h4>
              <p>Save original receipts and supporting documents for all claimed expenses for at least 7 years. LHDN may audit and request these.</p>
            </div>
            <div className="tip">
              <h4>Don't Over-Claim</h4>
              <p>Each relief has a maximum limit. Claiming more than allowed can result in penalties. The limits are shown in this app.</p>
            </div>
            <div className="tip">
              <h4>One Expense, One Claim</h4>
              <p>You cannot claim the same expense under multiple reliefs. For example, tuition fees go under Education relief, not Lifestyle.</p>
            </div>
            <div className="tip">
              <h4>Check Your EA Form</h4>
              <p>Your employer sends an EA form showing your salary, PCB deducted, and other information. Verify this before filing.</p>
            </div>
            <div className="tip">
              <h4>File by the Deadline</h4>
              <p>The filing deadline is June 30 each year. Late filing can result in penalties and interest.</p>
            </div>
            <div className="tip">
              <h4>Claim Spouse Relief Only Once</h4>
              <p>Married couples cannot both claim spouse relief. Usually, the higher earner claims. Only one person should claim per tax year.</p>
            </div>
          </div>
        </div>

        <div className="useful-links">
          <h2>🔗 Useful Links</h2>
          <ul>
            <li>
              <a href="https://www.hasil.gov.my" target="_blank" rel="noopener noreferrer">
                LHDN Official Website - hasil.gov.my
              </a>
            </li>
            <li>
              <a href="https://efiling.hasil.gov.my" target="_blank" rel="noopener noreferrer">
                LHDN e-Filing Portal - efiling.hasil.gov.my
              </a>
            </li>
            <li>
              <a href="https://www.hasil.gov.my/en/individual/individual-life-cycle/income-declaration/tax-reliefs/" target="_blank" rel="noopener noreferrer">
                Official Tax Reliefs Information
              </a>
            </li>
            <li>
              <a href="https://www.myaccount.gov.my" target="_blank" rel="noopener noreferrer">
                MyAccount Portal - Register or manage account
              </a>
            </li>
          </ul>
        </div>

        <div className="disclaimer">
          <h2>⚠️ Important Disclaimer</h2>
          <p>{DISCLAIMER_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
