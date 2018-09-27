import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputField from '../UI/InputField/InputField';
import Button from '../UI/Button/Button';
import styles from './Signup.css';
class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        };
    }
    // e = event
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

        console.log(this.state);
        this.props.history.push('/user/:id/dashboard')
    }


    render() {
        return (
            
            <div className={ styles.Signup }>
                <h2>Sign Up</h2>
                <p> Already have an account? <Link to="/login">Log in here</Link></p>
                <form onSubmit={ this.onSubmitHandler }>

                    <InputField 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={ this.state.firstName }
                            onChange={ this.inputChangeHandler } />
                    
                    <InputField
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={ this.state.lastName }
                            onChange={ this.inputChangeHandler }/>

                    <InputField
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={ this.state.username }
                            onChange={ this.inputChangeHandler }/>

                    <InputField
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={ this.state.email }
                            onChange={ this.inputChangeHandler }/>

                    <InputField
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={ this.state.password }
                            onChange={ this.inputChangeHandler }/>

                    <InputField
                            type="password"
                            placeholder="Confirm Password"
                            name="passwordConfirm"
                            value={ this.state.passwordConfirm }
                            onChange={ this.inputChangeHandler }/>

                    <Button 
                        btnType="Signup"
                        btnSize="Large">
                        Sign Up
                    </Button>
                </form>
                
            </div>
        );
    }

}


export default SignUp;