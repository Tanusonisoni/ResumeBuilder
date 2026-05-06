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

  education: [],
  experience: [],
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
      state.education.push(action.payload);
    },
    removeEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

    // EXPERIENCE
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },

    // PROJECTS
    addProject: (state, action) => {
      state.projects.push(action.payload);
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
  setSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;