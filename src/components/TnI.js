import React, { Component } from 'react';
import tni from '../images/TnI.jpg';
import './common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TnI extends Component {
  render() {
    return (
      <div class="mainimg">
        <div class="card">
          <div class="front">
              <img src={tni} alt='Skills' className="imgs img-responsive"/>
              <div class="description">
                <div class="description_content">
                  <h3> Trainings and <br/> Internships</h3>
                </div>
              </div>
          </div>

          <div class="back" >
        <h2 style={{"text-align":"center", "color":'blue'}}>TRAININGS</h2>
          <ol style={{"margin":"10px", "font-size":"18px"}}>
              <li>WEB DEVELOPMENT</li>
              <li>CORE JAVA</li>
              <li>C Programming </li>
              <li>C++ Programming</li>
          </ol>
          <h2 style={{"text-align":"center", "color":'blue'}}>Internships</h2>
            <ol style={{"margin-left":"10px", "font-size":"15px"}}>
            <h5>Web Development Virtual Internship</h5>
            At BLOODDEVTA
            (June 2018- July 2018)
            Worked on PHP based framework,<strong> LARAVEL </strong>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default TnI;
