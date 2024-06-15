import React from 'react';
import { useNavigate } from 'react-router-dom';

const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Mentor</h1>
      <button style={{ margin: '10px', padding: '5px 10px', backgroundColor: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/mentor/get-students')}>
        Get Students
      </button>
      <button style={{ margin: '10px', padding: '5px 10px', backgroundColor: '#f44336', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/mentor/lagging-students')}>
        Lagging Students
      </button>
      <button style={{ margin: '10px', padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/mentor/update-marks')}>
        Update Marks
      </button>
    </div>
  );
};

export default MentorDashboard;
