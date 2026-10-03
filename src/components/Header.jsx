import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ variant = 'default' }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/' || variant === 'home';

  // Close mobile menu whenever the route or hash changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (isHome) {
    return (
      <header className="home-header">
        <div className="home-header-inner">
          <NavLink to="/" className="home-logo-link" onClick={closeMobileMenu}>
            <img src="/assets/samyak_logo_header.png" alt="Samyak Ceramics" className="home-logo-img" />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="home-nav-links desktop-only-nav">
            <NavLink to="/" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/download" className={({ isActive }) => `home-nav-item ${isActive ? 'active' : ''}`}>Download</NavLink>
            <a href="#contact" className="home-nav-item">Contact</a>
            <div className="home-faq-box">
              <a href="#faq" className="home-faq-link">Faq</a>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button" 
            className={`mobile-menu-toggle home-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
          <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <img src="/assets/samyak_logo_header.png" alt="Samyak Ceramics" className="mobile-drawer-logo" />
              <button 
                type="button" 
                className="mobile-drawer-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <nav className="mobile-nav-links-list">
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink to="/download" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
                Download
              </NavLink>
              <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contact
              </a>
              <a href="#faq" className="mobile-nav-link mobile-faq-btn" onClick={closeMobileMenu}>
                FAQ
              </a>
            </nav>
            <div className="mobile-nav-contact-info">
              <p className="mobile-nav-tagline">Davanagere's Biggest Tile Showroom</p>
              <a href="tel:+919620095520" className="mobile-contact-phone">+91 9620095520</a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Standard Header for Subpages (About Us & Download)
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="page-logo-container">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src="/assets/samyak_logo_about_header.png" alt="Samyak Ceramics" className="page-logo-img" />
          </NavLink>
        </div>

        {/* Desktop Navigation Pill List */}
        <nav className="page-nav-pill-list desktop-only-nav">
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

        {/* Mobile Hamburger Toggle Button */}
        <button 
          type="button" 
          className={`mobile-menu-toggle page-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <img src="/assets/samyak_logo_about_header.png" alt="Samyak Ceramics" className="mobile-drawer-logo" />
            <button 
              type="button" 
              className="mobile-drawer-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav-links-list">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink to="/download" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Download
            </NavLink>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>
          <div className="mobile-nav-contact-info">
            <p className="mobile-nav-tagline">Davanagere's Biggest Tile Showroom</p>
            <a href="tel:+919620095520" className="mobile-contact-phone">+91 9620095520</a>
          </div>
        </div>
      </div>
    </header>
  );
}
