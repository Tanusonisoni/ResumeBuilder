import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ResumePreview.css";

export default function ResumePreview() {
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resume);

  const {
    personal = {},
    education = {},
    experience = {},
    projects = [],
    skills = {},
  } = resume;

  // Check value exists
  const hasValue = (value) => {
    return value !== undefined &&
      value !== null &&
      String(value).trim() !== "";
  };

  // Download PDF
  const handleDownloadPDF = async () => {
    try {
      const resumeElement = document.getElementById("resume");

      if (!resumeElement) {
        alert("Resume not found");
        return;
      }

      const clone = resumeElement.cloneNode(true);

      const container = document.createElement("div");

      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.top = "0";
      container.style.width = "800px";
      container.style.background = "#ffffff";
      container.style.color = "#222222";

      container.appendChild(clone);
      document.body.appendChild(container);

      const allElements = container.querySelectorAll("*");

      allElements.forEach((el) => {
        el.style.color = "#222222";
        el.style.backgroundColor = "#ffffff";
        el.style.borderColor = "#cccccc";
        el.style.boxShadow = "none";
      });

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      document.body.removeChild(container);

      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = 210;
      const pdfHeight = 297;

      const imageHeight =
        (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(
        imageData,
        "PNG",
        0,
        position,
        pdfWidth,
        imageHeight
      );

      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;

        pdf.addPage();

        pdf.addImage(
          imageData,
          "PNG",
          0,
          position,
          pdfWidth,
          imageHeight
        );

        heightLeft -= pdfHeight;
      }

      pdf.save("My_Resume.pdf");

    } catch (error) {
      console.error("PDF DOWNLOAD ERROR:", error);
      alert("PDF download failed");
    }
  };

  // return (
  //   <div className="resume-page">

  //     {/* Top Buttons */}
  //     <div className="resume-actions">
  //       <button
  //         onClick={() => navigate("/builder")}
  //         className="edit-btn"
  //       >
  //         Edit Resume
  //       </button>

  //       <button
  //         onClick={handleDownloadPDF}
  //         className="download-btn"
  //       >
  //         Download PDF
  //       </button>
  //     </div>

  //     {/* Resume */}
  //     <div id="resume" className="resume-container">

  //       {/* HEADER */}
  //       {(hasValue(personal.name) ||
  //         hasValue(personal.email) ||
  //         hasValue(personal.phone) ||
  //         hasValue(personal.location) ||
  //         hasValue(personal.linkedin) ||
  //         hasValue(personal.github) ||
  //         hasValue(personal.Portfolio) ||
  //         hasValue(personal.portfolio)) && (

  //         <header className="resume-header">

  //           {hasValue(personal.name) && (
  //             <h1>{personal.name}</h1>
  //           )}

  //           <div className="contact-info">

  //             {hasValue(personal.email) && (
  //               <span>{personal.email}</span>
  //             )}

  //             {hasValue(personal.phone) && (
  //               <span>{personal.phone}</span>
  //             )}

  //             {hasValue(personal.location) && (
  //               <span>{personal.location}</span>
  //             )}

  //           </div>

  //           <div className="social-links">

  //             {hasValue(personal.linkedin) && (
  //               <a
  //                 href={personal.linkedin}
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 LinkedIn
  //               </a>
  //             )}

  //             {hasValue(personal.github) && (
  //               <a
  //                 href={personal.github}
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 GitHub
  //               </a>
  //             )}

  //             {hasValue(personal.Portfolio) && (
  //               <a
  //                 href={personal.Portfolio}
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 Portfolio
  //               </a>
  //             )}

  //             {hasValue(personal.portfolio) && (
  //               <a
  //                 href={personal.portfolio}
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 Portfolio
  //               </a>
  //             )}

  //           </div>

  //         </header>
  //       )}


  //       {/* SUMMARY */}
  //       {hasValue(personal.summary) && (
  //         <section className="resume-section">

  //           <h2>Professional Summary</h2>

  //           <p>{personal.summary}</p>

  //         </section>
  //       )}


  //       {/* EDUCATION */}
  //       {education &&
  //         !Array.isArray(education) &&
  //         Object.values(education).some((edu) =>
  //           Object.values(edu || {}).some(hasValue)
  //         ) && (

  //         <section className="resume-section">

  //           <h2>Education</h2>

  //           {Object.entries(education).map(
  //             ([type, edu]) => {

  //               const hasEducation =
  //                 edu &&
  //                 Object.values(edu).some(hasValue);

  //               if (!hasEducation) return null;

  //               return (
  //                 <div
  //                   className="resume-item"
  //                   key={type}
  //                 >

  //                   {hasValue(edu.degree) && (
  //                     <h3>{edu.degree}</h3>
  //                   )}

  //                   {hasValue(edu.collegeName) && (
  //                     <p>{edu.collegeName}</p>
  //                   )}

  //                   {hasValue(edu.schoolName) && (
  //                     <p>{edu.schoolName}</p>
  //                   )}

  //                   {hasValue(edu.cgpa) && (
  //                     <p>CGPA: {edu.cgpa}</p>
  //                   )}

  //                   {hasValue(edu.percentage) && (
  //                     <p>Percentage: {edu.percentage}</p>
  //                   )}

  //                   {hasValue(edu.passingYear) && (
  //                     <p>Passing Year: {edu.passingYear}</p>
  //                   )}

  //                 </div>
  //               );
  //             }
  //           )}

  //         </section>
  //       )}


  //       {/* EDUCATION ARRAY */}
  //       {Array.isArray(education) &&
  //         education.length > 0 && (

  //         <section className="resume-section">

  //           <h2>Education</h2>

  //           {education.map((edu, index) => {

  //             if (
  //               !Object.values(edu || {}).some(hasValue)
  //             ) {
  //               return null;
  //             }

  //             return (
  //               <div
  //                 className="resume-item"
  //                 key={index}
  //               >

  //                 {hasValue(edu.degree) && (
  //                   <h3>{edu.degree}</h3>
  //                 )}

  //                 {hasValue(edu.institution) && (
  //                   <p>{edu.institution}</p>
  //                 )}

  //                 {(hasValue(edu.score) ||
  //                   hasValue(edu.passing_year)) && (

  //                   <p className="muted">
  //                     {hasValue(edu.score) &&
  //                       `Score: ${edu.score}`}

  //                     {hasValue(edu.score) &&
  //                       hasValue(edu.passing_year) &&
  //                       " | "}

  //                     {hasValue(edu.passing_year) &&
  //                       `Passing Year: ${edu.passing_year}`}
  //                   </p>
  //                 )}

  //               </div>
  //             );
  //           })}

  //         </section>
  //       )}


  //       {/* EXPERIENCE */}
  //       {Array.isArray(experience) &&
  //         experience.length > 0 && (

  //         <section className="resume-section">

  //           <h2>Experience</h2>

  //           {experience.map((exp, index) => {

  //             if (
  //               !Object.values(exp || {}).some(hasValue)
  //             ) {
  //               return null;
  //             }

  //             return (
  //               <div
  //                 className="resume-item"
  //                 key={index}
  //               >

  //                 {hasValue(exp.position_name) && (
  //                   <h3>{exp.position_name}</h3>
  //                 )}

  //                 {hasValue(exp.company_name) && (
  //                   <p className="bold">
  //                     {exp.company_name}
  //                   </p>
  //                 )}

  //                 {hasValue(exp.summary) && (
  //                   <p>{exp.summary}</p>
  //                 )}

  //               </div>
  //             );
  //           })}

  //         </section>
  //       )}


  //       {/* EXPERIENCE OBJECT */}
  //       {!Array.isArray(experience) &&
  //         experience &&
  //         Object.values(experience).some(hasValue) && (

  //         <section className="resume-section">

  //           <h2>Experience</h2>

  //           <div className="resume-item">

  //             {hasValue(experience.positionName) && (
  //               <h3>{experience.positionName}</h3>
  //             )}

  //             {hasValue(experience.companyName) && (
  //               <p className="bold">
  //                 {experience.companyName}
  //               </p>
  //             )}

  //             {hasValue(experience.summary) && (
  //               <p>{experience.summary}</p>
  //             )}

  //           </div>

  //         </section>
  //       )}


  //       {/* PROJECTS */}
  //       {projects?.length > 0 &&
  //         projects.some((project) =>
  //           Object.values(project || {}).some(hasValue)
  //         ) && (

  //         <section className="resume-section">

  //           <h2>Projects</h2>

  //           {projects.map((project, index) => {

  //             if (
  //               !Object.values(project || {}).some(hasValue)
  //             ) {
  //               return null;
  //             }

  //             return (
  //               <div
  //                 className="resume-item"
  //                 key={index}
  //               >

  //                 {hasValue(project.projectName) && (
  //                   <h3>{project.projectName}</h3>
  //                 )}

  //                 {hasValue(project.description) && (
  //                   <p>{project.description}</p>
  //                 )}

  //                 {hasValue(project.technologies) && (
  //                   <p>
  //                     <strong>Technologies:</strong>{" "}
  //                     {Array.isArray(project.technologies)
  //                       ? project.technologies.join(", ")
  //                       : project.technologies}
  //                   </p>
  //                 )}

  //                 {hasValue(project.github) && (
  //                   <p>
  //                     <strong>GitHub:</strong>{" "}
  //                     {project.github}
  //                   </p>
  //                 )}

  //                 {hasValue(project.live) && (
  //                   <p>
  //                     <strong>Live:</strong>{" "}
  //                     {project.live}
  //                   </p>
  //                 )}

  //               </div>
  //             );
  //           })}

  //         </section>
  //       )}


  //       {/* SKILLS */}
  //       {skills &&
  //         Object.values(skills).some((value) => {

  //           if (Array.isArray(value)) {
  //             return value.length > 0;
  //           }

  //           return hasValue(value);
  //         }) && (

  //         <section className="resume-section">

  //           <h2>Skills</h2>

  //           <div className="skills-grid">

  //             {[
  //               ["programming", "Programming"],
  //               ["frontend", "Frontend"],
  //               ["backend", "Backend"],
  //               ["databases", "Databases"],
  //               ["tools", "Tools"],
  //               ["softSkills", "Soft Skills"],
  //               ["certifications", "Certifications"],
  //             ].map(([key, label]) => {

  //               const value = skills[key];

  //               if (
  //                 !Array.isArray(value) &&
  //                 !hasValue(value)
  //               ) {
  //                 return null;
  //               }

  //               if (
  //                 Array.isArray(value) &&
  //                 value.length === 0
  //               ) {
  //                 return null;
  //               }

  //               return (
  //                 <p key={key}>
  //                   <strong>{label}:</strong>{" "}
  //                   {Array.isArray(value)
  //                     ? value.join(", ")
  //                     : value}
  //                 </p>
  //               );
  //             })}

  //           </div>

  //         </section>
  //       )}


  //       {/* ACHIEVEMENTS */}
  //       {hasValue(skills?.achievements) && (
  //         <section className="resume-section">

  //           <h2>Achievements</h2>

  //           <p>{skills.achievements}</p>

  //         </section>
  //       )}

  //     </div>

  //   </div>
  // );


  return (
  <div className="h-screen w-screen bg-gray-100 overflow-hidden flex flex-col">

    {/* Top Buttons */}
    <div className="h-16 shrink-0 flex items-center justify-between px-6 bg-white border-b">
      <button
        onClick={() => navigate("/builder")}
        className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
      >
        Edit Resume
      </button>

      <button
        onClick={handleDownloadPDF}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>

    {/* Resume Area */}
    <div className="flex-1 flex items-center justify-center overflow-hidden p-3">

      {/* Resume Wrapper */}
      <div className="h-full max-h-full aspect-[210/297]">

        {/* Resume */}
        <div
          id="resume"
          className="w-full h-full bg-white shadow-2xl border border-gray-300 p-8 overflow-hidden"
        >

          {/* Personal Information */}
          <div className="text-center border-b-2 border-gray-800 pb-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {personal?.name}
            </h1>

            <p className="text-sm text-gray-600 mt-1">
              {personal?.email}
              {personal?.phone && ` | ${personal.phone}`}
              {personal?.location && ` | ${personal.location}`}
            </p>

            <div className="flex justify-center gap-3 mt-2 text-xs">
              {personal?.linkedin && (
                <span>{personal.linkedin}</span>
              )}

              {personal?.github && (
                <span>{personal.github}</span>
              )}

              {personal?.Portfolio && (
                <span>{personal.Portfolio}</span>
              )}
            </div>
          </div>


          {/* Summary */}
          {personal?.summary && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Professional Summary
              </h2>

              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                {personal.summary}
              </p>
            </section>
          )}


          {/* Education */}
          {education?.length > 0 && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Education
              </h2>

              {education.map((edu, index) => (
                <div key={index} className="mt-2">
                  <h3 className="text-xs font-semibold">
                    {edu.degree || edu.type}
                  </h3>

                  {edu.institution && (
                    <p className="text-xs text-gray-700">
                      {edu.institution}
                    </p>
                  )}

                  {(edu.score || edu.passing_year) && (
                    <p className="text-[11px] text-gray-600">
                      {edu.score}
                      {edu.score && edu.passing_year && " | "}
                      {edu.passing_year}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}


          {/* Experience */}
          {experience?.length > 0 && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Experience
              </h2>

              {experience.map((exp, index) => (
                <div key={index} className="mt-2">
                  {exp.position_name && (
                    <h3 className="text-xs font-semibold">
                      {exp.position_name}
                    </h3>
                  )}

                  {exp.company_name && (
                    <p className="text-xs text-gray-700">
                      {exp.company_name}
                    </p>
                  )}

                  {exp.summary && (
                    <p className="text-[11px] text-gray-600">
                      {exp.summary}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}


          {/* Projects */}
          {projects?.length > 0 && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Projects
              </h2>

              {projects.map((project, index) => (
                <div key={index} className="mt-2">

                  {project.projectName && (
                    <h3 className="text-xs font-semibold">
                      {project.projectName}
                    </h3>
                  )}

                  {project.description && (
                    <p className="text-[11px] text-gray-700">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && (
                    <p className="text-[11px] mt-1">
                      <strong>Technologies:</strong>{" "}
                      {Array.isArray(project.technologies)
                        ? project.technologies.join(", ")
                        : project.technologies}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}


          {/* Skills */}
          {skills && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Skills
              </h2>

              <div className="mt-2 space-y-1 text-[11px]">

                {skills.programming &&
                  (Array.isArray(skills.programming)
                    ? skills.programming.length > 0
                    : skills.programming.trim() !== "") && (
                    <p>
                      <strong>Programming:</strong>{" "}
                      {Array.isArray(skills.programming)
                        ? skills.programming.join(", ")
                        : skills.programming}
                    </p>
                  )}

                {skills.frontend &&
                  (Array.isArray(skills.frontend)
                    ? skills.frontend.length > 0
                    : skills.frontend.trim() !== "") && (
                    <p>
                      <strong>Frontend:</strong>{" "}
                      {Array.isArray(skills.frontend)
                        ? skills.frontend.join(", ")
                        : skills.frontend}
                    </p>
                  )}

                {skills.backend &&
                  (Array.isArray(skills.backend)
                    ? skills.backend.length > 0
                    : skills.backend.trim() !== "") && (
                    <p>
                      <strong>Backend:</strong>{" "}
                      {Array.isArray(skills.backend)
                        ? skills.backend.join(", ")
                        : skills.backend}
                    </p>
                  )}

                {skills.databases &&
                  (Array.isArray(skills.databases)
                    ? skills.databases.length > 0
                    : skills.databases.trim() !== "") && (
                    <p>
                      <strong>Databases:</strong>{" "}
                      {Array.isArray(skills.databases)
                        ? skills.databases.join(", ")
                        : skills.databases}
                    </p>
                  )}

                {skills.tools &&
                  (Array.isArray(skills.tools)
                    ? skills.tools.length > 0
                    : skills.tools.trim() !== "") && (
                    <p>
                      <strong>Tools:</strong>{" "}
                      {Array.isArray(skills.tools)
                        ? skills.tools.join(", ")
                        : skills.tools}
                    </p>
                  )}

                {skills.softSkills &&
                  (Array.isArray(skills.softSkills)
                    ? skills.softSkills.length > 0
                    : skills.softSkills.trim() !== "") && (
                    <p>
                      <strong>Soft Skills:</strong>{" "}
                      {Array.isArray(skills.softSkills)
                        ? skills.softSkills.join(", ")
                        : skills.softSkills}
                    </p>
                  )}

                {skills.certifications &&
                  (Array.isArray(skills.certifications)
                    ? skills.certifications.length > 0
                    : skills.certifications.trim() !== "") && (
                    <p>
                      <strong>Certifications:</strong>{" "}
                      {Array.isArray(skills.certifications)
                        ? skills.certifications.join(", ")
                        : skills.certifications}
                    </p>
                  )}

              </div>
            </section>
          )}


          {/* Achievements */}
          {skills?.achievements && (
            <section className="mt-4">
              <h2 className="text-sm font-bold uppercase border-b border-gray-400 pb-1">
                Achievements
              </h2>

              <p className="mt-2 text-[11px] text-gray-700">
                {skills.achievements}
              </p>
            </section>
          )}

        </div>
      </div>
    </div>
  </div>
);
}