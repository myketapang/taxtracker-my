// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2, BarChart3, Calculator, CheckCircle2, BookOpen, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import '../styles/pages.css';

const features = [
  {
    icon: <Wand2 size={28} />,
    title: 'Relief Wizard',
    description: 'Q&A to find every relief you can claim',
    link: '/wizard'
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Expense Tracker',
    description: 'Log expenses by category, year-round',
    link: '/tracker'
  },
  {
    icon: <Calculator size={28} />,
    title: 'Tax Estimator',
    description: 'See your likely refund or tax due',
    link: '/estimator'
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Filing Checklist',
    description: 'Step-by-step guide before you file',
    link: '/checklist'
  },
  {
    icon: <BookOpen size={28} />,
    title: 'FAQ & Guides',
    description: 'Plain-language tax relief explanations',
    link: '/faq'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Smart Insights',
    description: 'Understand your tax situation clearly',
    link: '/estimator'
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <Header
        title="TaxTracker MY"
        subtitle="Malaysian tax relief companion · YA 2025 · e-Filing 2026"
        icon="💰"
      />

      <section className="hero-section">
        <div className="hero-content">
          <h2>Maximize Your Tax Reliefs. Minimize the Hassle.</h2>
          <p>
            Most Malaysians miss reliefs they're entitled to. Our tools guide you from
            finding eligible reliefs to filing with confidence — all in one place.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/wizard" className="btn btn-primary btn-large">
              Start Wizard
            </Link>
            <Link to="/tracker" className="btn btn-outline btn-large">
              Track Expenses
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Tools Available</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <Link key={i} to={f.link} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <span className="feature-link">Open →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="disclaimer-section">
        <h3>⚠️ Disclaimer</h3>
        <p>
          Educational tool only — not official tax advice. Reliefs based on YA 2025 LHDN
          rules (e-Filing 2026). Always verify with{' '}
          <a href="https://www.hasil.gov.my" target="_blank" rel="noreferrer">hasil.gov.my</a>{' '}
          and keep all receipts for 7 years.
        </p>
      </section>
    </div>
  );
};

export default Home;
