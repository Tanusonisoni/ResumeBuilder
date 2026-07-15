import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    summary: "",
  },

  education: {
    graduation: {
      collegeName: "",
      cgpa: "",
      passingYear: "",
    },
    class12: {
      schoolName: "",
      percentage: "",
      passingYear: "",
    },
    class10: {
      schoolName: "",
      percentage: "",
      passingYear: "",
    },
  },
  experience: {},
  projects: [],

  skills: {
    programming: [],
    frontend: [],
    backend: [],
    databases: [],
    tools: [],
    softSkills: [],
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,

  reducers: {
    // PERSONAL
    setPersonal: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
    },

    // EDUCATION
    addEducation: (state, action) => {
      if (action.payload?.graduation) {
        state.education.graduation = {
          ...state.education.graduation,
          ...action.payload.graduation,
        };
      }

      if (action.payload?.class12) {
        state.education.class12 = {
          ...state.education.class12,
          ...action.payload.class12,
        };
      }

      if (action.payload?.class10) {
        state.education.class10 = {
          ...state.education.class10,
          ...action.payload.class10,
        };
      }

      if (action.payload?.collegeName) {
        state.education.graduation.collegeName = action.payload.collegeName;
      }

      if (action.payload?.cgpa) {
        state.education.graduation.cgpa = action.payload.cgpa;
      }

      if (action.payload?.passingYear) {
        state.education.graduation.passingYear = action.payload.passingYear;
      }

      if (action.payload?.school12) {
        state.education.class12.schoolName = action.payload.school12;
      }

      if (action.payload?.percentage12) {
        state.education.class12.percentage = action.payload.percentage12;
      }

      if (action.payload?.passingYear12) {
        state.education.class12.passingYear = action.payload.passingYear12;
      }

      if (action.payload?.school10) {
        state.education.class10.schoolName = action.payload.school10;
      }

      if (action.payload?.percentage10) {
        state.education.class10.percentage = action.payload.percentage10;
      }

      if (action.payload?.passingYear10) {
        state.education.class10.passingYear = action.payload.passingYear10;
      }
    },
    removeEducation: (state, action) => {
      state.education = {
        graduation: {
          collegeName: "",
          cgpa: "",
          passingYear: "",
        },
        class12: {
          schoolName: "",
          percentage: "",
          passingYear: "",
        },
        class10: {
          schoolName: "",
          percentage: "",
          passingYear: "",
        },
      };
    },

    // EXPERIENCE
    setExperience: (state, action) => {
      state.experience = { ...state.experience, ...action.payload };
    },

    addExperience: (state, action) => {
      state.experience = { ...state.experience, ...action.payload };
    },

    // PROJECTS
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    setProjects: (state, action) => {
      state.projects = action.payload;
    },

    updateProject: (state, action) => {
      const { index, project } = action.payload;
      if (state.projects[index]) {
        state.projects[index] = project;
      }
    },

    // SKILLS
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const {
  setPersonal,
  addEducation,
  removeEducation,
  addExperience,
  addProject,
  setProjects,
  updateProject,
  setExperience,
  setSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;