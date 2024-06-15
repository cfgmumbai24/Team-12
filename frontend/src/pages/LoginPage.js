import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNavigateToDashboard = () => {
    navigate('/dashboard');
    };

  return (
    <div className='login-form'>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handleNavigateToDashboard}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
