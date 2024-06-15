import React, { useState } from "react";
import "../styles/Form.css";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseName: "",
    course_mentor: "",
    totalClasses: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    // Add logic to send courseDetails to the backend
    try {
      const res = await axios.post("http://localhost:8080/admin/addCourse", {
        courseDetails,
      });
      console.log(res);
      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err);
    }
    console.log("Course added:", courseDetails);
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>Add Course</h2>
        <form onSubmit={handleAddCourse}>
          <input
            type="text"
            name="courseName"
            value={courseDetails.courseName}
            onChange={handleCourseChange}
            placeholder="Course Name"
            required
          />
          <input
            type="text"
            name="course_mentor"
            value={courseDetails.course_mentor}
            onChange={handleCourseChange}
            placeholder="Course Mentor (optional)"
          />
          <input
            type="number"
            name="totalClasses"
            value={courseDetails.totalClasses}
            onChange={handleCourseChange}
            placeholder="Total Classes"
            required
          />
          <input
            type="text"
            name="type"
            value={courseDetails.type}
            onChange={handleCourseChange}
            required
          />

          <button type="submit" className="primary">
            Add Course
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCourse;
