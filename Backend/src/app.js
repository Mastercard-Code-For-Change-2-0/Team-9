const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');
const feedbackRoutes = require('./routes/feedback.routes');
const authRoutes = require('./routes/auth.routes');
const analyticsRoutes = require('./routes/admin_analytics.routes');

const app = express();

// Enable CORS for all requests
app.use(cors());

// JSON parser
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);
app.use('/ai', aiRoutes);                     // Your local change
app.use('/api/activity', analyticsRoutes);    // Remote change

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