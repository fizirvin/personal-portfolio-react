import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
              <td className='education-badge'><img className='image-badge' src={require(`../images/${course.urlImage}`)} alt='profile-photo'></img> </td>
              <td className='education-data'> 
                <div className='certification-button'>{course.courseName}</div> 
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
              <img className='image-badge' src={require(`../images/${path.cert}`)} alt='profile-photo'></img>
                  <table className='skill-education-table'>
                      <thead>
                      <tr><th colSpan='2'>{path.cert} </th></tr>
                          <tr><th colSpan='2'>{path.pathName} </th></tr>
                      </thead>
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
               <button onClick={this.showState}>state</button>
               <Link to={'/education'}><button>close</button> </Link>


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