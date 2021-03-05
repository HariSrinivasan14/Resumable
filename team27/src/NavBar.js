import './NavBar.css';
import React from 'react';
import logo from './images/Logo.png'
import {Link} from 'react-router-dom';

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


export {NavHome, NavLogin, NavSignUp};