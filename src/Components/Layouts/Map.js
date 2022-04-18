import React, { Component } from 'react';
import baron from "./Assets/download.jpg"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import mapPin from "./Assets/icons/placeholder.png"


const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.0358,
            lng: 31.2362
          }

        }

      >
        <Marker
          onClick={this.onMarkerClick}

          icon={
            mapPin

          }
          name={<div>

            <div>
              <img src={baron} className="w-full mb-3 h-24"></img>

            </div>

            <div>
              <p>baron palace</p>
              <p>$6,300,000</p>
            </div>


          </div>}
        />

        <Marker
          onClick={this.onMarkerClick}
          Position={{
            lat: 30.0358,
            lng: 32.5362
          }}


          icon={
            mapPin

          }
          name={<div>

            <div>
              <img src={baron} className="w-full mb-3 h-24"></img>

            </div>

            <div>
              <p>baronooo palace</p>
              <p>$6,300,000</p>
            </div>


          </div>}
        />
        <Marker
          onClick={this.onMarkerClick}
          Position={{
            lat: 30.0358,
            lng: 30.5362
          }}

          icon={
            mapPin

          }


          name={<div>

            <div>
              <img src={baron} className="w-full mb-3 h-24"></img>

            </div>

            <div>
              <p>baronooo palace</p>
              <p>$6,300,000</p>
            </div>


          </div>}
        />


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBP92LVE0q11L6W6fSWEfATFeYLfc1agk'
})(MapContainer);

