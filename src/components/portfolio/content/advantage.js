import React from 'react';
import './advantage.css'
import paint from '../../images/paint-brush.png'
import monitor from '../../images/monitor.png'
import mobile from '../../images/phone.png'

const list = [{
    topic: "DESIGN",
    description: 'Help you design to strngthen your brand, and look more modern',
    src: paint
},
{
    topic: "USAGE",
    description: 'Design more friendly and comforable usage',
    src: monitor
},
{
    topic: "DESIGN",
    description: 'Access our website more conveniently, regardless of devices',
    src: mobile
}]

function HelpList() {
    return (
        <div className="content-list" >
            <div className="content-list-1" >
                <img src={list[0].src} alt="" />
                <div>
                    <h1>{list[0].topic}</h1>
                    <p>{list[0].description}</p>
                </div>
            </div>
            <div className="content-list-2" >
                <img src={list[1].src} alt="" />
                <div>
                    <h1>{list[1].topic}</h1>
                    <p>{list[1].description}</p>
                </div>
            </div>
            <div className="content-list-3" >
                <img src={list[2].src} alt="" />
                <div>
                    <h1>{list[2].topic}</h1>
                    <p>{list[2].description}</p>
                </div>
            </div>
        </div>
    )
}



function Advantage() {
    return (
        <div className="content-container">
            <h1>What I help you</h1>
            <HelpList />
        </div>
    )
}

export default Advantage;