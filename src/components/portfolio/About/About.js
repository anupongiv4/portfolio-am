import React from 'react';
import './about.css';
import WorkEdu from './work-edu';
import profile from '../../images/profile.jpg';

// language section
const LanguageItem = (props) => {
    return (
        <div className="language-item" >
            <p>{props.topic}</p>
            <div className="language-container">
                <div className={`l-skills ${props.lang}`} >{props.percent}</div>
            </div>
        </div>
    )
};
// end language section

const Language = () => {
    return (
        <div className="language-con" >
            <h2><i className="fa fa-globe" ></i>Language</h2>
            <LanguageItem topic="Thai" percent="100" lang="th" />
            <LanguageItem topic="English" percent="75%" lang="eng" />
        </div>
    )
};

// skill section
const SkillItem = (props) => {
    return (
        <div className="skill-con" >
            <p>{props.header}</p>
            <div className="container">
                <div className={`skills ${props.lang}`}>{props.percent}</div>
            </div>
        </div>
    )
};

const Skill = () => {
    return (
        <div className="skill-container" >
            <h2><i className="fa fa-asterisk" ></i>Skills</h2>
            <SkillItem header="HTML" percent="90%" lang="html" />
            <SkillItem header="CSS" percent="80%" lang="css" />
            <SkillItem header="JavaScript" percent="65%" lang="js" />
            <SkillItem header="React" percent="60%" lang="react" />
            <SkillItem header="Node JS" percent="25%" lang="node" />
            <SkillItem header="Git" percent="50%" lang="git" />
        </div>
    )
};
// end skill section

// personal infomation section
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
// end personal infomation section

const About = () => {
    return (
        <div className="personal">
            <div className="personal-info-container" >
                <PersonalInfo />
                <Skill />
                <Language />
            </div>
            <WorkEdu />
        </div>
    )
}

export default About;