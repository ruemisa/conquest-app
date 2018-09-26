import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
class Profile extends Component {

    onClickHandler = () => {
        this.props.history.push('/user/:id/dashboard');
    }

    render() {

        return (

            <div>
                <h2>Welcome to your Profile!</h2>
                <button onClick={ this.onClickHandler }>Back</button>
            </div>
        );
    }

}

export default Profile;