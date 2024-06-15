// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Welcome to Eklavya Foundation!</h1>
      <div>
        <Link to="/student/studentHomePage">
          <button>Student</button>
        </Link>
        <Link to="/mentor">
          <button>Mentor</button>
        </Link>
        <Link to="/">
          <button>Workshop</button>
        </Link>
        <Link to="/">
          <button>Internship</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
