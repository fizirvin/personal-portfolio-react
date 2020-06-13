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
                            <td className='period' colSpan='2'>2018/Mar - 2019/Dec (+1 year developing)</td>
                        </tr>
                        <tr>
                            <td colSpan='2' className='description_experience'>
                                <p className='job_paragraph projects'>
                                        <b>Description:</b> I was hired by the production mananager, for update the production database mainly. I also collaborated within the production team for 1 year. 
                                        Then, the manager of the injection production area ask me to develop a "labels project" and later, a web application interface. Finally, I got only this specific responsibility.</p> 
                            </td>
                        </tr>
                        
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Injection Production Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://injection-app.irvinfiz.now.sh/">Injection Production Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://github.com/fizirvin/injection-react">Client repo (github.com/fizirvin)</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://github.com/fizirvin/injection-server">Backend repo (github.com/fizirvin)</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Injection Labels Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://injection-labels.irvinfiz.now.sh/">Labels Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://github.com/fizirvin/injection-labels">Client repo (github.com/fizirvin)</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'><a href="https://github.com/fizirvin/injection-labels-server">Backend repo (github.com/fizirvin)</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop a Web Application Interface for Database System of the Injection Area</li>
                                    <li>Code from the scratch, the Backend, and the Frontend App</li>
                                    <li>Update the Master Production Schedule and sending report to Admin Managers and CEO daily</li>
                                    <li>Update Production Report Database, Finished Goods Inventory, and Production Plan Schedule</li>
                                    <li>Update weekly KPI'S database & graphics</li>
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
                            <td colSpan='2' className='description_experience'><p className='job_paragraph projects'>
                                <b>Description:</b> I was hired by the HR manager, to collaborate in this area. 
                                I was responsable for HR databases, I admin the gas budget, car insurances, mechanical services, skill matrix, 
                                profiles, and so on. Also, I did expenses reports of the branch Office at Houston Tx, they sent me expenses documents to report it to the company's owners. 
                                To improve the DBs, I took programming courses on different platforms online. 
                                I learned how to construct DBs and use interfaces professionally. Then, My boss asked me to do a web app and 
                                I had the opportunity to get programming experience in warehouse area too.</p> 
                            </td>
                        </tr>
                        
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> HR Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Demo Deploy: <a href="https://hr-app.irvinfiz.now.sh/">https://app.irvinfiz.now.sh/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Client repo: <a href="https://github.com/fizirvin/hr-app">https://github.com/fizirvin/</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Backend repo: <a href="https://github.com/fizirvin/hr-app-server">https://github.com/fizirvin/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Utility Cars Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Demo Deploy: <a href="https://hr-cars-app.irvinfiz.now.sh/">https://app.irvinfiz.now.sh/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Client repo: <a href="https://github.com/fizirvin/hr-cars-app">https://github.com/fizirvin/</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Backend repo: <a href="https://github.com/fizirvin/hr-cars-server">https://github.com/fizirvin/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Project:</b> Warehouse Stock Web App</p></td>
                            
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Demo Deploy: <a href="https://warehouse-stock-app.irvinfiz.now.sh/">https://app.irvinfiz.now.sh/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Client repo: <a href="https://github.com/fizirvin/warehouse-stock-app">https://github.com/fizirvin/</a></td> 
                        </tr>
                        <tr>
                            <td className='description_experience project-row' colSpan='2'>Backend repo: <a href="https://github.com/fizirvin/warehouse-stock-server">https://github.com/fizirvin/</a> </td> 
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'><p className='job_paragraph'><b>Responsibilities:</b></p></td>
                        </tr>
                        <tr>
                            <td className='description_experience' colSpan='2'> 
                                <ul>
                                    <li>Develop Web Application Interface for Production Database System</li>
                                    <li>Update the Master Production Schedule and sending report to Admin Managers daily</li>
                                    <li>Update Daily Production Report, Finished Goods Inventory, and Production Plan Schedule</li>
                                    <li>Update weekly KPI'S database & graphics</li>
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