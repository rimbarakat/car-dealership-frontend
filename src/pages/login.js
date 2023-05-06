import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { useMutation } from "react-query";
import { login } from "../api/auth.service";
import { isAdmin, isAuthenticated } from "../utils";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const loginMutation = useMutation(login, {
    onError: (error) => {
      if (error.response.status === 429) {
        setError("Too many login attempts. Please try again later.");
      } else {
        setError("Wrong credentials");
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (isAuthenticated()) {
        if (isAdmin()) {
          console.log(isAdmin())
          navigate("/dashboard");
        }
        else {
          console.log(isAdmin());
          navigate("/dashboard");
        }
      }
    },
  });

  function handleClick() {
    loginMutation.mutate({ email, password });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Please enter a password that is at least 8 characters long and contains at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character: !@#$%^&*."
      );
      return;
    }

    // TODO: Validate the email and password against your database
    // If they are correct, redirect the user to the cars page
    // If they are incorrect, display an error message

    console.log(`Email: ${email}, Password: ${password}`); //remove this later on
    return handleClick();
  };

  return (
    <div className="login">
    <div className="login-page">
      {/*isAdmin() &&*/ <h2>Login</h2>}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account?{" "}
          <a className="login-link" href="/register">
            Register
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
