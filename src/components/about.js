import React, { Component } from 'react';
import photo from '../images/photo.jpg';
import { Container, Row, Col } from 'reactstrap';
import './common.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {

  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        popoverOpen: false
      };
    }

    toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }

  render() {
    return (
      <Container>
            <img src={photo} className="me img-responsive" />
            <div class="desc" style={{"text-align":"center", "paddingTop":"30px"}}>
            <br/>
                          <div>
                      <Button id="Popover1" onClick={this.toggle}>
                        <h3>About Me</h3>
                      </Button>
                      <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <PopoverHeader>Career Objective</PopoverHeader>
                        <PopoverBody>To contribute to the success of software projects for a leading Information Technology company which is at the forefront of digital and web application development and leverage my knowledge and experience in Java programming, software development and web development life cycle.</PopoverBody>
                      </Popover>
                    </div>
            <a  href="https://github.com/Nishtha9" target="_blank">Github </a><br/>
            <a href="https://www.hackerrank.com/nish0349" target="_blank">  HackerRank </a> <br/>
            <a  href="https://www.linkedin.com/in/nishtha-goswami-44a976140" target="_blank">LinkedIn </a><br/>
            <a href="mailto:nish0349@gmai.com?Subject=In%20response%20to%20your%20resume">Mail</a>
            </div>

         



      </Container>
    );
  }
}

export default About;
