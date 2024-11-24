/*
  React Component :     LoginPage.js
  Created by      :     Yash Jigneshkumar Patel
*/

import React, { useState } from 'react';
import logo from '../assets/images/itranslate-logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.js";

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Header />
            <div className="login-container d-flex justify-content-center align-items-center mt-5 mb-5">
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
                    <ul className="nav nav-pills mb-2 justify-content-center">
                        <li className="nav-item w-50">
                            <a className="nav-link active text-center fw-semibold w-100" href="/login">Login</a>
                        </li>
                        <li className="nav-item w-50">
                            <a className="nav-link text-black-50 fw-semibold text-center w-100" href="/signup">Sign Up</a>
                        </li>
                    </ul>
                    <form className="border-top">
                        <div className="form-group mb-3 mt-4">
                            <label className="form-label fw-semibold">Email</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter your password"
                                    required
                                />
                                <span
                                    className="input-group-text"
                                    style={{ cursor: "pointer" }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                </span>
                            </div>
                        </div>
                        <div className="text-end m-3">
                            <a href="*" className="text-decoration-none">
                                Forgot password?
                            </a>
                        </div>
                        <button className="btn btn-primary w-100">Login</button>
                        <div className="text-center mt-4">
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

export default LoginPage;