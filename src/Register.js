import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="first-name" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="last-name" required />
          {renderErrorMessage("pass")}
        </div>
        <div className = "input-container">
          <label>Email</label>
          <input type="text" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>

  );

  return (
    <div className="app">
      
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div className="logo-container">
      </div>
    </div>
  );
}

export default App;