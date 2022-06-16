import React from "react";
import icon from "../images/frame-5-1@2x.png";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord2 from "../images/discord-2.png";
import "./Navbar.css";
import social from "../images/social.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-conatiner">
        <Link to="/Home">
          <img src={icon} className="icon" alt="icon" />
        </Link>

        <div className="nav-right-side-items">
          <Link to="/Whitepaper">
            <h3>White Paper</h3>
          </Link>
          <a href="/Home#the-roadmap">
            <h3>Gallery</h3>
          </a>
          <a href="/Home#the-team">
            {" "}
            <h3>Team</h3>{" "}
          </a>
          {/* <img src={social} alt="social" /> */}
          <div className="socials">
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
