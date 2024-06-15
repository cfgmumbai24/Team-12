// src/pages/CoursesPage.js

import React, { useState } from 'react';

const courses = [
  { id: 1, name: 'Math 101' },
  { id: 2, name: 'History 201' },
  { id: 3, name: 'Science 301' },
];

const tests = [
  { id: 1, name: 'Test 1', marks: 85 },
  { id: 2, name: 'Test 2', marks: 90 },
  { id: 3, name: 'Test 3', marks: 78 },
];

const CoursesPage = () => {
  const [checkedCourses, setCheckedCourses] = useState([]);

  const handleCheckboxChange = (courseId) => {
    setCheckedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const userProgress = (checkedCourses.length / courses.length) * 100;
  const averageMarks = tests.reduce((acc, test) => acc + test.marks, 0) / tests.length;

  return (
    <div>
      <h1>Courses</h1>
      <h2>Your Progress: {userProgress}%</h2>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              id={`course-${course.id}`}
              onChange={() => handleCheckboxChange(course.id)}
            />
            <label htmlFor={`course-${course.id}`}>{course.name}</label>
          </div>
        ))}
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
