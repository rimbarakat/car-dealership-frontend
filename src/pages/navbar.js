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
      {isAuthenticated() && isAdmin() && <Link to="/createcar" className="navbar__item">+ Add Car</Link>}
      {isAuthenticated() && <Link to="/" className="navbar__item" onClick={handleLogout}>Log Out</Link>}
      <div className='logoWrap'>
        <img src={logo} className="logo"/>
      </div>
    </nav>
  );
}

export default Navbar;