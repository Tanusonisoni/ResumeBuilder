import {
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaPlus,
} from "react-icons/fa";
import { addEducation } from "../../redux/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Step2() {

  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  return (
    <div className="w-full flex items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="px-4 py-4 border-b sm:px-6 sm:py-5">
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Education
          </h2>

          <p className="text-xs text-gray-500 mt-1 sm:text-sm">
            Add your academic qualifications.
          </p>
        </div>

        {/* Form */}
        <div className="px-4 py-4 sm:px-6 sm:py-5">

          <div className="space-y-3 sm:space-y-4">

            {/* Institution */}
            <div>
              <label
                htmlFor="institution"
                className="block mb-1.5 text-xs font-semibold text-gray-700 sm:text-sm"
              >
                Institution Name
              </label>

              <input
                id="institution"
                type="text"
                value={education.graduation.collegeName}
                onChange={(e) =>
                  dispatch(
                    addEducation({
                      graduation: {
                        collegeName: e.target.value
                      }

                    })
                  )
                }
                placeholder="Shri Vaishnav Vidyapeeth Vishwavidyalaya"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:h-11"
              />
            </div>

            {/* Degree */}
            <div>
              <label
                htmlFor="degree"
                className="block mb-1.5 text-xs font-semibold text-gray-700 sm:text-sm"
              >
                Degree
              </label>

              <input
                id="degree"
                type="text"
                value={education.graduation.degree}
                onChange={(e) =>
                  dispatch(
                    addEducation({
                      graduation: {
                        degree: e.target.value
                      }

                    })
                  )
                }
                placeholder="B.Tech Computer Science"
                className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:h-11"
              />
            </div>

            {/* Score & Passing Year */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

              <div>
                <label
                  htmlFor="score"
                  className="block mb-1.5 text-xs font-semibold text-gray-700 sm:text-sm"
                >
                  CGPA / Percentage
                </label>

                <input
                  id="score"
                  type="text"
                  value={education.graduation.cgpa}
                  onChange={(e) =>
                    dispatch(
                      addEducation({

                        graduation: {
                          cgpa: e.target.value
                        }

                      })
                    )
                  }
                  placeholder="8.50 CGPA or 85%"
                  className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:h-11"
                />
              </div>

              <div>
                <label
                  htmlFor="passingYear"
                  className="block mb-1.5 text-xs font-semibold text-gray-700 sm:text-sm"
                >
                  Passing Year
                </label>

                <input
                  value={education.graduation.passingYear}

                  onChange={(e) =>
                    dispatch(
                      addEducation({
                        graduation: {
                          passingYear: e.target.value
                        }

                      })
                    )
                  }
                  id="passingYear"
                  type="number"
                  placeholder="2026"
                  className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:h-11"
                />
              </div>

            </div>


          </div>

          {/* Footer */}

        </div>

      </div>
    </div>
  );
}

export default Step2;