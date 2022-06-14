import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Home.css";
import Home1 from "../images/render.png";
import profile from "../images/profile.png"

export const Home = () => {
  return (
    <>
      <Navbar />

      {/* connect button */}
      <div className="main-container">
        <img className="home-image" src={Home1} alt="home image" />
        <button className="wallet-btn">Connect Wallet</button>
      </div>

      <div className="middle-container">
        <div className="left-container-text">
          <h3>Welcome to the Golden Key Society</h3>
          <p>
            A limited NFT collection where the token itself doubles as your
            membership to a highly impactful society. We have chosen to use NFT
            technology to fuel this project because it takes our message global
            and without bias. This is about lowering the barrier of entry for
            individuals to obtain education, networking, and opportunity. The
            perfect token for entrepreneurs, investors, and business owners.
          </p>
        </div>
        <div className="right-container-image">
            <img src={profile} alt="profile image" />
        </div>
      </div>

      <div className="join-society-container">
            <div className="txt1">
                <h4>JOIN THE SOCIETY</h4>
            </div>
            <div className="btn">
                <button>Mint</button>
            </div>
        </div>

      <Footer />
    </>
  );
};
