import express from "express";
import {
  createTraining,
  getTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining
} from "../controllers/training.controller.js";

const router = express.Router();

router.post("/", createTraining);
router.get("/", getTrainings);
router.get("/:id", getTrainingById);
router.put("/:id", updateTraining);
router.delete("/:id", deleteTraining);

export default router;
