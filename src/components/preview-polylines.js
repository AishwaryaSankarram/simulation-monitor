import React, {Component} from 'react'
import { Polyline } from "react-google-maps";
import { carIcon } from '../images/car-icon.js';
import { connect } from 'react-redux';

class PreviewPolylines extends Component {

  constructor(props) {
    super(props);

    this.renderPolylines = this.renderPolylines.bind(this);
  }

  renderPolylines() {
    // console.log("CARS ->", this.props.cars)
    let polylines = this.props.cars.map((car, index) => {
      let icon = Object.assign({}, carIcon);
      icon.strokeColor = car.color || "#000000";
      let previewIcon = [{
			icon: icon,
			offset: '0%'
		  }];
      let options = {strokeColor: car.color || "#000000", icons: previewIcon}
      let keyString = "route_" + index.toString()
      return(
      <Polyline key={keyString} path={car.poly} options={options} editable={false} />
    );
  });

  return polylines;
}


  render() {
    var latLngBounds;
    let map = this.props.mapObj;
    if (this.props.cars) {
      latLngBounds = new window.google.maps.LatLngBounds();
      this.props.cars.forEach((car) => {
            if (car.poly.length > 0) {
              for (let i = 0; i < car.poly.length; i++) {
                let e = car.poly[i];
                  latLngBounds.extend(new window.google.maps.LatLng({ lat: e.lat, lng: e.lng }));
              }
            }
        });
      map.fitBounds(latLngBounds);
      return (
        this.renderPolylines()
      );
    }
 }

}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(PreviewPolylines)
