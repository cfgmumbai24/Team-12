import React, {useEffect, useState} from 'react';
import axios from "axios";

const VerifyStudent = () => {
  const [unverifiedStudents, setUnverifiedStudents] = useState([]);

  const getUnverifiedStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/getUnverifiedStudents");
      // console.log(res.data.unverifiedStudents);
      setUnverifiedStudents(res.data.unverifiedStudents);
    } catch (error) {
      console.log(error);
    }
  }

  const handleVerify = async (id) => {
    try {
      const res = await axios.put("http://localhost:8080/admin/verifyStudent", {
        studentId: id,
      });
      console.log(res.data);
      getUnverifiedStudents();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUnverifiedStudents();
  }, []);

  return (
    <div>
      <h1>Verify Student</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            {/* <th>Course</th> */}
            <th>Verify</th>
          </tr>
        </thead>
        <tbody>
          {unverifiedStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.username}</td>
              {/* <td>{student.course}</td>  */}
              <td>
                <button onClick={() => handleVerify(student._id)}>Verify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VerifyStudent