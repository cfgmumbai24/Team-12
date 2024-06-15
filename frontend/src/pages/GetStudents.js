import React, { useState, useEffect } from 'react';

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
      <h4>Students List</h4>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
          {/* Display more student information as needed */}
        </div>
      ))}
    </div>
  );
};

export default GetStudents;
