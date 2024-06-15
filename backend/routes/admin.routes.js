import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/addMentor", addMentor);
router.post("/addStudent", addStudent);
router.get("/getStudents", getStudents);
router.get("/getStudent/:courseName", getStudent);
router.get("/getStudent/:studentId", getStudent);
router.post("/addCourse", addCourse);
// router.get("/mentorSuggestions/:studentId", mentorSuggestions);

export default router;