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
                <table className='experience_table'>
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
                            <td colSpan='2' className='description_experience'><p className='job_paragraph'><b>Developer for Production Team</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2018/Mar - 2019/Dec (1 year 3 months developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'><p className='job_paragraph projects'><b>Description:</b> I was hired by the Production Mananager, for manage the production database mainly. I also collaborated within the Production team (Process Engineering Supervisors). Then, we decided to develop a web application interface.</p> 
                            </td>
                        </tr>
                        
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Injection Production Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Demo Deploy: <a href="https://injection-app.irvinfiz.now.sh/">https://app.irvinfiz.now.sh/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Client repo: <a href="https://github.com/fizirvin/injection-react">https://github.com/fizirvin/injection</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Backend repo: <a href="https://github.com/fizirvin/injection-server">https://github.com/fizirvin/injection</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsabilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop Web Application Interface for Production Database System</li>
                                    <li>Update the Master Production Schedule and sending report to Admin Managers daily</li>
                                    <li>Update Finished Goods Inventory</li>
                                    <li>Update Production Schedule</li>
                                    <li>Update weekly KPI'S database & graphics</li>
                                    <li>Update Production Report Forms</li>
                                    <li>Update Production Processes Docs</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='experience_table'>
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
                            <td colSpan='2' className='description_experience'><p className='job_paragraph'><b>Developer for RH Team</b></p></td>
                        </tr>
                        <tr>
                            <td className='period' colSpan='2'>2014/Jan - 2017/Dec (1 year developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'><p className='job_paragraph projects'><b>Description:</b> I was hired by the HR Mananager, for collaborate in this department. I was responsable for the HR & utility cars database. My boss asked me to do a web interface for this DBs and then i had the oportunity to do a web app for the warehouse department</p> 
                            </td>
                        </tr>
                        
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Injection Production Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Demo Deploy: <a href="https://injection-app.irvinfiz.now.sh/">https://app.irvinfiz.now.sh/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Client repo: <a href="https://github.com/fizirvin/injection-react">https://github.com/fizirvin/injection</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Backend repo: <a href="https://github.com/fizirvin/injection-server">https://github.com/fizirvin/injection</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsabilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop Web Application Interface for Production Database System</li>
                                    <li>Update the Master Production Schedule and sending report to Admin Managers daily</li>
                                    <li>Update Finished Goods Inventory</li>
                                    <li>Update Production Schedule</li>
                                    <li>Update weekly KPI'S database & graphics</li>
                                    <li>Update Production Report Forms</li>
                                    <li>Update Production Processes Docs</li>
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