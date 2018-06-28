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
    if (this.props.cars) {
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
