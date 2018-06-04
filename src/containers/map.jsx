import React, {Component} from 'react';
import {MyMapComponent} from '../components/map.jsx';


export default class MyMapContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      routes: false
    }
  }

  componentWillReceiveProps(props) {
    console.log("Props for MapContainer =>", props);
    let chosenRoutes = [];
    if(props.cars) {
      props.cars.forEach( (car) => {
        chosenRoutes.push(car.poly);
      });
    }
    this.setState({routes: chosenRoutes});
  }

  render() {
    return(
      <div>
      <MyMapComponent
        isMarkerShown
        routes={this.state.routes}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"/>
      </div>
    );

  }
}
