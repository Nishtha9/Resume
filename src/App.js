import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import Skills from './components/skills';
import TnI from './components/TnI';
import EduQual from './components/eduqual';
import About from './components/about';
import Projects from './components/projects';
import './App.css';
import { Alert } from 'reactstrap';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
       tm:new Date().toLocaleString()
    }
  }
  tick()
  {
    this.setState({
      tm:new Date().toLocaleString()
    });
  }
  componentDidMount(){
    this.intervalId=setInterval(()=>{
      this.tick()
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.inervalId);
  }

  render() {
    return (
      <div className="App">
      <Alert className="test" color="info">

      <div style={{"float":"right"}}>
      {this.state.tm}
      <br/>
      <small><strong>Last Updated</strong>: 27/08/2018</small>
      </div>

        This website has been made using React.js.
        <br/>
        To download my complete resume, <a href="https://drive.google.com/file/d/1DRy6iD4WmRsUvnAeqTH-_v7duaMMZqKi/view?usp=sharing" style={{"color":"black"}}>click here. </a>
      </Alert>


      <Container>
        <Row>
        <Col lg="4" md="12"> <Skills/> </Col> <br/>
        <Col lg={{size: 4, offset:2}} md="12"> <TnI/> </Col>
        </Row>

        <About className="aboutme"/>

        <Row>
        <Col lg="4" md="12"> <EduQual/> </Col> <br/>
        <Col lg={{size: 4, offset:2}} md="12"> <Projects/> </Col>
        </Row>

        </Container>
      </div>
    );
  }
}

export default App;
