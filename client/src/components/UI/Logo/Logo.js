import React from 'react';

import LogoImg from '../../../images/conquest.png';
import styles from './Logo.css';

const logo = ( props ) => (
    <img src={ LogoImg } className={ styles[props.logoType] } alt="logo" />
);

export default logo;