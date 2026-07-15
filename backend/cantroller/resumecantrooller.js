import { ApiResponse } from "../utils/resPattern.js";
import resumeModel from "../models/resume.js";
import { response } from "express";

export async function addResume(req, res, next) {
    try {
        // const { name, email, phone, location, summary } = req.body;

        let user = await resumeModel.create(req.body);

        // if (!name || !email || !phone || !location || !summary) {
        //     return res.status(400).json(new ApiResponse(false, null, "All fields are required"));
        // }

        res.status(201).json(new ApiResponse(true, user, "successfull"));

    } catch (error) {
        res.status(500).json(new ApiResponse(false, null, error.message || "internal server error"));
    }
}
// export async function updateUser(req,res,next){
//     try{
//         const{name,email,phone,gender,address}=req.body;
//         if(!name || !email || !phone || !gender || !address){
//             return res.status(400).json(new ApiResponse(false , null ,"all fiels are required !"))
//         }
//         let userstatus=await userModel.findByIdAndUpdate(req.user._id,(name,email,phone,gender,address),{returnDocument:"after"});
//         if(!user) return res.status(404).json(new ApiResponse(false,null,"user not found"))

//         res.status(200).json(new ApiResponse(true , null,"Update successfull"))
//     }catch(error)
//     {
//         res.status(500).json(new ApiResponse(false , null,"internal server error"))
//     }
// }


export async function updateResume(req, res,next) {
    try {
     const { name, email, phone, location, address } = req.body;
        const resume = await resumeModel.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                phone,
                location,
                address
            },
            {
                new: true
            }
        );
        if (!resume) {
            return res.status(404).json(
                new ApiResponse(false, null, "Resume not found")
         );
        }
        res.status(200).json(
            new ApiResponse(true, resume, "Resume updated successfully")
        );
    } catch (error) {
        res.status(500).json(
            new ApiResponse(false, null, "Internal server error")
        );
    }
}

export  async function deleteData(req,res,next) {
    try{
const data = await resumeModel.deleteOne({ _id: req.params.id });
     if(!data)
      return res.status(404).json(
           new ApiResponse(false, null, "Resume not found")
);     
     res.status(200).json(new ApiResponse(true,data,"deleted succesfull"));
    }catch(error)
    {
        res.status(500).json(new ApiResponse(false,error.message || "internal server error"));
    }
}

// export async function addEducation(req, res, next) {
//     try {
//         const { resumeId, institution, degree, score, passing_year } = req.body;
//         if (!resumeId || !institution || !degree || !score || !passing_year) {
//             return res.status(400).json(new ApiResponse(false, null, "All education field are required"));
//         }

//         const updateResumne = await resumeModel.findByIdAndUpdate(
//             resumeId, {
//             $push: {
//                 education: {
//                     institution, degree, score, passing_year
//                 }
//             }
//         },
//             { new: true, runValidators: true }
//         );
//         if (!updateResumne) {
//             return res.status(404).json(new ApiResponse(false, null, "Resume not found"));
//         }
//         res.status(200).json(new ApiResponse(true, updateResumne, "Education step saved!"))
//     } catch (error) {
//         res.status(400).json(new ApiResponse(false, null, "internal server error"));
//     }
// }

// export async function addSocialLink(req, res, next) {
//     try {
//         const { id } = req.params;
//         const { platform, link } = req.body;

//         const resume = await resumeModel.findById(id);

//         if (!resume) {
//             return res.status(404).json(ApiResponse(false, "null", "user not found"));
//         }
//         resume.social_link.push({
//             plateform, link
//         })
//         await resume.save();
//         return res
//             .status(200)
//             .json(new ApiResponse(true, resume, "Social link added successfully"));
//     } catch (error) {
//         return res
//             .status(500)
//             .json(new ApiResponse(false, null, error.message));
//     }
// }

export async function getAllUser(req,res,next) {
    try{
        const data=await resumeModel.findById(req.params.id);

     if(!data)
     {
        return res.status(404).json(
            new ApiResponse(false,null,"resume not found")
        )
     }
     res.status(200).json(new ApiResponse(true,data,"resume fatched succesfull"));
    }
    catch(error)
    {
        res.status(500).json(new ApiResponse(false,null,error.message||"internal server error"));
    }
}