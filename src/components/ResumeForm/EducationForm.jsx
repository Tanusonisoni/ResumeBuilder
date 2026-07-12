import React from "react";
import { useDispatch } from "react-redux";
import { addEducation } from "../../redux/slices/resumeSlice";
import { useNavigate } from "react-router-dom";

function EducationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const fieldMap = {
      collegeName: { section: "graduation", field: "collegeName" },
      cgpa: { section: "graduation", field: "cgpa" },
      passingYear: { section: "graduation", field: "passingYear" },
      school12: { section: "class12", field: "schoolName" },
      percentage12: { section: "class12", field: "percentage" },
      passingYear12: { section: "class12", field: "passingYear" },
      school10: { section: "class10", field: "schoolName" },
      percentage10: { section: "class10", field: "percentage" },
      passingYear10: { section: "class10", field: "passingYear" },
    };

    const mapping = fieldMap[target.name];
    if (!mapping) return;

    dispatch(
      addEducation({
        [mapping.section]: {
          [mapping.field]: target.value,
        },
      })
    );
  };

  const handleNext = () => {
    navigate("/project");
  };

  return (
    <div className="space-y-6">
      {/* Graduation */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">🎓 Graduation</h2>

        <input
          name="collegeName"
          placeholder="College Name"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="cgpa"
          placeholder="CGPA"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="passingYear"
          placeholder="Passing Year"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Class 12 */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">🏫 Class 12</h2>

        <input
          name="school12"
          placeholder="School Name"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="percentage12"
          placeholder="Percentage"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="passingYear12"
          placeholder="Passing Year"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Class 10 */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">🏫 Class 10</h2>

        <input
          name="school10"
          placeholder="School Name"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="percentage10"
          placeholder="Percentage"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          name="passingYear10"
          placeholder="Passing Year"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
      >
        Next: Projects
      </button>
    </div>
  );
}

export default EducationForm;
