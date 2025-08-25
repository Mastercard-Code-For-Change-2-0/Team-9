import { Education } from "../models/education.model.js";

export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    return res.status(201).json({ message: "Education record created successfully", education });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().populate("Student_id");
    return res.status(200).json(educations);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getEducationById = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id).populate("Student_id");
    if (!education) return res.status(404).json({ message: "Education record not found" });
    return res.status(200).json(education);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndUpdate(id, req.body, { new: true });
    if (!education) return res.status(404).json({ message: "Education record not found" });
    return res.status(200).json({ message: "Education record updated successfully", education });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndDelete(id);
    if (!education) return res.status(404).json({ message: "Education record not found" });
    return res.status(200).json({ message: "Education record deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
