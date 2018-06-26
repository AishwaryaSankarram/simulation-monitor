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
    var latLngBounds;
    if(cars) {
      latLngBounds = new window.google.maps.LatLngBounds();
        cars.forEach((car) => {
          if (this.props.mapView.previewMode) {
              if (car.poly.length > 0) {
                for (let i = 0; i < car.poly.length; i++) {
                  let e = car.poly[i];
                    latLngBounds.extend(new window.google.maps.LatLng({ lat: e.lat, lng: e.lng }));
                }
              }
          } else {
            latLngBounds.extend(new window.google.maps.LatLng({ lat: car.latitude, lng: car.longitude }));
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
