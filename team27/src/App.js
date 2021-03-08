import React, { useDebugValue } from 'react';
import './App.css';
import Admin from './admin';
import Profile from './profile';
import Sample from './sample';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Admin}/>
                        <Route path="/Profile" component={Profile}/>
                        <Route path="/sample" component={Sample}/>

                    </Switch>



                </div>



            </Router>


        )


    }



}

export default App;