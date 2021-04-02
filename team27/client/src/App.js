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
		currentUser: null
	}
	redirectUser(props){
		if(this.state.currentUser === null){
			return <Login {...props} app={this} />
		}else{
			console.log(<Explore {...props} app={this} />);
			return <Explore {...props} app={this} />
		}
	}
	
	render(){
		const {currentUser} = this.state;
		return (
            <Router>
                <Switch>

                    <Route
                        exact path={["/Login",  "/PostPage", "/ResumeView", "/Admin", "/profile", "/highlight-feedback"]}
                        render={ props => (
                            <div className="app">
                                { /* Different componenets rendered depending on if someone is logged in. */}
                                {!currentUser ? <Login {...props} app={this} /> : (currentUser === 'admin'? <Admin {...props} app={this} /> : <Explore {...props} app={this} />)}
                            </div>                   // ... spread operator - provides all of the props in the props object
                        )}
                    />



						{/* https://github.com/csc309-winter-2021/react-express-authentication/blob/master/client/src/App.js */}


						<Route path="/" exact component={Home} {...this.props} app={this}/>
						<Route path="/SignUp" component={SignUp} {...this.props} app={this}/>
						<Route path="/PostPage" component={PostPage} {...this.props} app={this}/>
						<Route path="/ResumeView" component={ResumeView} {...this.props} app={this}/>
						<Route path="/profile" component={Profile} {...this.props} app={this}/>
						<Route path="/highlight-feedback" component={HighlightFeedBack} {...this.props} app={this}/>
						<Route path="/Explore" component={Explore} {...this.props} app={this}/>

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
