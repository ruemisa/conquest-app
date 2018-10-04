import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import ConquestMap from '../ConquestMap/ConquestMap';
import Auth from '../../modules/Auth';


import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: null,
            current_user: null,
            marked: null
        }
    }

    componentDidMount() {
        fetch('/dashboard', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
            }
        }).then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    markers: response.user.markers,
                    current_user: response.user.user_id
                });
            }).catch(error => {
                console.log(error);
            });
    }

    // FIX RENDER UPON ADD
    onMarkHandler = (e) => {
        console.log("Map is clicked.", e, e.latLng.lat(), e.latLng.lng());

        const newLocation = {
        
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            user_id: this.state.current_user
        }


        console.log(newLocation);
        console.log(this.state.markers);

        fetch('/markers', {
            method: 'POST',
            body: JSON.stringify(newLocation),
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        this.setState({ marked: true });
        
    }

    // FIX RENDER UPON DELETE
    removeMarkerHandler = (mark_id) => {
        console.log(mark_id);
        console.log('I AM REMOVED');

        fetch(`/markers/${mark_id}` , {
            method: 'DELETE',
        }).then(response => {
            console.log(response);
            this.setState({
                marked: false
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        let notice = ( <h2>No new notice</h2>);

        if (this.state.marked === true) {
            notice = ( <h2 className={ styles.Added }>New point of interest!</h2>);
        } else if (this.state.marked === false) {
            notice = (<h2 className={ styles.Removed }> Point Removed! </h2>);
        }

        return (
            <React.Fragment>
                <Toolbar />
                <div className={ styles.MapArea }>
                    <ConquestMap 
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `550px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        markers={ this.state.markers }
                        mapClicked={ this.onMarkHandler }
                        removeMark={ this.removeMarkerHandler }
                        user={ this.current_user }/>
                </div>
                <div className={ styles.NoteBlock }>
                    { notice }
                </div>


            </React.Fragment>            
        );

    }

}

export default Dashboard;