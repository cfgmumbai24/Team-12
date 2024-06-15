import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import axios from "axios";

const LaggingStudents = () => {
  const [laggingStudents, setLaggingStudents] = useState([]);

  const getLaggingStudents = async () => {
    try {
      const params = {
        id: localStorage.getItem("mentorId"),
      }
      const res = await axios.get("http://localhost:8080/mentor/getLaggingStudents", {
        params
      });
      setLaggingStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLaggingStudents();
  }, []);

  const toggleDetails = (index) => {
    const updatedStudents = [...laggingStudents];
    updatedStudents[index].detailsExpanded = !updatedStudents[index].detailsExpanded;
    setLaggingStudents(updatedStudents);
  };

  return (
    <div>
      <h4>Lagging Students List</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {laggingStudents.map((student, index) => (
            <React.Fragment key={student._id}>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student._id}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student.username}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>
                  <button onClick={() => toggleDetails(index)}>
                    {student.detailsExpanded ? 'Hide Progress' : 'Show Progress'}
                  </button>
                  {student.detailsExpanded && (
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

export default LaggingStudents;
