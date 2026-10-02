import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="footer-wrapper" id="contact">
      <div className="footer-container">
        {/* Top Section: Brand Logo + Newsletter Form */}
        <div className="footer-top-section">
          <div className="footer-logo-box">
            <img 
              src="/assets/samyak_logo_footer.png" 
              alt="Samyak Ceramics - Tiles & Sanitaryware" 
              className="footer-main-logo" 
            />
          </div>

          <div className="footer-subscribe-box">
            <h2 className="footer-subscribe-title">
              Shop <span className="underline-text">Our Product</span>
            </h2>
            <p className="footer-subscribe-subtitle">
              {subscribed ? 'Thank you for subscribing!' : 'Enter Your Email'}
            </p>
            <form onSubmit={handleSubmit} className="footer-input-pill">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-email-input"
                required
              />
              <button type="submit" className="footer-send-button" aria-label="Subscribe with email">
                <img 
                  src="/assets/email_send_icon.png" 
                  alt="Send" 
                  className="footer-send-icon" 
                />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Links & Contact Info */}
        <div className="footer-bottom-section">
          {/* Left Column: Quick links, Products, Social Media, Copyright */}
          <div className="footer-left-group">
            <div className="footer-nav-columns">
              {/* Quick links */}
              <div className="footer-col">
                <h3 className="footer-col-heading">Quick links</h3>
                <ul className="footer-col-list">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/download">Product</NavLink></li>
                  <li><a href="/#faq">Faq</a></li>
                </ul>
              </div>

              {/* Products */}
              <div className="footer-col">
                <h3 className="footer-col-heading">Products</h3>
                <ul className="footer-col-list">
                  <li><NavLink to="/download">Tiles</NavLink></li>
                  <li><NavLink to="/download">Granite</NavLink></li>
                  <li><NavLink to="/download">Sanitary</NavLink></li>
                  <li><NavLink to="/download">Marbles</NavLink></li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="footer-col">
                <h3 className="footer-col-heading">Social Media</h3>
                <ul className="footer-col-list">
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://justdial.com" target="_blank" rel="noopener noreferrer">JustDial</a></li>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-copyright-row">
              <img 
                src="/assets/footer_copyright_icon.png" 
                alt="Copyright" 
                className="footer-copyright-icon" 
              />
              <span className="footer-copyright-text">Samyak Ceramics Inc. 2024</span>
            </div>
          </div>

          {/* Right Column: Contact & Address */}
          <div className="footer-right-group">
            <div className="footer-contact-block">
              <h3 className="footer-section-heading contact-heading">Contact</h3>
              <div className="footer-contact-item">
                <img 
                  src="/assets/footer_phone_icon.png" 
                  alt="Phone" 
                  className="footer-contact-icon" 
                />
                <a href="tel:+919620095520" className="footer-contact-link">+91 9620095520</a>
              </div>
              <div className="footer-contact-item">
                <img 
                  src="/assets/footer_email_icon.png" 
                  alt="Email" 
                  className="footer-contact-icon" 
                />
                <a href="mailto:samyakceramics@gmail.com" className="footer-contact-link">samyakceramics@gmail.com</a>
              </div>
            </div>

            <div className="footer-address-block">
              <h3 className="footer-section-heading">Address</h3>
              <div className="footer-address-content">
                <p className="footer-address-description">
                  Samyak Ceramics,Hadadi Rd, Shivakumara Swamy Nagara, Davanagere, Karnataka 577005
                </p>
                <div className="footer-qr-wrapper">
                  <img 
                    src="/assets/samyak_qr_map.png" 
                    alt="Samyak Ceramics QR Location" 
                    className="footer-qr-image" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
