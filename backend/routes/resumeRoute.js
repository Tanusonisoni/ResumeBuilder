import express from "express";
import {Router} from 'express';
import { addResume} from "../cantroller/resumecantrooller.js";
import authMiddleware from "../middleware/resumeMiddleware.js";

const router=Router();

//  router.post("/register",registerUser)


router.post("/personal",authMiddleware,addResume)


// router.get("/getresume",getAllresume);
// router.post("/add",addResume);
// router.patch("/:id/update",updateResume)
// router.delete("/:id/delete",deleteData)

export default router;