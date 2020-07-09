import React from 'react';
import './about.css';
import { certificate_list } from './we-content';

const Certificate = (props) => {
    let list_item = props.list.map(item => {
        return (
            <div className="cer-item" >
                <h3>{item.topic}</h3>
                <h4>{item.organization}</h4>
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
            <Certificate list={certificate_list} />
        </div>
    )
};

const Work_Experience = () => {
    return (
        <div className="we-container" >
            <h1> Work Experience </h1>
            <div className="position" >
                <h3>Guest Service Agent / Chillax Resort Hotel </h3>
                <p><i className="fa fa-calendar" ></i>December 2018 - Current</p>
                <p className="info" >Administering front desk services to guest. Being a source of information to guests on various matters. Solving problems to the satisfying and proper solutions for guests. </p>
            </div>
            <div className="position" >
                <h3>Administrative Officer / Krungthai Bank </h3>
                <p><i className="fa fa-calendar" ></i>March 2018 - October 2018</p>
                <p className="info" >Administering front desk services to guest. Being a source of information to guests on various matters. Solving problems to the satisfying and proper solutions for guests. </p>
            </div>
        </div>
    )
};

const Work_Edu = () => {
    return (
        <div>
            <Work_Experience />
            <Education />
        </div>
    )
}

export default Work_Edu;