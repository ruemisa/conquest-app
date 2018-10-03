import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import ConquestMap from '../ConquestMap/ConquestMap';
import Auth from '../../modules/Auth';

import styles from './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [],
            current_user: '',
        }
    }

    componentWillMount() {
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
        
    }

    render() {
        console.log(this.state.markers);
        console.log(this.state.current_user);

        // Geolocation 
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(displayLocationInfo);
        // }

        // let lng = '';
        // let lat = '';

        // function displayLocationInfo(position) {
        //     lng = position.coords.longitude;
        //     lat = position.coords.latitude;

        //     console.log(`longitude: ${ lng } | latitude: ${ lat }`);
        // }

        // MAP NOT LOADING EVEN WITH PARSEFLOAT
        // const center = {
        //     lat: lat,
        //     lng: lng
        // }
        
        return (
            <React.Fragment>
                <Toolbar />
                <div className={ styles.MapArea }>
                    <ConquestMap 
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        mapClicked={this.onMarkHandler}
                        markers={ this.state.markers }/>
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