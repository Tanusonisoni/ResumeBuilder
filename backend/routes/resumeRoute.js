import express from "express";
import {Router} from 'express';
import { addResume,deleteData,getAllUser,updateResume} from "../cantroller/resumecantrooller.js";

const router=Router();

router.get("/",getAllUser);
router.post("/add",addResume);
router.patch("/:id/update",updateResume)
router.delete("/:id/delete",deleteData)
// router.put("/addSocialLink",addSocialLink)

export default router;