import {
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaPlus,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setExperience } from "../../redux/slices/resumeSlice";

function Step3() {

  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="px-8 py-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Work Experience
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your professional work experience.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">

          <div className="space-y-5">

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Company Name
              </label>

              <input
                id="company"
                type="text"
                value={experience.companyName || ""}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      companyName: e.target.value

                    })
                  )
                }
                placeholder="Google"
                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Job Title */}
            <div>
              <label
                htmlFor="jobTitle"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Job Title
              </label>

              <input
                id="jobTitle"
                type="text"
                value={experience.positionName || ""}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      positionName: e.target.value,
                    })
                  )
                }
                placeholder="Frontend Developer"
                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Start Date
                </label>

                <input
                  id="startDate"
                  type="date"
                  value={experience.startDate || ""}
                  onChange={(e) =>
                    dispatch(
                      setExperience({
                        startDate: e.target.value,
                      })
                    )
                  }
                  className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  End Date
                </label>

                <input
                  id="endDate"
                  type="date"
                  value={experience.endDate || ""}
                  onChange={(e) =>
                    dispatch(
                      setExperience({
                        endDate: e.target.value,
                      })
                    )
                  }
                  className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>

            {/* Current Employee */}
            <div className="flex items-center gap-3">
              <input
                id="current"
                type="checkbox"
                checked={experience.current || false}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      current: e.target.checked,
                    })
                  )
                }
                className="h-4 w-4"
              />

              <label
                htmlFor="current"
                className="text-sm font-medium text-gray-700"
              >
                I currently work here
              </label>
            </div>

            {/* Summary */}
            <div>
              <label
                htmlFor="summary"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Job Description
              </label>

              <textarea
                id="summary"
                rows="4"
                value={experience.summary || ""}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      summary: e.target.value,
                    })
                  )
                }
                placeholder="Describe your responsibilities and achievements..."
                className="w-full border rounded-md border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>


          </div>

          {/* Footer */}


        </div>

      </div>
    </div>
  );
}

export default Step3;