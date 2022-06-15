import React from "react";
import { Footer } from "../Footer/Footer";
import "./LandingPage.css";
import original from "../images/original.png";
import icon from "../images/frame.png";
import logo from "../images/social.png";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div className="container">
        <img src={logo} className="icons" alt="logos" />
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
