import React, { useState, useEffect } from "react";
import axios from "axios";

const LaggingStudents = () => {
  const [laggingStudents, setLaggingStudents] = useState([]);

  const getLaggingStudents = async () => {
    try {
      const params = {
        id: localStorage.getItem("mentorId"),
      };
      const res = await axios.get(
        "http://localhost:8080/mentor/getLaggingStudents",
        {
          params,
        }
      );
      setLaggingStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

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
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {laggingStudents.map((student, index) => (
            <React.Fragment key={student._id}>
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "8px", textAlign: "left" }}>
                  {student._id}
                </td>
                <td style={{ padding: "8px", textAlign: "left" }}>
                  {student.username}
                </td>
                <td style={{ padding: "8px", textAlign: "left" }}>
                  <div className="lagging-students-details">
                    <button
                      className={`toggle-details-button ${
                        student.detailsExpanded ? "hide" : ""
                      }`}
                      onClick={() => toggleDetails(index)}
                      style={{ backgroundColor: "#FFD700", color: "#fff" }} // Yellow color
                    >
                      {student.detailsExpanded
                        ? "Hide Progress"
                        : "Show Progress"}
                    </button>
                    {student.detailsExpanded && (
                      <div className="lagging-students-progress">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <strong>Course Percentage:</strong>{" "}
                                {student.course_progress}%
                              </td>
                            </tr>
                            {/* Uncomment if needed */}
                            {/* <tr>
                              <td>
                                <strong>Attendance:</strong>{" "}
                                {student.attendance}
                              </td>
                            </tr> */}
                            <tr>
                              <td>
                                <strong>Test Marks:</strong>{" "}
                                {student.test_progress}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
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