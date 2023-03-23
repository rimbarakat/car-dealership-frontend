import React from 'react';
import '../css/contactUs.css';

function ContactUs() {
  return (
    <div className="contactUs-container">
      <h1 className="contactUs-heading">Contact Us</h1>
      <p className="contactUs-description">You can contact us at:</p>
      <ul>
        <li>Email: contact@dummycompany.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </div>
  );
}

export default ContactUs;
