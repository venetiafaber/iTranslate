import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faCamera,
  faKeyboard,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../../src/assets/css/HomePage.css";
import device from "../../src/assets/images/device_video_stencil_iphone11pro2x-p-800.png"

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="home-header">
        <div className="home-header-content">
          <h1 className="home-title">
            Instantly speak <span className="home-highlight">100+ languages</span>
          </h1>
          <div className="home-stars">★★★★★</div>
          <p className="home-subtitle">I love and rely on this app!</p>
          <div className="home-download-buttons">
            <button className="home-btn home-app-store">Download on the App Store</button>
            <button className="home-btn home-play-store">Get it on Google Play</button>
          </div>
        </div>
        <div className="mockup-video-device">
          <div className="mockup-video-device-frame">
            <img
              src={device} // Replace with your device frame path
              alt="Device Frame"
              className="mockup-frame"
            />
          </div>
          <div className="mockup-video-device-container">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="mockup-video"
              poster="https://uploads-ssl.webflow.com/5dcd414f1b8bff1c693c8aa2/63247433c415e1b444d032a7_iTranslate - Web Preview.jpg"
            >
              <source
                src="https://uploads-ssl.webflow.com/5dcd414f1b8bff1c693c8aa2/63247433c415e1b444d032a7_iTranslate - Web Preview_390x844_redesign-transcode.mp4"
                type="video/mp4"
              />
              <source
                src="https://uploads-ssl.webflow.com/5dcd414f1b8bff1c693c8aa2/63247433c415e1b444d032a7_iTranslate - Web Preview_390x844_redesign-transcode.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="home-features">
        <h2>More features you will love</h2>
        <div className="home-feature-grid">
          <div className="home-feature">
            <img
              src="feature-1-placeholder.jpg" /* Replace with your actual image */
              alt="Feature 1"
              className="home-feature-image"
            />
            <h3>100+ Languages</h3>
            <p>Speak more than 100 languages instantly.</p>
          </div>
          <div className="home-feature">
            <img
              src="feature-2-placeholder.jpg" /* Replace with your actual image */
              alt="Feature 2"
              className="home-feature-image"
            />
            <h3>Voice Output</h3>
            <p>Listen to translations in different voices & dialects.</p>
          </div>
          <div className="home-feature">
            <img
              src="feature-3-placeholder.jpg" /* Replace with your actual image */
              alt="Feature 3"
              className="home-feature-image"
            />
            <h3>Universal App</h3>
            <p>One universal app for iPhone and iPad.</p>
          </div>
          <div className="home-feature">
            <img
              src="feature-4-placeholder.jpg" /* Replace with your actual image */
              alt="Feature 4"
              className="home-feature-image"
            />
            <h3>Translation History</h3>
            <p>Access previous translations quickly and easily.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
