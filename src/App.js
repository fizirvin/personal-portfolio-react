import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';



import './App.css';
import Courses from './components/Courses'
import Nav from './components/Nav'

class App extends React.Component {
  state={
    server: 'https://personal-portfolio-server.irvinfiz.now.sh/graph',
    techs:[]

  }

  async componentDidMount(){
    const query = `query{
      techs {
        _id
        technologyName
        paths {
          _id
          pathName
          coreTechnology
          urlPath
          urlImage
          urlPathCertification
          courses {
            _id
            courseName
            urlImage
            urlRepository
            urlCourse
            urlInstructor
            urlCertification
            platform
          }
        }
      }
    }`

    const url = this.state.server;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    const res = await fetch(url, opts);
    const data = await res.json();
    
    this.setState({ techs: data.data.techs })
  }


  render(){
    console.log('hola', this.state.techs)
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Nav></Nav>
          </div>
          <div className="Content">
            <Switch>
              <Route path="/education" exact component={ props => (  <Courses techs={this.state.techs}></Courses> )} />
            </Switch>
          </div>
        </div>
      
      </BrowserRouter>
  );
  }
}

export default App;
