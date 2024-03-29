// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../css/navbar.css";
// import logo from "./carlotLogoNoSlogan.png"

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar__item">Home</Link>
//       <Link to="/login" className="navbar__item">Login</Link>
//       <Link to="/register" className="navbar__item">Register</Link>
//       <Link to="/createcar" className="navbar__item">+ Add Car</Link>
//       <div className='logoWrap'>
//       <img src={logo} className="logo"/>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/navbar.css";
import logo from "./carlotLogoNoSlogan.png"
import { isAdmin, isAuthenticated } from "../utils";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__item">Home</Link>
      {isAuthenticated() && <Link to="/dashboard" className="navbar__item">Dashboard</Link>}
      {!isAuthenticated() && <Link to="/login" className="navbar__item">Login</Link>}
      {!isAuthenticated() && <Link to="/register" className="navbar__item">Register</Link>}
      {isAuthenticated() && <Link to="/AboutMe" className="navbar__item">About Me</Link>}
      {isAuthenticated() && <Link to="/" className="navbar__item" onClick={handleLogout}>Log Out</Link>}
      {isAuthenticated() && isAdmin() && <Link to="/allbookings" className="navbar__item">All Bookings</Link>}
      <div className='logoWrap'>
        <img src={logo} className="logo"/>
      </div>
    </nav>
  );
}

export default Navbar;