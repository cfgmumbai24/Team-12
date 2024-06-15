import React, { useState, useEffect } from 'react';

const GetStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // For demonstration purposes, we use mock data
    const mockStudents = [
      { id: 1, name: 'John Doe', detailsExpanded: false, progressExpanded: false, details: { email: 'john.doe@example.com', phone: '123-456-7890' }, progress: { coursePercentage: 85, attendance: '90%', testMarks: 78 } },
      { id: 2, name: 'Jane Smith', detailsExpanded: false, progressExpanded: false, details: { email: 'jane.smith@example.com', phone: '987-654-3210' }, progress: { coursePercentage: 92, attendance: '95%', testMarks: 84 } },
      { id: 3, name: 'Michael Brown', detailsExpanded: false, progressExpanded: false, details: { email: 'michael.brown@example.com', phone: '456-789-0123' }, progress: { coursePercentage: 78, attendance: '85%', testMarks: 72 } },
    ];
    setStudents(mockStudents);
  }, []);

  const toggleDetails = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].detailsExpanded = !updatedStudents[index].detailsExpanded;
    setStudents(updatedStudents);
  };

  const toggleProgress = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].progressExpanded = !updatedStudents[index].progressExpanded;
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h4>Students List</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Details</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <React.Fragment key={student.id}>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student.id}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student.name}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>
                  <button onClick={() => toggleDetails(index)}>
                    {student.detailsExpanded ? 'Hide Details' : 'Show Details'}
                  </button>
                  {student.detailsExpanded && (
                    <div>
                      <p><strong>Email:</strong> {student.details.email}</p>
                      <p><strong>Phone:</strong> {student.details.phone}</p>
                    </div>
                  )}
                </td>
                <td style={{ padding: '8px', textAlign: 'left' }}>
                  <button onClick={() => toggleProgress(index)}>
                    {student.progressExpanded ? 'Hide Progress' : 'Show Progress'}
                  </button>
                  {student.progressExpanded && (
                    <div>
                      <p><strong>Course Percentage:</strong> {student.progress.coursePercentage}%</p>
                      <p><strong>Attendance:</strong> {student.progress.attendance}</p>
                      <p><strong>Test Marks:</strong> {student.progress.testMarks}</p>
                    </div>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetStudents;
