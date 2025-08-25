import { User } from "../models/user.model.js";

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const user = new User({ userName, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const accessToken = user.generateaccesstoken();
    const refreshToken = user.generaterefreshtoken();
    user.refreshToken = refreshToken;
    await user.save();
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: