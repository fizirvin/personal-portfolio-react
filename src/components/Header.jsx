import React from 'react';
import { Link } from 'react-router-dom';

import picture from '../pp.jpg'
import Toolbar from './Toolbar'

const Header = () =>{
    return (
        <div className="Header">
            
            <div className='section_header_button'>
                {/* <div><Link to="/"><button className='navButton'>Home</button></Link></div> */}
                <Toolbar></Toolbar>
            </div>
            <div className='section_header'>
                <div className='element'>Full Stack Developer</div> 
                <div className='element'>Irvin Fiz</div>
                
            </div>
            <div className='section_header section-profile'>
                <div className='element profile-header'><img className='image-profile' src={picture} alt='profile'></img></div>
            
            </div>
      </div>
    );
};

export default Header;