import React, { Component } from 'react';

import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import styles from './Landing.css';

class Landing extends Component {

    onLoginLinkClick = () => {
        this.props.history.push('/login');
    }

    onSignupLinkClick = () => {
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className={ styles.Landing }>
                <div className={ styles.Text }>
                    <Logo logoType="Landing" /> 
                    <h1>Conquest</h1>
                    <p>Tag and Conquer</p>
                </div>

                <Button  
                    btnType="Login" 
                    btnSize="Medium"
                    onClick={ this.onLoginLinkClick }>
                    Login 
                </Button>
                <Button  
                    btnType="Signup"
                    btnSize="Medium" 
                    onClick={ this.onSignupLinkClick }>
                    Sign Up
                </Button>
            </div>
        );
    }
}

export default Landing;