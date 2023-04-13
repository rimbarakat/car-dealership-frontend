import React from 'react';
import '../css/contactUs.css';

function ContactUs() {
  return (
    <div className="contactUs-container">
      <h1 className="contactUs-heading">Contact Us</h1>
      <p className="contactUs-description">You can contact us at:</p>
      <ul>
        <li>Email: carlot@gmail.com</li>
        <li>Phone: 01-102030</li>
      </ul>
    </div>
  );
}

export default ContactUs;
