import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuilderPage from './pages/BuilderPage';
import Step5 from './multiStep_form/step5/Step5';
import Step4 from './multiStep_form/step4/Step4';
import Step3 from './multiStep_form/step3/Step3';
import Step2 from './multiStep_form/step2/Step2';
import Step1 from './multiStep_form/step1/Step1';
import MultiStep_form from './multiStep_form/multiStepform';

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/signup" element={<RegisterPage />} />
    //   <Route path="/builder/*" element={<BuilderPage />} />
    //   <Route path="*" element={<LoginPage />} />
    // </Routes>
    // <Step5/>
    // <Step4/>
    // <Step3/>
    // <Step2/>
    // <Step1/>


    <MultiStep_form/>
  );
};

export default App;
