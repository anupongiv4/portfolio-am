import React from 'react';
import './Banner.css'
import logo from '../../images/logo-2.png';
import facebook from '../../images/facebook-logo.png';
import twitter from '../../images/twitter-logo.png';
import github from '../../images/github-mark.png';
import { Link } from 'react-router-dom';

// personal logo
function Logo() {
    return (
        <div>
            <Link to="/" >
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}
// end personal logo

// toggle navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// end toggle navigation bar

function NavigationBar() {
    return (
        <div>
            {/* mobile navigation */}
            <div className="NavBar" >
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={closeNav} >&times;</a>
                    <Link to="portfolio-am" >
                        <li>Portfolio</li>
                    </Link>
                    <Link to="about" >
                        <li>About me</li>
                    </Link>
                    <Link to="contact" >
                        <li>Contact</li>
                    </Link>
                    <div className="hambar-burger" >
                        <a href="https://web.facebook.com/AmFilm4/" target="_blank" rel="noopener noreferrer" ><img src={facebook} alt="logo" className="facebook-logo-m" /></a>
                        <a href="https://twitter.com/amfilmiv" target="_blank" rel="noopener noreferrer" ><img src={twitter} alt="logo" className="twitter-logo-m" /></a>
                        <a href="https://github.com/anupongiv4" target="_blank" rel="noopener noreferrer" ><img src={github} alt="logo" className="github-logo-m" /></a>
                    </div>
                    <img src={logo} alt="logo" className="amlogo" />
                </div>
                <div>
                    <span onClick={openNav} >&#9776;</span>
                </div>
            </div>
            {/* end mobile navigation */}

            {/* desktop navigation */}
            <div className="NavBar-desktop" >
                <Link to="portfolio-am" >
                    <li>Portfolio</li>
                </Link>
                <Link to="about" >
                    <li>About me</li>
                </Link>
                <Link to="contact" >
                    <li>Contact</li>
                </Link>
            </div>
            {/* end desktop navigation */}
        </div>
    )
}

// desktop social media logos
function SocialMedia() {
    return (
            <div className="social-logo" >
                <a href="https://web.facebook.com/AmFilm4/" target="_blank" rel="noopener noreferrer" ><img src={facebook} alt="logo" className="facebook-logo" /></a>
                <a href="https://twitter.com/amfilmiv" target="_blank" rel="noopener noreferrer" ><img src={twitter} alt="logo" className="twitter-logo" /></a>
                <a href="https://github.com/anupongiv4" target="_blank" rel="noopener noreferrer" ><img src={github} alt="logo" className="github-logo" /></a>
            </div>
    )
}
// end desktop social media logos


// banner content
function BannerText() {
    return (
        <div className="banner-text" >
            <h1>Front End Developer</h1>
            <h2>Anupong Messang</h2>
            <h2>Bangkok, Thailand</h2>
        </div>
    )
}
// end banner content

function Banner() {
    return (
        <div className="banner-container" >
            <div className="banner-container-bar" >
                <Logo />
                <NavigationBar />
                <SocialMedia />
            </div>
            <BannerText />
        </div>
    )
}

export default Banner;