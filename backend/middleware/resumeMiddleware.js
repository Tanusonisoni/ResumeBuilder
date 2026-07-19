import { verifyToken } from "../config/jwt.js";
// import userResume from "../models/resume.js";
import userModel from "../models/user.js";
import { ApiResponse } from "../utils/resPattern.js";

export default async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json(new ApiResponse(false, null, "unauthrize"));

        }
        let tokenData = verifyToken(token);
        if (!tokenData) {
            return res.status(401).json(new ApiResponse(false, null, "Unauthorized or Invalid token"));
        }
        let user = await userModel.findById(tokenData.id);

        if (!user) {
            return res.status(404).json(new ApiResponse(false, null, "user not found"));
        }
        user = user.toObject();

        delete user.password;
        delete user.isDeleted;
        delete user.__v;

        req.user = user;
        next();
    }
    catch (error) {
        console.log('Error in authMiddleware:', error);
        return res.status(500).json(new ApiResponse(false, null, "Internal Server Error"));
    }
}