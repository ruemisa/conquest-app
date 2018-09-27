import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputField from '../UI/InputField/InputField';
import Button from '../UI/Button/Button';
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
                    
                    <InputField 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={ this.state.username }
                            onChange={ this.inputChangeHandler } />
                    
                    <InputField 
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={ this.state.password }
                            onChange={ this.inputChangeHandler } />
                    
                    <Button 
                        btnType="Login"
                        btnSize="Large">
                        Log In
                    </Button>
                </form>
            </div>
        );
    }

}


export default Login;