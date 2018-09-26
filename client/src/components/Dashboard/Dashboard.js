import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import DropDown from '../UI/DropDown/DropDown';

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


    render() {

        return (
            <React.Fragment>
                <Toolbar 
                    dropDownClicked={ this.dropDownToggleHandler }/>
                <DropDown 
                    open={ this.state.showDropDown }
                    closed={ this.dropDownClosedHandler }/>
                <div>
                    <h2>Welcome to your dashboard!</h2>
                </div>
            </React.Fragment>            
        );
    }

}

export default Dashboard;