import './SignUp.css';
import React from 'react';
import {NavSignUp} from '../NavBar.js';
import {MainButton, MainInputBox} from '../Components/Components.js';
import {newAccount} from '../actions/user.js';

class SignUp extends React.Component{
	state = {
		Username: "",
		firstName: "",
		lastName: "",
		Password: "",
		toggleUsername: false,
		toggleFirstname: false,
		toggleLastname: false,
		togglePassword: false
	}
	handleChange = (event) => {
		const inputValueSignUp = event.target.value;
		const inputBoxName = event.target.name;
		this.setState({
			[inputBoxName]: inputValueSignUp
		});
		if(inputValueSignUp === ""){
			if (inputBoxName === "Username" ){
				this.state.toggleUsername = true;
			}else if (inputBoxName === "firstName"){
				this.state.toggleFirstname = true;
			}else if (inputBoxName === "lastName"){
				this.state.toggleLastname = true;
			}else if (inputBoxName === "Password"){
				this.state.togglePassword = true;
			}
		}else{ // to reset 
			if (inputBoxName === "Username" ){
				this.state.toggleUsername = false;
			}else if (inputBoxName === "firstName"){
				this.state.toggleFirstname = false;
			}else if (inputBoxName === "lastName"){
				this.state.toggleLastname = false;
			}else if (inputBoxName === "Password"){
				this.state.togglePassword = false;
			}
		}
	}
	signUpUser = (event) => {
		
		// make a get request to database and check whether an account in the database has the same email as one that was inputted by the user
		this.state.bClicked = true;
		if(this.state.Username !== '' && this.state.firstName !== '' && this.state.lastName !== '' && this.state.Password !== ''){
			
			// make a post request to the database to create a new entry for the new user
			const newAccountInfo = {
				Username: this.state.Username,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				Password: this.state.Password,
			}
			newAccount(newAccountInfo);
			this.props.history.push("/Explore");

			
		} else{
			if (this.state.Username === ""){
				this.setState({
					toggleUsername: true
				});
			}
			if (this.state.firstName === ""){
				this.setState({
					toggleFirstname: true
				});
			}
			if (this.state.lastName === ""){
				this.setState({
					toggleLastname: true
				});
			}
			if (this.state.Password === ""){
				this.setState({
					togglePassword: true
				});
			}
			console.log(this.state.Toggle);
		}
		
	}
	render(){
		return(
			<div>
				<NavSignUp />
				<div className = "centerDivSignUp">
					<h1> Sign Up</h1>
					<form id = "signUp">
						<MainInputBox
							textBoxName="Username" 
							placeholderName="Username" 
							type= "text"
							change = {this.handleChange}
							textValue = {this.state.Username}
							userInput = {this.state.toggleUsername}
						/>
						<MainInputBox
							textBoxName="firstName" 
							placeholderName="First Name" 
							type= "text"
							change = {this.handleChange}
							textValue = {this.state.firstName}
							userInput = {this.state.toggleFirstname}							
						/>
						<MainInputBox
							textBoxName="lastName" 
							placeholderName="Last Name" 
							type= "text"
							change = {this.handleChange}
							textValue = {this.state.lastName}
							userInput = {this.state.toggleLastname}							
						/>
						<MainInputBox 
							textBoxName = "Password" 
							placeholderName="Password" 	
							inputType = "password" 
							change = {this.handleChange}
							textValue = {this.state.Password}
							userInput = {this.state.togglePassword}
						/>
						<MainButton 
							text = "Sign Up"
							change = {this.signUpUser}
						/>
					</form>
				</div>	
			</div>
		);
	}
}

export default SignUp;