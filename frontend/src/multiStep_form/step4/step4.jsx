import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { addProject } from "../../redux/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";

function Step4() {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.resume.projects);

  const [project, setProject] = useState({
    projectName: "",
    description: "",
    technologies: "",
    github: "",
    live: "",
  });

  const handleAddProject = () => {
    if (project.projectName.trim() === "") {
      alert("Please enter project name");
      return;
    }

    dispatch(addProject(project));

    setProject({
      projectName: "",
      description: "",
      technologies: "",
      github: "",
      live: "",
    });
  };

  const handleChange = (field, value) => {
    setProject({
      ...project,
      [field]: value,
    });
  };

  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200">

        {/* Header */}
        <div className="px-5 py-3 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Projects
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your projects and showcase your work.
          </p>
        </div>

        {/* Form */}
        <div className="p-5">

          <div className="space-y-3">

            {/* Project Name */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Project Name
              </label>

              <input
                type="text"
                value={project.projectName}
                onChange={(e) => handleChange("projectName", e.target.value)}
                placeholder="Resume Builder"
                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Project Description
              </label>

              <textarea
                rows={3}
                value={project.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe your project..."
                className="w-full min-h-[90px] rounded-md border border-gray-300 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Technologies Used
              </label>

              <input
                type="text"
                value={project.technologies}
                onChange={(e) => handleChange("technologies", e.target.value)}
                placeholder="React, Redux, Tailwind CSS"
                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-700">
                  GitHub Link
                </label>

                <input
                  type="url"
                  value={project.github}
                  onChange={(e) => handleChange("github", e.target.value)}
                  placeholder="https://github.com/username/project"
                  className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-700">
                  Live Demo
                </label>

                <input
                  type="url"
                  value={project.live}
                  onChange={(e) => handleChange("live", e.target.value)}
                  placeholder="https://yourproject.com"
                  className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddProject}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
              >
                <FaPlus />
                Add Project
              </button>
            </div>

          </div>

          {/* Saved Projects */}
          <div className="mt-6 border-t pt-4">

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Saved Projects
            </h3>

            {projects.length === 0 ? (
              <p className="text-sm text-gray-500">
                No projects added yet.
              </p>
            ) : (
              <div className="space-y-3">

                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-4"
                  >
                    <h4 className="text-base font-semibold text-gray-800">
                      {item.projectName}
                    </h4>

                    <p className="text-sm text-indigo-600 mt-1">
                      {item.technologies}
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>

                    <div className="flex gap-5 mt-3">

                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-indigo-600 hover:underline"
                        >
                          GitHub
                        </a>
                      )}

                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-green-600 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}

                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Step4;