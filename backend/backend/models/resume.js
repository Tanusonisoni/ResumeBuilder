const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    phone: {
        type: String,

    },
    location: {
        type: String,

    },
    summary: {
        type: String,

    },
    social_links: [
        {
            platform: {
                type: String,
            },
            link: {
                type: String
            }
        }
    ],
    education: [
        {
            institution: {
                type: String
            },
            degree: {
                type: String,

            },
            score: {
                type: String,
            },
            passing_year: {
                type: String
            }
        }
    ],

    experience: [
        {
            company_name: {
                type: String
            },
            position_name: {
                type: String,

            },
            joining_date: {
                type: Date,
            },
            leave_date: {
                type: Date
            },
            isCurrent_Emp: {
                type: Boolean,
                default: false
            },
            summary: {
                type: String
            }
        }
    ],

    projects: [
        {
            project_name: String,
            summary: String,
            technologies: [String],
            github: String,
            live_demo: String
        }
    ],

    skills: [String]

}, { timestamps: true });

module.exports = mongoose.model("Resume", ResumeSchema);