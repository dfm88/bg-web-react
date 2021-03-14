import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  
  height: '600px'
};

const center = {
  lat: 45.69567891247123,
  lng: 9.668975910191243,
};

function MapComp() {
  const key = process.env.REACT_APP_API_KEY;
  return (
   
      <LoadScript
        googleMapsApiKey={key}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */}

        </GoogleMap>
      </LoadScript>


  )
}

export default React.memo(MapComp)