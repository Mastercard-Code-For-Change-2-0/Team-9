require("dotenv").config();// server.js
const app = require('./app'); 

const port = process.env.PORT || 3001;

// Check if Google Gemini API key is configured
if (!process.env.GOOGLE_GEMINI_KEY) {
  console.error("ERROR: GOOGLE_GEMINI_KEY is not set in .env file");
  process.exit(1);
}

const server = app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
  console.log(`API endpoint available at http://localhost:${port}/ai/get-review`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Please use a different port.`);
  } else {
    console.error("Error starting server:", error);
  }
  process.exit(1);
});
