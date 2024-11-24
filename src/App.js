import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SupportedLanguages from "./components/SupportedLanguages";

import logo from "./assets/images/itranslate-logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="itranslate logo" />
          <h1 className="text-center">Welcome to iTranslate</h1>
        </header> */}

        
        {/* defines routes */}
        <Routes>
          <Route path="/supportedlanguages" element={<SupportedLanguages />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
