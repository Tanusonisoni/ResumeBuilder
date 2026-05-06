import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPersonal } from "../../redux/slices/resumeSlice";

const PersonalForm = () => {
  const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     linkedin: "",
//     summary: "",
//   });

  const handleSave = () => {
    dispatch(setPersonal(form));
  };

  const handleChange = ({ target }) => {
     dispatch(setPersonal({ [target.name]: target.value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl border border-gray-100">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Personal Information
        </h2>
        <p className="text-sm text-gray-500">
          Fill your basic details for your resume
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            onBlur={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              name="email"
              placeholder="Enter email"
              onBlur={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Phone</label>
            <input
              name="phone"
              placeholder="Enter phone"
              onBlur={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium text-gray-600">Location</label>
          <input
            name="location"
            placeholder="City, State"
            onBlur={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-sm font-medium text-gray-600">LinkedIn</label>
          <input
            name="linkedin"
            placeholder="Profile link"
            onBlur={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="text-sm font-medium text-gray-600">Summary</label>
          <textarea
            name="summary"
            rows="3"
            placeholder="Write a short professional summary..."
            onBlur={handleChange}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow-sm"
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default PersonalForm;