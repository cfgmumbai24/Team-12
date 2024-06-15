import React, { useState } from 'react';
import '../styles/Form.css';
import Layout from '../components/Layout';

const AddCourse = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    courseMentor: '',
    totalClasses: '',
    type: 'UG',
  });

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add logic to send courseDetails to the backend
    console.log('Course added:', courseDetails);
  };

  return (
    <Layout>
      <div className='form-container'>
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
            name="courseMentor"
            value={courseDetails.courseMentor}
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
          <select
            name="type"
            value={courseDetails.type}
            onChange={handleCourseChange}
            required
          >
            <option value="UG">UG</option>
            <option value="PG">PG</option>
            <option value="global">Global</option>
          </select>
          <button type="submit" className="primary">Add Course</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCourse;
