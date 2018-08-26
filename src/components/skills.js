import React, { Component } from 'react';
import skills from '../images/Skills.jpg';
import './common.css';

class Skills extends Component {
  render() {
    return (
    <div class="mainimg">
      <div class="card">
        <div class="front">
              <img src={skills} alt='Skills' className="imgs"/>
              <div class="description">
                <div class="description_content">
                  <h3> My Skills</h3>
                </div>
              </div>
        </div>

        <div class="back" >
      <h2 style={{"text-align":"center", "color":'blue'}}>SKILLS</h2>
        <ol style={{"margin":"10px", "font-size":"18px"}}>
      <li> <strong> Programming Languages:</strong>	C, C++, Java (J2SE)</li>
      <li> <strong> Frameworks:       </strong>               	Laravel </li>
      <li> <strong> Web Design:		</strong>	HTML, CSS, Bootstrap, Javascript, jQuery, Ajax</li>
      <li>  <strong>Web Technologies:	</strong>	PHP, Node.js</li>
      <li> <strong> Databases:		</strong>		MongoDB, MySQL</li>
      <li> <strong> Servers:		</strong>		Apache</li>
      <li> <strong> Version Control:</strong>			GIT</li>
      <li> <strong> IDEs:	</strong>				NetBeans </li>
        </ol>
        </div>
      </div>
    </div>
    );
  }
}

export default Skills;
