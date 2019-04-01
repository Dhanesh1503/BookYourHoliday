import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, ButtonToolbar, Button } from 'react-bootstrap';
import './AppHeader.scss';

class AppHeader extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div id='app-header'>
				<Navbar collapseOnSelect expand="lg">
				  <Navbar.Brand href="#">KELSEY</Navbar.Brand>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav id='home-nav' className="mx-auto">
				      <Nav.Link href="#home">Home</Nav.Link>
				      <Nav.Link href="#features">Features</Nav.Link>
				      <NavDropdown title="Categories" id="collasible-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Main Category</NavDropdown.Item>
				      </NavDropdown>
				      <Nav.Link href="#about">About</Nav.Link>
				      <Nav.Link href="#contact">Contact</Nav.Link>
				    </Nav>
				    <Nav>
				      <ButtonToolbar id='subscribe-btn'>
								<Button variant="primary">SUBSCRIBE</Button>
							</ButtonToolbar>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AppHeader;