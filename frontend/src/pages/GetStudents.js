// GetStudents.js
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

const GetStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // For demonstration purposes, we use mock data
    const mockStudents = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Michael Brown' },
    ];
    setStudents(mockStudents);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Students List
      </Typography>
      {students.map((student) => (
        <div key={student.id}>
          <Typography variant="subtitle1">{student.name}</Typography>
          {/* Display more student information as needed */}
        </div>
      ))}
    </div>
  );
};

export default GetStudents;
