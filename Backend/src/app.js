const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();  // <-- load .env variables

const app = express();

// Enable CORS for all requests
app.use(cors());

// JSON parser
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});


const studentRoutes = require("./src/routes/student.routes.js");
const careerRoutes = require("./src/routes/career.routes.js");
const organisationRoutes = require("./src/routes/organisation.routes.js");
const personalRoutes = require("./src/routes/personal.routes.js");
const userRoutes = require("./src/routes/user.routes.js");


app.use("/api/students", studentRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/organisations", organisationRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/users", userRoutes);

// Root test endpoint
app.get('/', (req, res) => {
  res.send("Hello from Backend API 🚀");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
