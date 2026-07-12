import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuilderPage from './pages/BuilderPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/builder" element={<BuilderPage />} />
    </Routes>
  );
};

export default App;
