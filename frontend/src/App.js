// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorDashboard from "./pages/MentorDashboard";
import GetStudents from "./pages/GetStudents";

// import UpdateMarks from './pages/UpdateMarks';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentHomePage from './pages/StudentHomePage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import NewApplicationPage from './pages/NewApplicationPage';
import ExistingApplicationsPage from './pages/ExistingApplicationsPage';
import CoursesPage from './pages/CoursesPage';
import AdminDashboard from './pages/AdminDashboard';
import AddMentor from './pages/AddMentor';
import AddCourse from './pages/AddCourse';
import UpdateMarks from './pages/UpdateMarks';
import LaggingStudents from './pages/LaggingStudents';
import VerifyStudent from './pages/VerifyStudent';
import MentorSuggestions from './pages/MentorSuggestions';
import Login from "./pages/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mentor" element={<Login />} />
        <Route path="/mentor/get-students" element={<GetStudents />} />
        <Route path="/mentor/lagging-students" element={<LaggingStudents />} />
        <Route path="/mentor/update-marks" element={<UpdateMarks />} /> 
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/student/register" element={<RegisterPage />} />
        <Route path="/student/login" element={<LoginPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route
          path="/student/new-application"
          element={<NewApplicationPage />}
        />
        <Route
          path="/student/existing-applications"
          element={<ExistingApplicationsPage />}
        />
        <Route path="/student/courses" element={<CoursesPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-mentor" element={<AddMentor />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/student/studentHomePage" element={<StudentHomePage />} />
        <Route path="/admin/verify-student" element={<VerifyStudent />} />
        <Route
          path="/admin/mentor-suggestions"
          element={<MentorSuggestions />}
        />
      </Routes>
    </Router>
    // {/* <AdminDashboard /> */}
  );
};

export default App;
