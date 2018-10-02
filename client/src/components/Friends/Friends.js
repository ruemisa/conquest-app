import React, { Component } from 'react';

import Button from '../UI/Button/Button';
import ToolBar from '../UI/Toolbar/Toolbar';
import InputField from '../UI/InputField/InputField';
import styles from './Friends.css';
class Friends extends Component {

    onClickHandler = () => {
        this.props.history.push('/dashboard');
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        console.log('Looking for friends');
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <ToolBar />
                <div className={ styles.Friends }>
                    <h2>Friends</h2>
                    <ul> 
                        <li>Friend</li>
                        <li>Friend</li>
                        <li>Friend</li>
                    </ul>
                </div>
                <div className={ styles.SearchFriends }>
                    <h2>Add More Friends</h2>
                    <form onSubmit={ this.onSubmitHandler }>
                        <InputField 
                        type="text"
                        placeholder="Search for People"
                        name="query"
                        onChange={ this.inputChangeHandler }/>
                        <Button
                            btnType="Submit"
                            btnSize="Medium">
                            Search
                        </Button>
                    </form>
                    
                </div>
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