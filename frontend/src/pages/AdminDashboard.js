import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css'; // Import your CSS file
import '../styles/CoursesPage.css'; // Import the provided CSS file

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

  const [mentorError, setMentorError] = useState('');
  const [courseError, setCourseError] = useState('');

  const [courses, setCourses] = useState([
    { id: 1, name: 'Course 1', selected: false },
    { id: 2, name: 'Course 2', selected: false },
    { id: 3, name: 'Course 3', selected: false }
  ]);

  const handleMentorChange = (e) => {
    const { name, value } = e.target;
    setMentorData({ ...mentorData, [name]: value });
  };

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleCheckboxChange = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, selected: !course.selected } : course
      )
    );
  };

  const addMentor = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/mentors', mentorData);
      alert('Mentor added successfully');
      setMentorData({ user_id: '', password: '', tags: '' });
      setMentorError('');
    } catch (err) {
      console.error(err);
      setMentorError('Failed to add mentor');
    }
  };

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courses', courseData);
      alert('Course added successfully');
      setCourseData({ courseName: '', courseMentor: '', totalClasses: '', type: 'UG' });
      setCourseError('');
    } catch (err) {
      console.error(err);
      setCourseError('Failed to add course');
    }
  };

  const FormInput = ({ label, type, name, value, onChange, required = false }) => (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="section">
        <h2>Add Mentor</h2>
        {mentorError && <div className="error">{mentorError}</div>}
        <form onSubmit={addMentor}>
          <FormInput
            label="User ID"
            type="text"
            name="user_id"
            value={mentorData.user_id}
            onChange={handleMentorChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={mentorData.password}
            onChange={handleMentorChange}
            required
          />
          <FormInput
            label="Tags"
            type="text"
            name="tags"
            value={mentorData.tags}
            onChange={handleMentorChange}
            required
          />
          <button type="submit" className="btn">Add Mentor</button>
        </form>
      </section>

      <section className="section">
        <h2>Add Course</h2>
        {courseError && <div className="error">{courseError}</div>}
        <form onSubmit={addCourse}>
          <FormInput
            label="Course Name"
            type="text"
            name="courseName"
            value={courseData.courseName}
            onChange={handleCourseChange}
            required
          />
          <FormInput
            label="Course Mentor (Optional)"
            type="text"
            name="courseMentor"
            value={courseData.courseMentor}
            onChange={handleCourseChange}
          />
          <FormInput
            label="Total Classes"
            type="number"
            name="totalClasses"
            value={courseData.totalClasses}
            onChange={handleCourseChange}
            required
          />
          <div className="form-group">
            <label>Type:</label>
            <select name="type" value={courseData.type} onChange={handleCourseChange} required className="select-field">
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="global">Global Course</option>
            </select>
          </div>
          <button type="submit" className="btn">Add Course</button>
        </form>
      </section>

      <section className="courses-page">
        <h1>Available Courses</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <label>
                <input
                  type="checkbox"
                  checked={course.selected}
                  onChange={() => handleCheckboxChange(course.id)}
                />
                {course.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
