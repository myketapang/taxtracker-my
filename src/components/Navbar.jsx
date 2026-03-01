// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, APP_TITLE } from '../utils/constants';
import '../styles/components.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          💰 {APP_TITLE}
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {NAVIGATION.map(item => (
            <li key={item.path} className="navbar-item">
              <Link 
                to={item.path} 
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
