import React from 'react';
import './projectexample.css';
import { info } from './projectcontent';

function Example(props) {
    return (
        <div className={props.griditem}>
            <a href={props.link} target="_blank" rel="noopener noreferrer" ><img src={props.img} alt="project" /></a>
            <div className={props.cont} >
                <h1>{props.text}</h1>
                <p>{props.description}</p>
            </div> 
        </div>
    )
}

function ProjectExamples() {
    return (
        <div className="pro-container" >
            <h1 className="pro-topic">Projects</h1>
            <div className="pro-grid" >
                <Example text={info.info1.name}
                    img={info.info1.pic}
                    description={info.info1.description}
                    griditem="grid-item1"
                    cont="cont-1"
                    link="https://anupongiv4.github.io/mini-weather-app/" />

                <Example text={info.info2.name}
                    img={info.info2.pic}
                    description={info.info2.description}
                    griditem="grid-item2"
                    cont="cont-2" />

                <Example text={info.info3.name}
                    img={info.info3.src}
                    description={info.info3.description}
                    griditem="grid-item3"
                    cont="cont-3" />
            </div>
        </div>
    )
}

export default ProjectExamples;