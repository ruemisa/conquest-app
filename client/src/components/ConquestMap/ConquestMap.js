import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


// import styles from './ConquestMap.css';

// Geolocation 
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

class ConquestMap extends Component {
    render() {
        return (
            <GoogleMap 
                defaultZoom={8}
                defaultCenter={{ lat: lat, lng: lng}} >
                { this.props.isMarkerShown }    
            </GoogleMap>

        );
    }
}


export default withScriptjs(withGoogleMap(ConquestMap));