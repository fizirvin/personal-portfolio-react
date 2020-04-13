import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>{
    return (
        <div className="Nav">
         <Link to="/contact"><button className="Button">Contact</button></Link>
         <Link to="/contact"><button className="Button">Projects</button></Link>
         <Link to="/experience"><button className="Button">Experience</button></Link>
         <Link to="/trainning"><button className="Button">Trainning</button></Link>
         <Link to="/objective"><button className="Button">Objective</button></Link>
         <Link to="/Plus"><button className="Button">Plus</button></Link>
      </div>
    );
};

export default Nav;