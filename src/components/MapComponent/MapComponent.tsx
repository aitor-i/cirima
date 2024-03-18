'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 42.80798928182575,
  lng: -1.6542928534447172
};

const markerPosition = {
  lat: 42.80798928182575,
  lng: -1.6542928534447172
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBo_gR45tUWdYr0JlFdbeVV_on8TUTqsOw" // Replace with your Google Maps API key
    >
      <GoogleMap

        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <Marker
          position={markerPosition}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;

