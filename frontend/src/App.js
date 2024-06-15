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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/new-application" element={<NewApplicationPage />} />
        <Route path="/existing-applications" element={<ExistingApplicationsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admin" element={<AdminDashboard/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
