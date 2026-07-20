import { useSelector, useDispatch } from "react-redux";
import { setExperience } from "../../redux/slices/resumeSlice";

function Step3() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience);

  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200">
        
        {/* Header */}
        <div className="px-5 py-3 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Work Experience
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your professional work experience.
          </p>
        </div>

        {/* Form */}
        <div className="p-5">
          <div className="space-y-3">

            {/* Company */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Company Name
              </label>

              <input
                type="text"
                value={experience.companyName || ""}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      companyName: e.target.value,
                    })
                  )
                }
                placeholder="Google"
                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Job Title
              </label>

              <input
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
                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-700">
                  Start Date
                </label>

                <input
                  type="date"
                  value={experience.startDate || ""}
                  onChange={(e) =>
                    dispatch(
                      setExperience({
                        startDate: e.target.value,
                      })
                    )
                  }
                  className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs font-semibold text-gray-700">
                  End Date
                </label>

                <input
                  type="date"
                  value={experience.endDate || ""}
                  onChange={(e) =>
                    dispatch(
                      setExperience({
                        endDate: e.target.value,
                      })
                    )
                  }
                  className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>

            {/* Current Employee */}
            <div className="flex items-center gap-2">
              <input
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

              <label className="text-xs font-semibold text-gray-700">
                I currently work here
              </label>
            </div>

            {/* Job Description */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Job Description
              </label>

              <textarea
                rows={2}
                value={experience.summary || ""}
                onChange={(e) =>
                  dispatch(
                    setExperience({
                      summary: e.target.value,
                    })
                  )
                }
                placeholder="Describe your responsibilities and achievements..."
                className="w-full rounded-md border border-gray-300 p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;