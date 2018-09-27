import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import Button from '../UI/Button/Button';
import ConquestMap from '../ConquestMap/ConquestMap';

import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapExpanded: false
        }
    }

    mapClosedHandler = () => {
        console.log('closed');
        this.setState({ mapExpanded: false });
    }

    mapExpandHandler = () => {
        console.log('clicked');
        this.setState({ mapExpanded: true });
    }


    render() {
        
        if (this.state.mapExpanded) {
            return (
                <React.Fragment>
                    <Toolbar />
                    <div className={ styles.MapArea }>
                        <ConquestMap mapType="Expanded"/>
                        <Button
                            customStyle={ styles.MapButton }
                            btnType="Close"
                            btnShape="Round"
                            btnSize="Small"
                            onClick={ this.mapClosedHandler }> - </Button>
                    </div>

                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Toolbar />
                    <div className={ styles.MapArea }>
                        <ConquestMap mapType="Compact" />
                        <Button
                            customStyle={ styles.MapButton }
                            btnType="Open"
                            btnSize="Small"
                            btnShape="Round"
                            onClick={ this.mapExpandHandler }> + </Button>
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

}

export default Dashboard;