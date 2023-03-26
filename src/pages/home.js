import React from 'react';
import '../css/home.css';
import logo from './minilogo.png';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Drive Your Dreams Today!</h1>
      <img className='main-logo' src={logo} alt="#"/>
      
    </div>
  );
}

export default Home;

//<p className="home-text">Done by: Khaled Hatoum</p>