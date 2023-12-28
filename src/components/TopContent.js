import React from 'react'
import {Link} from "react-scroll"
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent__container'>
        <h1>SOWMYA</h1>
        <p>Professional Web Developer</p>
        <a href="www,google.com">
          <button className='downloadButton'>
            Download CV
          </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className='workButton' > My Work</button>
        </Link>

      </div>

    </div>
  )
}

export default TopContent
