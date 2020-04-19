import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>{
    return (
        <div className="Nav">
            <table className='navTable'>
                <thead>
                    <tr>
                        <th className="tableHead"><Link to="/skills"><button className='navButton'>Skills</button></Link></th>
                        <th className="tableHead"><Link to="/experience"><button className='navButton'>Experience</button></Link></th>
                    </tr>
                    <tr>
                        <th className="tableHead"><Link to="/education"><button className='navButton'>Education</button></Link></th>
                        <th className="tableHead"><Link to="/plus"><button className='navButton'>Plus</button></Link></th>
                    </tr>
                </thead>
            </table>
      </div>
    );
};

export default Nav;