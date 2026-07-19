import { Schema, model } from "mongoose";
const ResumeSchema = new Schema({
    userId : {
      type : Schema.Types.ObjectId,
      ref : "user"
    },
    name: {
        type: String,
        trim: true,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /^(?:\+91|91)?[6-9]\d{9}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number` // FIXED: $(props.value) की टाइपो ठीक की
        }
    },
    location: {
        type: String,
        trim: true,
        required: [true, "location is required"]
    },
    summary: {
        type: String,
        trim: true,
        required: [true, "summary is required"]
    },
            platform: {
                type: String,
                required: [true, "Platform name (e.g., LinkedIn, GitHub) is required"],
                trim: true
            },
            link: {
                type: String,
                required: [true, "Social link URL is required"],
                trim: true,
                match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, "Please enter a valid URL"]
            },
            institution: {
                type: String,
                required: true,
                trim: true
            },
            degree: {
                type: String,
                required: true,
                trim: true
            },
            score: {
                type: String,
                required: true,
                trim: true
            },
            passing_year: {
                type: String,
                required: [true, "Passing year is required"],
                trim: true,
                
            },
            company_name: {
                type: String,
                required: [true, "Company name is required"],
                trim: true
            },
            position_name: {
                type: String,
                required: [true, "Job position/role name is required"],
                trim: true
            },
            joining_date: {
                type: Date,
                required: [true, "Joining date is required"]
            },
            leave_date: {
                type: Date,
                validate: {
                    validator: function (value) {
                        if (this.isCurrent_Emp) return true; 
                        return !value || value >= this.joining_date;
                    },
                    message: "Leave date must be after the joining date"
                }
            },
            isCurrent_Emp: {
                type: Boolean,
                default: false
            },
            summary: {
                type: String,
                trim: true
            },
            project_name: {
                type: String,
                required: [true, "Project name is required"],
                trim: true
            },
            summary: {
                type: String,
                required: [true, "Project summary is required"],
                trim: true
            },
            technologies: {
                type: [String], // स्ट्रिंग्स का एरे
                validate: {
                    validator: function (v) {
                        return v && v.length > 0; 
                    },
                    message: "Please provide at least one technology used in the project"
                }
            },
            github: {
                type: String,
                trim: true,
                match: [/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?.*$/, "Please enter a valid GitHub repository URL"]
            },
            live_demo: {
                type: String,
                trim: true
            },

    skills: {
   type:[String],
   default:[],

   isDeleted: {
    type: Boolean,
    default: false
}
}

}, { timestamps: true });

const userResume = model("resume", ResumeSchema);

export default userResume;