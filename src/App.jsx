// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wizard from './pages/Wizard';
import Tracker from './pages/Tracker';
import Estimator from './pages/Estimator';
import Checklist from './pages/Checklist';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
