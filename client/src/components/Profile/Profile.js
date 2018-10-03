import React, { Component } from 'react';

import ToolBar from '../UI/Toolbar/Toolbar';
import Button from '../UI/Button/Button';
import ProfileBio from './ProfileBio/ProfileBio';
import ImageHolder from '../../images/profile.png';
import styles from './Profile.css';
import Auth from '../../modules/Auth';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            last_name: '',
            profile_pic: '',
            location: '',
            current_user: '',
        }
    }

    componentDidMount() {
        fetch('/profile', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
            }
        }).then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    first_name: response.user.first_name,
                    last_name: response.user.last_name,
                    current_user: response.user.user_id
                });
            }).catch(error => {
                console.log(error);
            });
    }

    onClickHandler = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        console.log(this.state.current_user);

        let profileImage = ImageHolder;
        if (this.state.profile_pic) {
            profileImage = this.state.profile_pic;
        };

        return (
            <React.Fragment>
                <ToolBar />
                <ProfileBio
                    profileImg={ profileImage }
                    name={ `${this.state.first_name} ${this.state.last_name}` }
                    location="Brooklyn, NY"/>

                <div className={ styles.StatsList }>
                    <h2> Personal Stats </h2>
                    <ul>
                        <li>Takeovers: ?</li>
                        <li>Weekly Score: ? </li>
                        <li>W/L ratio: ?</li>
                    </ul>
                </div>

                <Button 
                    onClick={ this.onClickHandler } 
                    btnType="Back"
                    btnSize="Medium">
                    Back    
                </Button>
            </React.Fragment>
        );
    }

}

export default Profile;