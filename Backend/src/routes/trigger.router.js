import express from "express";
import { triggerTracking } from "../controllers/tracking.controller.js";

const router = express.Router();

// POST endpoint to trigger emails for a batch
router.post("/trigger-tracking", triggerTracking);

export default router;
