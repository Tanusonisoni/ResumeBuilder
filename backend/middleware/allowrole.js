import { ApiResponse } from "../utils/resPattern.js";

export  default function allowRoles(...roles){
    return function (req,res,next){
      
        if(roles.includes(req.user.role)){
            next();
        }else {
            return res.staus(403).json(new ApiResponse(false,null,"forbidden"));
        }
    }
}