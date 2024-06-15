import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css'; // Import your CSS file

const AdminDashboard = () => {
  const [mentorData, setMentorData] = useState({
    user_id: '',
    password: '',
    tags: ''
  });

  const [courseData, setCourseData] = useState({
    courseName: '',
    courseMentor: '',
    totalClasses: '',
    type: 'UG'
  });

  const handleMentorChange = (e) => {
    const { name, value } = e.target;
    setMentorData({ ...mentorData, [name]: value });
  };

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const addMentor = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/mentors', mentorData);
      alert('Mentor added successfully');
      setMentorData({ user_id: '', password: '', tags: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to add mentor');
    }
  };

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courses', courseData);
      alert('Course added successfully');
      setCourseData({ courseName: '', courseMentor: '', totalClasses: '', type: 'UG' });
    } catch (err) {
      console.error(err);
      alert('Failed to add course');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <section className="section">
        <h2>Add Mentor</h2>
        <form onSubmit={addMentor}>
          <div className="form-group">
            <label>User ID:</label>
            <input
              type="text"
              name="user_id"
              value={mentorData.user_id}
              onChange={handleMentorChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={mentorData.password}
              onChange={handleMentorChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tags:</label>
            <input
              type="text"
              name="tags"
              value={mentorData.tags}
              onChange={handleMentorChange}
              required
            />
          </div>
          <button type="submit" className="btn">Add Mentor</button>
        </form>
      </section>

      <section className="section">
        <h2>Add Course</h2>
        <form onSubmit={addCourse}>
          <div className="form-group">
            <label>Course Name:</label>
            <input
              type="text"
              name="courseName"
              value={courseData.courseName}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Course Mentor (Optional):</label>
            <input
              type="text"
              name="courseMentor"
              value={courseData.courseMentor}
              onChange={handleCourseChange}
            />
          </div>
          <div className="form-group">
            <label>Total Classes:</label>
            <input
              type="number"
              name="totalClasses"
              value={courseData.totalClasses}
              onChange={handleCourseChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select name="type" value={courseData.type} onChange={handleCourseChange} required>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="global">Global Course</option>
            </select>
          </div>
          <button type="submit" className="btn">Add Course</button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;
