import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/GetStudents.css'; // Adjusted import path

const GetStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const mentorId = localStorage.getItem("mentorId");
        const params = { id: mentorId };
        const res = await axios.get("http://localhost:8080/mentor/getStudents", { params });
        setStudents(res.data.students);
      } catch (error) {
        console.log(error);
      }
    };

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
      <h4 className="students-list-heading">Students List</h4>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{student._id}</td>
              <td>{student.username}</td>
              <td>
                <button className="details-button" onClick={() => toggleDetails(index)}>
                  {student.detailsExpanded ? "Hide Details" : "Show Details"}
                </button>
                {student.detailsExpanded && (
                  <div className="details-container">
                    <p><strong>Email:</strong> {student.email}</p>
                    {student.phoneNumber && <p><strong>Phone:</strong> {student.phoneNumber}</p>}
                  </div>
                )}
              </td>
              <td>
                <button className="progress-button" onClick={() => toggleProgress(index)}>
                  {student.progressExpanded ? "Hide Progress" : "Show Progress"}
                </button>
                {student.progressExpanded && (
                  <div className="progress-container">
                    <p><strong>Course Percentage:</strong> {student.course_progress}%</p>
                    {/* <p><strong>Attendance:</strong> {student.course_progress}</p> */}
                    <p><strong>Test Marks:</strong> {student.test_progress}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetStudents;