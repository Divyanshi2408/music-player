import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>About</h3>
          <p>
            Melodies is a website that has been created for over <span className="highlight">5 year’s</span> now and it is one of the most famous music player websites in the world. In this website you can listen songs. Also, if you want no limitation you can buy our <span className="highlight">premium pass’s</span>.
          </p>
        </div>
        <div className="footer-links">
          <div className="links">
            <h3>Melodies</h3>
            <ul>
              <li>Songs</li>

            </ul>
          </div>
          <div className="links">
            <h3>Access</h3>
            <ul>
              <li>Explore</li>
              <li>Artists</li>
              <li>Trending</li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact</h3>
            <ul>
              <li>About</li>
              <li>Policy</li>
              <li>Social Media</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <h1>Melodies</h1>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="tel:+1234567890">Phone</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
