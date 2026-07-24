
export const resumeTemplate = ({
  personalInfo = {},
  socialLinks = [],
  education = [],
  experience = [],
  projects = [],
  skills = {},
}) => {

  const hasValue = (value) => {
    return value !== undefined &&
           value !== null &&
           value !== "" &&
           (!Array.isArray(value) || value.length > 0);
  };

  const skillSection = (title, skillsArray) => {
    if (!hasValue(skillsArray)) return "";

    return `
      <div style="margin-bottom:8px;">
        <strong style="color:#222;">${title}:</strong>
        <span>${skillsArray.join(", ")}</span>
      </div>
    `;
  };

  return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">

<title>${personalInfo.name || "Resume"} Resume</title>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #333333;
  padding: 40px;
  font-size: 11px;
  line-height: 1.5;
}

.resume {
  max-width: 800px;
  margin: auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 28px;
  color: #111827;
  margin-bottom: 8px;
}

.contact-info {
  color: #555555;
  font-size: 11px;
}

.contact-info span {
  margin: 0 5px;
}

.contact-info a {
  color: #2563EB;
  text-decoration: none;
}

.section {
  margin-bottom: 18px;
}

.section-title {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #111827;
  border-bottom: 2px solid #111827;
  padding-bottom: 4px;
  margin-bottom: 10px;
}

.summary {
  text-align: justify;
  color: #444444;
}

.item {
  margin-bottom: 12px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #111827;
}

.item-subheader {
  display: flex;
  justify-content: space-between;
  color: #555555;
  font-style: italic;
}

.description {
  margin-top: 5px;
  color: #444444;
}

ul {
  margin-left: 18px;
  margin-top: 5px;
}

li {
  margin-bottom: 3px;
}

.skills-container {
  color: #444444;
}

.education-item {
  margin-bottom: 12px;
}

</style>

</head>

<body>

<div class="resume">


<!-- ================= HEADER ================= -->

<div class="header">

  ${
    hasValue(personalInfo.name)
      ? `<h1>${personal.name}</h1>`
      : ""
  }

  <div class="contact-info">

    ${
      hasValue(personalInfo.phone)
        ? `<span>${personal.phone}</span>`
        : ""
    }

    ${
      hasValue(personalInfo.email)
        ? `<span>${personal.email}</span>`
        : ""
    }

    ${
      hasValue(personalInfo.location)
        ? `<span>${personal.location}</span>`
        : ""
    }

    ${
      hasValue(personalInfo.linkedin)
        ? `<span>
             <a href="${personal.linkedin}">
               LinkedIn
             </a>
           </span>`
        : ""
    }

    ${
      hasValue(personalInfo.github)
        ? `<span>
             <a href="${personal.github}">
               GitHub
             </a>
           </span>`
        : ""
    }

    ${
      hasValue(personal.Portfolio)
        ? `<span>
             <a href="${personal.Portfolio}">
               Portfolio
             </a>
           </span>`
        : ""
    }

  </div>

</div>


<!-- ================= SUMMARY ================= -->

${
  hasValue(personalInfo.summary)
  ? `
  <div class="section">

    <div class="section-title">
      Professional Summary
    </div>

    <p class="summary">
      ${personalInfo.summary}
    </p>

  </div>
  `
  : ""
}


<!-- ================= EXPERIENCE ================= -->

${
  experience.length > 0
  ? `
  <div class="section">

    <div class="section-title">
      Experience
    </div>

    ${experience.map((exp) => {

      if (
        !exp.company_name &&
        !exp.position_name &&
        !exp.joining_date &&
        !exp.summary
      ) {
        return "";
      }

      return `
        <div class="item">

          <div class="item-header">

            <span>
              ${exp.position_name || ""}
            </span>

            <span>
              ${
                exp.joining_date
                  ? exp.joining_date
                  : ""
              }

              ${
                exp.leave_date
                  ? ` - ${exp.leave_date}`
                  : exp.isCurrent_Emp
                    ? " - Present"
                    : ""
              }
            </span>

          </div>

          ${
            exp.company_name
            ? `
            <div class="item-subheader">
              ${exp.company_name}
            </div>
            `
            : ""
          }

          ${
            exp.summary
            ? `
            <p class="description">
              ${exp.summary}
            </p>
            `
            : ""
          }

        </div>
      `;

    }).join("")}

  </div>
  `
  : ""
}


<!-- ================= PROJECTS ================= -->

${
  projects.length > 0
  ? `
  <div class="section">

    <div class="section-title">
      Projects
    </div>

    ${projects.map((project) => {

      if (
        !project.project_name &&
        !project.summary &&
        !project.technologies &&
        !project.github &&
        !project.live_demo
      ) {
        return "";
      }

      return `
        <div class="item">

          <div class="item-header">

            <span>
              ${project.project_name || ""}
            </span>

          </div>

          ${
            project.technologies
            ? `
            <div class="item-subheader">
              Technologies: ${project.technologies}
            </div>
            `
            : ""
          }

          ${
            project.summary
            ? `
            <p class="description">
              ${project.summary}
            </p>
            `
            : ""
          }

          ${
            project.github || project.live_demo
            ? `
            <div style="margin-top:5px;">

              ${
                project.github
                ? `
                <a href="${project.github}">
                  GitHub
                </a>
                `
                : ""
              }

              ${
                project.github && project.live_demo
                ? " | "
                : ""
              }

              ${
                project.live_demo
                ? `
                <a href="${project.live_demo}">
                  Live Demo
                </a>
                `
                : ""
              }

            </div>
            `
            : ""
          }

        </div>
      `;

    }).join("")}

  </div>
  `
  : ""
}


<!-- ================= SKILLS ================= -->

${
  Object.values(skills).some(
    (value) =>
      Array.isArray(value)
        ? value.length > 0
        : hasValue(value)
  )
  ? `
  <div class="section">

    <div class="section-title">
      Technical Skills
    </div>

    <div class="skills-container">

      ${skillSection(
        "Programming",
        skills.programming
      )}

      ${skillSection(
        "Frontend",
        skills.frontend
      )}

      ${skillSection(
        "Backend",
        skills.backend
      )}

      ${skillSection(
        "Databases",
        skills.databases
      )}

      ${skillSection(
        "Tools",
        skills.tools
      )}

      ${skillSection(
        "Soft Skills",
        skills.softSkills
      )}

      ${skillSection(
        "Certifications",
        skills.certifications
      )}

      ${
        hasValue(skills.achievements)
        ? `
        <div>
          <strong>Achievements:</strong>
          ${skills.achievements}
        </div>
        `
        : ""
      }

    </div>

  </div>
  `
  : ""
}


<!-- ================= EDUCATION ================= -->

${
  education.length > 0
  ? `
  <div class="section">

    <div class="section-title">
      Education
    </div>

    ${education.map((edu) => {

      if (
        !edu.institution &&
        !edu.degree &&
        !edu.score &&
        !edu.passing_year &&
        !edu.class
      ) {
        return "";
      }

      return `
        <div class="education-item">

          <div class="item-header">

            <span>
              ${edu.institution || ""}
            </span>

            <span>
              ${edu.passing_year || ""}
            </span>

          </div>

          <div class="item-subheader">

            <span>
              ${
                edu.degree ||
                edu.class ||
                edu.type ||
                ""
              }

              ${
                edu.score
                ? ` | Score: ${edu.score}`
                : ""
              }
            </span>

          </div>

        </div>
      `;

    }).join("")}

  </div>
  `
  : ""
}


</div>

</body>
</html>
`;
};

