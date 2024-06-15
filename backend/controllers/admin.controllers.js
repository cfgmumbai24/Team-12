import { Mentor } from "../models/mentor.models.js";
import { Course } from "../models/course.models.js";

const addMentor = async (req, res) => {
  try {
    const { username, password, course, tags } = req.body;

    // Create a new mentor instance
    const newMentor = new Mentor({
      username,
      password,
      course,
      tags,
    });

    // Save the mentor to the database
    await newMentor.save();

    res
      .status(201)
      .json({ message: "Mentor added successfully", mentor: newMentor });
  } catch (error) {
    if (error.code === 11000) {
      // Check for duplicate key error
      return res.status(400).json({ message: "Username already exists" });
    }
    res.status(500).json({ message: "Error adding mentor", error });
  }
};

const addStudent = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      number,
      course,
      course_progress,
      mentor,
      tags,
      class: studentClass,
      uniStatus,
    } = req.body;

    // Create a new student instance
    const newStudent = new Student({
      username,
      email,
      password,
      number,
      course,
      course_progress,
      mentor,
      tags,
      class: studentClass,
      uniStatus,
    });

    // Save the student to the database
    await newStudent.save();

    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } catch (error) {
    if (error.code === 11000) {
      // Check for duplicate key error
      return res.status(400).json({ message: "Username already exists" });
    }
    res.status(500).json({ message: "Error adding student", error });
  }
};

const addCourse = async (req, res) => {
  try {
    const { course_name, course_mentors, total_classes, type } = req.body;

    // Create a new course instance
    const newCourse = new Course({
      course_name,
      course_mentors,
      total_classes,
      type,
    });

    // Save the course to the database
    await newCourse.save();

    res
      .status(201)
      .json({ message: "Course added successfully", course: newCourse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding course", error });
  }
};

export { addMentor, addStudent, addCourse };
