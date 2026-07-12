import EducationForm from "../components/ResumeForm/EducationForm";
import ExperianceForm from "../components/ResumeForm/ExperienceForm";
import PersonalForm from "../components/ResumeForm/PersonalForm";
import ProjectForm from "../components/ResumeForm/ProjectForm";
import SkillsForm from "../components/ResumeForm/SkillsForm";
import RegisterPage from "../pages/RegisterPage"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";



export default function BuilderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="p-6">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Routes>
          <Route path="/" element={<PersonalForm />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/project" element={<ProjectForm />} />
          <Route path="/skills" element={<SkillsForm />} />
          <Route path="/experiance" element={<ExperianceForm />} />
          <Route path="*" element={<PersonalForm />} />
          <Route path="/signup" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </div>
  );
}