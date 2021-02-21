import './App.css';
import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import NavHome from './NavBar'

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
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
