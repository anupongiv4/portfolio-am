import React from 'react';
import './Mainpage.css';
import htmlImg from '../../images/html.png';
import cssImg from '../../images/css.png';
import jsImg from '../../images/javascript.png';
import reactImg from '../../images/react.png';
import gitImg from '../../images/git.png';
import IMG1 from '../../images/img1.jpg';
import IMG2 from '../../images/IMG2.jpg';

const text = [{
    info: 'Hello. I am Anupong, based in Bangkok, Thailand. I started learning coding or Web development since january 2020. I am currently working as Guest Service Agent in Bangkok.'
}, {
    info: 'Coding is very interesting for me, so i devote myself and spend most of the time in learning and practising coding.'
}, {
    info: 'Practice makes perfect This is a good qoute, but i think there is no such word Perfect, only improving and learning new thing come in my mind.'
}];

function Infomation() {
    const infomation = text.map((item, index) => {
        return (
            <div key={index}>
                <p>{item.info}</p>
            </div>
        )
    });

    return infomation
}

function Mainpage() {
    return (
        <div className="text-container" >
            <div className="header" >
                <h1>I build website</h1>
                <h1>I am FRONT END DEVELOPER</h1>
                <div>
                    <img src={htmlImg} alt="HTML logo" />
                    <img src={cssImg} alt="CSS logo" />
                    <img src={jsImg} alt="JS logo" />
                    <img src={reactImg} alt="React logo" />
                    <img src={gitImg} alt="GIT logo" />
                </div>
            </div>
            <div className="body-image">
                <div className="body-image-1" >
                    <img src={IMG1} alt="image1" />
                    <h1>INVEST IN YOURSELF</h1>
                </div>
                <div className="body-image-2" >
                    <img src={IMG2} alt="image2" />
                    <h1>IMPROVEMENT</h1>
                </div>
            </div>
            <section>
                <Infomation />
            </section>
        </div>
    )
}


export default Mainpage;
