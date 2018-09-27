import React, { Component } from 'react';

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
                    <h1>Conquest</h1>
                    <p>Tag and Conquer</p>
                </div>
        
                <button
                    className={ styles.Login }
                    onClick={ this.onLoginLinkClick }>Log In</button>
                <button
                    className={ styles.Signup }
                    onClick={ this.onSignupLinkClick }>Sign Up</button>
            </div>
        );
    }
}

export default Landing;