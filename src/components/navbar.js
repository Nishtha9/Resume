import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import photo from '../images/photo.jpg';

class NavBar extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" >
          <NavbarBrand href="/">This site has been made using React.js.</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink Download href="./Nishtha_Goswami_IT_NIT_RAIPUR.pdf" target="_blank">Download my resume here</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
