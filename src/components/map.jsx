import { compose, withProps, lifecycle } from "recompose"
import React from 'react';
import PreviewPolylines  from './preview-polylines';
import WarningMarkers from './warning-markers'
import Vehicles from './vehicles'

import { withGoogleMap, GoogleMap} from "react-google-maps";


export const MyMapComponent = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} className="map-container" />,
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

           this.setState({ mapObj: refs.map});

         } });
       }
    }),
  withGoogleMap
)((props) =>
  <GoogleMap ref={props.setZoom}
    defaultZoom={20}
    defaultCenter={{ lat: 37.41185, lng: -121.99999000000003 }}
    options={
      {
        maxZoom: 21
      }
    }
  >
  {props.mapView.previewMode && <PreviewPolylines mapObj={props.mapObj} />}
  {props.mapView.playMode &&
    <div>
      <Vehicles mapObj={props.mapObj} />
      <WarningMarkers />
    </div>
    }

  </GoogleMap>
);
