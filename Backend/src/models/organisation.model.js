import mongoose, { Schema } from "mongoose";

const orgSchema = mongoose.Schema(
  {
   org_name:{
    type:String,
    required:true
   },
   ceo:{
     type:String,
    required:true
   },
   address:{
     type:String,
    required:true
   },
   email:{
     type:String,
    required:true
   },
   mobile_no:{
     type:Number,
    required:true
   },
   reg_id:{
     type:String,
    required:true
   },
   

},
  {
    timestamps: true,
  }
);

export const Organisation = mongoose.model("Career", orgSchema);