import { Personal } from "../models/personal.model.js";

export const createPersonal = async (req, res) => {
  try {
    const personal = new Personal(req.body);
    await personal.save();
    res.status(201).json(personal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPersonal = async (req, res) => {
  try {
    const personals = await Personal.find();
    res.json(personals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPersonalById = async (req, res) => {
  try {
    const personal = await Personal.findById(req.params.id);
    if (!personal) return res.status(404).json({ error: "Personal not found" });
    res.json(personal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePersonal = async (req, res) => {
  try {
    const personal = await Personal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!personal) return res.status(404).json({ error: "Personal not found" });
    res.json(personal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePersonal = async (req, res) => {
  try {
    const personal = await Personal.findByIdAndDelete(req.params.id);
    if (!personal) return res.status(404).json({ error: "Personal not found" });
    res.json({ message: "Personal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
