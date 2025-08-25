import mongoose, { Schema } from "mongoose";

const educationSchema = mongoose.Schema(
  {
    Student_id:{
  type:Schema.Types.ObjectId,
        ref:"Student"
    },

   degree:{
   type: String,
      required: true,
   },
   
    completion_date:{
         type: Date,
      required: true,
    },

   
  },
  {
    timestamps: true,
  }
);

export const Education = mongoose.model("Education", educationSchema);