import React, {Component} from 'react';
import {MyMapComponent} from '../components/map.jsx';


export default class MyMapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: false
    }
  }


  render() {
    let cars = this.props.cars;
    var latLngBounds = new window.google.maps.LatLngBounds();
    if(cars) {
      cars.forEach( (car) => {
        if (car.poly.length > 0) {
          for (let i = 0; i < car.poly.length; i++) {
            let e = car.poly[i];
              latLngBounds.extend(new window.google.maps.LatLng({ lat: e.lat, lng: e.lng }));
          }
        }
      });
    }

    return(
      <MyMapComponent
        isMarkerShown
        mapView={this.props.mapView}
        bounds={latLngBounds}
        cars={this.props.cars}/>

    );

  }
}
