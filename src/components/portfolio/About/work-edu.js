import React from 'react';
import './about.css';
import codeImg from '../../images/codecademy-logo.jpg';
import courseImg from '../../images/coursera-logo.png';

const certificate_list = [{
    id: '0',
    topic: 'Introduction to web development',
    organization: 'Coursera offered by University of Califonia, Davis',
    date: 'April 2020',
    img: courseImg,
    link: 'https://www.coursera.org/account/accomplishments/certificate/NY8APV9KUL3G'
}, {
    id: '1',
    topic: 'How computer work',
    organization: 'Coursera offered by University of London',
    date: 'April 2020',
    img: courseImg,
    link: 'https://www.coursera.org/account/accomplishments/certificate/ENMEENNBSXV5'
}, {
    id: '2',
    topic: 'CSS',
    organization: 'Codecademy',
    date: 'May 2020',
    img: codeImg,
    link: 'https://www.codecademy.com/profiles/amfilmiv'
}, {
    id: '3',
    topic: 'Building Interactive JavaScript Website',
    organization: 'Codecademy',
    date: 'May 2020',
    img: codeImg,
    link: 'https://www.codecademy.com/profiles/amfilmiv'
}, {
    id: '4',
    topic: 'Command Line',
    organization: 'Codecademy',
    date: 'June 2020',
    img: codeImg,
    link: 'https://www.codecademy.com/profiles/amfilmiv'
}, {
    id: '5',
    topic: 'Git',
    organization: 'Codecademy',
    date: 'June 2020',
    img: codeImg,
    link: 'https://www.codecademy.com/profiles/amfilmiv'
}];

const workEx = [{
    id: 1,
    position: 'Guest Service Agent / Chillax Resort Hotel',
    date: 'December 2018 - July 2020',
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" ><img src={item.img} alt="codecademy logo" /></a>
                <h3>{item.topic}</h3>
                <p>{item.date}</p>
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
            <h1>Certificates</h1>
            <div className="cer-container">
                <Certificate />
            </div>
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