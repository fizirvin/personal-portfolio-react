import React from 'react';

import email from '../images/email.png'


const Footer = () =>{
    return (
        <div className="Footer_component">
            <div className='contact_container'>
                Contact: <img className='email' src={email} alt='badge'></img> irvin.fiz.dev@gmail.com
            </div>
            
      </div>
    );
};

export default Footer;