import React from 'react';

import Navigation from '../Navigation/Navigation';
import Backdrop from '../Backdrop/Backdrop';
import styles from './DropDown.css';

const dropDown = ( props ) => {
    
    let attachedStyles = [ styles.DropDown, styles.Close ];
    if (props.open) {
        attachedStyles = [ styles.DropDown, styles.Open ];
    }

    return (
        <React.Fragment>
            <Backdrop 
                show={ props.open }
                clicked={ props.closed }/>
            <nav className={ attachedStyles.join(' ') }>
                <Navigation />
            </nav>   
        </React.Fragment>   
    );
};

export default dropDown;