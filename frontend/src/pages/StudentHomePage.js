// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentHomePage.css';

const HomePage = () => {
  return (
    <div className='student-home-page'>
      <h1>Welcome to Student Dashboard</h1>
      <div>
        <Link to="/student/login">
          <button>Login</button>
        </Link>
        <Link to="/student/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
