import express from "express";
import {join} from 'path';
import connectDb from "./config/db.js";
import resumeRoute from "./routes/resumeRoute.js"; 

import userRoute from "./routes/userRoute.js"

const app = express();

app.use(express.json());

app.use("/resume", resumeRoute);
app.use("/user",userRoute);


export default app;
