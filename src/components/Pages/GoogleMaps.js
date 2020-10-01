import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMaps.css'
 
export class MapContainer extends Component {
  render() {
   
    return (
      <Map google={this.props.google} zoom={14} center={navigator.geolocation.getCurrentPosition}centerAroundCurrentLocation={true}>
        
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDAKkyFJHGYTMoKJsPE0sobMJGg3K0Lwrk")
})(MapContainer)