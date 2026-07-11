import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/slices/resumeSlice";

function SkillsForm() {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.resume);

  const [form, setForm] = useState({
    programming: "",
    frontend: "",
    backend: "",
    databases: "",
    tools: "",
    softSkills: "",
  });

  useEffect(() => {
    setForm({
      programming: skills?.programming?.join(", ") || "",
      frontend: skills?.frontend?.join(", ") || "",
      backend: skills?.backend?.join(", ") || "",
      databases: skills?.databases?.join(", ") || "",
      tools: skills?.tools?.join(", ") || "",
      softSkills: skills?.softSkills?.join(", ") || "",
    });
  }, [skills]);

  const syncSkillsToStore = (nextForm) => {
    const payload = {
      programming: nextForm.programming
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      frontend: nextForm.frontend
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      backend: nextForm.backend
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      databases: nextForm.databases
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      tools: nextForm.tools
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      softSkills: nextForm.softSkills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    dispatch(setSkills(payload));
  };

  useEffect(() => {
    syncSkillsToStore(form);
  }, [form.programming, form.frontend, form.backend, form.databases, form.tools, form.softSkills, dispatch]);

  const handleChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSave = () => {
    syncSkillsToStore(form);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-600">Programming Languages</label>
        <input
          name="programming"
          value={form.programming}
          placeholder="JavaScript, Python"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-600">Frontend Technologies</label>
        <input
          name="frontend"
          value={form.frontend}
          placeholder="React, Tailwind"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-600">Backend Technologies</label>
        <input
          name="backend"
          value={form.backend}
          placeholder="Node.js, Express"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-600">Databases</label>
        <input
          name="databases"
          value={form.databases}
          placeholder="MongoDB, SQL"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-600">Tools</label>
        <input
          name="tools"
          value={form.tools}
          placeholder="Git, Docker"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-600">Soft Skills</label>
        <input
          name="softSkills"
          value={form.softSkills}
          placeholder="Communication, Teamwork"
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
      >
        Save Skills
      </button>
    </div>
  );
}

export default SkillsForm;
