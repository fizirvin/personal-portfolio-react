import React from 'react';
import Header from './Header'

const Plus = () =>{
    return (
        <div className='Plus'>
            <Header></Header>
            <div className='header_section_title'>Plus</div>
            <div className='plus_content'>
                
                <table className='skills_table'>
                    <tbody>
                        <tr>
                            <td className='header_table'>Additional:</td>
                            <td><ul className='skill_list'>
                                    {['Bachelor of Science degree in Psychology - 2003 - 2009', '(Cognitive Science research experience)','(programming lab software)', 'Is an aproach in User Experience Design'].map( (skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='header_table'>Crossover:</td>
                            <td><ul className='skill_list'>
                                    {['2 years in Production Team Automotive Industry', '4 years in HR team Telecom Industry', 'experience with Data Bases for office jobs, forms, reports and admin process', 'I find software development more challenging and necessary on every work team'].map( (skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='header_table'>Hobbies:</td>
                            <td><ul className='skill_list'>
                                    {['Video Games', 'Architecture Designs', 'Digital music', 'Economics'].map( (skill,i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Plus;