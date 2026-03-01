// src/components/Header.jsx

import React from 'react';
import '../styles/components.css';

const Header = ({ title, subtitle, icon }) => {
  return (
    <div className="page-header">
      <div className="header-content">
        {icon && <span className="header-icon">{icon}</span>}
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Header;
