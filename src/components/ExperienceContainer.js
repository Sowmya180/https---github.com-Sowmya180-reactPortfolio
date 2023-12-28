import React from 'react'
import Experience from './Experience'
import { Element } from "react-scroll"
import './ExperienceContainer.css'
const ExperienceContainer = () => {
    return (

        <Element className="experienceContainer" id='exp'>
            <h1>Experience</h1>
            <div className='experienceContainer__info'>
                <Experience number="+10" title="clients" />
                <Experience number="60+" title="Projects" style={{ backgroundColor: "rgb(108, 1, 157)" }} />
                <Experience number="6+" title="Years Teaching" />
                <Experience number="+10" title="Courses completed based on JAVA,REACT JS,C" />
            </div>
        </Element>

    )
}

export default ExperienceContainer
