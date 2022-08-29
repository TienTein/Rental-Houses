import React from 'react'
import Map from 'react-map-gl';

export default function Mapbox() {
    return <Map
    initialViewState={{
        width: "100vw",
          height: "100vh",
        latitude: 13.716435639184612,
        longitude: 109.21077981251834,
        zoom: 16
        
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
  />;
}
