import React from 'react';

import DropDownToggle from '../DropDown/DropDownToggle/DropDownToggle';
import styles from './Toolbar.css';

const toolbar = ( props ) => (

    <header className={ styles.Toolbar }>
        <div> LOGO </div>
        <DropDownToggle clicked={ props.dropDownClicked } />
    </header>

);

export default toolbar;