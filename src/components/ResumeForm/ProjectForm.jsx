import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProjects } from "../../redux/slices/resumeSlice";

function ProjectForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    project: "",
    description: "",
  });

  const syncProjectToStore = (nextForm) => {
    const hasValue = nextForm.project.trim() || nextForm.description.trim();
    dispatch(setProjects(hasValue ? [nextForm] : []));
  };

  useEffect(() => {
    syncProjectToStore(form);
  }, [form.project, form.description, dispatch]);

  const handleSave = () => {
    syncProjectToStore(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    syncProjectToStore(form);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-600">Project</label>
        <input
          name="project"
          value={form.project}
          placeholder="Your Project Title"
          onChange={handleChange}
          onBlur={handleBlur}
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
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
      >
        Save Project
      </button>
    </div>
  );
}

export default ProjectForm;
