// src/pages/CoursesPage.js
import React, { useEffect, useState } from "react";
import "../styles/CoursesPage.css";
import axios from "axios";
// const courses = [
//   { id: 1, name: "Lecture 1" },
//   { id: 2, name: "Lecture 2" },
//   { id: 3, name: "Lecture 3" },
// ];

const tests = [
  { id: 1, name: "Test 1", marks: 85 },
  { id: 2, name: "Test 2", marks: 90 },
  { id: 3, name: "Test 3", marks: 78 },
];

const CoursesPage = () => {
  const [checkedCourses, setCheckedCourses] = useState([]);
  const [course, setCourses] = useState([]);
  const [progress, setProgress] = useState([]);
  const handleCheckboxChange = (courseId) => {
    setCheckedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };
  const studentId = localStorage.getItem("studentId");
  const userProgress = (checkedCourses.length / course.length) * 100;

  const averageMarks =
    tests.reduce((acc, test) => acc + test.marks, 0) / tests.length;
  useEffect(() => {
    const fetchCourseContent = async () => {
      const params = { studentId: studentId };
      try {
        const { data } = await axios.get(
          "http://localhost:8080/student/getCourseContent",
          { params }
        );
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course content:", error);
      }
    };

    fetchCourseContent();
  }, []);

  return (
    <div className="courses-page">
      <h1>Course</h1>
      {/* <h2>Your Progress: {userProgress}%</h2> */}
      <div>
        {
          <div key={course.id}>
            {/* <input
              type="checkbox"
              id={`course-${course.id}`}
              onChange={() => handleCheckboxChange(course.id)}
            /> */}
            <label htmlFor={`course-${course.id}`}>{course.course_name}</label>
          </div>
        }
      </div>
      <h2>Weekly Tests</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            {test.name}: {test.marks} marks
          </li>
        ))}
      </ul>
      <h2>Average Test Performance: {averageMarks}</h2>
    </div>
  );
};

export default CoursesPage;
