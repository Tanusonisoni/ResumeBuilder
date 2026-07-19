import { Router } from "express";
import authMiddleware from "../middleware/resumeMiddleware.js";
import allowRoles from "../middleware/allowrole.js";
import {getAlluser, registerUser} from "../cantroller/userCantroller.js"; 
// import { getAllresume } from "../cantroller/resumecantrooller";

const router=Router();

router.post("/registerUser",registerUser);
router.get("/alluser",getAlluser)


export default router;