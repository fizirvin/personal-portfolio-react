import React from 'react';
import Objective from './Objective'

const Home = () =>{
    return (
        <div className='Home'>
            <div className='title'>Full Stack Developer</div>
            <div className='name'>Irvin Cermeño Fiz</div>
            <div className='photo'><img alt='picture'></img></div>
            <div className='info'>
                <Objective></Objective>
            </div>
        </div>
    );
};

export default Home;