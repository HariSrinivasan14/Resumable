import logo from './logo.svg';
import './SignUp.css';
import React from 'react';
import {NavSignUp} from './NavBar.js';
import {OutlinedInput, Button, styled} from '@material-ui/core';
import {mainButton, myButton} from './Components.js';

// const MyButton = styled(Button)({
	// backgroundColor: '#71A89E',
	// borderRadius: '5px',
	// marginLeft: '50px',
	// marginTop: '15px',
	// color: "white",
	// Height: '48px',
	// minWidth: '225px',
	// textTransform: 'capitalize',
	// "&:hover": {
		// backgroundColor: "#009688",
		// color: 'white'
	// }
// });

class SignUp extends React.Component{
	state = {
		Username: "",
		Password: "",
		Email: ""
	}
	handleChange = (event) => {
		const inputValue = event.target.value;
		const name = event.target.name
		this.setState({
			[name]: inputValue
		});
	}
	render(){
		return(
			<div>
				<NavSignUp />
				<div className = "centerDiv">
					<h1> Sign Up</h1>
					<form>
						<OutlinedInput 
							value={this.state.Username} 
							onChange={this.handleChange} 
							name="Username" 
							placeholder="Username" 
							type= "text"				
						/>
					</form>
				</div>	
			</div>
		
		)
	}
}

export default SignUp;