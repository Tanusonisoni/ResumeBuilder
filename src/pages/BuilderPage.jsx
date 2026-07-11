import EducationForm from "../components/ResumeForm/EducationForm";
import ExperianceForm from "../components/ResumeForm/ExperienceForm";
import PersonalForm from "../components/ResumeForm/PersonalForm";
import ExperianceSection from "../components/ResumePreview/ExperienceSection";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import EducationSection from "../components/ResumePreview/EducationSection"
import ProjectForm from "../components/ResumeForm/ProjectForm";
import ProjectsSection from "../components/ResumePreview/ProjectsSection";
import SkillsForm from "../components/ResumeForm/SkillsForm";
import SkillsSection from "../components/ResumePreview/SkillsSection";

export default function BuilderPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <div className="space-y-6">
        <SkillsForm />
      </div>

      <div className="space-y-6">
        <SkillsSection />
      </div>
    </div>
  );
}