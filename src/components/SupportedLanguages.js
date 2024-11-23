import React from "react";
import LanguageMap from "./LanguageMap.js";
import SearchLanguage from "./SearchLanguage.js";
import LanguageFactCarousel from "./LanguageFactCarousel.js";
import ReviewsCarousel from "./ReviewsCarousel.js";

const SupportedLanguages = () => {
  return (
    <div>
      
      {/* Render LanguageMap and SearchLanguage components */}
      <LanguageMap />
      <SearchLanguage />
      <ReviewsCarousel />
    </div>
  );
};

export default SupportedLanguages;