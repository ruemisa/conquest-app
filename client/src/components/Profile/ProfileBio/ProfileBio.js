import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProfileBio.css';

const profileBio = ( props ) => {

    return (
        <div className={ styles.ProfileBio }>
            <img src={ props.profileImg } alt="profile" />
            <h3>{ props.name }</h3>
            <p>{props.location}</p>
            <Link to="#">Edit</Link>        
        </div>
    );
};

export default profileBio;