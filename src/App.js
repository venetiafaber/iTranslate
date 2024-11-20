import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchLanguage from './components/SearchLanguage.js';

import logo from './assets/images/itranslate-logo.svg';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="itranslate logo" />
          <h1>Welcome to iTranslate</h1>
        </header>
        <SearchLanguage />
      </div>
    </BrowserRouter>

  );
}

export default App;
