import React from 'react';
import './advantage.css'
import paint from '../../images/paint-brush.png'
import monitor from '../../images/monitor.png'
import mobile from '../../images/phone.png'

const list = [{
    id: 1,
    topic: "DESIGN",
    description: 'Help you design to strngthen your brand, and look more modern',
    src: paint
}, {
    id: 2,
    topic: "USAGE",
    description: 'Design more friendly and comforable usage',
    src: monitor
}, {
    id: 3,
    topic: "Mobile",
    description: 'Access our website more conveniently, regardless of devices',
    src: mobile
}];

function ListItem(props) {
    const item = list.map(element => {
        return (
            <div className={props.class} key={element.id} >
                <img src={element.src} alt={element.src} />
                <div>
                    <h1>{element.topic}</h1>
                    <p>{element.description}</p>
                </div>
            </div>
        )
    });

    return item;
};

function Advantage() {
    return (
        <div className="content-container">
            <h1>What I help you</h1>
            <div className="content-list" >
                <ListItem class="content-list-1"/>
            </div>
        </div>
    )
}

export default Advantage;