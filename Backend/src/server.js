import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});
