// src/pages/NewApplicationPage.js

import React, { useState } from 'react';
import '../styles/NewApplicationPage.css';

const NewApplicationPage = () => {
  const [college, setCollege] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (you can add your logic here)
    console.log('Submitted:', college, status);
    // Assuming a success message or redirect after submission
    alert('Application submitted successfully!');
    // Clear the form after submission
    setCollege('');
    setStatus('');
  };

  return (
    <div className='new-application-form'>
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
          <option value="Applied">Applied</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default NewApplicationPage;
