// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2, BarChart3, Calculator, CheckCircle2, BookOpen, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import '../styles/pages.css';

const Home = () => {
  const features = [
    {
      icon: <Wand2 size={32} />,
      title: 'Relief Wizard',
      description: 'Simple Q&A to discover which reliefs you can claim',
      link: '/wizard'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Expense Tracker',
      description: 'Record expenses throughout the year, organized by category',
      link: '/tracker'
    },
    {
      icon: <Calculator size={32} />,
      title: 'Tax Estimator',
      description: 'Calculate your estimated refund or tax due before filing',
      link: '/estimator'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Filing Checklist',
      description: 'Step-by-step guide to prepare for tax submission',
      link: '/checklist'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'FAQ & Guides',
      description: 'Learn about tax reliefs, rules, and common questions',
      link: '/faq'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Smart Insights',
      description: 'Understand your tax situation with clear summaries',
      link: '/estimator'
    }
  ];

  return (
    <div className="home-page">
      <Header 
        title="Welcome to TaxTracker MY"
        subtitle="Your friendly tax relief companion for Malaysian salaried workers"
        icon="💰"
      />

      <section className="hero-section">
        <div className="hero-content">
          <h2>Maximize Your Tax Reliefs. Minimize the Hassle.</h2>
          <p>Most Malaysians leave money on the table each year. Our app helps you claim every relief you're entitled to, simply and confidently.</p>
          <Link to="/wizard" className="btn btn-primary btn-large">
            Start the Wizard
          </Link>
        </div>
      </section>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pain-points-section">
        <h2>Why Use TaxTracker MY?</h2>
        <div className="pain-points-grid">
          <div className="pain-point">
            <span className="pain-point-emoji">🤔</span>
            <h4>"I'm not sure what I can claim"</h4>
            <p>We'll guide you through a simple wizard to identify all eligible reliefs</p>
          </div>
          <div className="pain-point">
            <span className="pain-point-emoji">📝</span>
            <h4>"I can't remember all my expenses"</h4>
            <p>Track expenses throughout the year, not just in March when you panic</p>
          </div>
          <div className="pain-point">
            <span className="pain-point-emoji">💸</span>
            <h4>"What's my refund going to be?"</h4>
            <p>Get a clear estimate of your likely refund or tax due before filing</p>
          </div>
          <div className="pain-point">
            <span className="pain-point-emoji">😰</span>
            <h4>"Am I claiming too much?"</h4>
            <p>We show you the limits for each relief to keep you safe and compliant</p>
          </div>
          <div className="pain-point">
            <span className="pain-point-emoji">⏰</span>
            <h4>"Filing is confusing"</h4>
            <p>Step-by-step checklist makes sure you're ready when the deadline comes</p>
          </div>
          <div className="pain-point">
            <span className="pain-point-emoji">❓</span>
            <h4>"Where do I get help?"</h4>
            <p>Comprehensive FAQ and guides explain everything in plain language</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Maximize Your Refund?</h2>
        <p>Join thousands of Malaysian salaried workers who are claiming every relief they deserve.</p>
        <div className="cta-buttons">
          <Link to="/wizard" className="btn btn-primary btn-large">
            Start Now
          </Link>
          <Link to="/faq" className="btn btn-outline btn-large">
            Learn More
          </Link>
        </div>
      </section>

      <section className="disclaimer-section">
        <h3>⚠️ Important Disclaimer</h3>
        <p>
          This application is an educational tool to help you understand Malaysian tax reliefs. 
          It is NOT official tax advice. Always verify information with LHDN (Lembaga Hasil Dalam Negeri Malaysia) 
          and your e-Filing form. Keep all receipts for 7 years.
        </p>
      </section>
    </div>
  );
};

export default Home;
