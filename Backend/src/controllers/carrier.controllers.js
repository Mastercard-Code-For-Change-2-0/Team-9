import { Career } from "../models/carriers.model.js";

export const createCareer = async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    return res.status(201).json({ message: "Career record created successfully", career });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().populate("Student_id");
    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCareerById = async (req, res) => {
  try {
    const { id } = req.params;
    const career = await Career.findById(id).populate("Student_id");
    if (!career) return res.status(404).json({ message: "Career record not found" });
    return res.status(200).json(career);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCareer = async (req, res) => {
  try {
    const { id } = req.params;
    const career = await Career.findByIdAndUpdate(id, req.body, { new: true });
    if (!career) return res.status(404).json({ message: "Career record not found" });
    return res.status(200).json({ message: "Career record updated successfully", career });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCareer = async (req, res) => {
  try {
    const { id } = req.params;
    const career = await Career.findByIdAndDelete(id);
    if (!career) return res.status(404).json({ message: "Career record not found" });
    return res.status(200).json({ message: "Career record deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
