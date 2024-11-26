/*
  React Component :     NotFoundPage.js
  Created by      :     Yash Jigneshkumar Patel
*/

import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
            style={{
                background: "linear-gradient(135deg, #64b5f6, #8e24aa, #5c6bc0)",
                color: "#fff",
                padding: "20px",
            }}
        >
            <div
                className="rounded-circle bg-white d-flex justify-content-center align-items-center shadow-lg mb-4"
                style={{
                    width: "200px",
                    height: "200px",
                    animation: "float 3s ease-in-out infinite",
                }}
            >
                <span
                    className="display-1 fw-bold text-gradient"
                    style={{
                        background: "linear-gradient(90deg, #ff8a65, #8e24aa, #5c6bc0)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    404
                </span>
            </div>

            <h1 className="fw-bold mb-3">Oops! Page Not Found</h1>
            <p className="lead mb-5">
                Sorry, the page you're looking for doesn't exist or may have been moved. Let's help you find your way back.
            </p>

            <Link to="/" className="btn btn-primary btn-lg shadow-lg">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;