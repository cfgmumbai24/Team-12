import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Layout from '../components/Layout';

const StudentDashboard = ({ onLogout }) => {
  return (
    <Layout>
      <div className='dashboard-page'>
        <h1>Student Dashboard</h1>
        <div>
          <Link to="/student/courses">
            <button className="primary">Courses</button>
          </Link>
          <Link to="/student/existing-applications">
            <button className="primary">Existing Applications</button>
          </Link>
          <Link to="/student/new-application">
            <button className="primary">New Application</button>
          </Link>
          <button className="danger" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
