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
                            <td className='period' colSpan='2'>2020/Jan - 2020/Jul (7 months developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'>
                                <p className='job_paragraph projects'>
                                        <b>Description:</b> The Web App of the injection Production Area needs to be updated because of the process of the company. The project needs to keep developing, get some more modules to the system, and more automation. </p> 
                            </td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop Web App project for the Injection Production Area using full javascript stack: React.js, Node.js, Express.js, MongoDB, GraphQL and D3.js.</li>
                                    <li>Code the full logic of Injection Project, Backend, Frontend and Deployment.</li>
                                    <li>Maintaining and keeping update the Web App code.</li>
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
                            <td colSpan='2' className='description_experience job_name'><p className='job_paragraph'><b>Developer for Production Team</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2019/Feb - 2019/Sep (+1 year developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'>
                                <p className='job_paragraph projects'>
                                        <b>Description:</b> I was hired by the production mananager, for update the DB mainly, and collaborate within the production team. 
                                        Then, the manager of the injection area ask me to develop a "labels project" and later, a user interface for the production DB. Finally, I got only this specific responsibility.</p> 
                            </td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop Desktop App for the Injection Production Area using VBasic.</li>
                                    <li>for this project develop a full stack javascript web app using React.js, Node.js GrapqhQL, Express.js and MongoDB and D3.js.</li>
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
                                    <li>Improving HR Database System using MySql and VBasic.</li>
                                    <li>Develop a full stack javascript web app using React.js, Node.js GrapqhQL, Express.js and MongoDB.</li>
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