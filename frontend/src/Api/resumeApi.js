import axios from "axios";

export const saveResume=async (resumeData)=>{
    return await axios.post("http://localhost:5000/api/resume/add",
        resumeData
    );
}