import express from "express";
import {
  login,
  addMentor,
  addCourse,
  getStudent,
  verifyStudent,
  mentorSuggestions,
  getUnverifiedStudents,
  getUnmatchedStudents,
  matchStudent,
} from "../controllers/admin.controllers.js";

const router = express.Router();

router.post("/login", login);
router.post("/addMentor", addMentor);
router.put("/verifyStudent", verifyStudent);
router.get("/getUnverifiedStudents", getUnverifiedStudents);
router.get("/getStudents/:courseName", getStudent);
router.post("/addCourse", addCourse);
router.get("/mentorSuggestions/:studentId", mentorSuggestions);
router.get("/getUnmatchedStudents", getUnmatchedStudents);
router.put("/matchStudent/:studentId/:mentorId", matchStudent);

export default router;
