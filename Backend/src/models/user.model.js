import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },



    
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateaccesstoken=function(){
  return  jwt.sign({
        _id:this._id,
        Email:this.Email,
        fullName:this.fullName,
        userName:this.userName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generaterefreshtoken=function(){
   return jwt.sign({
        _id:this._id,

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
export const User = mongoose.model("User", userSchema);

//for this file give m eteh user.controllers.js file code 