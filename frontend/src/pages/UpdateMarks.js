// UpdateMarks.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const UpdateMarks = () => {
  const [studentName, setStudentName] = useState("");
  const [marks, setMarks] = useState("");
  const [testId, setTestId] = useState("");

  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/mentor/${testId}/addMarks`,
        {
          id: localStorage.getItem("mentorId"),
          marks: marks,
          student_name: studentName,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setStudentName("");
      setTestId("");
      setMarks("");
    }
  };

  return (
    <div>
      <TextField
        label="Test ID"
        variant="outlined"
        value={testId}
        onChange={(e) => setTestId(e.target.value)}
        fullWidth
        margin="normal"
      />
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
