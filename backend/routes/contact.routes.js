import express from "express";

const router = express.Router();
import contactController from "../controllers/contact.controllers.js";

router.post("/send", contactController.sendMail);

export default router;