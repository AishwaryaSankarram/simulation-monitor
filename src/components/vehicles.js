import React, {Component} from 'react';
import { Polyline, Marker } from 'react-google-maps';
import { carIcon } from '../images/car-icon';
import { connect } from 'react-redux';

export class Vehicles extends Component {

  render() {
    var latLngBounds;
    let map = this.props.mapObj;
    if(this.props.cars) {
      latLngBounds = new window.google.maps.LatLngBounds();
      this.props.cars.forEach( (car) => {
        latLngBounds.extend(new window.google.maps.LatLng({ lat: car.latitude, lng: car.longitude }));
      });
      map.fitBounds(latLngBounds);
    }
    let carMarkers = this.props.cars.map( (car,index) => {
      let icon = Object.assign({}, carIcon);
      icon.rotation = car.heading;
      icon.strokeColor = car.color || "#000000";
      icon.fillColor = car.color || "#000000";
      let pos = {lat: car.latitude, lng: car.longitude};
      // console.log("CAR POSITION", pos);
      let polyOptions = {strokeColor: car.color || "#000000"};
      let path = [...car.path]
      return(
        <div key={"car_veh_" + index}>
          <Polyline key={"poly_veh_" + index} path={path} options={polyOptions} />
          <Marker key={"markers_veh_" + index} position={pos} icon={icon} />
        </div>
      );
    });

    return carMarkers;
  }

}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Vehicles);
