import React, {Component} from 'react';
import { Polyline} from 'react-google-maps';
import { connect } from 'react-redux';

export class CarPath extends Component {
  
    render() {
    let carMarkers = this.props.cars.map( (car,index) => {
      let polyOptions = { strokeColor: car.color || "#000000" };
      return(
        <div key={"car_veh_path_" + index}>
          <Polyline key={"poly_veh_" + index} path={car.path} options={polyOptions} />
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

export default connect(mapStateToProps)(CarPath);
