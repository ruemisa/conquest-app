import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import ConquestMap from '../ConquestMap/ConquestMap';

import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Toolbar />
                <div className={ styles.MapArea }>
                    <ConquestMap 
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
                </div>

                <div className={ styles.NoteBlock }>
                    <h2>Notifications</h2>
                    <ul>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                    </ul>
                </div>
            </React.Fragment>            
        );

    }

}

export default Dashboard;