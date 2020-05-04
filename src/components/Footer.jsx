import React from 'react';

import email from '../images/email.png'


const Footer = () =>{
    return (
        <div className="Footer_component">
            <div className='contact_container'>
                Contact: <img className='email' src={email} alt='badge'></img><a href="mailto:irvin.fiz.dev@gmail.com">irvin.fiz.dev@gmail.com</a>
            </div>
            
      </div>
    );
};

export default Footer;