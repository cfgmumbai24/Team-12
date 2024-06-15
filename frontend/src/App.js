import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import NewApplicationPage from './pages/NewApplicationPage';
import ExistingApplicationsPage from './pages/ExistingApplicationsPage';
import CoursesPage from './pages/CoursesPage';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/register" element={<RegisterPage />} />
        <Route path="/student/login" element={<LoginPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/new-application" element={<NewApplicationPage />} />
        <Route path="/student/existing-applications" element={<ExistingApplicationsPage />} />
        <Route path="/student/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
    // <AdminDashboard />
  );
};

export default App;
