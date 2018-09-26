import React from 'react';

import DropDownToggle from '../DropDown/DropDownToggle/DropDownToggle';

const toolbar = ( props ) => (

    <header>
        <div> LOGO </div>
        <DropDownToggle clicked={ props.dropDownClicked } />
    </header>

);

export default toolbar;