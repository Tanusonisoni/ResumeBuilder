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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Education
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your academic qualifications.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">

          <div className="space-y-5">

            {/* Institution */}
            <div>
              <label
                htmlFor="institution"
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Degree */}
            <div>
              <label
                htmlFor="degree"
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Score & Passing Year */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label
                  htmlFor="score"
                  className="block mb-2 text-sm font-semibold text-gray-700"
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
                  className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="passingYear"
                  className="block mb-2 text-sm font-semibold text-gray-700"
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
                  className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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