import express from "express";
import {
  createOrganisation,
  getOrganisations,
  getOrganisationById,
  updateOrganisation,
  deleteOrganisation
} from "../controllers/organization.controllers.js";

const router = express.Router();

router.post("/", createOrganisation);
router.get("/", getOrganisations);
router.get("/:id", getOrganisationById);
router.put("/:id", updateOrganisation);
router.delete("/:id", deleteOrganisation);

export default router;
