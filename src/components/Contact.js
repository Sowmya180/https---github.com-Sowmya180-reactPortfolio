import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from "react-scroll"
import './Contact.css'

const Contact = () => {
    return (
        <Element>
            <div className="contact" id="contact">
                <h1>Contact</h1>
                <div className='contact__container'>
                    <p>
                        Email: <span>sowmyaK123@gmail.com</span>
                    </p>
                    <p>
                        GitHub UserName : <span>@gitHUb.Somwya</span>
                    </p>
                    <div className='contact__icons'>
                        <a href='google.com'>
                            <IconButton>
                                <LinkedIn />
                            </IconButton>
                        </a>

                        <a href='google.com'>
                            <IconButton>
                                <Facebook />
                            </IconButton>
                        </a>

                        <a href='google.com'>
                            <IconButton>
                                <Instagram />
                            </IconButton>
                        </a>

                    </div>

                </div>

            </div>
        </Element>
    )
}

export default Contact
