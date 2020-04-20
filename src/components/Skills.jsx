import React from 'react';
import Header from './Header'

const Skills = () =>{
    return (
        <div className='Skills'>
            <Header></Header>
            skills
            <div className='skills_content'>
                
                <table className='skills_table'>
                    <tbody>
                        <tr>
                            <td className='header_table'>Tech:</td>
                            <td><ul className='skill_list'>
                                    {['React.js', 'JavaScript + ES6','HTML + CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL','GraphQL', 'Git + GitHub', 'D3.js basic','AWS basic'].map( (skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='header_table'>Soft:</td>
                            <td><ul className='skill_list'>
                                    {['English intermediate', 'Analitic + Problem solving', ' Critical thinking', 'Creativity', 'Teamwork + Communication'].map( (skill,i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Skills;