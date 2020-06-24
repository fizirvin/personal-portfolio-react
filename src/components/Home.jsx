import React from 'react';
import Objective from './Objective'
import picture from '../pp.jpg'
import Toolar from './Toolbar'

const Home = () =>{
    return (
        <div className='Home'>
            <div className='title-bar'><Toolar></Toolar><div className='title'>Software Developer</div></div>
            <div className='name'>Irvin Fiz</div>
            <div className='photo'><img className='profile-photo' src={picture} alt='profile'></img></div>
            <div className='info'>
                <Objective></Objective>
            </div>
        </div>
    );
};

export default Home;