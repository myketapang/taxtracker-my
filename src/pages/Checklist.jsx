// src/pages/Checklist.jsx

import React from 'react';
import Header from '../components/Header';
import PreFilingChecklist from '../components/PreFilingChecklist';
import '../styles/pages.css';

const Checklist = () => {
  return (
    <div className="checklist-page">
      <Header 
        title="Pre-Filing Checklist"
        subtitle="Get ready to file with confidence"
        icon="✅"
      />
      
      <div className="page-container">
        <div className="checklist-intro">
          <p>
            Use this checklist to prepare everything you need before filing your taxes to LHDN. 
            It ensures you won't miss anything and makes the process smooth.
          </p>
        </div>

        <PreFilingChecklist />
      </div>
    </div>
  );
};

export default Checklist;
