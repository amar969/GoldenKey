import React from "react";
import { Footer } from "../Footer/Footer";
import "./LandingPage.css";
import original from "../images/original.png";
import icon from "../images/frame.png";
import logo from "../images/social.png";
import { Link } from "react-router-dom";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord2 from "../images/discord-2.png";


export const LandingPage = () => {
  return (
    <>
      <div className="container">
      <div className="social icons">
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
        <div className="logo">
          <img src={icon} className="logo-img" alt="logo" />
        </div>
        <img src={original} className="home-img" alt="Home with boat" />
        <div className="btn-text-container">
          <Link to="/Home">
            {" "}
            <button className="enter-btn ">ENTER </button>
          </Link>
          </div>
          <div className="wel-text-container">
            <h3>Welcome to the Golden Key Society</h3>
            <p>Lowering the barrier of entry for individuals to obtain education, prime Networking, and financial opportunity.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
