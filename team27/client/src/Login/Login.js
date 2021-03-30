import './Login.css';
import React from 'react';
import {NavLogin} from '../NavBar';
import {OutlinedInput, Button} from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {MainButton, MainInputBox} from '../Components/Components.js';

class Login extends React.Component{
	state = {
		Username: "",
		Password: "",
		toggleUsername: false,
		toggleUsername: false
	}
	handleChange = (event) => {
		const inputValueLogin = event.target.value;
		const inputBoxNameLogin = event.target.name
		this.setState({
			[inputBoxNameLogin]: inputValueLogin
		});
		if(inputValueLogin === ""){
			if (inputBoxNameLogin === "Username"){
				this.state.toggleUsername = true;
			}else if (inputBoxNameLogin === "Password"){
				this.state.togglePassword = true;
			}
		}else{ // to reset 
			if (inputBoxNameLogin === "Username" ){
				this.state.toggleUsername = false;
			}else if (inputBoxNameLogin === "Password"){
				this.state.togglePassword = false;
			}
		}
	}
	
	loginUser = () => {
		// request should be made to server to verify if the Username and Password is valid.
		if(this.state.Username === ""){
			this.setState({
				toggleUsername: true
			});
		}
		if(this.state.Password === ""){
			this.setState({
				togglePassword: true
			});
		}
		if(this.state.Username === 'admin' && this.state.Password === 'admin'){
			this.props.history.push("/Admin");
			console.log("going to admin");
		} else if (this.state.Username === 'user' && this.state.Password === 'user'){
			this.props.history.push("/Explore");
		}
		
	}
	render(){
		return(
			<div>
				<NavLogin/>
				<div className = "centerDivLogIn">
					<h1> Log In</h1>
					<form>
						<MainInputBox
							textBoxName="Username" 
							placeholderName="Username" 
							type= "text"
							change = {this.handleChange}
							textValue = {this.state.Username}
							userInput = {this.state.toggleUsername}
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
							text = "Login"
							change = {this.loginUser}
						/>
						<p id="linkP"> Dont have have an account? <Link className="linkCustom" to="/SignUP"> Click Here. </Link></p>
					</form>
				</div>	
			</div>
		)
	}
}

export default Login;