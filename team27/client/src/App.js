import './App.css';
import React from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import HighlightFeedBack from './HighlightFeedback';
import Explore from './Explore/Explore'
import PostPage from './Postpage/PostPage'
import ResumeView from './ResumeView/ResumeView'
import Admin from './admin';
import Profile from './profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {checkUserSession} from './actions/user.js';



class App extends React.Component{
	
	componentDidMount(){
		checkUserSession(this);
	}
		
	state = {
		currentUser: null,
		adminCounter: 0
	}
	
	render(){
		const {currentUser} = this.state;
		return (
            <Router>
                <Switch>

                    <Route
                        exact path="/Login"
                        render={ props => (
                            <div className="app">
                                { /* Different componenets rendered depending on if someone is logged in. */}
                                {!this.state.currentUser ? <Login {...props} app={this} /> : (this.state.currentUser === 'admin'? <Admin {...props} app={this} /> : <Explore {...props} app={this} />)}
                            </div>                   // ... spread operator - provides all of the props in the props object
                        )}
                    />
					<Route
                        exact path="/SignUp"
                        render={ props => (
							<div className="app">
							{ /* Different componenets rendered depending on if someone is logged in. */}
								{this.state.currentUser ? <Explore {...props} app={this} /> : <SignUp {...props} app={this} />}
							</div> 
                        )}
                    />
						<Route path="/" exact component={Home} {...this.props} app={this}/>
						<Route path="/PostPage" component={PostPage} {...this.props} app={this}/>
						<Route path="/ResumeView" component={ResumeView} {...this.props} app={this}/>
						<Route
							path="/profile"
							render={ props => (
								<div className="app">
								{ /* Different componenets rendered depending on if someone is logged in. */}
									{this.state.currentUser ? <Profile {...props} app={this} /> : <Login {...props} app={this} />}
								</div> 
							)}
                    	/>
						<Route
							path="/Admin"
							render={ props => (
								<div className="app">
								{ /* Different componenets rendered depending on if someone is logged in. */}
									{this.state.currentUser ? <Admin {...props} app={this} /> : <Login {...props} app={this} />}
								</div> 
							)}
                    	/>

						<Route 
							path="/highlight-feedback" 
							render={ props => (
								<div className="app">
								{ /* Different componenets rendered depending on if someone is logged in. */}
									{this.state.currentUser ? <HighlightFeedBack {...props} app={this} /> : <Login {...props} app={this} />}
								</div> 
							)}
						
						/>
						<Route
							path="/Explore"
							render={ props => (
								<div className="app">
								{ /* Different componenets rendered depending on if someone is logged in. */}
									{this.state.currentUser ? <Explore {...props} app={this} /> : <Login {...props} app={this} />}
								</div> 
							)}
                    	/>

                    { /* 404 if URL isn't expected. */}
                    <Route render={() => <div>404 Not found</div>} />

                </Switch>
            </Router>
        );
		


		// return(
		// 	<Router>
		// 		<div>
		// 			<Switch>
		// 				<Route path="/" exact component={Home} {...this.props} app={this}/>
		// 				<Route path="/Login" component={Login} {...this.props} app={this}/>
		// 				<Route path="/SignUp" component={SignUp} {...this.props} app={this}/>
		// 				<Route path="/Explore" component={Explore} {...this.props} app={this}/>
		// 				<Route path="/PostPage" component={PostPage} {...this.props} app={this}/>
		// 				<Route path="/ResumeView" component={ResumeView} {...this.props} app={this}/>
							
		// 				<Route path="/Admin" component={Admin} {...this.props} app={this}/>
		// 				<Route path="/profile" component={Profile} {...this.props} app={this}/>
		// 				<Route path="/highlight-feedback" component={HighlightFeedBack} {...this.props} app={this}/>
		// 			</Switch>
		// 		</div>
		// 	</Router>
			
		// );


	}
}

export default App;
