import { compose, withProps, lifecycle } from "recompose"

import React from 'react';

import { PreviewPolylines } from './preview-polylines'

import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";

import { flagIcon } from "../icons/flag.jsx";

export const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAP7zU5-pog5MMw7dg8F24Q-QyeMDKzTwU",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} />,
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
  {props.mapView.previewMode && <PreviewPolylines routes={props.routes} />}
  </GoogleMap>
);
