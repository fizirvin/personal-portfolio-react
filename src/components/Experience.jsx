import React from 'react';
import Header from './Header'

import tower from '../images/tower.png'
import car from '../images/car.png'

const Experience = () =>{
    return (
        <div className='Experience'>
            <Header></Header>
            <div className='header_section_title'>Experience</div>
            <div className='experience_content'>
                <table className='experience_table job-a'>
                    <tbody>
                        <tr>
                            <th className='company_title' colSpan='2'>
                                <div className='company_name'>
                                    <a href="http://www.hyunbo.com/en/company/overview">Hyunbo Corp - Automotive Industry</a>
                                    <img className='tower' src={car} alt='badge'></img>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience job_name'><p className='job_paragraph'><b>Remote Software Developer</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2020/Jan - 2020/Ago (+8 months developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'>
                                <p className='job_paragraph projects'>
                                        <b>Description:</b> Develop a web app to manage the daily production reports Database. And a web app to configurate the production labels before printing. I am developing and deploying remote.  </p> 
                            </td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>I develop a Web App for the Database of Injection Molding Production Area with React.js, Redux.js, Node.js GraphQL, MongoDB, AWS, and D3.js.</li>
                                    <li>Code the full Project: Backend, Frontend and Deployment.</li>
                                    <li>Maintaining and keeping update.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='experience_table job-b'>
                    <tbody>
                        <tr>
                            <th className='company_title' colSpan='2'>
                                <div className='company_name'>
                                    <a href="http://www.hyunbo.com/en/company/overview">Hyunbo Corp - Automotive Industry</a>
                                    <img className='tower' src={car} alt='badge'></img>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience job_name'><p className='job_paragraph'><b>Software Developer for Production Team</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2018/Mar - 2019/Sep (+1 year developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'>
                                <p className='job_paragraph projects'>
                                        <b>Description:</b> I was hired by the production mananager, for update the DB mainly, and collaborate within the production team. 
                                        Then, the manager of the injection area ask me to develop a "labels project" and later, a web app for the production DB. Finally, I got only this specific responsibility.</p> 
                            </td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>I developed a desktop app using Vbasic.</li>
                                    <li>and then a Web App for the Production Area with: React.js, Redux.js, Node.js GraphQL, and MongoDB.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='experience_table job-c'>
                    <tbody>
                        <tr>
                            <th className='company_title' colSpan='2'>
                                <div className='company_name'>
                                    <a href="http://www.siisaglobal.com/">Siisa Global - Telecommunications</a>
                                    <img className='tower' src={tower} alt='badge'></img>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience job_name'><p className='job_paragraph'><b>Software Developer for RH Team (practice projects)</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2016/Oct - 2017/Oct (+1 year developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'><p className='job_paragraph projects'>
                                <b>Description:</b> I was hired by the HR manager, to collaborate in this area at september 2014. 
                                I was responsable for HR databases, I admin the gas budget, car insurances, mechanical services, skill matrix, 
                                profiles, and so on. Also, I did expenses reports of the branch Office at Houston Tx, they sent me expenses documents to report it to the company's owners. 
                                To improve the DBs, I took programming courses on different platforms online. 
                                I learned how to construct DBs and user interfaces professionally. Then, My boss asked me to do a web app.</p> 
                            </td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Improving HR database and workflow, and using MySql and VBasic.</li>
                                    <li>I developed a desktop app to get the feature of a collaborative database for the HR Team. Then, for this project, I develop a full stack JavaScript web app using React.js, Redux.js, Node.js GrapqhQL, MongoDB, and AWS.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Experience;