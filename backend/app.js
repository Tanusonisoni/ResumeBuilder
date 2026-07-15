import express from "express";
import connectDb from "./config/db.js";
import resumeRoute from "./routes/resumeRoute.js"; 

const app = express();

app.use(express.json());

app.use("/resume", resumeRoute);

export default app;
