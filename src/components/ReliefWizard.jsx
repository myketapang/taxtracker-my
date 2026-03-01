// src/components/ReliefWizard.jsx

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { WIZARD_QUESTIONS, RELIEF_DETAILS } from '../utils/reliefData';
import { saveWizardData, getWizardData } from '../utils/storage';
import '../styles/components.css';

const ReliefWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [eligibleReliefs, setEligibleReliefs] = useState([]);

  useEffect(() => {
    const saved = getWizardData();
    if (saved) {
      setAnswers(saved);
    }
  }, []);

  const question = WIZARD_QUESTIONS[currentStep];
  const isLastStep = currentStep === WIZARD_QUESTIONS.length - 1;

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    
    if (isLastStep) {
      completeWizard(newAnswers);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const completeWizard = (finalAnswers) => {
    const relievesEligible = WIZARD_QUESTIONS
      .filter(q => finalAnswers[q.id] === true || finalAnswers[q.id] > 0)
      .map(q => q.relief)
      .filter((relief, index, self) => self.indexOf(relief) === index);

    saveWizardData(finalAnswers);
    setEligibleReliefs(relievesEligible);
    onComplete(relievesEligible);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (eligibleReliefs.length > 0) {
    return (
      <div className="wizard-results">
        <h3>Your Eligible Reliefs</h3>
        <div className="relief-grid">
          {eligibleReliefs.map(relief => {
            const details = RELIEF_DETAILS[relief];
            return (
              <div key={relief} className="relief-card">
                <h4>{details.name}</h4>
                <p className="relief-limit">
                  {details.limit ? `Limit: RM${details.limit.toLocaleString()}` : 'Automatic'}
                </p>
                <p className="relief-desc">{details.description}</p>
              </div>
            );
          })}
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setCurrentStep(0);
            setAnswers({});
            setEligibleReliefs([]);
          }}
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="wizard-container">
      <div className="wizard-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentStep + 1) / WIZARD_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">
          Question {currentStep + 1} of {WIZARD_QUESTIONS.length}
        </p>
      </div>

      <div className="wizard-question">
        <h2>{question.question}</h2>
        
        {question.type === 'yes-no' && (
          <div className="wizard-buttons">
            <button 
              className="btn btn-secondary"
              onClick={() => handleAnswer(false)}
            >
              No
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => handleAnswer(true)}
            >
              Yes
            </button>
          </div>
        )}

        {question.type === 'number' && (
          <div className="wizard-number">
            <input 
              type="number"
              min="1"
              max="10"
              className="input"
              placeholder="Enter number"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const value = parseInt(e.target.value);
                  if (value > 0) handleAnswer(value);
                }
              }}
            />
          </div>
        )}
      </div>

      <div className="wizard-nav">
        <button 
          className="btn btn-outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button 
          className="btn btn-outline"
          onClick={() => handleAnswer(false)}
        >
          Skip <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ReliefWizard;
