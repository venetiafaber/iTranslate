import React from "react";

// Import images dynamically
import deviceFrame from "../../src/assets/images/device_video_stencil_iphone11pro2x-p-800.png";
import appStoreBadge from "../../src/assets/images/icons/badge_apple_app_store.svg";
import playStoreBadge from "../../src/assets/images/icons/badge_google_play_store.svg";
import voiceIcon from "../../src/assets/images/vt.png";
import cameraIcon from "../../src/assets/images/ct.png";
import keyboardIcon from "../../src/assets/images/kt.png";
import offlineIcon from "../../src/assets/images/ot.png";

import "../../src/assets/css/HomePage.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="home-header">
        <div className="home-header-content">
          <h1 className="home-title">
            Instantly speak <span className="home-highlight">100+ languages</span>
          </h1>
          <div className="home-stars">★★★★★</div>
          <p className="home-subtitle">Been using this for years!</p>
          <p className="home-review-author">María O.</p>

          {/* Icons Row */}
          <div className="home-icons-row">
            <div className="home-icon-item">
              <img src={voiceIcon} alt="Voice Translation" className="home-icon-image" />
             
            </div>
            <div className="home-icon-item">
              <img src={cameraIcon} alt="Camera Translation" className="home-icon-image" />
              
            </div>
            <div className="home-icon-item">
              <img src={keyboardIcon} alt="Keyboard Translation" className="home-icon-image" />
             
            </div>
            <div className="home-icon-item">
              <img src={offlineIcon} alt="Offline Translation" className="home-icon-image" />
             
            </div>
          </div>

          {/* Download Buttons */}
          <div className="home-download-buttons">
            <button className="home-btn home-app-store">
              <img src={appStoreBadge} alt="App Store" />
            </button>
            <button className="home-btn home-play-store">
              <img src={playStoreBadge} alt="Google Play Store" />
            </button>
          </div>
        </div>

        {/* Device Frame with Video */}
        <div className="mockup-video-device">
          <div className="mockup-video-device-frame">
            <img src={deviceFrame} alt="Device Frame" className="mockup-frame" />
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
    </div>
  );
};

export default Home;
