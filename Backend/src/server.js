

import connectDB from "./server.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is listening on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.error("mongodb connection error!");
});


