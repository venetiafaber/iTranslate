/*
  React Component :     Nav.js
  Created by      :     Venetia Faber
  
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown, faChevronUp,faChevronLeft } from "@fortawesome/free-solid-svg-icons";


export default function Nav() {
  
  // defines states
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  // updates isSmallScreen state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize(); // check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // function to toggle subdropdown in other apps navlink
  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown((prev) => (prev === subDropdown ? null : subDropdown));
  };

  // function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // function to toggle dropdown
  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // function to close mobile menu on resize to larger screens
  const handleResize = () => {
    if (window.innerWidth > 895) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeDropdowns = () => setActiveDropdown(null);

  // closes dropdowns when clicking outside the nav
  const handleClickOutside = (event) => {
    if (!event.target.closest('.nav-container')) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav className="nav-container" onClick={closeDropdowns}>

      {/* hamburger menu button for mobile view */}
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776;
      </button>

      <ul className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
        
        {/* Features dropdown */}
        <li className="nav-item" onClick={(e) => e.stopPropagation()}>
          <div
            className="dropdown-trigger"
            onClick={() => toggleDropdown("features")}
          >
            Features
            <FontAwesomeIcon
              icon={isSmallScreen
                ? (activeDropdown === "features" ? faChevronLeft : faChevronRight) // for small screens
                : (activeDropdown === "features" ? faChevronUp : faChevronDown)} // for larger screens
              className="dropdown-arrow"
            />
          </div>
          <div
            className={`dropdown-container ${
              activeDropdown === "features" ? "show" : ""
            }`}
          >
            <Link to="/features/text-translation" className="dropdown-link">
              Text Translation
            </Link>
            <Link to="/features/text-translation" className="dropdown-link">
              Voice Translation
            </Link>
            <Link to="/features/text-translation" className="dropdown-link">
              Camera Translation
            </Link>
            <Link to="/features/text-translation" className="dropdown-link">
              Offline Translation
            </Link>
            <Link to="/features/text-translation" className="dropdown-link">
              Keyboard Translation
            </Link>
          </div>
        </li>

        {/* Translating dropdown  */}
        <li className="nav-item" onClick={(e) => e.stopPropagation()}>
          <div
              className="dropdown-trigger"
              onClick={() => toggleDropdown("translating")}
            >
              Translating
              <FontAwesomeIcon
              icon={isSmallScreen
                ? (activeDropdown === "translating" ? faChevronLeft : faChevronRight) // for small screens
                : (activeDropdown === "translating" ? faChevronUp : faChevronDown)} // for larger screens
              className="dropdown-arrow"
            />
            </div>
            <div
              className={`dropdown-container ${
                activeDropdown === "translating" ? "show" : ""
              }`}
            >
            <Link to="/translating/online-translator" className="dropdown-link">
              Online Translator
            </Link>
            <Link to="/supported-languages" className="dropdown-link">
              Supported Languages
            </Link>
            <Link to="/dictionary" className="dropdown-link">
              Dictionary
            </Link>
          </div>
        </li>
        
        {/* Learning dropdown  */}
        <li className="nav-item" onClick={(e) => e.stopPropagation()}>
          <div
              className="dropdown-trigger"
              onClick={() => toggleDropdown("learning")}
            >
              Learning
              <FontAwesomeIcon
                icon={isSmallScreen
                  ? (activeDropdown === "learning" ? faChevronLeft : faChevronRight) // for small screens
                  : (activeDropdown === "learning" ? faChevronUp : faChevronDown)} // for larger screens
                className="dropdown-arrow"
              />
            </div>
            <div
              className={`dropdown-container ${
                activeDropdown === "learning" ? "show" : ""
              }`}
            >
            <Link to="/language-learning" className="dropdown-link">
              Language Learning
            </Link>
            <Link to="/blog" className="dropdown-link">
              Blog
            </Link>
          </div>
          
        </li>

        {/* Company dropdown  */}
        <li className="nav-item" onClick={(e) => e.stopPropagation()}>
          <div
              className="dropdown-trigger"
              onClick={() => toggleDropdown("company")}
            >
              Company
              <FontAwesomeIcon
                icon={isSmallScreen
                  ? (activeDropdown === "company" ? faChevronLeft : faChevronRight) // for small screens
                  : (activeDropdown === "company" ? faChevronUp : faChevronDown)} // for larger screens
                className="dropdown-arrow"
              />
            </div>
            <div
              className={`dropdown-container company-container ${
                activeDropdown === "company" ? "show" : ""
              }`}
            >
            
            <Link to="/company/support" className="dropdown-link">
              Support
            </Link>
            <div
              className="dropdown-link other-apps-link"
              onClick={(e) => {
                e.stopPropagation();
                toggleSubDropdown("otherApps");
              }}
            >
              Other Apps
              <FontAwesomeIcon
                icon={activeSubDropdown === "otherApps" ? faChevronLeft : faChevronRight}
                className="sub-dropdown-arrow"
              />
            </div>

            <div
              className={`sub-dropdown ${
                activeSubDropdown === "otherApps" ? "show" : ""
              }`}
            >
              <Link to="/converse" className="dropdown-link">
                Converse
              </Link>
              <Link to="/lingo" className="dropdown-link">
                Lingo
              </Link>
              <Link to="/voice" className="dropdown-link">
                Voice
              </Link>
              <Link to="/typeright" className="dropdown-link">
                Typeright
              </Link>
            </div>
          </div> 
        </li>

        {/* sign-in button */}
        <li className="nav-item sign-in-item">
          <Link to="/login" className="sign-in-link">
            Sign In
          </Link>
        </li>
      </ul>

    </nav>
  );
}
