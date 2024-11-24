/*
  React Component :     SearchLanguage.js
  Created by      :     Venetia Faber
  
*/


import React, { useState } from "react";
import "../assets/css/SearchLanguage.css";

// initial data for supported languages
const supportedLanguages = [
  { name: "English", flag: "🇺🇸", sampleTranslation: "Hello, how are you?", englishMeaning: "Hello, how are you?" },
  { name: "Mandarin Chinese", flag: "🇨🇳", sampleTranslation: "你好，你好吗？", englishMeaning: "Hello, how are you?" },
  { name: "Spanish", flag: "🇪🇸", sampleTranslation: "Hola, ¿cómo estás?", englishMeaning: "Hello, how are you?" },
  { name: "Hindi", flag: "🇮🇳", sampleTranslation: "नमस्ते, आप कैसे हैं?", englishMeaning: "Hello, how are you?" },
  { name: "Arabic", flag: "🇸🇦", sampleTranslation: "مرحباً، كيف حالك؟", englishMeaning: "Hello, how are you?" },
  { name: "Bengali", flag: "🇧🇩", sampleTranslation: "হ্যালো, কেমন আছো?", englishMeaning: "Hello, how are you?" },
  { name: "Portuguese", flag: "🇧🇷", sampleTranslation: "Olá, como vai você?", englishMeaning: "Hello, how are you?" },
  { name: "Russian", flag: "🇷🇺", sampleTranslation: "Привет, как дела?", englishMeaning: "Hello, how are you?" },
  { name: "Japanese", flag: "🇯🇵", sampleTranslation: "こんにちは、お元気ですか？", englishMeaning: "Hello, how are you?" },
  { name: "Punjabi", flag: "🇮🇳", sampleTranslation: "ਹੈਲੋ, ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?", englishMeaning: "Hello, how are you?" },
  { name: "German", flag: "🇩🇪", sampleTranslation: "Hallo, wie geht's dir?", englishMeaning: "Hello, how are you?" },
  { name: "Javanese", flag: "🇮🇩", sampleTranslation: "Halo, piye kabarmu?", englishMeaning: "Hello, how are you?" },
  { name: "Wu Chinese", flag: "🇨🇳", sampleTranslation: "侬好，侬过得好伐？", englishMeaning: "Hello, how are you?" },
  { name: "Malay/Indonesian", flag: "🇮🇩", sampleTranslation: "Halo, apa kabar?", englishMeaning: "Hello, how are you?" },
  { name: "Telugu", flag: "🇮🇳", sampleTranslation: "హలో, మీరు ఎలా ఉన్నారు?", englishMeaning: "Hello, how are you?" },
  { name: "Vietnamese", flag: "🇻🇳", sampleTranslation: "Xin chào, bạn khỏe không?", englishMeaning: "Hello, how are you?" },
  { name: "French", flag: "🇫🇷", sampleTranslation: "Bonjour, comment ça va ?", englishMeaning: "Hello, how are you?" },
  { name: "Marathi", flag: "🇮🇳", sampleTranslation: "नमस्कार, तुम्ही कसे आहात?", englishMeaning: "Hello, how are you?" },
  { name: "Turkish", flag: "🇹🇷", sampleTranslation: "Merhaba, nasılsınız?", englishMeaning: "Hello, how are you?" },
  { name: "Korean", flag: "🇰🇷", sampleTranslation: "안녕하세요, 어떻게 지내세요?", englishMeaning: "Hello, how are you?" },
  { name: "Italian", flag: "🇮🇹", sampleTranslation: "Ciao, come stai?", englishMeaning: "Hello, how are you?" },
];

export default function SearchLanguage() {
  // defines states
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // function to search dynamically as the user types
  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);

    if (query.trim() === "") {
      setResults([]); // Clear results if the input is empty
    } else {
      const filteredLanguages = supportedLanguages.filter(language =>
        language.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredLanguages);
    }
  };

  // function to handle the language click and show translation
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };


  return (
    <div className="search-language">
      <h2 className="applegradient">Search Language</h2>
      <input
        type="text"
        placeholder="Search for a language..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((language) => (
            <div
              key={language.name}
              className="language-item"
              onClick={() => handleLanguageClick(language)}
            >
              <span>{language.flag} {language.name}</span>
              <span className="tooltip">Click to view preview</span>
            </div>
          ))}
        </div>
      )}
      {selectedLanguage && (
        <div className="language-preview">
          <h3>{selectedLanguage.name} Preview</h3>
          <p>{selectedLanguage.sampleTranslation}</p>
          <p><strong>English Translation:</strong> {selectedLanguage.englishMeaning}</p>
        </div>
      )}
    </div>
  );


}
