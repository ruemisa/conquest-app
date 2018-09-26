import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

    // TODO: ADD REQUIRED TO ALL INPUT FIELD

    render() {
        return (
            
            <React.Fragment>
                <h2>Sign Up Page</h2>
                <p><Link to="/login">Already have an account? Log in here</Link></p>
                <form onSubmit={ this.onSubmitHandler }>
                    <div>
                        <input 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={ this.state.firstName }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <div>                    
                        <input 
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={ this.state.lastName }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <div>                    
                        <input 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={ this.state.username }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <div>                    
                        <input 
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={ this.state.email }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <div>                    
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={ this.state.password }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <div>                    
                        <input 
                            type="password"
                            placeholder="Confirm Password"
                            name="passwordConfirm"
                            value={ this.state.passwordConfirm }
                            onChange={ this.inputChangeHandler }/>
                    </div>
                    <button>Sign Up</button>
                </form>
                
            </React.Fragment>
        );
    }

}


export default SignUp;