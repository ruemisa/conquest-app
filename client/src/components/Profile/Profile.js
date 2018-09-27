import React, { Component } from 'react';

import ToolBar from '../UI/Toolbar/Toolbar';
import Button from '../UI/Button/Button';
import ProfileBio from './ProfileBio/ProfileBio';
import ImageHolder from '../../images/profile.png';
import styles from './Profile.css';
class Profile extends Component {

    onClickHandler = () => {
        this.props.history.push('/user/:id/dashboard');
    }

    render() {

        return (
            <React.Fragment>
                <ToolBar />
                <ProfileBio
                    profileImg={ ImageHolder }
                    name="Ruel"
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