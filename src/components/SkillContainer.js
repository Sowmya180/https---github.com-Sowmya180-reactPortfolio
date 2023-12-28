import React from 'react'
import { Element } from 'react-scroll'
import skill from '../components/skill.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import '../components/SkillContainer.css'


const SkillContainer = () => {
    return (
        <div>
            <Element className='skillContainer' id='skills' >
                <div className='skillContainer__image'>
                    <img src={skill} alt='' />
                </div>
                <div className='skillContainer__text'>
                    <h2>SKILLSET </h2>
                    <div className='skillContainer__skillset'>
                        <h5>REACT</h5>
                        <div className='skillContainer__slider1'>
                        <LinearProgress variant="determinate" value={90}  />
                        </div>
                    </div>

                    <div className='skillContainer__skillset'>
                        <h5>JAVA</h5>
                        <div className='skillContainer__slider2'>
                        <LinearProgress variant="determinate" value={60}  />
                        </div>
                    </div>

                    <div className='skillContainer__skillset'>
                        <h5>JAVASCRIPPT</h5>
                        <div className='skillContainer__slider3'>
                        <LinearProgress variant="determinate" value={75}  />
                        </div>
                    </div>

                    <div className='skillContainer__skillset'>
                        <h5>MYSQL</h5>
                        <div className='skillContainer__slider4'>
                        <LinearProgress variant="determinate" value={95}  />
                        </div>
                    </div>

                    <div className='skillContainer__skillset'>
                        <h5>NODE JS</h5>
                        <div className='skillContainer__slider5'>
                        <LinearProgress variant="determinate" value={70}  />
                        </div>
                    </div>
                </div>

            </Element>
        </div>
    );
};

export default SkillContainer
