import React, { useState } from "react";
import "../styles/Form.css";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMentor = () => {
  const [mentorDetails, setMentorDetails] = useState({
    username: "",
    password: "",
    tags: "",
  });
  const navigate = useNavigate();

  const handleMentorChange = (e) => {
    const { name, value } = e.target;
    setMentorDetails({ ...mentorDetails, [name]: value });
  };

  const handleAddMentor = async (e) => {
    e.preventDefault();
    const sepTags = mentorDetails.tags.split(",");
    console.log("sep tags", sepTags);
    // Add logic to send mentorDetails to the backend
    const res = await axios.post("http://localhost:8080/admin/addMentor", {
      mentorDetails,
    });
    navigate("/admin/dashboard");
    console.log(res);
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>Add Mentor</h2>
        <form onSubmit={handleAddMentor}>
          <input
            type="text"
            name="username"
            value={mentorDetails.user_id}
            onChange={handleMentorChange}
            placeholder="username"
            required
          />
          <input
            type="password"
            name="password"
            value={mentorDetails.password}
            onChange={handleMentorChange}
            placeholder="Password"
            required
          />
          <input
            type="text"
            name="tags"
            value={mentorDetails.tags}
            onChange={handleMentorChange}
            placeholder="Tags (comma-separated)"
            required
          />
          <button type="submit" className="primary">
            Add Mentor
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMentor;
