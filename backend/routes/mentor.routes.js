import express from "express";
import {
  login,
  getMentor,
  getStudents,
  getLaggingStudents,
  getStudent,
  addMarks,
  addTest,
} from "../controllers/mentor.controllers.js";

const router = express.Router();

router.post("/login", login);
router.get("/", getMentor);
router.get("/getStudents", getStudents);
router.get("/getLaggingStudents", getLaggingStudents); // to be done
router.get("/getStudent/:studentId", getStudent); // update from student.routes.js
router.post("/:test_id/addMarks/:studentId", addMarks); 
router.post("/addTest", addTest);

export default router;
