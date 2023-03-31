import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/register.css";

function RegisterPage(){
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');
const navigate= useNavigate();

function handleClick(){
navigate("/dashboard")
}

const handleFullNameChange = (event) => {
setFullName(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleConfirmPasswordChange = (event) => {
setConfirmPassword(event.target.value);
};

const handleRegister = (event) => {
event.preventDefault();


const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

if (!nameRegex.test(fullName)) {
  setError('Please enter your full name.');
  return;
}

if (!emailRegex.test(email)) {
  setError('Please enter a valid email address.');
  return;
}

if (!passwordRegex.test(password)) {
  setError(
    'Please enter a password that is at least 8 characters long and contains at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character: !@#$%^&*.'
  );
  return;
}

if (password !== confirmPassword) {
  setError('Passwords do not match.');
  return;
}

// TODO: Save the user's information to your database and redirect them to the cars page

console.log(`Full Name: ${fullName}, Email: ${email}, Password: ${password}`);
return handleClick();
};

return (
<div className="register-page">
<h2>Register</h2>
{error && <div className="error">{error}</div>}
<form onSubmit={handleRegister}>
<div className="form-field">
<label htmlFor="full-name">Full Name:</label>
<input
         type="text"
         id="full-name"
         value={fullName}
         onChange={handleFullNameChange}
       />
</div>
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
<div className="form-field">
<label htmlFor="confirm-password">Confirm Password:</label>
<input
         type="password"
         id="confirm-password"
         value={confirmPassword}
         onChange={handleConfirmPasswordChange}
       />
</div>
<button type="submit" >Register</button>
</form>
<div className="register-link">
<p>Already have an account? <a href="/login">Login</a></p>
</div>
</div>)}
export default RegisterPage;