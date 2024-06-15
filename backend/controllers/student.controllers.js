// controllers/studentController.js
import { Student } from "../models/student.models.js";
import { Course } from "../models/course.models.js";
import bcrypt from "bcrypt";

// Register a new student
export const register = async (req, res) => {
  const {
    username,
    email,
    password,
    number,
    courseName, // This should be the name of the course
    class: studentClass,
  } = req.body;

  try {
    // Find the course by its name
    const course = await Course.findOne({ course_name: courseName });
    if (!course) {
      return res.status(400).json({ message: "Invalid course name" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({
      username,
      email,
      password: hashedPassword,
      number,
      course: course._id, // Use the course ID from the found course
      class: studentClass,
    });
    await student.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login a student
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.json({ message: "Login successful", studentId: student._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get course content for a student
export const getCourseContent = async (req, res) => {
  const { studentId } = req.query;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const courseId = student.course;
    const course = await Course.findById(courseId);
    const courseName = course.course_name;
    // Youtube API
    return res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student data by ID
export const getStudent = async (req, res) => {
  try {
    const reqdStudent = req.body.id;
    const student = await Student.findById(reqdStudent);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getApplication = async (req, res) => {
  try {
    const { studentId } = req.query;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.uniStatus.push({ uniName, AppStatus, scholarship });

    await student.save();

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addApplicationStatus = async (req, res) => {
  try {
    const { uniName, AppStatus, scholarship } = req.body;

    const student = await Student.findById(req.body.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.uniStatus.push({ uniName, AppStatus, scholarship });

    await student.save();

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateScholarship = async (req, res) => {
  try {
    const { id, AppStatus } = req.body;

    // Find the student by ID from the request object (assumes authentication middleware is used)
    const student = await Student.findById(req.body.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Find the specific university application in the uniStatus array
    const uniStatus = student.uniStatus.find(
      (uni) => uni.uniName === req.params.uniName
    );
    if (!uniStatus) {
      return res
        .status(404)
        .json({ message: "University application not found" });
    }

    // Update the scholarship value
    uniStatus.AppStatus = AppStatus;

    // Save the updated student document
    const newStudent = await student.save();

    res.status(200).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
