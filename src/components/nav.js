/*
  React Component :     Header.js
  Created by      :     Venetia Faber
  
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
import logo from "../assets/images/itranslate-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // defines states
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown((prev) => (prev === subDropdown ? null : subDropdown));
  };

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          {/* <div className="menu-item">Features</div> */}
          <div className="dropdown-container">
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
          Features
        </li>

        <li className="nav-item">
          <div className="dropdown-container">
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
          Translating
        </li>

        <li className="nav-item">
          <div className="dropdown-container">
            <Link to="/language-learning" className="dropdown-link">
              Language Learning
            </Link>
            <Link to="/blog" className="dropdown-link">
              Blog
            </Link>
          </div>
          Learning
        </li>

        <li className="nav-item">
          <div className="dropdown-container company-container">
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
              {/* <Link to="/company/other-apps" className="dropdown-link other-apps-a"> */}
              Other Apps
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="other-apps-dropdown-arrow-right"
                />
              </span>
              {/* </Link> */}
            </div>

            <div className={`sub-dropdown ${activeSubDropdown === "otherApps" ? "show" : ""}`}>
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
          Company
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
