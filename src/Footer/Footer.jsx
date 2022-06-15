import React from "react";
import Frame from "../images/frame-5-1@2x.png";
import discordMark from "../images/discord-logo-wordmark-white.png";
import social from "../images/social.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <hr />
        <div className="footer">
          <a href="https://discord.gg/goldenkeysociety" target="_blank">
            <img
              src={discordMark}
              className="discord-watermark"
              alt="discord"
            />
          </a>
          <Link to="/Home">
            <img src={Frame} className="brand-logo" alt="Frame-icon" />
          </Link>

          <img src={social} className="social" alt="social-icon" />
        </div>
      </div>
    </>
  );
};
