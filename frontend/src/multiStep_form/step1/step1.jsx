import {
    FaArrowLeft,
    FaArrowRight,
    FaSave,
} from "react-icons/fa";

import { setPersonal } from "../../redux/slices/resumeSlice";
import { useDispatch, useSelector } from "react-redux";


function Step1() {

    const dispatch=useDispatch();
    const personal = useSelector((state) => state.resume.personal);

    return (
        <div className ="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl">

                {/* Header */}
                <div className="px-8 py-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Personal Information
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Enter your personal details.
                    </p>
                </div>

                {/* Form */}
                <div className="p-8">

                    <div className="grid md:grid-cols-2 gap-5">

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={personal.name}
                                onChange={(e) => dispatch(setPersonal({ name: e.target.value }))}
                                placeholder="your name"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={personal.email}
                                onChange={(e) => dispatch(setPersonal({ email: e.target.value }))}

                                placeholder="charu@gmail.com"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Phone Number
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                value={personal.phone}
                                onChange={(e) => dispatch(setPersonal({ phone: e.target.value }))}
                                placeholder="+91 9876543210"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Location
                            </label>

                            <input
                                id="location"
                                type="text"
                                value={personal.location}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonal({
                                            location: e.target.value
                                        })
                                    )
                                }
                                placeholder="Indore, Madhya Pradesh"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <label
                                htmlFor="linkedin"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                LinkedIn
                            </label>

                            <input
                                id="linkedin"
                                type="url"
                                value={personal.linkedin}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonal({
                                            linkedin: e.target.value
                                        })
                                    )
                                }
                                placeholder="https://linkedin.com/in/username"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* GitHub */}
                        <div>
                            <label
                                htmlFor="github"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                GitHub
                            </label>

                            <input
                                id="github"
                                type="url"
                                value={personal.github || " "}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonal({
                                            github: e.target.value
                                        })
                                    )
                                }
                                placeholder="https://github.com/username"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Portfolio */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="portfolio"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Portfolio Website (Optional)
                            </label>

                            <input
                                id="portfolio"
                                type="url"
                                value={personal.portfolio || " "}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonal({
                                            portfolio: e.target.value
                                        })
                                    )
                                }
                                placeholder="https://yourportfolio.com"
                                className="w-full h-11 border rounded-md border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Summary */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="summary"
                                className="block mb-2 text-sm font-semibold text-gray-700"
                            >
                                Professional Summary
                            </label>

                            <textarea
                                id="summary"
                                rows="4"
                                value={personal.summary}
                                onChange={(e) =>
                                    dispatch(
                                        setPersonal({
                                            summary: e.target.value
                                        })
                                    )
                                }
                                placeholder="Write a short professional summary..."
                                className="w-full border rounded-md border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                    </div>

                    {/* Footer */}
                    {/* <div className="border-t mt-8 pt-6 flex justify-between">
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-md"
                            >
                                Next
                                <FaArrowRight />
                            </button>

                        </div>

                    </div> */}

                </div>

            </div>
        </div>
    );
}

export default Step1;