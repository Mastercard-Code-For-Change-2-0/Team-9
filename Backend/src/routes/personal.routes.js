import express from "express";
import {
  createPersonal,
  getAllPersonal,
  getPersonalById,
  updatePersonal,
  deletePersonal,
} from "../controllers/personal.controllers.js";

const router = express.Router();

router.post("/", createPersonal);
router.get("/", getAllPersonal);
router.get("/:id", getPersonalById);
router.put("/:id", updatePersonal);
router.delete("/:id", deletePersonal);

export default router;
