import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './Navigation.css';

const navigation = () => (
    <ul className={ styles.Navigation }>
        <NavigationItem link="/profile">
            Profile
        </NavigationItem>
        <NavigationItem link="/friends">
            Friends
        </NavigationItem>
        <NavigationItem link="/">
            Sign Out
        </NavigationItem>
    </ul>
);

export default navigation;