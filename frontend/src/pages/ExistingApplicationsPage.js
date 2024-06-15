// src/pages/ExistingApplicationsPage.js

import React, { useEffect, useState } from "react";
import "../styles/ExistingApplicationsPage.css";
import axios from "axios";

const applications = [
  { id: 1, college: "Harvard", status: "Accepted" },
  { id: 2, college: "MIT", status: "Pending" },
  { id: 3, college: "Stanford", status: "Rejected" },
];

const ExistingApplicationsPage = () => {
  const studentId = localStorage.getItem("studentId");
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplication = async () => {
      const params = { studentId: studentId };
      try {
        const { data } = await axios.get(
          "http://localhost:8080/student/getApplications",
          { params }
        );
        setApplications(data);
      } catch (error) {
        console.error("Error fetching course content:", error);
      }
    };

    fetchApplication();
  }, []);
  return (
    <div className="existing-applications-page">
      <h1>Existing Applications</h1>
      <table>
        <thead>
          <tr>
            <th>College</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td>{application.uniName}</td>
              <td>{application.AppStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistingApplicationsPage;
