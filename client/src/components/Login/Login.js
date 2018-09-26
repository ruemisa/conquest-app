import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

            <React.Fragment>
                <h2>Login Page</h2>
                <p><Link to="/signup">Not a member? Sign Up</Link></p>
                <form onSubmit={ this.onSubmitHandler }>
                    <div>
                        <input 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={ this.state.username }
                            onChange={ this.inputChangeHandler }
                            required />
                    </div>
                    <div>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={ this.state.password }
                            onChange={ this.inputChangeHandler }
                            required />
                    </div>
                    <button>Log In</button>
                </form>
            </React.Fragment>
        );
    }

}


export default Login;