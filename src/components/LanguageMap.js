/*
  React Component :     LanguageMap.js
  Created by      :     Venetia Faber
  
*/


import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";

import "../assets/css/LanguageMap.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // country-language mapping
// const countryLanguages = {
//   "United States of America": ["English", "Spanish"],
//   France: ["French"],
//   Spain: ["Spanish"],
//   Germany: ["German"],
//   India: ["Hindi", "English"],
//   China: ["Mandarin"],
//   Canada: ["English", "French"],
//   Australia: ["English"],
//   Brazil: ["Portuguese"],
//   Russia: ["Russian"],
//   Japan: ["Japanese"],
//   "South Korea": ["Korean"],
//   Italy: ["Italian"],
//   Mexico: ["Spanish"],
//   "United Kingdom": ["English"],
//   "Saudi Arabia": ["Arabic"],
//   Egypt: ["Arabic"],
//   Argentina: ["Spanish"],
//   "South Africa": ["English", "Afrikaans"],
//   Pakistan: ["Urdu", "Punjabi"],
//   Netherlands: ["Dutch"],
//   Sweden: ["Swedish"],
//   Belgium: ["Dutch", "French", "German"],
//   Kenya: ["English", "Swahili"],
//   Chile: ["Spanish"],
//   Nigeria: ["English", "Hausa", "Yoruba", "Igbo"],
//   Philippines: ["Spanish"],
// };

const LanguageMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [tooltipStyle, setTooltipStyle] = useState({ top: 0, left: 0 });
  const [countryLanguages, setCountryLanguages] = useState({});

  // fetches country languages on component mount
  useEffect(() => {
    const fetchCountryLanguages = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      const countryLangs = {};

      countries.forEach((country) => {
        const languages = country.languages
          ? Object.values(country.languages)
          : [];
        countryLangs[country.name.common] = languages;
      });

      setCountryLanguages(countryLangs);
    };

    fetchCountryLanguages();
  }, []);

  // function to run on country hover
  const handleCountryHover = (geo, event) => {
    const countryName = geo.properties.name;
    //console.log(`Country Name: ${countryName}`);
    setHoveredCountry(countryName);
    setLanguages(countryLanguages[countryName] || []);
    setTooltipStyle({
      top: event.clientY + 10,
      left: event.clientX - 70,
    });
  };

  return (
    <div className="language-map">
      <h1 className="header applegradient"> Supported Languages</h1>
      <p className="normaltext">
        iTranslate enables travelers, students, business professionals,
        employers and medical staff to read, write and speak in over 100
        languages, anywhere in the world.
      </p>
      {/* <a
        href="/translate"
        className="open-translator-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="get-access-text">Open Translator a </div>
        <div className="rapidapi---button-shadow"></div>
      </a> */}

      <Link to="/translate" className="open-translator-btn">
        <div className="get-access-text">Open Translator link</div>
        <div className="rapidapi---button-shadow"></div>
      </Link>

      <div className="map-container">
        <ComposableMap projection="geoMercator" className="map">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.length > 0 ? (
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) => handleCountryHover(geo, event)}
                    onMouseLeave={() => {
                      setHoveredCountry(null);
                      setLanguages([]);
                    }}
                    className="default-geo"
                  />
                ))
              ) : (
                <div>Error loading map data.</div>
              )
            }
          </Geographies>
        </ComposableMap>
      </div>

      {hoveredCountry && (
        <div
          className={`tooltip ${hoveredCountry ? "tooltip-visible" : ""}`}
          style={{ top: tooltipStyle.top, left: tooltipStyle.left }}
        >
          <h3>{hoveredCountry}</h3>
          <p>
            {languages.length === 0
              ? "Language:"
              : languages.length === 1
              ? "Language:"
              : "Languages:"}
          </p>
          <ul>
            {languages.length > 0 ? (
              languages.map((lang, index) => <li key={index}>{lang}</li>)
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageMap;
