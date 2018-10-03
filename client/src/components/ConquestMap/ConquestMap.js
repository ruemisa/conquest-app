import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// import styles from './ConquestMap.css';

// Geolocation 

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

// e.placeId -> when clicking on a place
// 

class ConquestMap extends Component {


    render() {

        let mapMarkers = null;

        if (this.props.markers) {
            mapMarkers = this.props.markers.map((venue, id) => {
                const marker = {
                    position: {
                        lat: venue.lat,
                        lng: venue.lng
                    }
                }
    
                return <Marker key={id} {...marker} onClick={ this.props.removeMarker } />
            })
        }
            

        return (
            <GoogleMap 
                defaultZoom={17}
                defaultCenter={{ lat: lat, lng: lng}}
                onClick={ this.props.mapClicked } >
                { mapMarkers }
                
            </GoogleMap>
        );
    }

} 


export default withScriptjs(withGoogleMap(ConquestMap));