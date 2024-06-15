// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentorDashboard from './pages/MentorDashboard';
import GetStudents from './pages/GetStudents';
import LaggingStudents from './pages/LaggingStudents';
import UpdateMarks from './pages/UpdateMarks';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import NewApplicationPage from './pages/NewApplicationPage';
import ExistingApplicationsPage from './pages/ExistingApplicationsPage';
import CoursesPage from './pages/CoursesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element= {<Login />} />
        <Route path="/get-students" element={<GetStudents />} />
        <Route path="/lagging-students" element={<LaggingStudents />} />
        <Route path="/update-marks" element={<UpdateMarks />} />
        <Route path="/dashboard" element={<MentorDashboard />} />
      </Routes>
    </Router>
    // <AdminDashboard />
  );
};

export default App;
