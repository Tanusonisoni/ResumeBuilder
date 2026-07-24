import { Schema, model } from "mongoose";

const ResumeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    // Step 1
    personal: {
      name: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      phone: {
        type: String,
        trim: true,
      },
      location: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
      summary: {
        type: String,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
      Portfolio: {
        type: String,
        trim: true,
      },
    },

    // Step 2
    education: {
      graduation: {
        collegeName: {
          type: String,
          trim: true,
        },
        cgpa: {
          type: String,
          trim: true,
        },
        passingYear: {
          type: String,
          trim: true,
        },
        degree: {
          type: String,
          trim: true,
        },
      },

      class12: {
        schoolName: {
          type: String,
          trim: true,
        },
        percentage: {
          type: String,
          trim: true,
        },
        passingYear: {
          type: String,
          trim: true,
        },
      },

      class10: {
        schoolName: {
          type: String,
          trim: true,
        },
        percentage: {
          type: String,
          trim: true,
        },
        passingYear: {
          type: String,
          trim: true,
        },
      },
    },

    // Step 3
    experience: {
      companyName: {
        type: String,
        trim: true,
      },
      positionName: {
        type: String,
        trim: true,
      },
      joiningDate: {
        type: Date,
      },
      leaveDate: {
        type: Date,
      },
      isCurrentEmp: {
        type: Boolean,
        default: false,
      },
      summary: {
        type: String,
        trim: true,
      },
    },

    // Step 4
    projects: [
      {
        projectName: {
          type: String,
          trim: true,
        },
        description: {
          type: String,
          trim: true,
        },
        technologies: {
          type: String,
          trim: true,
        },
        github: {
          type: String,
          trim: true,
        },
        live: {
          type: String,
          trim: true,
        },
      },
    ],

    // Step 5
    skills: {
      programming: {
        type: [String],
        default: [],
      },
      frontend: {
        type: [String],
        default: [],
      },
      backend: {
        type: [String],
        default: [],
      },
      databases: {
        type: [String],
        default: [],
      },
      tools: {
        type: [String],
        default: [],
      },
      softSkills: {
        type: [String],
        default: [],
      },
      certifications: {
        type: [String],
        default: [],
      },
      achievements: {
        type: String,
        default: "",
      },
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("resume", ResumeSchema);