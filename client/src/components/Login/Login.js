import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    inputChangeHandler = (e) => {
        // console.log(e.target.value);
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState( { 
            [name]: value 
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        console.log('You are logged in!');
        this.props.history.push('/user/:id/dashboard')
    }

    render() {

        return (

            <div className={ styles.Login }>
                <h2>Welcome Back <span className={ styles.Emphasis }>Conqueror</span></h2>
                <p>Not a member? <Link to="/signup">Sign Up</Link></p>
                <form onSubmit={ this.onSubmitHandler }>
                    
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.inputChangeHandler }
                        required />
                
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.inputChangeHandler }
                        required />
                    
                    <button>Log In</button>
                </form>
            </div>
        );
    }

}


export default Login;