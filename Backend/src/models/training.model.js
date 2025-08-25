import mongoose, { Schema } from "mongoose";

const trainingSchema = mongoose.Schema(
  {
    Student_id:{
  type:Schema.Types.ObjectId,
        ref:"Student"
    },

    course_name:{
        type:String,
        required:true
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

export const Training = mongoose.model("Training", trainingSchema);