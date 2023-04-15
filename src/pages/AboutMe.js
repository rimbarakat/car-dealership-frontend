import React, { useState, useEffect } from 'react';
import "../css/AboutMe.css";

function AboutMe(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Fetch the user's information from the backend and set the state variables
    const fetchUser = async () => {
      const response = await fetch(`/api/user/${props.userId}`);
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
      setPhone(data.phone);
      setAddress(data.address);
    }
    fetchUser();
  }, [props.userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/user/${props.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        address
      })
    });
    if (response.ok) {
      // Show success message
      console.log('User information updated successfully');
    } else {
      // Show error message
      console.error('Error updating user information');
    }
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <label>Phone:</label>
      <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
      <br />
      <label>Address:</label>
      <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
      <br />
      <button type="submit">Save</button>
    </form>
    </div>
  );
}

export default AboutMe;