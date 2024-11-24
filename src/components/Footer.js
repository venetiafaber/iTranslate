/*
  React Component :     Footer.js
  Created by      :     Yash Jigneshkumar Patel
*/

import React from "react";
import facebookIcon from "../assets/images/icons/icon_facebook.svg";
import twitterIcon from "../assets/images/icons/icon_twitter.svg";
import instagramIcon from "../assets/images/icons/icon_instagram.svg";
import youtubeIcon from "../assets/images/icons/icon_youtube.svg";

const Footer = () => {
    return (
        <footer className="bg-light pt-5 pb-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-6 mb-4">
                        <h1 className="fw-bold display-5">
                            Let’s break language barriers.{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #64b5f6, #5c6bc0, #8e24aa)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    display: "inline-block",
                                }}
                            >
                                Together.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="fw-bold text-uppercase text-primary">Products</h6>
                        <ul className="list-unstyled">
                            {[
                                "iTranslate",
                                "iTranslate Converse",
                                "iTranslate Lingo",
                                "iTranslate Voice",
                                "Typeright",
                                "iTranslate Android",
                                "iTranslate Webapp",
                            ].map((product) => (
                                <li key={product}>
                                    <a
                                        href={`/${product.replace(/\s+/g, "-").toLowerCase()}`}
                                        className="text-decoration-none text-secondary fw-semibold"
                                        aria-label={`Go to ${product}`}
                                    >
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="fw-bold text-uppercase text-primary">Company</h6>
                        <ul className="list-unstyled">
                            {["About iTranslate", "Contact us"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                                        className="text-decoration-none text-secondary fw-semibold"
                                        aria-label={`Go to ${item}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="fw-bold text-uppercase text-primary">Terms & Policies</h6>
                        <ul className="list-unstyled">
                            {[
                                "Terms of Service",
                                "Enterprise Terms",
                                "Medical Terms of Service",
                                "Privacy Policy",
                                "Cookie Policy",
                                "Cookie Settings",
                            ].map((policy) => (
                                <li key={policy}>
                                    <a
                                        href={`/${policy.replace(/\s+/g, "-").toLowerCase()}`}
                                        className="text-decoration-none text-secondary fw-semibold"
                                        aria-label={`Read ${policy}`}
                                    >
                                        {policy}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-3 col-6 mb-4">
                        <h6 className="fw-bold text-uppercase text-primary">Support</h6>
                        <ul className="list-unstyled">
                            {[
                                "FAQs",
                                "Supported Languages",
                                "Contact our Support",
                            ].map((support) => (
                                <li key={support}>
                                    <a
                                        href={`/${support.replace(/\s+/g, "-").toLowerCase()}`}
                                        className="text-decoration-none text-secondary fw-semibold"
                                        aria-label={`Find ${support}`}
                                    >
                                        {support}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row align-items-center">
                    <div className="col-md-8 text-center text-md-start mb-3">
                        <p className="fw-semibold text-muted mb-0">
                            &copy; Bending Spoons Operations S.p.A. All rights reserved.
                        </p>
                        <p className="text-muted">
                            All trademarks, products, and service names are the property of
                            their respective owners.
                        </p>
                    </div>

                    <div className="col-md-4 text-center text-md-end">
                        {[
                            { icon: facebookIcon, alt: "Facebook", link: "/itranslate-facebook" },
                            { icon: twitterIcon, alt: "Twitter", link: "/itranslate-twitter" },
                            { icon: instagramIcon, alt: "Instagram", link: "/itranslate-instagram" },
                            { icon: youtubeIcon, alt: "YouTube", link: "/itranslate-youtube" },
                        ].map(({ icon, alt, link }) => (
                            <a
                                key={alt}
                                href={link}
                                className="text-dark me-3"
                                aria-label={`Follow us on ${alt}`}
                            >
                                <img src={icon} alt={alt} style={{ width: "24px", height: "24px" }} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;