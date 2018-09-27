import React from 'react';

import Logo from '../Logo/Logo';
import styles from './Toolbar.css';

const toolbar = ( props ) => (

    <header className={ styles.Toolbar }>
        <Logo logoType="Toolbar" />
        <div
            className={ styles.ToggleButton }
            onClick={ props.dropDownClicked }>
            Menu
        </div>
    </header>

);

export default toolbar;