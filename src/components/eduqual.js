import React, { Component } from 'react';
import eduqual from '../images/EduQual.jpg';
import './common.css';

class EduQual extends Component {
  render() {
    return (

      <div class="mainimg">
        <div class="card">
          <div class="front">
              <img src={eduqual}  className="imgs"/>
              <div class="description">
                <div class="description_content">
                  <h3>Educational <br/> Quaifications</h3>
                </div>
              </div>
          </div>

          <div class="back" >
          <ol style={{"margin":"10px", "font-size":"18px"}}>
          <li><h4>B. TECH(IT)-
          <strong style={{'float':'right', 'padding':'10px'}}>CPI- 9.48</strong></h4></li>
          NIT RAIPUR<br/>
          (2016-PRESENT)<br/>

          <li><h4>GRADE 12-
          <strong style={{'float':'right', 'padding':'10px'}}>CBSE (92.8%)</strong></h4></li>
          INDIA INTERNATIONAL SCHOOL, JAIPUR<br/>

          <li><h4>GRADE 10-
          <strong style={{'float':'right', 'padding':'10px'}}>CBSE (10 CGPA)</strong></h4></li>
          INDIA INTERNATIONAL SCHOOL, JAIPUR<br/>

          </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default EduQual;
