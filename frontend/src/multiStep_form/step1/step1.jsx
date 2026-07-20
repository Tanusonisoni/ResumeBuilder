import {
    FaArrowLeft,
    FaArrowRight,
    FaSave,
} from "react-icons/fa";

import { setPersonal } from "../../redux/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";


function Step1() {

    const dispatch = useDispatch();
    const personal = useSelector((state) => state.resume.personal);

    return (
        <div className="w-full flex items-center justify-center p-3">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200">
                {/* Header */}
                <div className="px-5 py-3 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Personal Information
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Enter your personal details.
                    </p>
                </div>
                {/* Form */}
                <div className="p-5">
                    <div className="grid grid-cols-2 gap-3">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={personal.name}
                                onChange={(e) =>
                                    dispatch(setPersonal({ name: e.target.value }))
                                }
                                placeholder="Your Name"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={personal.email}
                                onChange={(e) =>
                                    dispatch(setPersonal({ email: e.target.value }))
                                }
                                placeholder="charu@gmail.com"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                value={personal.phone}
                                onChange={(e) =>
                                    dispatch(setPersonal({ phone: e.target.value }))
                                }
                                placeholder="+91 9876543210"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Location
                            </label>

                            <input
                                type="text"
                                value={personal.location}
                                onChange={(e) =>
                                    dispatch(setPersonal({ location: e.target.value }))
                                }
                                placeholder="Indore, Madhya Pradesh"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                LinkedIn
                            </label>

                            <input
                                type="url"
                                value={personal.linkedin}
                                onChange={(e) =>
                                    dispatch(setPersonal({ linkedin: e.target.value }))
                                }
                                placeholder="https://linkedin.com/in/username"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                GitHub
                            </label>

                            <input
                                type="url"
                                value={personal.github}
                                onChange={(e) =>
                                    dispatch(setPersonal({ github: e.target.value }))
                                }
                                placeholder="https://github.com/username"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* Portfolio */}
                        <div className="sm:col-span-2">
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Portfolio Website
                            </label>

                            <input
                                type="url"
                                value={personal.portfolio}
                                onChange={(e) =>
                                    dispatch(setPersonal({ portfolio: e.target.value }))
                                }
                                placeholder="https://yourportfolio.com"
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        {/* Summary */}
                        <div className="sm:col-span-2">
                            <label className="block mb-1 text-xs font-semibold text-gray-700">
                                Professional Summary
                            </label>

                            <textarea
                                rows={4}
                                value={personal.summary}
                                onChange={(e) =>
                                    dispatch(setPersonal({ summary: e.target.value }))
                                }
                                placeholder="Write a short professional summary..."
                                className="w-full h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Step1;