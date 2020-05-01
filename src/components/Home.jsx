import React from 'react';
import Objective from './Objective'
import picture from '../pp.jpg'

const Home = () =>{
    return (
        <div className='Home'>
            <div className='title'>Software Developer</div>
            <div className='name'>Irvin Cermeño Fiz</div>
            <div className='photo'><img className='profile-photo' src={picture} alt='profile'></img></div>
            <div className='info'>
                <Objective></Objective>
            </div>
        </div>
    );
};

export default Home;