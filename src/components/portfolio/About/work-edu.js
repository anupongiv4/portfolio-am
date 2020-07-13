import React from 'react';
import './about.css';

const certificate_list = [{
    id: '0',
    topic: 'Introduction to web development',
    organization: 'Coursera offered by University of Califonia, Davis',
    date: 'April 2020'
}, {
    id: '1',
    topic: 'How computer work',
    organization: 'Coursera offered by University of London',
    date: 'April 2020'
}, {
    id: '2',
    topic: 'CSS course',
    organization: 'Codecademy',
    date: 'May 2020'
}, {
    id: '3',
    topic: 'Building Interactive JavaScript Website',
    organization: 'Codecademy',
    date: 'May 2020'
}, {
    id: '4',
    topic: 'Command Line course',
    organization: 'Codecademy',
    date: 'June 2020'
}, {
    id: '5',
    topic: 'Git course',
    organization: 'Codecademy',
    date: 'June 2020'
}];

const workEx = [{
    id: 1,
    position: 'Guest Service Agent / Chillax Resort Hotel',
    date: 'December 2018 - CURRENT',
    duty: 'Administering front desk services to guest. Being a source of information to guests on various matters. Solving problems to the satisfying and proper solutions for guests.'
}, {
    id: 2,
    position: 'Administrative Officer / Krungthai Bank',
    date: 'March 2018 - October 2018',
    duty: 'Administering front desk services to guest. Being a source of information to guests on various matters. Solving problems to the satisfying and proper solutions for guests.'
}];


const Certificate = () => {
    let list_item = certificate_list.map(item => {
        return (
            <div className="cer-item" key={item.id} >
                <h3>{item.topic}</h3>
                <p>{item.organization}</p>
                <p><i className="fa fa-calendar" ></i> {item.date}</p>
            </div>
        )
    });

    return list_item
}

const Education = () => {
    return (
        <div className="edu-container" >
            <h1>Education</h1>
            <div className="edu-info" >
                <h3>Suan Sunandha Rajaphat University </h3>
                <p><i className="fa fa-book" ></i>Bachelor of arts in English</p>   
            </div>
            <h1>Certificate</h1>
            <Certificate />
        </div>
    )
};

const WorkExperience = () => {
    const item = workEx.map(element => {
        return (
            <div className="position" key={element.id} >
                <h3>{element.position}</h3>
                <p><i className="fa fa-calendar" ></i>{element.date}</p>
                <p className="info" >{element.duty}</p>
            </div>
        )
    });

    return (
        <div className="we-container" >
            <h1> Work Experience </h1>
            {item}
        </div>
    )
};

const Work_Edu = () => {
    return (
        <div>
            <WorkExperience />
            <Education />
        </div>
    )
}

export default Work_Edu;