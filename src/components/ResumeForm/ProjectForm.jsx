import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, updateProject } from "../../redux/slices/resumeSlice";
import { useNavigate } from "react-router";

function ProjectForm() {

  const navigate=useNavigate();
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.resume);

  const [forms, setForms] = useState([{ project: "", description: "" }]);

  useEffect(() => {
    const filledProjects = forms.filter(
      (item) => item.project.trim() || item.description.trim()
    );
    dispatch(setProjects(filledProjects));
  }, [forms, dispatch]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setForms((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [name]: value };
      return next;
    });
  };

  const addProjectBox = () => {
    setForms((prev) => [...prev, { project: "", description: "" }]);
  };

  const handleNext = () => {
    // handleSave();
    navigate("/skills");
  };

  return (
    <div className="space-y-4">
      {forms.map((form, index) => (
        <div key={index} className="border rounded-xl p-4 bg-white shadow-sm space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Project {index + 1}</label>
            <input
              name="project"
              value={form.project}
              placeholder="Your Project Title"
              onChange={(e) => handleChange(index, e)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Project Description</label>
            <textarea
              name="description"
              value={form.description}
              rows="3"
              placeholder="Project Description"
              onChange={(e) => handleChange(index, e)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addProjectBox}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
      >
        + Add Another Project
      </button>

     <div className="mt-6">
        <button
        onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
        >
          Save Information
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
