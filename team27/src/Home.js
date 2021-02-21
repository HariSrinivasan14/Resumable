import React from 'react';
import {NavHome} from './NavBar'
import './Home.css';
import SignUp from './SignUp';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import landingImage from './landingImage.png';

const buttonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#71A89E",
        borderRadius: '3px',
        color: "white",
        Height: '48px',
		minWidth: '200px',
		textTransform: 'capitalize',
        "&:hover": {
          backgroundColor: "#009688",
          color: "#FFF"
        }
      },
    }
  }
});


class Home extends React.Component{

	render(){
		return(
			<div>
				<NavHome/>
				<div>
					<div className="leftHome">
						<h1>Upgrade your resume</h1>
						<p>Turn your resume into something special with <br/>the help of the community.</p>
						<ThemeProvider theme={buttonTheme}>
							<Button size="large" variant="contained" href= "SignUp"> Sign Up </Button>
						</ThemeProvider>
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