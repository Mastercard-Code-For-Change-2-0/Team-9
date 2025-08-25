import { Student } from "../models/beneficiary.model.js";

export const createBeneficiary = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    return res.status(201).json({ message: "Beneficiary created successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBeneficiaries = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBeneficiaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: "Beneficiary not found" });
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateBeneficiary = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: "Beneficiary not found" });
    return res.status(200).json({ message: "Beneficiary updated successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteBeneficiary = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "Beneficiary not found" });
    return res.status(200).json({ message: "Beneficiary deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
