import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MyMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.758896,
      lng: -73.985130
    },
    zoom: 12
  };

  render() {
    const points = [
      {
        lat: 40.858896,
        lng: -73.985130,
        text: ""
      },
      {
        lat: 40.058896,
        lng: -73.985130,
        text: ""
      },
      {
        lat: 40.758896,
        lng: -74.985130,
        text: ""
      }
    ];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '90%', margin: 'auto' }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GMap_KEY,
            libraries: ['visualization'],
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // yesIWantToUseGoogleMapApiInternals
          heatmap={[{ lat: 40.758896, lang: -73.985130, weight: 10 }]}
        />
      </div>
    );
  }
}

export default MyMap;