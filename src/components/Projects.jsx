import React from 'react';
import Header from './Header'
import '../App.css'

const Projects = () =>{
    return (
        <div className='Skills'>
            <Header></Header>
            <div className='header_section_title'>Projects</div>
            <div className='plus_content'>
            <div className='projects_content'>
                
                <table className='projects_table'>
                    
                    <tbody className='projects_body'>
                    <tr>
                            <td className='project-table-row row-start'><b>Injection Production Web App</b></td>
                            
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://injection-app.irvinfiz.now.sh/">Injection Prod Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://github.com/fizirvin/injection-react">Client Repository</a></td> 
                        </tr>
                        <tr>
                            <td className='project-table-row row-end'><a href="https://github.com/fizirvin/injection-server">Backend Repository</a> </td> 
                        </tr>
                        <tr>
                            <td className='row-separation'>

                            </td>
                        </tr>
                    </tbody>
                   
                    <tbody className='projects_body'>
                    <tr>
                            <td className='project-table-row row-start'><b> Injection Labels Web App</b></td>
                            
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://injection-labels.irvinfiz.now.sh/">Labels Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://github.com/fizirvin/injection-labels">Client Repository</a></td> 
                        </tr>
                        <tr>
                            <td className='project-table-row row-end'><a href="https://github.com/fizirvin/injection-labels-server">Backend Repository</a> </td> 
                        </tr>
                        <tr>
                            <td className='row-separation'>

                            </td>
                        </tr>
                    </tbody>
                    <tbody className='projects_body'>
                    <tr>
                            <td className='project-table-row row-start'><b>HR Web App</b></td>
                            
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://hr-app.irvinfiz.now.sh/">HR Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://github.com/fizirvin/hr-app">Client Repository</a></td> 
                        </tr>
                        <tr>
                            <td className='project-table-row row-end'><a href="https://github.com/fizirvin/hr-app-server">Backend Repository</a> </td> 
                        </tr>
                        <tr>
                            <td className='row-separation'>

                            </td>
                        </tr>
                    </tbody>
                    <tbody className='projects_body'>
                    <tr>
                            <td className='project-table-row row-start'><b>Utility Cars Web App</b></td>
                            
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://hr-cars-app.irvinfiz.now.sh/">Utility Cars Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://github.com/fizirvin/hr-cars-app">Client Repository</a></td> 
                        </tr>
                        <tr>
                            <td className='project-table-row row-end'><a href="https://github.com/fizirvin/hr-cars-server">Backend Repository</a> </td> 
                        </tr>
                        <tr>
                            <td className='row-separation'>

                            </td>
                        </tr>
                    </tbody>
                    <tbody className='projects_body'>
                    <tr>
                            <td className='project-table-row row-start'><b>Warehouse Stock Web App</b></td>
                            
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://warehouse-stock-app.irvinfiz.now.sh/">Warehouse Stock Demo Deploy</a> </td> 
                        </tr>
                        <tr>
                            <td className='project-table-row'><a href="https://github.com/fizirvin/warehouse-stock-app">Client Repository</a></td> 
                        </tr>
                        <tr>
                            <td className='project-table-row row-end'><a href="https://github.com/fizirvin/warehouse-stock-server">Backend Repository</a> </td> 
                        </tr>
                        <tr>
                            <td className='row-separation'>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Projects;