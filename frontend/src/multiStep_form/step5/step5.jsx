import {
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaPlus,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/slices/resumeSlice";
import { saveResume } from "../../Api/resumeApi";

function Step5() {

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills || [])

  const handleChange = (field, value) => {
    dispatch(
      setSkills({
        ...skills,
        [field]: value
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      })
    );
  };

  console.log(skills)

  
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Programming */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Programming Languages
            </label>

            <input
              type="text"
              value={skills.programming?.join(", ") || ""}
              onChange={(e) => handleChange("programming", e.target.value)}
              placeholder="Java, C++, JavaScript"
              className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Frontend */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Frontend
            </label>

            <input
              type="text"
              value={skills.frontend?.join(", ") || ""}
              onChange={(e) => handleChange("frontend", e.target.value)}
              placeholder="React, HTML, CSS, Tailwind CSS"
              className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Backend */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Backend
            </label>

            <input
              type="text"
              value={skills.backend?.join(", ") || ""}
              onChange={(e) => handleChange("backend", e.target.value)}
              placeholder="Node.js, Express.js"
              className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Database */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Database
            </label>

            <input
              type="text"
              value={skills.databases?.join(", ") || ""}
              onChange={(e) => handleChange("databases", e.target.value)}
              placeholder="MongoDB, MySQL"
              className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Tools */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Tools & Platforms
            </label>

            <input
              type="text"
              value={skills.tools?.join(", ") || ""}
              onChange={(e) => handleChange("tools", e.target.value)}
              placeholder="Git, GitHub, VS Code, Postman"
              className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Certification */}
          <div>
            <label className="block mb-1 text-xs font-semibold text-gray-700">
              Certifications
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={skills.certifications?.join(", ") || ""}
                onChange={(e) =>
                  handleChange("certifications", e.target.value)
                }
                placeholder="AWS Cloud Practitioner"
                className="flex-1 h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
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
                dispatch(
                  setSkills({
                    ...skills,
                    achievements: e.target.value,
                  })
                )
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