import React, { useState } from "react";
import axios from "axios";
import "./styles/LoginPage.css"; // Import the CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({});
  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/mentor/login",
        formData
      );
      console.log(res.data);
      localStorage.setItem("mentorId", res.data.mentor._id);
      // Redirect to mentor dashboard upon successful login
      // Replace '/mentor/dashboard' with your desired route
      window.location.href = "/mentor/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="login-form">
        <h1>Mentor Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
