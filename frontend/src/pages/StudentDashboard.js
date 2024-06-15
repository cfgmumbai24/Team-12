import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentDashboard.css';


const StudentDashboard = ({ onLogout }) => {
  return (
    <div className='dashboard-page'>
      <h1>Student Dashboard</h1>
      <div>
        <Link to="/courses">
          <button>Courses</button>
        </Link>
        <Link to="/existing-applications">
          <button>Existing Applications</button>
        </Link>
        <Link to="/new-application">
          <button>New Application</button>
        </Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default StudentDashboard;
