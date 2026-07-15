import React from "react";
import { useSelector } from "react-redux";

export default function SkillsSection() {
  const { skills } = useSelector((state) => state.resume);

  const sections = [
    { title: "Programming Languages", items: skills.programming },
    { title: "Frontend Technologies", items: skills.frontend },
    { title: "Backend Technologies", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
    { title: "Soft Skills", items: skills.softSkills },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      {sections.every((section) => section.items.length === 0) ? (
        <p className="text-gray-500">No skills added yet.</p>
      ) : (
        sections.map(
          (section) =>
            section.items.length > 0 && (
              <div key={section.title} className="mb-4">
                <h3 className="font-semibold text-gray-800">{section.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {section.items.map((item, index) => (
                    <span key={`${section.title}-${index}`} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
}
