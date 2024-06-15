import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import Layout from '../components/Layout';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='admin-dashboard'>
        <h1>Admin Dashboard</h1>
        
        <div className='button-group'>
          <button className="primary" onClick={() => navigate('/admin/add-mentor')}>Add Mentor</button>
          <button className="primary" onClick={() => navigate('/admin/add-course')}>Add Course</button>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
