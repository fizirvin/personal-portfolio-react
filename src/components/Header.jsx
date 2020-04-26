import React from 'react';
import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <div className="Header">
            <div className='section_header'>
            <div><Link to="/"><button className='navButton'>Home</button></Link></div>
            </div>
            <div className='section_header'>
                <div className='element'>Full Stack Developer</div> 
                <div className='element'>Irvin Cermeño Fiz</div>
               <div className='element'><img alt='img'></img></div>
            </div>
      </div>
    );
};

export default Header;