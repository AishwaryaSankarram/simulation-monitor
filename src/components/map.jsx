import { compose, withProps, lifecycle } from "recompose"
import React from 'react';
import { PreviewPolylines } from './preview-polylines';
import { Vehicles } from './vehicles'

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
       let routeArray = this.props.bounds;
       console.log("ROUTE_ARRAY ->", routeArray);
       console.log("setting bounds===>" + refs.map);
       this.setState({ setZoom: ref => {
           refs.map = ref;
           if (!ref) {
             return;
           }

           this.setState({ mapObj: refs.map});
           console.log("REFS.MAP ->", refs.map);
           if(routeArray)
                refs.map.fitBounds(routeArray);
         } });
     },
    componentWillReceiveProps(nextProps) {
      var bounds = nextProps.bounds;
      console.log("setting bounds 2===>");
      const refs = {}
        this.setState({
        setZoom: ref => {
          refs.map = ref
          if (!ref) { return }
          let mapBounds = refs.map.getBounds();
          // if (this.props.event_name.length > 0) {
            if (!(mapBounds.contains(bounds.getNorthEast()) && mapBounds.contains(bounds.getSouthWest()))) {
              console.log("Change Bounds now");
              refs.map.fitBounds(bounds);
            }
          // }
        }
      });
    }
 	}),
  withGoogleMap
)((props) =>
  <GoogleMap ref={props.setZoom}
    defaultZoom={14}
    defaultCenter={{ lat: 37.41185, lng: -121.99999000000003 }}
  >
  {props.mapView.previewMode && <PreviewPolylines cars={props.cars} />}
  {props.mapView.playMode && <Vehicles cars={props.cars} />}

  </GoogleMap>
);
