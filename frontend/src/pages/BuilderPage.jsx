import Navbar from "../components/Navbar";
import EducationForm from "../components/ResumeForm/EducationForm";
import ExperianceForm from "../components/ResumeForm/ExperienceForm";
import PersonalForm from "../components/ResumeForm/PersonalForm";
import ProjectForm from "../components/ResumeForm/ProjectForm";
import SkillsForm from "../components/ResumeForm/SkillsForm";
import { Navigate, Route, Routes } from "react-router-dom";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-4 py-6 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="w-full max-w-3xl">
            <Routes>
              <Route index element={<Navigate to="personal" replace />} />
              <Route path="personal" element={<PersonalForm />} />
              <Route path="education" element={<EducationForm />} />
              <Route path="skills" element={<SkillsForm />} />
              <Route path="project" element={<ProjectForm />} />
              <Route path="experience" element={<ExperianceForm />} />
              <Route path="*" element={<Navigate to="personal" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
