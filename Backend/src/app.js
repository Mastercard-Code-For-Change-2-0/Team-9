import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import studentRoutes from "./routes/personal.routes.js";
import careerRoutes from "./routes/carriers.routes.js";
import organisationRoutes from "./routes/organization.routes.js";
import personalRoutes from "./routes/personal.routes.js";
import userRoutes from "./routes/user.routes.js";
import edu from "./routes/education.routes.js";
import triggerRoutes from "./routes/trigger.router.js";

dotenv.config();

const app = express();  // ✅ Declare app first

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/organisations", organisationRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/users", userRoutes);
app.use("/api/education", edu);
app.use("/api/admin", triggerRoutes); // /api/admin/trigger-tracking

app.get("/", (req, res) => {
  res.send("Hello from Backend API 🚀");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
