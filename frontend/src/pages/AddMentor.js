import React, { useState } from 'react';
import '../styles/Form.css';
import Layout from '../components/Layout';

const AddMentor = () => {
  const [mentorDetails, setMentorDetails] = useState({
    user_id: '',
    password: '',
    tags: '',
  });

  const handleMentorChange = (e) => {
    const { name, value } = e.target;
    setMentorDetails({ ...mentorDetails, [name]: value });
  };

  const handleAddMentor = (e) => {
    e.preventDefault();
    // Add logic to send mentorDetails to the backend
    console.log('Mentor added:', mentorDetails);
  };

  return (
    <Layout>
      <div className='form-container'>
        <h2>Add Mentor</h2>
        <form onSubmit={handleAddMentor}>
          <input
            type="text"
            name="user_id"
            value={mentorDetails.user_id}
            onChange={handleMentorChange}
            placeholder="User ID"
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
          <button type="submit" className="primary">Add Mentor</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMentor;
