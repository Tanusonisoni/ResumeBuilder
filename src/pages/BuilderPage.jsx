import PersonalForm from "../components/ResumeForm/PersonalForm";
import ResumePreview from "../components/ResumePreview/ResumePreview";

export default function BuilderPage() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <PersonalForm />
      <ResumePreview />
    </div>
  );
}