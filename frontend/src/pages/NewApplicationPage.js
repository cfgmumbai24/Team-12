// src/pages/NewApplicationPage.js
import axios from "axios";
import React, { useState } from "react";
import "../styles/NewApplicationPage.css";

const NewApplicationPage = () => {
  const [college, setCollege] = useState("");
  const [status, setStatus] = useState("");
  const [scholarship, setScholarship] = useState("");
  const studentId = localStorage.getItem("studentId");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission (you can add your logic here)
    console.log("Submitted:", college, status);
    let scholar;
    if (scholarship === "Yes") {
      scholar = true;
    } else {
      scholar = false;
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/student/addApplication",
        {
          id: studentId,
          uniName: college,
          AppStatus: status,
          scholarship: scholar,
        }
      );
      console.log("success!");
    } catch (err) {
      console.log(err);
    }
    // Assuming a success message or redirect after submission
    alert("Application submitted successfully!");
    // Clear the form after submission
    setCollege("");
    setStatus("");
    setScholarship("");
  };

  return (
    <div className="new-application-form">
      <h1>New Application</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="college">College:</label>
        <input
          type="text"
          id="college"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <label htmlFor="status">Scholarship:</label>
        <select
          id="scholarship"
          value={scholarship}
          onChange={(e) => setScholarship(e.target.value)}
          required
        >
          <option value="">Select Yes or No</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default NewApplicationPage;
