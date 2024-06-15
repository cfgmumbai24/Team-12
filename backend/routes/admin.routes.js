import express from "express";
import { addMentor, addCourse } from "../controllers/admin.controllers.js";

const router = express.Router();

// router.post("/login", login);
router.post("/addMentor", addMentor);
// router.post("/addStudent", addStudent);
// router.get("/getUnverifiedStudents", getUnverifiedStudents);
// router.get("/getStudents/:courseName", getStudent);
// router.get("/getStudent/:studentId", getStudent);
router.post("/addCourse", addCourse);

// router.get("/mentorSuggestions/:studentId", mentorSuggestions);

export default router;