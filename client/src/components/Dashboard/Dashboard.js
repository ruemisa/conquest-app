import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import DropDown from '../UI/DropDown/DropDown';
import Button from '../UI/Button/Button';
import ConquestMap from '../ConquestMap/ConquestMap';

import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDropDown: false,
            mapExpanded: false
        }
    }

    dropDownClosedHandler = () => {
        this.setState({ showDropDown: false });
    }

    dropDownToggleHandler = () => {
        console.log('clicked');
        this.setState( ( prevState ) => {
            return { showDropDown: !prevState.showDropDown };
        });
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
                    <Toolbar 
                        dropDownClicked={ this.dropDownToggleHandler }/>
                    <DropDown 
                        open={ this.state.showDropDown }
                        closed={ this.dropDownClosedHandler }/>
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
                    <Toolbar 
                        dropDownClicked={ this.dropDownToggleHandler }/>
                    <DropDown 
                        open={ this.state.showDropDown }
                        closed={ this.dropDownClosedHandler }/>
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