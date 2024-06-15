// UpdateMarks.js
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UpdateMarks = () => {
  const [studentName, setStudentName] = useState('');
  const [marks, setMarks] = useState('');

  const handleUpdateMarks = () => {
    // For demonstration purposes, log updated marks
    console.log(`Updating marks for ${studentName} to ${marks}`);
    // Reset form after submission
    setStudentName('');
    setMarks('');
  };

  return (
    <div>
      <TextField
        label="Student Name"
        variant="outlined"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Marks"
        variant="outlined"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdateMarks}>
        Update Marks
      </Button>
    </div>
  );
};

export default UpdateMarks;
