import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/about-us" className="footer-link">More About Us</Link>
        <Link to="/contact-us" className="footer-link">Contact Us</Link>
      </div>
    </div>
  );
}

export default Footer;
