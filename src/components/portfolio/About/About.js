import React from 'react';
import './about.css';
import WorkEdu from './work-edu';
import profile from '../../images/profile.jpg';

const Language = () => {
    return (
        <div className="language-con" >
            <h2><i className="fa fa-globe" ></i>Language</h2>

            <div className="language-item" >
                <p>Thai</p>
                <div className="language-container">
                    <div className="l-skills th">100%</div>
                </div>
            </div>

            <div className="language-item" >
                <p>English</p>
                <div className="language-container">
                    <div className="l-skills eng">75%</div>
                </div>
            </div>

        </div>
    )
};

const Skill = () => {
    return (
        <div className="skill-container" >
            <h2><i className="fa fa-asterisk" ></i>Skills</h2>
            <div className="skill-con" >
                <p>HTML</p>
                <div className="container">
                    <div className="skills html">90%</div>
                </div>
            </div>
            <div className="skill-con">
                <p>CSS</p>
                <div className="container">
                    <div className="skills css">80%</div>
                </div>
            </div>
            <div className="skill-con" >
                <p>JavaScript</p>
                <div className="container">
                    <div className="skills js">65%</div>
                </div>
            </div>
            <div className="skill-con" >
                <p>React</p>
                <div className="container">
                    <div className="skills react">60%</div>
                </div>
            </div>
            <div className="skill-con" >
                <p>Node JS</p>
                <div className="container">
                    <div className="skills node">25%</div>
                </div>
            </div>
            <div className="skill-con" >
                <p>Git</p>
                <div className="container">
                    <div className="skills git">50%</div>
                </div>
            </div>
        </div>
    )
};

const PersonalInfo = () => {
    return (
        <div className="top-info" >
            <div className="img-con" >
                <img src={profile} alt="profile images" />
                <h2>Anupong Meesang</h2>
            </div>
            <div className="info-contact" >
                <p><i className="fa fa-briefcase"></i> Front End Developer</p>
                <p><i className="fa fa-home"></i>Bangkok, TH</p>
                <p><i className="fa fa-envelope"></i>anuponglive@gmail.com</p>
                <p><i className="fa fa-phone"></i>+66-xxxxxxxxx</p>
            </div>
        </div>
    )
};

const Personal = () => {
    return (
        <div className="personal-info-container" >
            <PersonalInfo />
            <Skill />
            <Language />
        </div>
    )
}

const About = () => {
    return (
        <div className="personal">
            <Personal />
            <WorkEdu />
        </div>
    )
}

export default About;