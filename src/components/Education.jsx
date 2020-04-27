import React from 'react';
import Header from './Header'

class Education extends React.Component {


    renderTechs = () =>{
        const array = this.props.techs
        if(!array){ return null} 
        else{
            return array.map(item =>{
                return <div>{item.technologyName}</div>
            })
        }   
    } 


    render(){

       

        return (
            <div className='education'>
                <Header></Header>
                <div className='techs'>
                    {this.renderTechs()}
                </div>    
            </div>
        );
    }
};

export default Education;