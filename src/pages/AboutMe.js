import React, { useState, useEffect } from 'react';
import "../css/login.css";
import { getUserInfo } from '../api/user.details';
import { useQuery, useParams } from 'react-query';
import jwt_decode from 'jwt-decode';
import { editAboutme } from '../api/edit.aboutme';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';




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
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setName(data.fullName);
      setEmail(data.email);
      setAddress(data.address);

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
  const handleManageBookings= () => {
    navigate(`/allbookings`);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      address
    };
    editUserMutation.mutate(userId, newUser);
  
  };

  return (
    <div className="login">
    <div className="login-page">
      {/*isAdmin() &&*/ <h2>About Me</h2>}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Full Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Email:</label>
          <input type="email" value={email} disabled={true} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Address:</label>
          <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
        <button type="submit">Save Info</button>
        <button onClick={(event) => handleManageBookings(event)} >Manage Bookings</button>

      </form>
    </div>
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


{/* <div className='form' onSubmit={handleSubmit}>
<form >
{error && <div className="error">{error}</div>}
  <label>Name:</label>
  <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
  <br />
  <label>Email:</label>
  <input type="email" value={email} disabled={true} onChange={(event) => setEmail(event.target.value)} />
  <br />
  <label>Address:</label>
  <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
  <br />
  <button type="submit">Save</button>
</form>
</div> */}