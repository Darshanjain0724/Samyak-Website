import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ variant = 'default' }) {
  const location = useLocation();
  const isHome = location.pathname === '/' || variant === 'home';

  if (isHome) {
    return (
      <header className="home-header">
        <div className="home-header-inner">
          <NavLink to="/" className="home-logo-link">
            <img src="/assets/samyak_logo_header.png" alt="Samyak Ceramics" className="home-logo-img" />
          </NavLink>
          <nav className="home-nav-links">
            <NavLink to="/" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/download" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>Download</NavLink>
            <a href="#contact" className="home-nav-item">Contact</a>
            <div className="home-faq-box">
              <a href="#faq" className="home-faq-link">Faq</a>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  // Standard Header for About Us and Download pages
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="page-logo-container">
          <NavLink to="/">
            <img src="/assets/samyak_logo_about_header.png" alt="Samyak Ceramics" className="page-logo-img" />
          </NavLink>
        </div>
        <nav className="page-nav-pill-list">
          <NavLink to="/" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
            <span className="nav-pill-title">Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
            <span className="nav-pill-title">About</span>
          </NavLink>
          <NavLink to="/download" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
            <span className="nav-pill-title">Download</span>
          </NavLink>
          <a href="#contact" className="nav-pill">
            <span className="nav-pill-title">Contact</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
