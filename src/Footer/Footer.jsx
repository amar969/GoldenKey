import React from "react";
import Frame from "../images/frame-5-1@2x.png";
import discordMark from "../images/discord-logo-wordmark-white.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord2 from "../images/discord-2.png";


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

          <div className="social">
            <a href="https://discord.gg/goldenkeysociety" target="_blank">
              <img src={discord2} alt="discord" />
            </a>
            <a
              href="https://twitter.com/goldenkeynft?s=20&t=oVK6Ey40jgoYkYsDcPi3Kw"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/goldenkeysociety.io/"
              target="_blank"
            >
              <img src={insta} alt="insta" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
