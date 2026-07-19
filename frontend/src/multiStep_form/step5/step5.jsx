import {
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaPlus,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/slices/resumeSlice";

function Step5() {

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills)

  const handleChange=(field,value)=>{
    dispatch(setSkills({
      ...skills,[field]:value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Skills & Certifications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your technical skills and achievements.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-5">

            {/* Programming */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Programming Languages
              </label>

              <input
                type="text"
                value={skills.programming.join(", ")}
                onChange={(e) => handleChange("programming", e.target.value)}
                placeholder="Java, C++, JavaScript"
                className="w-full h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Frontend */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Frontend
              </label>

              <input
                type="text"
                value={skills.frontend}
                onChange={(e) => handleChange("frontend", e.target.value)}
                placeholder="React, HTML, CSS, Tailwind"
                className="w-full h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Backend */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Backend
              </label>

              <input
                type="text"
                value={skills.backend}
                onChange={(e) => handleChange("backend", e.target.value)}

                placeholder="Node.js, Express.js"
                className="w-full h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Database */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Database
              </label>

              <input
                type="text"
                value={skills.database}
                onChange={(e) => handleChange("database", e.target.value)}

                placeholder="MongoDB, MySQL"
                className="w-full h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Tools & Platforms
              </label>

              <input
                type="text"
                value={skills.tools}
                onChange={(e) => handleChange("tools", e.target.value)}

                placeholder="Git, GitHub, VS Code, Postman"
                className="w-full h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Certificate */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Certification
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={skills.Certification}
                  onChange={(e) => handleChange("Certification", e.target.value)}
                  placeholder="AWS Cloud Practitioner"
                  className="flex-1 h-11 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  className="h-11 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-2"
                >
                  <FaPlus />
                  Add
                </button>
              </div>
            </div>

            {/* Achievement */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Achievements
              </label>

              <textarea
                rows="4"
                value={skills.Achievements}
                onChange={(e) => handleChange("Achievements", e.target.value)}
                placeholder="Describe your achievements..."
                className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          </div>

          {/* Footer */}



        </div>
      </div>
    </div>
  );
}

export default Step5;