import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";
import axios from "axios";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [courseName, setCourseName] = useState("");
  const [className, setClassName] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/student/register", {
      email,
      password,
      username,
      number,
      courseName, // This should be the name of the course
      className,
    });
    navigate("/student/login");
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
    <div style={{align: 'center'}}>
    <div className='register-form' style={{alignContent: 'center', align: 'center', marginLeft: '35%'}}>
      <h1 style={{color: 'rgb(98, 28, 28)'}}>Register</h1>
      <form onSubmit={onSubmit} style={{marginRight: 2}}>
        <input
          type="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          required
        />
        <input
          type="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Course Name"
          required
        />
        <input
          type="class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="Class"
          required
        />
        <button type="submit" style={{backgroundColor: 'rgb(98, 28, 28)'}}>Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;
