import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




const beneficiarySchema = mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true,

      trim: true,

      index: true,
    },
    Email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    stud_address: {
      type: String,
      required: true,
    },
    family_income: {
      type: Number,
    },
    stud_degree: {
      type: String,
      required: true,
    },
    stud_passout_year: {
      type: Date,
      required: true,
    },
    stud_placed_company: {
      type: String,
      required: true,
    },
    stud_current_company: {
      type: String,
      required: true,
    },
    yearOfJoining: {
      type: Date,
      required: true,
    },
    Avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model("Student", beneficiarySchema);
