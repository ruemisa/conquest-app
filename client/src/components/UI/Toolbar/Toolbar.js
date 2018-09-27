import React from 'react';

import DropDownToggle from '../DropDown/DropDownToggle/DropDownToggle';
import Logo from '../Logo/Logo';
import styles from './Toolbar.css';

const toolbar = ( props ) => (

    <header className={ styles.Toolbar }>
        <Logo logoType="Toolbar" />
        <DropDownToggle clicked={ props.dropDownClicked } />
    </header>

);

export default toolbar;