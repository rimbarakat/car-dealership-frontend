import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__item">Home</Link>
      <Link to="/login" className="navbar__item">Login</Link>
      <Link to="/register" className="navbar__item">Register</Link>
      
    </nav>
  );
}

export default Navbar;