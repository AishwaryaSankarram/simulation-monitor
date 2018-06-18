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
    let chosenRoutes = [];
    if(cars) {
      cars.forEach( (car) => {
        chosenRoutes.push({poly: car.poly, color: car.color});
      });
    }
    return(
      <div>
      <MyMapComponent
        isMarkerShown
        mapView={this.props.mapView}
        routes={chosenRoutes}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"/>
      </div>
    );

  }
}
