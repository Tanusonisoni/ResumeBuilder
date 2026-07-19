import {
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaPlus,
} from "react-icons/fa";

// import { setProjects } from "../../redux/slices/resumeSlice";
import { useState } from "react";
import { addProject } from "../../redux/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";

function Step4() {

  const dispatch = useDispatch();


  const projects = useSelector(state => state.resume.projects);
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

    // setProjects([...projects, project]);

    setProject({
      projectName: "",
      description: "",
      technologies: "",
      github: "",
      live: "",
    });
    console.log(project)
  };

  const handleChange = (field, value) => {
    setProject({
      ...project, [field]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

      {/* Project Form */}
      <div className="bg-white rounded-xl shadow-md p-6 border w-full max-w-3xl">

        <h2 className="text-2xl font-bold mb-5">
          Add Project
        </h2>

        <input
          type="text"
          placeholder="Project Name"
          value={project.projectName}
          onChange={(e) => handleChange("projectName", e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="text"
          placeholder="React, Node.js, MongoDB"
          value={project.technologies}
          onChange={(e) => handleChange("technologies", e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <div className="grid grid-cols-2 gap-4">

          <input
            type="url"
            placeholder="GitHub Link"
            value={project.github}
            onChange={(e) => handleChange("github", e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="url"
            placeholder="Live Demo"
            value={project.live}
            onChange={(e) => handleChange("live", e.target.value)}
            className="border p-2 rounded"
          />

        </div>

        <button
          type="button"
          onClick={handleAddProject}
          className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded flex items-center gap-2"
        >
          <FaPlus />
          Save Project
        </button>

      </div>

      {/* Saved Projects */}
      <div className="w-full max-w-3xl mt-8">

        <h2 className="text-xl font-bold mb-4">
          Saved Projects
        </h2>

        {projects.length === 0 ? (
          <p className="text-gray-500">
            No projects added yet.
          </p>
        ) : (
          projects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 mb-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">
                  {item.projectName}
                </h3>

                <p className="text-gray-500">
                  {item.technologies}
                </p>
              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );

}

export default Step4;