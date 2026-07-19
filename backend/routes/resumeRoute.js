import express from "express";
import {Router} from 'express';
import { addResume,deleteData,getAllresume,registerUser,updateResume} from "../cantroller/resumecantrooller.js";
import authMiddleware from "../middleware/resumeMiddleware.js";

const router=Router();

// router.post("/register",registerUser)

router.get("/getresume",getAllresume);
router.post("/add",addResume);
router.patch("/:id/update",updateResume)
router.delete("/:id/delete",deleteData)

export default router;