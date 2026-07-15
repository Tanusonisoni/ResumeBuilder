import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSkills } from "../../redux/slices/resumeSlice";

function SkillsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    setForm((prev) => ({
      ...prev,
      programming: skills?.programming?.join(", ") || "",
      frontend: skills?.frontend?.join(", ") || "",
      backend: skills?.backend?.join(", ") || "",
      databases: skills?.databases?.join(", ") || "",
      tools: skills?.tools?.join(", ") || "",
      softSkills: skills?.softSkills?.join(", ") || "",
    }));
  }, [skills]);

  const syncSkillsToStore = (nextForm) => {
    const parseList = (value) =>
      String(value || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

    const payload = {
      programming: parseList(nextForm.programming),
      frontend: parseList(nextForm.frontend),
      backend: parseList(nextForm.backend),
      databases: parseList(nextForm.databases),
      tools: parseList(nextForm.tools),
      softSkills: parseList(nextForm.softSkills),
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

  const handleNext = () => {
    handleSave();
    navigate("/builder/project");
  };


  return (
    <div className="space-y-4 bg-white rounded-2xl shadow-md p-6 w-full border border-gray-100 overflow-y-auto max-h-[85vh]">
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
        onClick={handleNext}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
      >
        Save Skills
      </button>
    </div>
  );
}

export default SkillsForm;
