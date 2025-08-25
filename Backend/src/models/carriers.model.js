import mongoose, { Schema } from "mongoose";

const careerSchema = mongoose.Schema(
  {
    Student_id:{
  type:Schema.Types.ObjectId,
        ref:"Student"
    },

    company:{
        type:String,
        required:true
    },
     yearOfJoining: {
      type: Date,
      required: true,
    },
    leaving_date:{
         type: Date,
      required: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
    role:{
        type: String,
      required: true,
    },
    entity_type:{
        type:String,
        required:true
    }

  },
  {
    timestamps: true,
  }
);

export const Career = mongoose.model("Career", careerSchema);