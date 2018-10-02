import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
// For Global Styles 
import './App.css';
import Auth from './modules/Auth';


class App extends Component {
    
    constructor() {
        super();
        
        this.state = {
            auth: Auth.isUserAuthenticated(),
            shouldRedirectToDash: false
        }
    }

    signupSubmitHandler = (e, data) => {
        e.preventDefault();
        console.log(data);
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                user: data,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => {
                // console.log(response);
                Auth.authenticateToken(response.token);
                this.setState({
                    auth: Auth.isUserAuthenticated(),
                    shouldRedirectToDash: true
                });
            }).catch( error => {
                console.log(error);
            });
    }

    loginSubmitHandler = (e, data) => {
        e.preventDefault();
        console.log(data);
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => {
                // console.log(response);
                Auth.authenticateToken(response.token);
                this.setState({
                    auth: Auth.isUserAuthenticated(),
                    shouldRedirectToDash: true
                });
            }).catch(error => {
                console.log(error);
            });
    }

    logoutHandler = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}` 
            }
        }).then(response => {
            console.log('Logging Out');
            Auth.deauthenticateToken();
            this.setState({
                auth: Auth.isUserAuthenticated()
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {

        let routes = (
            <Switch>
                <Route 
                    exact path="/signup" 
                    render={ () => <Signup signupSubmit={ this.signupSubmitHandler }/> } />
                <Route 
                    exact path="/login" 
                    render={ () => <Login loginSubmit={ this.loginSubmitHandler } /> } />
                <Route path="/" component={ Landing } />
            </Switch>
        );

        if (this.state.auth) {
            routes = (
                <Switch>
                    <Route path="/dashboard" component={ Dashboard } />
                    <Route path="/friends" component={ Friends } />
                    <Route path="/profile" component={ Profile } />
                </Switch>
            );
        };

        return (
            <BrowserRouter>
                <div>
                    { routes }
                    {( this.state.shouldRedirectToDash) ? <Redirect to="/dashboard" /> : null}
                </div>                
            </BrowserRouter>
        );
    }
}


export default App;
