import { Mentor } from "../models/mentor.models.js";
import { Course } from "../models/course.models.js";
import { Student } from "../models/student.models.js";

import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find the mentor by username and password
    const mentor = await Mentor.findOne({ username, password });
    if (!mentor) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // compare the password
    const isMatch = await bcrypt.compare(password, mentor.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    
    res.status(200).json({ message: "Logged in successfully", mentor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in", error });
  }
}

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

const verifyStudent = async (req, res) => {
  try {
    const { studentId } = req.body;

    // Create a new student instance
    const newStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      { isVerified: 1 }
    );

    res
      .status(201)
      .json({ message: "Student verified successfully", student: newStudent });
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

const getStudent = async (req, res) => {
  const { courseName } = req.params;
  console.log(courseName);
  try {
    // Find the course by name
    const course = await Course.findOne({ course_name: courseName });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Find students by course ID
    const students = await Student.find({ course: course._id });
    if (!students.length) {
      return res
        .status(404)
        .json({ message: "No students found for this course" });
    }

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getMatchingMentors = async (studentId) => {
  try {
    // Fetch the student
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error("Student not found");
    }

    // Get all mentors
    const mentors = await Mentor.find();
    // Calculate the number of matching tags for each mentor
    const mentorMatches = mentors.map((mentor) => {
      const matchingTags = mentor.tags.filter((tag) =>
        student.tags.includes(tag)
      );
      return {
        mentor,
        matchCount: matchingTags.length,
      };
    });

    // Sort mentors by the number of matching tags in descending order
    mentorMatches.sort((a, b) => b.matchCount - a.matchCount);

    // Return the sorted mentors
    return mentorMatches.map((match) => match.mentor);
  } catch (error) {
    throw new Error(`Error getting matching mentors: ${error.message}`);
  }
};

const mentorSuggestions = async (req, res) => {
  const { studentId } = req.params;
  try {
    const matchingMentors = await getMatchingMentors(studentId);
    res.status(200).json(matchingMentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUnverifiedStudents = async (req, res) => {
  try {
    const unverifiedStudents = await Student.find({ isVerified: 0 });
    res.status(200).json({ unverifiedStudents });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "error while getting students" });
  }
};

const getUnmatchedStudents = async (req, res) => {
  try {
    const unmatchedStudents = await Student.find({ mentor: null });
    res.status(200).json({ unmatchedStudents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting unmatched students", error });
  }
}

const matchStudent = async (req, res) => {
  try {
    const { studentId, mentorId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    student.mentor = mentorId;
    await student.save();

    res.status(200).json({ message: "Student matched successfully", student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error matching student", error });
  }
}
 
export {
  login,
  addMentor,
  verifyStudent,
  addCourse,
  getStudent,
  mentorSuggestions,
  getUnverifiedStudents,
  getUnmatchedStudents,
  matchStudent,
};
