import React from 'react';

import styles from './InputField.css';

const inputField = ( props ) => (
    <div className={ styles.InputField }>
        <input 
            type={ props.type }
            placeholder={ props.placeholder }
            name={ props.name }
            value={ props.value }
            onChange={ props.onChange } 
            required />
    </div>
);

export default inputField;