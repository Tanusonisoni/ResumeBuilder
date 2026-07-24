import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/slices/resumeSlice";

function Step5() {
  const dispatch = useDispatch();

  const skills = useSelector(
    (state) =>
      state.resume.skills || {
        programming: "",
        frontend: "",
        backend: "",
        databases: "",
        tools: "",
        softSkills: "",
        certifications: "",
        achievements: "",
      }
  );

  const handleChange = (field, value) => {
    dispatch(
      setSkills({
        ...skills,
        [field]: value,
      })
    );
  };

  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200">

        {/* Header */}
        <div className="px-5 py-3 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Skills & Certifications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your technical skills, certifications and achievements.
          </p>
        </div>

        {/* Form */}
        <div className="p-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Programming */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Programming Languages
              </label>

              <input
                type="text"
                value={skills.programming || ""}
                onChange={(e) =>
                  handleChange("programming", e.target.value)
                }
                placeholder="Java, C++, JavaScript"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Frontend */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Frontend
              </label>

              <input
                type="text"
                value={skills.frontend || ""}
                onChange={(e) =>
                  handleChange("frontend", e.target.value)
                }
                placeholder="React, HTML, CSS, Tailwind CSS"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Backend */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Backend
              </label>

              <input
                type="text"
                value={skills.backend || ""}
                onChange={(e) =>
                  handleChange("backend", e.target.value)
                }
                placeholder="Node.js, Express.js"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Database */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Database
              </label>

              <input
                type="text"
                value={skills.databases || ""}
                onChange={(e) =>
                  handleChange("databases", e.target.value)
                }
                placeholder="MongoDB, MySQL"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Tools & Platforms
              </label>

              <input
                type="text"
                value={skills.tools || ""}
                onChange={(e) =>
                  handleChange("tools", e.target.value)
                }
                placeholder="Git, GitHub, VS Code, Postman"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Soft Skills */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Soft Skills
              </label>

              <input
                type="text"
                value={skills.softSkills || ""}
                onChange={(e) =>
                  handleChange("softSkills", e.target.value)
                }
                placeholder="Communication, Leadership, Teamwork"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Certifications */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Certifications
              </label>

              <input
                type="text"
                value={skills.certifications || ""}
                onChange={(e) =>
                  handleChange("certifications", e.target.value)
                }
                placeholder="AWS Cloud Practitioner"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Achievements */}
            <div className="md:col-span-2">
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Achievements
              </label>

              <textarea
                rows={4}
                value={skills.achievements || ""}
                onChange={(e) =>
                  handleChange("achievements", e.target.value)
                }
                placeholder="Describe your achievements..."
                className="w-full min-h-[100px] rounded-md border border-gray-300 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Step5;