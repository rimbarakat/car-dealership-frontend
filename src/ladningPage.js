import React from 'react';
import './App.css'; // import your CSS file for styling

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <header className="header">
          <h1>Siyaarat</h1>
          <p>Buy and Sell Cars in Saudi Arabia</p>
          <button className="btn">Get Started</button>
        </header>
        <section className="services">
          <h2>Our Services</h2>
          <div className="cards">
            <div className="card">
              <img src="https://dummyimage.com/200x200/000/fff" alt="car" />
              <h3>Buy Cars</h3>
              <p>Find the perfect car for you</p>
            </div>
            <div className="card">
              <img src="https://dummyimage.com/200x200/000/fff" alt="car" />
              <h3>Sell Cars</h3>
              <p>Sell your car fast and easy</p>
            </div>
            <div className="card">
              <img src="https://dummyimage.com/200x200/000/fff" alt="car" />
              <h3>Car Financing</h3>
              <p>Get the best financing options</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>We are a leading car marketplace in Saudi Arabia, helping buyers and sellers connect.</p>
          <button className="btn">Learn More</button>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button className="btn" id="msgbtn" type="submit">Send</button>
          </form>
        </section>
        <footer className="footer">
          <p>&copy; 2023 Siyaarat. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;

