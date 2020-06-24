import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/toolbar.css'
import menu from '../images/menu.png'
class Toolbar extends Component {
  state={
    items: 
    ['skills', 'experience', 'education', 'plus'],
  }

  renderItems = (arr) =>{
    return arr.map( 
      (item, index) => <Link key={index} name={index} to={`/${item}`}>{item}</Link>
    )
  }

  render(){
    return (
      <div className='Toolbar'>
        <div className='dropdown'>
          <div className='dropbtn'><img className='menu' src={menu} alt='badge'></img></div>
          <div className='dropdown-content'>
            {this.renderItems(this.state.items)}
            <Link to={`/`}>Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar;