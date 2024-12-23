/*
  React Component :     Header.js
  Created by      :     Venetia Faber
  
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import logo from "../assets/images/itranslate-logo1.png";
import Nav from "./nav";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo of the website iTranslate" />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
