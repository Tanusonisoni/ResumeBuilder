import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";

import { useState } from "react";
import { useSelector } from "react-redux";
import { saveResume } from "../Api/resumeApi";
import Navbar from "../components/Navbar";

const pages = {
    Step1: 1,
    Step2: 2,
    Step3: 3,
    Step4: 4,
    Step5: 5
};

const Final_Step = pages.Step5;

function MultiStep_form() {

    // const resume=useSelector((state)=>state.resume);

    const [currentstep, setCurrentStep] = useState(pages.Step1);
    const steps = {
        [pages.Step1]: Step1,
        [pages.Step2]: Step2,
        [pages.Step3]: Step3,
        [pages.Step4]: Step4,
        [pages.Step5]: Step5,
    };

    const Components = steps[currentstep];

    const SubmitButtonText = Final_Step === currentstep ? "save" : "next"

    const cancelButtonText = currentstep >= pages.Step2 ? " " : "cancel"

    function handelNext(e) {

        e.preventDefault();

        localStorage.setItem("resume", JSON.stringify(resume));

        if (currentstep < pages.Step5) {
            setCurrentStep(currentstep + 1);
        }
        else {
            console.log("submit data");
        }
    }
    function handelCancel(e) {
        e.preventDefault();
        setCurrentStep(currentstep - 1);
        console.log("re")
    }


    //save resume for api
    const resume = useSelector((state) => state.resume)

    const handelSave = async () => {
        try {
            console.log(resume);
            await saveResume(resume);
            alert("resume saved Successfully");
        } catch (error) {
            alert(error);
            console.log(error)
        }
    };

    return (
        <div>
            {/* <Navbar/> */}
            <form>
                {/* <div>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <Step5/>
            </div> */}
                <Components />

                <div className="flex justify-center items-center gap-4 mt-8">
                    {currentstep >= pages.Step2 && (
                        <button
                            type="button"
                            onClick={handelCancel}
                            className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={
                            currentstep === Final_Step
                                ? handelSave
                                : handelNext
                        }
                        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        {SubmitButtonText}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default MultiStep_form;
