import React, { Component } from 'react';

import DropDown from '../DropDown/DropDown';
import Logo from '../Logo/Logo';
import styles from './Toolbar.css';

class ToolBar extends Component {
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
            <header className={ styles.Toolbar }>
                <Logo logoType="Toolbar" />
                <div
                    className={ styles.ToggleButton }
                    onClick={ this.dropDownToggleHandler }>
                    Menu
                </div>
                <DropDown 
                    open={ this.state.showDropDown }
                    closed={ this.dropDownClosedHandler }/>
            </header>
        );
    }

}

export default ToolBar;