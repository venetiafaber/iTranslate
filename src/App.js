import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SupportedLanguages from "./components/SupportedLanguages";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/supportedlanguages" element={<SupportedLanguages />} />
        <Route path="*" element={<h1 className="text-center">404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;