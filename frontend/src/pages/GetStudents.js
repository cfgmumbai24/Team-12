import React, { useState, useEffect } from "react";
import axios from "axios";

const GetStudents = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const mentorId = localStorage.getItem("mentorId");
      // console.log(mentorId);
      const params = {
        id: mentorId,
      }
      const res = await axios.get("http://localhost:8080/mentor/getStudents", {
        params,
      }); 
      // console.log(res.data);
      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
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
            <React.Fragment key={student._id}>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student._id}</td>
                <td style={{ padding: '8px', textAlign: 'left' }}>{student.username}</td>
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
