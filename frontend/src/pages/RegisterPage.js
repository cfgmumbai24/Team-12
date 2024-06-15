import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [courseName, setCourseName] = useState('');
  const [className, setClassName] = useState('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className='register-form'>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          required
        />
        <input
          type="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Course Name"
          required
        />
        <input
          type="class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="Class"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
