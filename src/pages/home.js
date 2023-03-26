import React from 'react';
import '../css/home.css';
import logo from './carlotLogo.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to this DEMO project</h1>
      <img className='main-logo' src={logo} alt="#"/>
      <p className="home-text">Done by: Khaled Hatoum</p>
    </div>
  );
}

export default Home;