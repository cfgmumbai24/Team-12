import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentorDashboard.css';

const MentorDashboard = () => {
  return (
    <div className="mentor-dashboard-page">
      <h1>Welcome, Mentor</h1>
      <Link to='/mentor/get-students'>
          <button>Get Students</button>
      </Link>
      <br></br>
      <Link to='/mentor/lagging-students'>
        <button>Lagging Students</button>
      </Link>
      <br></br>
      <Link to='/mentor/update-marks'>
        <button>Update Marks</button>
      </Link>
    </div>
  );
};

export default MentorDashboard;