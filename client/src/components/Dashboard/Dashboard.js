import React, { Component } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import ConquestMap from '../ConquestMap/ConquestMap';
import Auth from '../../modules/Auth';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputField/InputField';

import styles from './Dashboard.css';


const API_KEY = `${process.env.REACT_APP_GOOGLE_API}`;

// MESSY BUT IT WORKS FOR NOW. CANT SEEM TO GET IT TO WORK AS A PROP ON PARENT 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

let lng = '';
let lat = '';

function displayLocationInfo(position) {
    lng = position.coords.longitude;
    lat = position.coords.latitude;

    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
}
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: null,
            current_user: null,
            information: '',
            marked: null,
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

    inputChangeHandler = (e) => {
        console.log(e.target.value);
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // FIX RENDER UPON ADD
    onSavePointHandler = (e, lat, lng) => {
        e.preventDefault();
        console.log("Loaded Location:", lat, lng)
        const newLocation = {
        
            lat: lat,
            lng: lng,
            user_id: this.state.current_user,
            information: this.state.information
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
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `550px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        markers={ this.state.markers }
                        removeMark={ this.removeMarkerHandler }
                        user={ this.current_user }
                        defaultCenter={{ lat: lat, lng: lng}}/>
                </div>
                <div className={ styles.NoteBlock }>
                    { notice }
                </div>
                <form onSubmit={ (e, lat, lng) => this.onSavePointHandler(e, lat, lng) }>
                    <InputField 
                        type="text"
                        placeholder="Enter Info About P.O.I."
                        name="information"
                        value={ this.state.information }
                        onChange={ this.inputChangeHandler } />
                    <Button 
                        btnSize="Medium"
                        btnType="Submit">Add</Button>
                    
                </form>


            </React.Fragment>            
        );

    }

}

export default Dashboard;