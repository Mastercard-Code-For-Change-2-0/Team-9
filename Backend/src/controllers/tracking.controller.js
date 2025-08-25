import { Education } from "../models/education.model.js";
import nodemailer from "nodemailer";

export const triggerTracking = async (req, res) => {
  try {
    const { batchYear, emailText } = req.body;
    if (!batchYear || !emailText) {
      return res.status(400).json({ message: "batchYear and emailText are required" });
    }

    // Filter students by completion year
    const students = await Education.find()
      .populate("Student_id")
      .then(records =>
        records.filter(record => record.completion_date.getFullYear() === batchYear)
      );

    if (students.length === 0) {
      return res.status(404).json({ message: "No students found for this batch" });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your SMTP service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send emails
    for (const student of students) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: student.Student_id.email,
        subject: `Message for Batch ${batchYear}`,
        text: emailText,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ message: "Emails sent successfully", count: students.length });
  } catch (error) {
    console.error("❌ Trigger Tracking Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
