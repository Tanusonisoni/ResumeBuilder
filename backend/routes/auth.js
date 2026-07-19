import express from "express";
import { authCantroller } from "../cantroller/authCantroller";

const router=express.Router();

router.post("/",authCantroller);

export default router;