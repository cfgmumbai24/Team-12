import express from "express";

const router = express.Router();

router.post("/register", register); // admin validation future scope
router.post("/login", login);
router.get("/:id/getCourseContent", getCourseContent);
router.get("/:id", getStudent);
router.post("/:id/addApplication", addApplication);
router.put("/:id/updateApplication/:uniName", updateApplication);

export default router;