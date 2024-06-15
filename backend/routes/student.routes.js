import express from "express";

const router = express.Router();

router.post("/register", register); // admin validation future scope
router.post("/login", login);
router.get("/getCourseContent", getCourseContent);
router.get("/:id", getStudent);

export default router;