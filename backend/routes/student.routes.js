import express from "express";

const router = express.Router();
import {
  register,
  login,
  getCourseContent,
  getStudent,
  addApplicationStatus,
  updateScholarship,
} from "../controllers/student.controllers.js";

router.post("/register", register); // admin validation future scope
router.post("/login", login);
router.get("/getCourseContent", getCourseContent);
router.get("/:id", getStudent);
router.post("/addApplication", addApplicationStatus);
router.post("/updateApplication/:uniName", updateScholarship);

export default router;
