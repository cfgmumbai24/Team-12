// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentorDashboard from './pages/MentorDashboard';
import GetStudents from './pages/GetStudents';
import LaggingStudents from './pages/LaggingStudents';
import UpdateMarks from './pages/UpdateMarks';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import StudentHomePage from './pages/StudentHomePage';
import NewApplicationPage from './pages/NewApplicationPage';
import ExistingApplicationsPage from './pages/ExistingApplicationsPage';
import CoursesPage from './pages/CoursesPage';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/mentor" element= {<Login />} />
        <Route path="/mentor/get-students" element={<GetStudents />} />
        <Route path="/mentor/lagging-students" element={<LaggingStudents />} />
        <Route path="/mentor/update-marks" element={<UpdateMarks />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/student/register" element={<RegisterPage />} />
        <Route path="/student/login" element={<LoginPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/new-application" element={<NewApplicationPage />} />
        <Route path="/student/existing-applications" element={<ExistingApplicationsPage />} />
        <Route path="/student/courses" element={<CoursesPage />} />
        <Route path="/student/studentHomePage" element={<StudentHomePage />} />
      </Routes>
    </Router>
    // <AdminDashboard />
  );
};

export default App;
