import { compose, withProps, lifecycle } from "recompose"

import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";

import { flagIcon } from "../icons/flag.jsx";

export const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
     componentDidMount() {
       const refs = {};
       this.setState({ setZoom: ref => {
           refs.map = ref;
           if (!ref) {
             return;
           }
           // console.log("setzooom===>" + refs.map);
           this.setState({ mapObj: refs.map});
         } });
     }
 	}),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.41185, lng: -121.99999000000003 }}
  >
    {props.routes && props.routes.map((route, index) => {
      console.log("ROUTE =>", route);
      let keyString = "route_" + index.toString()
      return(
      <Polyline key={keyString} path={route} draggable={true} editable={false} />
    );
    })}
  </GoogleMap>
);
