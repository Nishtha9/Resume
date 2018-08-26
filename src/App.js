import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar'
import Skills from './components/skills';
import TnI from './components/TnI';
import EduQual from './components/eduqual';
import About from './components/about';
import Projects from './components/projects';
import './App.css';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Alert color="info">
        This website has been made using React.js.
        <br/>
        To download my complete resume, <a href="https://drive.google.com/file/d/1UCipg6utsTTB_3lwXnLExSmiEb1Lw4vH/view?usp=sharing" style={{"color":"black"}}>click here. </a>
      </Alert>
      <Container>
        <Row>
        <Col xs="4"> <Skills/> </Col>
        <Col xs={{size: 4, offset:2}}> <TnI/> </Col>
        </Row>

        <About className="aboutme"/>

        <Row>
        <Col xs="4"> <EduQual/> </Col>
        <Col xs={{size: 4, offset:2}}> <Projects/> </Col>
        </Row>

        </Container>
      </div>
    );
  }
}

export default App;
