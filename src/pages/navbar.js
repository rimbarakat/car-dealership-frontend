import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
import logo from "./carlotLogoNoSlogan.png"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__item">Home</Link>
      <Link to="/login" className="navbar__item">Login</Link>
      <Link to="/register" className="navbar__item">Register</Link>
      <Link to="/createcar" className="navbar__item">+ Add Car</Link>
      <div className='logoWrap'>
      <img src={logo} className="logo"/>
      </div>
    </nav>
  );
}

export default Navbar;