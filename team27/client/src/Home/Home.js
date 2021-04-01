import React from 'react';
import {NavHome} from '../NavBar'
import './Home.css';
import SignUp from '../SignUp/SignUp';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import landingImage from '../images/landingImage.png';
import {HomeButton} from '../Components/Components.js';

class Home extends React.Component{

	render(){
		return(
			<div>
				<NavHome/>
				<div>
					<div className="leftHome">
						<h1>Upgrade your resume</h1>
						<p>Turn your resume into something special with <br/>the help of the community.</p>
						<HomeButton
							text = "Sign Up"
							buttonType="contained"
							pageToBeRedirect = "SignUp"
						/>
					</div>
					<div className="rightHome">
						<img className="landingPic" src={landingImage}/> 
					</div>
				</div>	
			</div>
		);
	}
}

export default Home;