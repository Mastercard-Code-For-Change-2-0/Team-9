import { Training } from "../models/tranning.model.js";

export const createTraining = async (req, res) => {
  try {
    const training = new Training(req.body);
    await training.save();
    return res.status(201).json({ message: "Training record created successfully", training });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTrainings = async (req, res) => {
  try {
    const trainings = await Training.find().populate("Student_id");
    return res.status(200).json(trainings);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTrainingById = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await Training.findById(id).populate("Student_id");
    if (!training) return res.status(404).json({ message: "Training record not found" });
    return res.status(200).json(training);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await Training.findByIdAndUpdate(id, req.body, { new: true });
    if (!training) return res.status(404).json({ message: "Training record not found" });
    return res.status(200).json({ message: "Training record updated successfully", training });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await Training.findByIdAndDelete(id);
    if (!training) return res.status(404).json({ message: "Training record not found" });
    return res.status(200).json({ message: "Training record deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
