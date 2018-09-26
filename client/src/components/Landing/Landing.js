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
            <React.Fragment>
                <div className={ styles.Landing }>
                    <div className={ styles.Text }>
                        <h1>Conquest</h1>
                        <p>Some catch text</p>
                    </div>
            
                    <button
                        onClick={ this.onLoginLinkClick }>Log In</button>
                    <button
                        onClick={ this.onSignupLinkClick }>Sign Up</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;