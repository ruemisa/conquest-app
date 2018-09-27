import React, { Component } from 'react';

import styles from './ConquestMap.css';

class ConquestMap extends Component {
    render() {
        return (
            <div
              className={ [styles.ConquestMap, styles[this.props.mapType]].join(' ') }>
              THIS IS THE MAP  
            </div>

        );
    }
}


export default ConquestMap;