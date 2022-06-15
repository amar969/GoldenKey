import React from 'react'
import icon from '../images/frame-5-1@2x.png';
import insta from "../images/instagram.png";
import discord from "../images/discord.png";
import twitter from "../images/twitter.png"
import discord2 from "../images/discord-2.png"
import "./Navbar.css";
import social from "../images/social.png"
import {Link} from "react-router-dom";

export const Navbar = () => {


    return(
        <>
        <div className='navbar-conatiner' >
        <Link to="/Home">
        <img src={icon} className="icon" alt="icon"/> 
        </Link>

        <div className='nav-right-side-items'>
            <Link to="/Whitepaper"><h3>White Paper</h3></Link>
            <h3>Gallery</h3>
            <h3>Team</h3>
            <img src={social} alt="social" />
            {/* <img src={insta} alt="insta" />
            <img src={discord2} alt="discord" />
            <img src={twitter} alt="twitter" /> */}
        </div>
        </div>
        
        </>
    )
}