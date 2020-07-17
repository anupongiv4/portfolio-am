import React from 'react';
import './Mainpage.css';
import htmlImg from '../../images/html.png';
import cssImg from '../../images/css.png';
import jsImg from '../../images/javascript.png';
import reactImg from '../../images/react.png';
import gitImg from '../../images/git.png';
import IMG1 from '../../images/img1.jpg';
import IMG2 from '../../images/IMG2.jpg';

const codecademyLink = 'https://www.codecademy.com/profiles/amfilmiv';

const text = [{
    info: 'Hello. I am Anupong, based in Bangkok, Thailand, and have been learning Web development from scratch since january 2020. I used to work as Guest Service Agent. Now, I pay a lot of attention to Web development.'
}, {
    info: `It\'s very interesting for me to code, so i devote myself and spend most of time in learning and practising coding. Currently, I\'m learning with Codecademy (Thank you for this useful tutorials throughout the Web Development Path) along with Youtube (Freecodecamp channel, etc), Mozilla Developer Network (MDN), etc.`
}, {
    info: 'I know that coding is like the mountain to climb, but I have decided and commited to it. Nothing I cannot learn and do it.'
}];

function Infomation() {
    const infomation = text.map((item, index) => {
        return (
            <div className="text-info" key={index}>
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
                <h1>I BUILD WEBSITES WITH</h1>
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
                </div>
                <div className="img-1-text">
                    <h1>DEVELOPMENT</h1>
                </div>
                <div className="body-image-2" >
                    <img src={IMG2} alt="image2" />
                </div>
                <div className="img-2-text">
                    <h1>IMPROVEMENT</h1>
                </div>
            </div>
            <section>
                <Infomation />
                <a href="
                https://drive.google.com/file/d/1AvxHxoxKN6ZqsZIJ6MiOnBW0hTxOQB3l/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><h1>View resume</h1></a>
                <a href={codecademyLink} target="_blank" rel="noopener noreferrer" ><h1>Codecademy_</h1></a>
            </section>
        </div>
    )
}


export default Mainpage;
