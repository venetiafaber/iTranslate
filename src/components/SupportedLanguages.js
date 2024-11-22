import React from "react";
import LanguageMap from "./LanguageMap";
import SearchLanguage from "./SearchLanguage";

const SupportedLanguages = () => {
  return (
    <div>
      
      {/* Render LanguageMap and SearchLanguage components */}
      <LanguageMap />
      <SearchLanguage />
    </div>
  );
};

export default SupportedLanguages;