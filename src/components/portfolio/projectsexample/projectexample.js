import React from 'react';
import './projectexample.css';
import project3 from '../../images/project-3.jpg';
import weatherApp from '../../images/mini-weather-app.png';
import colmar from '../../images/comaracademy1.png';

const info = [{
    id: 1,
    name: 'Weather App',
    src: '',
    description: 'Displaying current celsius on a specific city like Bangkok or London.',
    pic: weatherApp,
    link: 'https://anupongiv4.github.io/mini-weather-app/',
    griditem: 'grid-item1',
    cont:'cont-1',
    technology: 'HTML CSS JavaScript React'
}, {
    id: 2,
    name: 'Colmar Academy',
    src: '',
    description: 'Responsive website',
    pic: colmar,
    link: 'https://anupongiv4.github.io/colmaracademy/',
    griditem: 'grid-item2',
    cont:'cont-1',
    technology: 'HTML CSS'
}, {
    id: 3,
    name: 'PROJECT 3',
    src: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ( COMING SOON )',
    pic: project3,
    link: '',
    griditem: 'grid-item3',
    cont:'cont-1',
    technology: ''
}];

function Example() {
    const item = info.map(element => {
        return (
            <div className={element.griditem} key={element.id} >
                <a href={element.link} target="_blank" rel="noopener noreferrer" ><img src={element.pic} alt="project" /></a>
                <div className={element.cont} >
                    <h1>{element.name}</h1>
                    <p>{element.description}</p>
                    <p>{element.technology}</p>
                </div> 
            </div>
        )
    });

    return item;
}


function ProjectExamples() {
    return (
        <div className="pro-container" >
            <h1 className="pro-topic">Projects</h1>
            <div className="pro-grid" >
                <Example />
            </div>
        </div>
    )
}

export default ProjectExamples;