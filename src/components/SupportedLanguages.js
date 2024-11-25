/*
  React Component :     SupportedLanguages.js
  Created by      :     Venetia Faber
  
*/

import React from "react";
import LanguageMap from "./LanguageMap.js";
import SearchLanguage from "./SearchLanguage.js";
import ReviewsCarousel from "./ReviewsCarousel.js";
import Header from "./Header.js";
import "../assets/css/SupportedLanguages.css";


const SupportedLanguages = () => {
  return (
    <div class="supported-language-container">
      <LanguageMap />
      <SearchLanguage />
      <ReviewsCarousel />
    </div>
  );
};

export default SupportedLanguages;
