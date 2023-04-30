import React, { useState, useEffect } from 'react';
import "../css/AboutMe.css";
import { getUserInfo } from '../api/user.details';
import { useQuery, useParams } from 'react-query';
import jwt_decode from 'jwt-decode';
import { editAboutme } from '../api/edit.aboutme';
import { useMutation } from 'react-query';



function AboutMe() {
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token); //needed to add this to get userId from token
  const userId = decodedToken.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState("");
  const { data, err, isLoading, refetch } = useQuery(["getUserInfo", userId], getUserInfo);

  useEffect(() => {
    if (data) {
      setName(data.fullName);
      setEmail(data.email);
      setPassword(data.password);

    }
  }, [data]);
  const editUserMutation = useMutation(editAboutme, {
    onError: (error) => {
      setError("user not updated"); 
      console.log(error);
    },
    onSuccess: (data) => {
      setError("user updated")
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      userId,
      name,
      email,
      password
    };
    editUserMutation.mutate(newUser);
    
  };

  return (
    <div className='form' onSubmit={handleSubmit}>
    <form >
    {error && <div className="error">{error}</div>}
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
// function getUserIdFromToken(token) {
//   try {
//     const decoded = jwt.decode(token);
//     return decoded.userId; // or whatever key you're using for the userId claim
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }
export default AboutMe;