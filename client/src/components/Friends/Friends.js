import React, { Component } from 'react';

class Friends extends Component {

    onClickHandler = () => {
      this.props.history.push('/user/:id/dashboard');
  }

    render() {
        return (
    
            <div>
                <h1>FRIENDS HERE</h1>
                <button onClick={ this.onClickHandler }>Back</button>    
            </div>
            
        );
    }
}

export default Friends;