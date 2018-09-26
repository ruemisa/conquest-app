import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './Navigation.css';

const navigation = () => (
    <ul className={ styles.Navigation }>
        <NavigationItem link="/user/:id/profile">
            User
        </NavigationItem>
        <NavigationItem link="#">
            Scoreboard (Soon)
        </NavigationItem>
        <NavigationItem link="/">
            Sign Out
        </NavigationItem>
    </ul>
);

export default navigation;