import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const authenticateUser = (email, password) => {
    // Placeholder for authentication logic
    // Replace this with actual API call or logic to verify user credentials
    if (email === "admin@example.com" && password === "admin123") {
      return { role: "admin" };
    } else if (email === "student@example.com" && password === "student123") {
      return { role: "student" };
    } else {
      return null;
    }
  };

  // const handleNavigateToDashboard = (e) => {
  //   e.preventDefault();
  //   const user = authenticateUser(email, password);
  //   if (user) {
  //     if (user.role === 'admin') {
  //       navigate('/admin/dashboard');
  //     } else if (user.role === 'student') {

  //       navigate('/student/dashboard');
  //     }
  //   } else {
  //     setError('Invalid email or password');
  //   }
  // };
  const handleNavigateToDashboard = async (e) => {
    e.preventDefault();
    // const { email, password } = req.body;
    // const user = authenticateUser(email, password);
    // if (user) {
    //   if (user.role === 'admin') {
    //     navigate('/admin/dashboard');
    //   } else if (user.role === 'student') {
    const res = await axios.post("http://localhost:8080/student/login", {
      email,
      password,
    });
    localStorage.setItem("studentId", res.data.studentId);
    if (res.data.studentId) {
      navigate("/student/dashboard");
    }
    //   }
    // } else {
    //   setError('Invalid email or password');
    // }
  };
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handleNavigateToDashboard}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
