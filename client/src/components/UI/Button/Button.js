import React from 'react';

import styles from './Button.css';

const button = ( props ) => (
    <button
        className={ [ styles.Button, styles[props.btnType], styles[props.btnSize], styles[props.btnShape], props.customStyle].join(' ') }
        onClick={ props.onClick }>
        { props.children }
    </button>  
);

export default button;