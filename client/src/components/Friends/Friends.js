import React, { Component } from 'react';

import Button from '../UI/Button/Button';
import ToolBar from '../UI/Toolbar/Toolbar';
class Friends extends Component {

    onClickHandler = () => {
        this.props.history.push('/user/:id/dashboard');
    }

    render() {
        return (
            <React.Fragment>
                <ToolBar />
                <h1>FRIENDS HERE</h1>
                <Button 
                    onClick={ this.onClickHandler } 
                    btnType="Back"
                    btnSize="Medium">
                    Back    
                </Button>   
            </React.Fragment>
            
        );
    }
}

export default Friends;