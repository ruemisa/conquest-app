import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {

    onClickHandler = () => {
        this.props.history.push('/user/:id/dashboard');
    }

    render() {

        return (
                <div>
                    <div>
                        PROFILE HUB

                        <h3>Name</h3>
                        <p>Location</p>
                        <Link to="#">Edit</Link>
                    </div>

                    <div>
                        <h2> Friends </h2>
                        <ul>
                            <li>Friend</li>
                            <li>Friend</li>
                            <li>Friend</li>
                        </ul>
                        <Link to="/user/:id/friends">See All</Link>
                    </div>

                    <button onClick={ this.onClickHandler }>Back</button>
                </div>
        );
    }

}

export default Profile;