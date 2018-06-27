import { Polyline, Marker } from 'react-google-maps';
import { warningIcon } from '../images/warning-icon';
import React, {Component} from 'react';

export class WarningMarkers extends Component {

  render() {
    console.log("WARNINGS,",  this.props.warnings);
    let warningMarkers = this.props.warnings.map( (warning, index) => {
      let icon = Object.assign({}, warningIcon);
      return (
        <Marker pos={warning} icon={icon} />
      );
    });

    return (<div>{warningMarkers}</div>);
  }
}
