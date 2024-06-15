import { Mentor } from "../models/mentor.models.js";
import { Student } from "../models/student.models.js";
import { Test } from "../models/test.models.js";

import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const mentor = await Mentor.findOne({ username, password });
    if (!mentor) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, mentor.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Logged in successfully", mentor });
  } catch (error) {
    console.log(error);
    return  res.status(500).json({ message: "Error logging in", error });
  }
}

export const getMentor = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const mentor = await Mentor.findById(mentorId);
    return res.status(200).json({ mentor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const students = await Student.find({
      mentor: mentorId,
    });
    return res.status(200).json({ students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getLaggingStudents = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const students = await Student.find({
      mentor: mentorId,
    }).sort({ course_progress: 1 });
    return res.status(200).json({ students: students.slice(0, 2) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getStudent = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const studentId = req.params.studentId;
    const student = await Student.findOne({
      mentor: mentorId,
      _id: studentId,
    });
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addMarks = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const studentId = req.params.studentId;
    const { marks } = req.body;
    const student = await Student.findOne({
      mentor: mentorId,
      _id: studentId,
    });
    console.log(student);
    // console.log(marks);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    // console.log(typeof(student.test_progress));
    student.test_progress += marks;
    student.save();
    const testId = req.params.test_id;
    const test = await Test.findOne({
      test_id: testId,
    });
    test.student_scores.push({
      student_id: studentId,
      marks,
    });
    test.save();
    return res.status(200).json({ message: "Marks added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addTest = async (req, res) => {
  try {
    const mentorId = req.body.id;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    const {testId, total} = req.body;
    const courseId = mentor.course;
    await Test.create({
      test_id: testId,
      total,
      course_id: courseId,
    });
    return res.status(200).json({ message: "Test added successfully" });
  } catch (error) {
    console.log(error);
  }
}