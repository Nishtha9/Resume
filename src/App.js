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
        To download my complete resume, <a href="https://drive.google.com/file/d/1UCipg6utsTTB_3lwXnLExSmiEb1Lw4vH/view?usp=sharing" style={{"color":"black"}}>click here. </a>
      </Alert>


      <Container>
        <Row>
        <Col xs="4" className="content"> <Skills/> </Col>
        <Col xs={{size: 4, offset:2}} className="content"> <TnI/> </Col>
        </Row>

        <About className="aboutme content"/>

        <Row>
        <Col xs="4" className="content"> <EduQual/> </Col>
        <Col xs={{size: 4, offset:2}} className="content"> <Projects/> </Col>
        </Row>

        </Container>
      </div>
    );
  }
}

export default App;
