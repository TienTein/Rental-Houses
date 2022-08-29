import React, { useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { DetailContext } from "../DetailPage";
import { useState } from "react";
const containerStyle = {
  width: "100%",
  height: "400px",
};
const axios = require("axios").default;
function MapGoogle() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyALfnGo6Gf7g3JqxS1WqiZUyIzCZAruHlk",
  });
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const data = useContext(DetailContext);
  const address = encodeURIComponent(data.address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyALfnGo6Gf7g3JqxS1WqiZUyIzCZAruHlk`;

  /*
  //Fetch API
  fetch(url)
  .then(response => response.json())
  .then(data => {
      const place = data.results[0]
      const latitude = place.geometry.location.lat
      const longitude = place.geometry.location.lng
      console.log(latitude);
      console.log(longitude);
      setLat(latitude)
      setLng(longitude)
  });
  */
  const center = {
    lat: lat,
    lng: lng,
  };

  axios({
    method: "get",
    url: url,
    responseType: "json",
  }).then(function (response) {
    const place = response.data.results[0];
    const latitude = place.geometry.location.lat;
    const longitude = place.geometry.location.lng;
    setLat(latitude);
    setLng(longitude);
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="col-12 google-map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF position={center}></MarkerF>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapGoogle);
