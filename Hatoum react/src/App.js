import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import Navbar from './pages/navbar';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (<Router>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<LoginPage/>}/>
      <Route  path="/register" element={<RegisterPage/>}/>
      <Route  path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </Router>

  );
}

export default App;
