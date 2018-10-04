import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
        console.log(this.props.markers);
        let mapMarkers = null;

        if (this.props.markers) {
            mapMarkers = this.props.markers.map((venue) => {

                const marker = {
                    position: {
                        lat: venue.lat,
                        lng: venue.lng
                    }
                }

                return <Marker label="POI" key={venue.id} {...marker} onDblClick={ () => this.props.removeMark(venue.id) } />
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