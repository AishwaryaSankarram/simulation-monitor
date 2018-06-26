import React, {Component} from 'react';
import { Polyline, Marker } from 'react-google-maps';
import { carIcon } from '../images/car-icon';

export class Vehicles extends Component {

  render() {
    let carMarkers = this.props.cars.map( (car,index) => {
      let icon = Object.assign({}, carIcon);
      icon.rotation = car.heading;
      icon.strokeColor = car.color || "#000000";
      icon.fillColor = car.color || "#000000";
      let pos = {lat: car.latitude, lng: car.longitude};
      console.log("CAR POSITION", pos);
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
