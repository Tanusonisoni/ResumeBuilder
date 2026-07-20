import { ApiResponse } from "../utils/resPattern.js"
import userModel from "../models/user.js"
import { genrateHash, verifyHash } from "../config/bcrypt.js";
import { generateToken } from "../config/jwt.js";

export async function registerUser(req, res, next) {
    try {
        console.log("addresume hit")
        console.log("Body:", req.body);
        const { email, name, password } = req.body;

        let hash = await genrateHash(password);
        let user = await userModel.create({ email, name, password: hash });

        res.status(201).json(new ApiResponse(true, user, "success"));

    } catch (error) {
        res.status(500).json(new ApiResponse(false, null, error.message || "internal sever error"))
    }

}

export async function loginUser(req, res, next) {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json(new ApiResponse(false, null, "credential are reqiured"));
        }

        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json(new ApiResponse(false, null, "user not found"))
        }

        const match = await verifyHash(password, user.password);

        if (!match) {
            return res.status(404).json(new ApiResponse(false, null, "pass not found"))
        }

        const accessToken = generateToken({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
        user = user.toObject();

        delete user.password;
        delete user._v;
        user.accessToken = accessToken

        return res.status(200).json(new ApiResponse(true, user, "login successfull"))
    }
    catch (error) {
        return res.status(500).json(new ApiResponse(false, null, error.message));
    }
}

export async function getAlluser(req, res, next) {
    try {
        let user = await userModel.find({ role: "user" });

        res.status(200).json(new ApiResponse(true, user, "success"));
    }
    catch (error) {
        res.status(500).json(new ApiResponse(false, null, error.message || "internal server error"));
    }
}