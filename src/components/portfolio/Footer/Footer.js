import React from 'react';
import './Footer.css';
import logo from '../../images/logo-2.png';
import facebook from '../../images/facebook-logo.png';
import twitter from '../../images/twitter-logo.png';
import github from '../../images/github-mark.png';
import { Link } from 'react-router-dom'; 

function FooterNav() {
    return (
        <div className="footer-nav">
            <ul>
                <Link to="/" >
                    <li>Portfolio</li>
                </Link>
                <Link to="about" >
                    <li>About me</li>
                </Link>
                <Link to="contact" >
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

function SocialLogo() {
    return (
        <div className="footer-social" >
            <a href="https://web.facebook.com/AmFilm4/" target="_blank" rel="noopener noreferrer" ><img src={facebook} alt="logo" className="footer-facebook-logo" /></a>
            <a href="https://twitter.com/amfilmiv" target="_blank" rel="noopener noreferrer" ><img src={twitter} alt="logo" className="footer-twitter-logo" /></a>
            <a href="https://github.com/anupongiv4" target="_blank" rel="noopener noreferrer" ><img src={github} alt="logo" className="footer-github-logo" /></a>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer-container" >
            <FooterNav />
            <div className="footer-logo" >
                <img src={logo} alt="logo" />
                <p>&copy;copyright AM</p>
            </div>
            <SocialLogo />
        </div>
    )
}

export default Footer;