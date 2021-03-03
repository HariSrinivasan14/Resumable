import logo from './logo.svg';
import './Login.css';
import React from 'react';
import {NavLogin} from './NavBar';
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
class Login extends React.Component{
	state = {
		Username: "",
		Password: ""
	}
	handleChange = (event) => {
		const inputValue = event.target.value;
		const name = event.target.name
		this.setState({
			[name]: inputValue
		});
	}
	
	loginUser = () => {
		// request should be made to server to verify if the Username and Password is valid.
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
				<div className = "centerDiv">
					<h1> Log In</h1>
					<form>
						<ThemeProvider theme={inputBoxTheme}>
							<OutlinedInput 
								value={this.state.Username} 
								onChange={this.handleChange} 
								name="Username" 
								placeholder="Username" 
								type= "text"				
							/>
							<OutlinedInput 
								value={this.state.password} 
								onChange={this.handleChange} 
								name="Password" 
								placeholder="Password"
								type="password"
							/>
							<Button size="large" variant="contained" onClick={this.loginUser}> Sign Up </Button>
							<p> Dont have have an account? <Link className="linkCustom" to="/SignUP"> Click Here. </Link></p>
						</ThemeProvider>
					</form>
				</div>	
			</div>
		
		)
	}
}

export default Login;