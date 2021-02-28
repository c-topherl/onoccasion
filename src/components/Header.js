import React from 'react'
import { Button, Col, Link, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from './AuthButton'

const Header = () => (
  <header>
	<Navbar bg="light" expand="lg">
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<NavDropdown title="Menu" id="basic-nav-dropdown">
	    			<LinkContainer to="/">
	  					<Navbar.Brand>Home</Navbar.Brand>
	  				</LinkContainer>
	    			<LinkContainer to="/occasions">
	  					<Navbar.Brand>Occasion List</Navbar.Brand>
	  				</LinkContainer>
	  			</NavDropdown>
	  		</Nav>

	        <LinkContainer to="/occasions">
	    		<Button>Get Started</Button>
	    	</LinkContainer>
	    	<AuthButton />
	  	</Navbar.Collapse>
	</Navbar>
  </header>
)

export default Header