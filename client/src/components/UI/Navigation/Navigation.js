import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './Navigation.css';

const navigation = () => (
    <ul className={ styles.Navigation }>
        <NavigationItem link="/user/:id/profile">
            Profile
        </NavigationItem>
        <NavigationItem link="/user/:id/friends">
            Friends
        </NavigationItem>
        <NavigationItem link="/">
            Sign Out
        </NavigationItem>
    </ul>
);

export default navigation;