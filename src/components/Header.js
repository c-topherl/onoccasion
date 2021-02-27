import React from 'react'
import { Button, Link, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

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
         <Button onClick={signOut}>Log Out</Button>
	  	</Navbar.Collapse>
	</Navbar>
  </header>
)

export default Header