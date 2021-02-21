import logo from './logo.svg';
import './Login.css';
import React from 'react';
import {NavSignUp} from './NavBar';
import {OutlinedInput, Button} from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const inputBoxTheme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				borderRadius: '10px',
				Textcolor: 'black',
				Height: '48px',
				minWidth: '200px',
				textTransform: 'capitalize',
				marginLeft: '50px',
				marginBottom: '10px',
				'&$focused $notchedOutline': {
					borderColor: '#009688',
					borderWidth: '2px',
				},
				"&:hover $notchedOutline": {
					borderColor: '#71A89E'
				}
			},
			notchedOutline: {
				borderColor: '#71A89E'
			},
		},
		MuiButton: {
			contained: {
				backgroundColor: '#71A89E',
				borderRadius: '5px',
				marginLeft: '50px',
				marginTop: '15px',
				color: "white",
				Height: '48px',
				minWidth: '225px',
				textTransform: 'capitalize',
				"&:hover": {
				  backgroundColor: "#009688",
				  color: 'white'
				}
			},
		}
	}
});
class SignIn extends React.Component{
	state = {
		Email: "",
		Password: ""
	}
	handleEmailChange = (event) => {
		const inputValue = event.target.value;
		const name = event.target.name
		this.setState({
			[name]: inputValue
		});
	}
	
	render(){
		return(
			<div>
				<NavSignUp/>
				<div className = "centerDiv">
					<h1> Log In</h1>
					<form>
						<ThemeProvider theme={inputBoxTheme}>
							<OutlinedInput 
								value={this.state.email} 
								onChange={this.handleEmailChange} 
								name="Email" 
								placeholder="Email" 
								type= "text"				
							/>
							<OutlinedInput 
								value={this.state.password} 
								onChange={this.handleEmailChange} 
								name="Password" 
								placeholder="Password"
								type="password"
							/>
							<Button size="large" variant="contained"> Sign Up </Button>
							<p> Dont have have an account? <Link className="linkCustom" to="/SignUP"> Click Here. </Link></p>
						</ThemeProvider>
					</form>
				</div>	
			</div>
		
		)
	}
}

export default SignIn;