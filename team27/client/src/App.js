import './App.css';
import React from 'react';
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Home from './Home/Home'
import NavHome from './NavBar'
import HighlightFeedBack from './HighlightFeedback'

import Explore from './Explore'
import PostPage from './PostPage'
import ResumeView from './ResumeView'

import Admin from './admin'
import Profile from './profile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
	render(){
		return(
			<Router >
				<div>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/Login" component={Login}/>
						<Route path="/SignUp" component={SignUp}/>
						<Route path="/Explore" component={Explore}/>
						<Route path="/PostPage" component={PostPage}/>
						<Route path="/ResumeView" component={ResumeView}>
							
						</Route>
						<Route path="/Admin" component={Admin}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/highlight-feedback" component={HighlightFeedBack} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
