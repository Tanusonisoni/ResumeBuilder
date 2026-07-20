import express from "express";
import {join} from 'path';
import connectDb from "./config/db.js";
import resumeRoute from "./routes/resumeRoute.js";
import cors from "cors";

import userRoute from "./routes/userRoute.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoute);

app.use("/user",userRoute);

// app.get("/",(req,res)=>{
//     res.send("server is runninhg");
// })

// app.use("/resume",resumeRoute);

export default app;
