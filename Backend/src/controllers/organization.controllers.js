import { Organisation } from "../models/organisation.model.js";

export const createOrganisation = async (req, res) => {
  try {
    const organisation = new Organisation(req.body);
    await organisation.save();
    res.status(201).json(organisation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrganisations = async (req, res) => {
  try {
    const organisations = await Organisation.find();
    res.status(200).json(organisations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganisationById = async (req, res) => {
  try {
    const organisation = await Organisation.findById(req.params.id);
    if (!organisation) return res.status(404).json({ message: "Organisation not found" });
    res.status(200).json(organisation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organisation) return res.status(404).json({ message: "Organisation not found" });
    res.status(200).json(organisation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndDelete(req.params.id);
    if (!organisation) return res.status(404).json({ message: "Organisation not found" });
    res.status(200).json({ message: "Organisation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
