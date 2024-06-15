import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import NewApplicationPage from './pages/NewApplicationPage';
import ExistingApplicationsPage from './pages/ExistingApplicationsPage';
import CoursesPage from './pages/CoursesPage';
import MentorDashboard from './pages/MentorDashboard';
import StudentDetailsPage from './pages/StudentDetailsPage';
import LaggingStudentsPage from './pages/LaggingStudentsPage';
import UpdateMarksPage from './pages/UpdateMarksPage';

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
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/students/:id" element={<StudentDetailsPage />} />
        <Route path="/lagging-students" element={<LaggingStudentsPage />} />
        <Route path="/update-marks" element={<UpdateMarksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
