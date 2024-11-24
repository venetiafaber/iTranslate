/*
  React Component :     SigUpPage.js
  Created by      :     Yash Jigneshkumar Patel
  
*/

import React from 'react';
import logo from '../assets/images/itranslate-logo.svg';
import Header from "./Header.js";

const SignupPage = () => {
  return (
    <>
      <Header />
      <div className="signup-container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="card p-4 shadow col-4">
          <div className="text-center">
            <img
              src={logo}
              alt="iTranslate Logo"
              className="logo mb-3 mt-3"
            />
            <h3>Welcome to iTranslate</h3>
            <p className="text-muted">
              Translate between 90+ languages with confidence
            </p>
          </div>
          <ul className="nav nav-pills mb-4 justify-content-center">
            <li className="nav-item w-50">
              <a className="nav-link text-black-50 fw-semibold text-center w-100" href="/login">Login</a>
            </li>
            <li className="nav-item w-50">
              <a className="nav-link active text-center fw-semibold w-100" href="/signup">Sign Up</a>
            </li>
          </ul>
          <form>
            <div className="form-group mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
              />
            </div>
            <button className="btn btn-primary w-100">Sign Up</button>
            <div className="text-center mt-3">
              <p className="text-muted">
                By continuing, you agree to iTranslate's<br />
                <a href="*" className="text-decoration-none">
                  Terms of Service & Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;