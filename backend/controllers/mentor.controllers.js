import Mentor from "../models/mentor.model.js";
import Student from "../models/student.model.js";

export const getMentor = async (req, res) => {
  try {
    const mentorId = res.params.id;
    const mentor = await Mentor.findById(mentorId);
    return res.status(200).json({ mentor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const mentorId = res.params.id;
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
    const mentorId = res.params.id;
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
    const mentorId = res.params.id;
    const studentId = res.params.studentId;
    const student = await Student.findOne({
      mentor: mentorId,
      _id: studentId,
    });
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export const addMarks = async (req, res) => {
  try {
    const mentorId = res.params.id;
    const studentId = res.params.studentId;
    const { marks } = req.body;
    const student = await Student.findOne({
      mentor: mentorId,
      _id: studentId,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    student.test_progress += marks;
    student.save();
    return res.status(200).json({ message: "Marks added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}