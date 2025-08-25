import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoutes from "./routes/personal.routes.js";
import careerRoutes from "./routes/carriers.routes.js";
import organisationRoutes from "./routes/organization.routes.js";
import personalRoutes from "./routes/personal.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

app.use("/api/students", studentRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/organisations", organisationRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Backend API 🚀");
});

app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
