import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => (
    <ul>
        <NavigationItem link="/user/:id/profile">
            User
        </NavigationItem>
        <NavigationItem link="/">
            Sign Out
        </NavigationItem>
    </ul>
);

export default navigation;