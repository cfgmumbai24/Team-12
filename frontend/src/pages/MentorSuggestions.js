import React, { useEffect, useState } from "react";
import axios from "axios";

const MentorSuggestions = () => {
  const [unmatchedStudents, setUnmatchedStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mentorSuggestions, setMentorSuggestions] = useState([]);

  const getUnmatchedStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/admin/getUnmatchedStudents"
      );
      console.log(res.data);
      setUnmatchedStudents(res.data.unmatchedStudents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUnmatchedStudents();
  }, []);

  const handleStudentChange = (event) => {
    const studentId = event.target.value;
    const student = unmatchedStudents.find(
      (student) => student._id === studentId
    );
    setSelectedStudent(student);
  };

  const getMentorSuggestions = async (event, studentId) => {
    event.preventDefault(); // Prevent page refresh
    try {
      const res = await axios.get(
        `http://localhost:8080/admin/mentorSuggestions/${studentId}`
      );
      setMentorSuggestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMatchStudent = async (studentId, mentorId) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/admin/matchStudent/${studentId}/${mentorId}`
      );
      console.log(res.data);
      getUnmatchedStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Mentor Suggestions</h1>
      <div>
        <label htmlFor="studentDropdown">Select a Student: </label>
        <select id="studentDropdown" onChange={handleStudentChange}>
          <option value="">--Select a Student--</option>
          {unmatchedStudents.map((student) => (
            <option key={student._id} value={student._id}>
              {student.username}
            </option>
          ))}
        </select>
      </div>
      {selectedStudent && (
        <div>
          <h2>Selected Student Details</h2>
          <form>
            <div>
              <label>Username: </label>
              <span>{selectedStudent.username}</span>
            </div>
            <div>
              <label>Email: </label>
              <span>{selectedStudent.email}</span>
            </div>
            <div>
              <label>ID: </label>
              <span>{selectedStudent._id}</span>
            </div>
            <button
              onClick={(event) =>
                getMentorSuggestions(event, selectedStudent._id)
              }
            >
              Get Mentor Suggestions
            </button>
          </form>

          {mentorSuggestions.map((mentor) => (
            <div key={mentor._id}>
              <h3>{mentor.username}</h3>
              <button
                onClick={() =>
                  handleMatchStudent(selectedStudent._id, mentor._id)
                }
              >
                Match Student
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorSuggestions;
