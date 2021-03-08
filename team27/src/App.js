import './App.css';
import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import NavHome from './NavBar'

import Explore from './Explore'
import PostPage from './PostPage'
import ResumeView from './ResumeView'

import Admin from './AdminPage'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/Login" component={Login}/>
						<Route path="/SignUp" component={SignUp}/>
						<Route path="/Explore" component={Explore}/>
						<Route path="/PostPage" component={PostPage}/>
						<Route path="/ResumeView" component={ResumeView}/>
						<Route path="/Admin" component={Admin}/>

					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
