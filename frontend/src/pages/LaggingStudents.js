// LaggingStudents.js
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const LaggingStudents = () => {
  const [laggingStudents, setLaggingStudents] = useState([]);

  useEffect(() => {
    // For demonstration purposes, we use mock data
    const mockLaggingStudents = [
      { id: 1, name: 'Emily White' },
      { id: 2, name: 'David Green' },
    ];
    setLaggingStudents(mockLaggingStudents);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lagging Students List
      </Typography>
      {laggingStudents.map((student) => (
        <div key={student.id}>
          <Typography variant="subtitle1">{student.name}</Typography>
          {/* Display more student information as needed */}
        </div>
      ))}
    </div>
  );
};

export default LaggingStudents;
