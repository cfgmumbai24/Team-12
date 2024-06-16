import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UpdateMarks.css'; // Import the CSS file for styling

const UpdateMarks = () => {
  const [studentName, setStudentName] = useState('');
  const [marks, setMarks] = useState('');
  const [testId, setTestId] = useState('');


  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/mentor/${testId}/addMarks`, {
        id: localStorage.getItem('mentorId'),
        marks: marks,
        student_name: studentName,
      });
      console.log(res.data);
      alert('Marks updated successfully!');
      // Clear input fields after successful update
      setStudentName('');
      setTestId('');
      setMarks('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-marks-container">
      <h4>Update Marks</h4>
      <form className="update-marks-form">
        <input
          className="update-marks-input"
          type="text"
          placeholder="Test ID"
          value={testId}
          onChange={(e) => setTestId(e.target.value)}
          required
        />
        <input
          className="update-marks-input"
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <input
          className="update-marks-input"
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
        <button className="update-marks-button" onClick={handleUpdateMarks}>
          Update Marks
        </button>
      </form>
    </div>
  );
};

export default UpdateMarks;