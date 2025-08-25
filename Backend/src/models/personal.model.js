import mongoose, { Schema } from "mongoose";

const personalSchema = mongoose.Schema(
  {
  
   name:{
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
current_company:{
     type:String,
    required:true
},
family_income:{
    type:Number,

},
linkedin:{
     type:String,
    required:true
}
   

},
  {
    timestamps: true,
  }
);

export const Personal = mongoose.model("Personal", personalSchema);