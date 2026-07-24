import axios from "axios";

export const saveResume = async (resumeData) => {

    const token = localStorage.getItem("token");

    return await axios.post(
        "http://localhost:5000/api/resume/add",
        resumeData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};