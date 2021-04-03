import './NavBar.css';
import React from 'react';
import logo from './images/Logo.png'
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'
import {logoutUser} from './actions/user.js';

class NavHome extends React.Component{
	render(){
		return(
			<nav id="Navigation">
				<Link to='/'>
					<img className="Logo" src={logo}/>
				</Link>
				<ul>
					<Link to='/SignUP'>
					<li className="SignUP">Sign Up</li>
					</Link>
					<Link to='/Login'>
					<li className="Login">Log In</li>
					</Link>
				</ul>
			</nav>
		
		);
	}
}

class NavLogin extends React.Component{
	render(){
		return(
			<nav id="Navigation">
				<Link to='/'>
					<img className="Logo" src={logo}/>
				</Link>
			</nav>
		
		);
	}
}

class NavSignUp extends React.Component{
	render(){
		return(
			<nav id="Navigation">
				<Link to='/'>
					<img className="Logo" src={logo}/>
				</Link>
				<ul>
					<Link to='/Login'>
					<li className="Login">Log In</li>
					</Link>
				</ul>
				<p> Already have an account?</p>
			</nav>
		
		);
	}
}

class NavExplore extends React.Component{
	handleChangeLogoutUser = (event) => {
		console.log("logging out");
		logoutUser(this.props.app);
	}
	render(){
		return(
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/Explore">
						<img
							alt=""
							src={logo}
							width="80"
							height="50"
							className="d-inline-block align-top"
							/>{' '}
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/Explore">Home</Nav.Link>
						<Nav.Link href="/Profile">myprofile</Nav.Link>
						{/* <Nav.Link href="/PostPage">Post Resume</Nav.Link> */}
					</Nav>
					{/* <Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form> */}
					<Button onClick={this.handleChangeLogoutUser} variant="outline-info">Logout</Button>
				</Navbar>
		);
	}
}
export {NavHome, NavSignUp, NavLogin, NavExplore};

