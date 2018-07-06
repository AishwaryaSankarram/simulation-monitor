import React, {Component} from 'react';
import { Polyline, Marker } from 'react-google-maps';
import { carIcon } from '../images/car-icon';
import { connect } from 'react-redux';

export class Vehicles extends Component {

  render() {
     // It is up to the user to zoom and view wherever he/she wants to - 04/07/2018
     //Revert to fitBounds - 05/07/2018
     if(this.props.zoomOption !== '3'){
          var latLngBounds;
          let map = this.props.mapObj;
          if(this.props.cars) {
            latLngBounds = new window.google.maps.LatLngBounds();
            this.props.cars.forEach( (car) => {
              if(car.useAsEv || this.props.zoomOption !== '2'){
                let latLng = new window.google.maps.LatLng({ lat: parseFloat(car.latitude), lng: parseFloat(car.longitude) });
                latLngBounds.extend(latLng);
      /*           if (!map.getBounds().contains(latLng)) {
                  map.panTo(latLng);  
                }
      */        
              }
            });
            map.fitBounds(latLngBounds);
          }
    }
    let carMarkers = this.props.cars.map( (car,index) => {
      let icon = Object.assign({}, carIcon);
      icon.rotation = car.heading;
      icon.strokeColor = car.color || "#000000";
      icon.fillColor = car.color || "#000000";
      let pos = {lat: parseFloat(car.latitude), lng: parseFloat(car.longitude)};
      // console.warn("CAR PATH", car.path);
      let polyOptions = {strokeColor: car.color || "#000000"};
      let path = car.path ? [...car.path] : [];
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
    cars: state.cars,
    zoomOption: state.zoomOption
  }
}

export default connect(mapStateToProps)(Vehicles);
