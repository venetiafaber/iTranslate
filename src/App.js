import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SupportedLanguages from "./components/SupportedLanguages";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/supported-languages" element={<SupportedLanguages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;