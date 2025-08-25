const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

// Import your existing Student model
const Student = require("./backend/src/models/personal.model"); 

const app = express();
const PORT = 3001;

// MongoDB connection
mongoose.connect("mongodb+srv://hackUser:Hack%4012345@codeforchange.dknuc1o.mongodb.net/CodeForChange?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Configure multer for file uploads
const upload = multer({
  dest: "uploads/", // folder to temporarily store uploaded CSV
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "text/csv") cb(null, true);
    else cb(new Error("Only CSV files are allowed"), false);
  }
});

// Upload endpoint
app.post("/upload-csv", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  const filePath = path.join(__dirname, req.file.path);
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      results.push({
        studentId: data["Student ID"],
        name: data["Name"],
        phoneNo: data["Phone No"],
        email: data["Email"],
        linkedin: data["LinkedIn"],
        address: data["Address"],
        currentCompany: data["Current Company"],
        familyIncome: parseInt(data["Family Income"])
      });
    })
    .on("end", async () => {
      try {
        for (const student of results) {
          const exists = await Student.findOne({ studentId: student.studentId });
          if (!exists) await Student.create(student);
        }
        res.send("CSV imported successfully!");
      } catch (err) {
        console.error(err);
        res.status(500).send("Error importing CSV");
      } finally {
        // Delete the uploaded file after processing
        fs.unlinkSync(filePath);
      }
    });
});

// Simple HTML form to upload CSV
app.get("/", (req, res) => {
  res.send(`
    <h2>Upload CSV</h2>
    <form method="POST" action="/upload-csv" enctype="multipart/form-data">
      <input type="file" name="file" accept=".csv" required />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
