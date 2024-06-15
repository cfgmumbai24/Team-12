import express from "express";

const router = express.Router();

router.post("/login", login);
router.get("/:id", getMentor);
router.get("/:id/getStudents", getStudents);
router.get("/:id/getLaggingStudents", getLaggingStudents);
router.get("/:id/getStudent/:studentId", getStudent);
router.post("/:test_id/addMarks/:studentId", addMarks);

export default router;