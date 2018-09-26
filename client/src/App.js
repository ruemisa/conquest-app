import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
// For Global Styles 
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/signup" component={ Signup } />
                        <Route path="/login" component={ Login } />
                        <Route path="/user/:id/dashboard" component={ Dashboard } />
                        <Route path="/user/:id" component={ Profile } />
                        <Route path="/" component={ Landing } />
                    </Switch>
                </div>                
            </BrowserRouter>
        );
    }
}

export default App;
