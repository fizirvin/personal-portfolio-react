import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../App.css';

class Certification extends Component {
    state= {
      path: {}
    }
  
    async componentDidMount(){
        const id = this.props.match.params.id
        const getPath = await this.props.paths.find( path => path._id === id);
        if(!getPath){ return}
        else{
          return this.setState({path: getPath})
        }
    }

    showState = () =>{
      console.log(this.state)
    }

    renderCourses = () =>{
      const courses = this.state.path.courses
      if(!courses){return}
      else{
        return courses.map( course =>{
          return(   
            <tr key={course._id}>
              <td className='education-badge'><a href={`${course.urlCourse}`}><img className='image-badge' src={require(`../images/${course.urlImage}`)} alt='badge'></img></a> </td>
              <td className='education-data'> 
                <a className='certification-name' href={`${course.urlCertification}`}>{course.courseName}</a>
              </td>
            </tr>   
          )
        })
      }
    }


    renderPaths = () =>{
      const path = this.state.path
      
      if(!path.cert){ return null} 
      else{
          return (
            <div className='skill-certification'>
              {path.pathName} Certification:
              <a href={`${path.urlPathCertification}`}><img className='cert-image' src={require(`../images/${path.cert}`)} alt='certificate'></img></a>
              <a href={`${path.urlPath}`}>Certification Path courses:</a>
                  <table className='skill-education-table'>
                      
                      <tbody>
                        {this.renderCourses()}
                      </tbody>
                  </table>
             </div>     
              )
        
      }   
  } 

    renderComponent = () =>{
      const path = this.state.path
      if(path === '') {return ReactDOM.createPortal(
        <div className="Modal">
            <div className="modal-content">
             ....wait
            </div>
          </div>,
          document.querySelector('#modal')
        );}
      else{
        return ReactDOM.createPortal(
          <div className="Modal">
            
              <div className="modal-content">
               
               <div className='certification_content'>
                  {this.renderPaths()}
                
               </div>
               <div className='cert-button-container'>
               <Link to={'/education'}><button>close</button> </Link>
               </div>
               


              </div>
            </div>,
            document.querySelector('#modal')
          );
      }
    }
  
    render() {
      return (this.renderComponent())
    }
  };
  
  export default Certification;