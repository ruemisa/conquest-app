import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import DropDown from '../UI/DropDown/DropDown';

import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDropDown: false
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

    mapExpandHandler = () => {
        console.log('clicked');
    }


    render() {

        return (
            <React.Fragment>
                <Toolbar 
                    dropDownClicked={ this.dropDownToggleHandler }/>
                <DropDown 
                    open={ this.state.showDropDown }
                    closed={ this.dropDownClosedHandler }/>
                <div>
                    <div className={ styles.Map }>MAP</div>
                    <button onClick={ this.mapExpandHandler }>Expand +</button>
                </div>

                <div>
                    <h2>Notification</h2>
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