import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class ConquestMap extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        }
    }

    componentWillMount() {
        
    }

    onToggleOpen = () => {
        this.setState({ isOpen: true })
    }

    onToggleClose = () => {
        this.setState({ isOpen: false })
    }



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

                return (
                    <Marker 
                        label="POI" 
                        key={venue.id} 
                        {...marker} 
                        onClick={ this.onToggleOpen }>
                        {this.state.isOpen && <InfoWindow onCloseClick={ this.onToggleClose}>
                            <div>{ venue.information }</div>
                        </InfoWindow> }
                    </Marker>
                )
            })
        }
            

        return (
            <GoogleMap 
                defaultZoom={17}
                defaultCenter={ this.props.defaultCenter }>
                { mapMarkers }
                
            </GoogleMap>
        );
    }

} 


export default withScriptjs(withGoogleMap(ConquestMap));

// FOR DELETE: onDblClick={ () => this.props.removeMark(venue.id) }