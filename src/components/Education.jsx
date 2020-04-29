import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';



class Education extends React.Component {
    

    renderTechs = () =>{
        const array = this.props.techs
        if(!array){ return null} 
        else{
            return array.map(item =>{
                return (
                    <table className='skill-education-table' key={item._id}>
                        <thead>
                            <tr><th colSpan='2'>{item.technologyName} skills</th></tr>
                        </thead>
                        <tbody>
                            {item.paths.map( path =>{
                                return(   
                                    <tr key={path._id}>
                                        <td className='education-badge'><img className='image-badge' src={require(`../images/${path.urlImage}`)} alt='profile-photo'></img> </td>
                                        <td className='education-data'> 
                                            <div><Link to={`/education/certifications/${path._id}`}><div className='certification-button'>{path.pathName}</div></Link> </div> 
                                        </td>
                                    </tr>   
                                )
                            })}
                        </tbody>
                    </table>
                )
            })
        }   
    } 


    render(){

       

        return (
            <div className='education'>
                <Header></Header>
                <div className='header_section_title'>Education</div>
                <div className='education_content'>
                    <div className='skill-education'>
                        {this.renderTechs()}
                    </div>
                </div>    
            </div>
        );
    }
};

export default Education;