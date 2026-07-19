import { ApiResponse } from "../utils/resPattern.js"
import userModel from "../models/user.js"
import { genrateHash, verifyHash } from "../config/bcrypt.js";

export async function registerUser(req,res,next) {
    try
    {
        console.log("Body:",req.body);
        const {email,name,password}=req.body;

        let hash=await genrateHash(password);
        let user = await userModel.create({email,name,password:hash});

        res.status(201).json(new ApiResponse(true,user,"success"));

    }catch(error)
    {
     res.status(500).json(new ApiResponse(false,null, error.message || "internal sever error"))
    }
    
}

export async function getAlluser(req,res,next)
{
   try{
    let user=await userModel.find({role:"user"});
    
    res.status(200).json(new ApiResponse(true,user,"success"));
   }
   catch(error)
   {
    res.status(500).json(new ApiResponse(false ,null,error.message || "internal server error"));
   }
}