import express from "express";
import {
  createEducation,
  getEducations,
  getEducationById,
  updateEducation,
  deleteEducation
} from "../controllers/education.controllers.js";

const router = express.Router();

router.post("/", createEducation);
router.get("/", getEducations);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;



