import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={ Signup } />
                    <Route path="/login" component={ Login } />
                    <Route path="/" component={ Landing } />
                </Switch>                
            </BrowserRouter>
        );
    }
}

export default App;
