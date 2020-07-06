import React from 'react';

import email from '../images/email.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'

const Footer = () =>{
    return (
        <div className="Footer_component">
            <div className='contact_container'>
                Contact: <img className='email' src={email} alt='badge'></img><a href="mailto:irvin.fiz.dev@gmail.com">irvin.fiz.dev@gmail.com</a>
            </div>
            <div className='social_container'>
                <a href="https://www.linkedin.com/in/irvin-fiz/"><img className='social' src={linkedin} alt='badge'></img></a>
                <a href="https://api.whatsapp.com/send?phone=524425042542"><img className='social' src={whatsapp} alt='badge'></img></a>
            </div>    
        </div>
    );
};

export default Footer;