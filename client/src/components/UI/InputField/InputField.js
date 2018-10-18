import React from 'react';

import styles from './InputField.css';

const inputField = ( props ) => (
    <div className={ styles.InputField }>
        <input {...props} />        
    </div>
);

export default inputField;