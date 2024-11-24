/*
  React Component :     SupportedLanguages.js
  Created by      :     Venetia Faber
  
*/

import React from "react";
import LanguageMap from "./LanguageMap.js";
import SearchLanguage from "./SearchLanguage.js";
// import LanguageFactCarousel from "./LanguageFactCarousel.js";
import ReviewsCarousel from "./ReviewsCarousel.js";
import Header from "./Header.js";


const SupportedLanguages = () => {
  return (
    <div>
      <Header />
      <LanguageMap />
      <SearchLanguage />
      <ReviewsCarousel />
    </div>
  );
};

export default SupportedLanguages;