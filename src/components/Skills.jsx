import React from 'react';
import Header from './Header'

const Skills = () =>{
    return (
        <div className='Skills'>
            <Header></Header>
            <div>skills</div>
            <div className='skills_content'>
                
                <table className='skills_table'>
                    <thead>
                        <tr>
                            <th className='header_table'>Technologic:</th>
                            <th><ul className='skill_list'>
                                    {['React.js', 'JavaScript + ES6', 'D3.js basic','HTML + CSS', 'Node.js', 'Express.js', 'MongoDB', 'GraphQL', 'Git + GitHub'].map( (skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </th>
                        </tr>
                        <tr>
                            <th className='header_table'>Soft:</th>
                            <th><ul className='skill_list'>
                                    {['English intermediate', 'Analitic + Problem solving', ' Critical thinking', 'Creativity', 'Teamwork + Communication'].map( (skill,i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Skills;