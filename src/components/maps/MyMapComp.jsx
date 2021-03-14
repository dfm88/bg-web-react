import React, { Component } from 'react';
import { compose, withProps } from "recompose"
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    KmlLayer,
} = require("react-google-maps");
const key = process.env.REACT_APP_API_KEY;
const Map = compose(
    
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 45.69567891247123, lng: 9.668975910191243 }}
       
    >
        <KmlLayer
            url={"https://www.google.com/maps/d/u/3/kml?mid=1MX3zBpZzmcVrj_qOZzYd6AIsCVoGuFgB" + "&ver=" + generateRandom()}
            options={{ preserveViewport: true }}
        />
    </GoogleMap>
);
function generateRandom() {
    return Math.random() * 10000000000000000
}
export default Map