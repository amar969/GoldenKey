import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Home.css";
import Home1 from "../images/render.png";
import profile from "../images/profile.png";
import eth from "../images/ETH-GIF.gif";
import ezgif from "../images/ezgif.com-gif-maker.gif";
import gif1 from "../images/IMB_qMeOIN.gif";
import Team from "../images/Team.png";


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
          <button className="btn-mint">Mint</button>
        </div>
      </div>

      <hr />

      {/* the specs container */}

      <div className="middle-container">
        <div className="left-container-text">
          <h3>The Specs</h3>
          <p>
            Each Golden Key NFT is unique and programmatically generated from
            over 200 possible traits, including gender, headwear, style, and
            more. All tokens are lit, but some are rarer than others. The Golden
            Key Society NFTs are stored as ERC-721 tokens on the Ethereum
            blockchain and hosted on IPFS. Purchasing a key costs 0.2 ETH.
          </p>
        </div>
        <div className="right-container-image">
          <img src={eth} alt="profile image" />
        </div>
      </div>

      <hr />

      <div className="text-container">
        <div className="text-container">
          <h3>Welcome to the Society </h3>
          <p>
            The Golden Key Society is not just an NFT Collection, it’s a
            launchpad for individuals to drastically enhance their lives. Owning
            a Golden Key Society NFT provides Membership to an exclusive network
            of peers that can provide the best education, network, and
            opportunities.
          </p>
        </div>
      </div>

      <hr />
      {/* Education container */}
      <div className="middle-container">
        <div className="left-container-text">
          <h3>Education & Networking</h3>
          <p>
            With over 24 speakers a year and Bi-monthly calls with world renown
            entrepreneurs, businessmen, investors and philanthropists. Holders
            will also have access to exclusive content such as books, audio, and
            webinar events. We are bridging the gap of accessibility to the
            world's best. Who do you want to hear from?
          </p>
          <p>
            Holders will be invited to attend the Golden Key Summit event and
            Golden Key Society Semi-annual. Tokens will Include premier tickets
            for various entrepreneurial conferences and events. We will be
            collaborating with other highly regarded masterminds to enable our
            members to create relationships with successful peers.
          </p>
        </div>
        <div className="right-container-image">
          <img src={ezgif} alt="profile image" />
        </div>
      </div>

      <hr />
      {/* RoadMap container */}
      <div className="middle-container" id="the-roadmap">
        <div className="list-container-text">
          <h3>Roadmap</h3>
          <h4 className="list-heading">Q3 July-September</h4>
          <ul className="list">
            <li>Golden Key Token Reveal.</li>
            <li>Tesla giveaway to holder that draws Tesla Legendary.</li>
            <li>VIP Treasure Box Airdrop.</li>
            <li>Bi-Weekly Webinars with Top Entrepreneurs.</li>
            <li>
              ( Mindset ) Golden Key Society Semi-annual Event/Launch Party.
            </li>
            <li>Golden Key Summit KeyNote Speakers Announced.</li>
          </ul>
          <h4 className="list-heading">Q4 Oct - Dec</h4>
          <ul className="list">
            <li>New Bi-weekly Speaker Topic for Webinars ( Business )</li>
            <li>Q4 Treasure box NFT Airdrop</li>
            <li>Physical GKS Key Sent to Holders</li>
            <li>Advertisement Campaign for Golden Key Summit.</li>
            <li>Vetted investment portal for holders launch.</li>
          </ul>
          <h4 className="list-heading">Q1 Jan - Mar</h4>
          <ul className="list">
            <li>
              New Bi-weekly Speaker Topic for Webinars ( Real Estate/Investing )
            </li>
            <li>Q1 Treasure Box NFT Airdrop</li>
            <li>VIP Giveaway for Golden Key Summit </li>
            <li>GKS Merchandise Roll out.</li>
          </ul>
          <h4 className="list-heading">Q2 Apr - Jun</h4>
          <ul className="list">
            <li>Holders Summit Giveaway </li>
            <li>GKS Fund Launch</li>
            <li>
              New Bi-weekly Speaker Topic for Webinars ( Money Management/ Taxes
              )
            </li>
            <li>Q2 Treasure Box NFT Airdrop</li>
            <li>Golden Key Summit ( May )</li>
          </ul>
        </div>
        <div className="right-container-image">
          <img src={gif1} alt="profile image" />
        </div>
      </div>

      <hr />

      {/* community tools */}

      <div className="middle-container">
        <div className="left-container-text">
          <h3>Community Tools</h3>
          <p>
            Join us in discord! This is a great tool to connect with others
            joining the Golden Key Society and ask questions about the roadmap.
            Also grab a whitelist spot to guarantee you a chance at joining this
            amazing project. (Link Discord button)
          </p>
        </div>
        <div className="right-container-image">
          <button className="wallet-btn join-btn">Join Here</button>
        </div>
      </div>


      {/* Team page */}

      <hr />
      <div className="middle-container" id="the-team">
        <div className="left-container-text">
          <h3>The Team</h3>
          <p className="p-styling">
            GKS was created by four individuals who set out to make some amazing
            impact, change lives for generations, and build something
            groundbreaking. Lindsey J.: Art Management & Roadmap Management Nick
            S.: Education & Speakers Dusky D.: Marketing & Community Management
            Spencer M.: Investment Management & Business Structure.
          </p>
        </div>
        <div className="right-container-image">
          <img src={Team} alt="team image" className="team-image" />
        </div>
      </div>

      <div className="coming-soon-container">
        VERIFIED SMART CONTRACT ADDRESS: <span>COMING SOON!</span>{" "}
      </div>

      <Footer />
    </>
  );
};
