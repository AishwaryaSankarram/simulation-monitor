import { Polyline, Marker } from 'react-google-maps';
import { warningIcon } from '../images/warning-icon';
import React, {Component} from 'react';

export class WarningMarkers extends Component {

  render() {
    console.log("WARNINGS,",  this.props.warnings);
    let warningMarkers = this.props.warningData.map( (data, index) => {
    let pos = {lat: data.lat, lng: data.lng};
    let wIcon = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(warningIcon),
                       scaledSize: new window.google.maps.Size(20, 20),
                       anchor: new window.google.maps.Point(0, 0)
                      };
      return (
        <Marker position={pos} icon={wIcon} />
      );
    });

    return (<div>{warningMarkers}</div>);
  }
}
