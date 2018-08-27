import React, { Component } from 'react';
import projects from '../images/projects.jpg';
import './common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component {
  render() {
    return (
      <div class="mainimg">
        <div class="card">
          <div class="front">
              <img src={projects} alt='Skills' className="imgs img-responsive"/>
          </div>

          <div class="back" >
        <h2 style={{"text-align":"center","color":'blue'}}>My Projects</h2>
          <ol style={{"margin":"10px", "font-size":"18px"}}>
          <li><strong> EStore </strong>- an e-commerce website </li>
          <li><strong> CollegeHack </strong>- see live details of the campus from your hostel</li>
          <li><strong> MassBunk </strong>- having trouble deciding majority? Just vote, and get results via mail</li>
          <li><strong> WeatherApp </strong>- A command line app which gives you the weather details based on your address</li>
          <li><strong> ShoppingList </strong>- Add items to it with just a click so that you do not forget</li>
          </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
