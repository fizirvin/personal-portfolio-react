import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';



import './App.css';
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Plus from './components/Plus'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Certification from './components/Certification'

class App extends React.Component {
  state={
    server: 'https://personal-portfolio-server.irvinfiz.now.sh/graph',
    techs:[],
    paths: []

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
          cert
          courses {
            _id
            courseName
            urlImage
            urlCourse
            urlCertification
            platform
          }
        } 
      }
      paths {
        _id
        pathName
        coreTechnology
        urlPath
        urlImage
        urlPathCertification
        cert
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
    }`

    const url = this.state.server;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    const res = await fetch(url, opts);
    const data = await res.json();
    
    this.setState({ techs: data.data.techs, paths: data.data.paths })
  }


  render(){
    console.log('hola', this.state.techs)
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Content">
            <Switch>
              <Route path="/" exact component={ props => ( <Home></Home> )} />
              <Route path="/skills" exact component={ props => ( <Skills></Skills> )} />
              <Route path="/experience" exact component={ props => ( <Experience></Experience> )} />
              <Route path="/education" exact component={ props => (  <Education techs={this.state.techs}></Education> )} />
              <Route path="/plus" exact component={ props => (  <Plus></Plus> )} />

              <Route path="/education/certifications/:id" exact component={ props => ( <Certification {...props} 
              paths={this.state.paths} /> )} 
              />
            </Switch>
          </div>
          <div className='Options'>
            <Nav></Nav>
          </div>
          <div className='Footer'>
            <Footer></Footer>
          </div>
        </div>
      
      </BrowserRouter>
  );
  }
}

export default App;
