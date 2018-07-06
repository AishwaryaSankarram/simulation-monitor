import { Marker } from 'react-google-maps';
// import { warningIcon } from '../images/warning-icon';
import React, {Component} from 'react';
import { connect } from 'react-redux';

const wIcon = {
  path: window.google.maps.SymbolPath.CIRCLE,
  scale: 2,
  strokeColor: 'red',
  fillColor: 'red'
};

class WarningMarkers extends Component {


  render() {
    let warningMarkers = this.props.warningData.map( (data, index) => {
    let pos = {lat: parseFloat(data.lat), lng: parseFloat(data.lng)};

    // let wIcon = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(warningIcon),
    //                    scaledSize: new window.google.maps.Size(10, 10),
    //                    anchor: new window.google.maps.Point(0, 0)
    //                   };
      return (
        <Marker key={"warning_marker_"+index} position={pos} icon={wIcon} />
      );
    });

    return (<div>{warningMarkers}</div>);
  }
}

function mapStateToProps(state) {
  return {
    warningData: state.warnings
  }
}

export default connect(mapStateToProps)(WarningMarkers)
