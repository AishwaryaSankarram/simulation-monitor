import React, {Component} from 'react'
import { Polyline } from "react-google-maps";
import { carIcon } from '../images/car-icon.js';


export class PreviewPolylines extends Component {

  constructor(props) {
    super(props);

    this.renderPolylines = this.renderPolylines.bind(this);
  }

  renderPolylines() {

    let polylines = this.props.routes.map((route, index) => {
      let icon = Object.assign({}, carIcon);
      console.log("ICON =>", icon);
      console.log("ROUTE =>", route);
      icon.strokeColor = route.color || "#000000";
      //icon.fillColor = route.color || "#000000";
      console.log("CAR ICON =>", icon);
      let previewIcon = [{
			icon: icon,
			offset: '0%'
		  }];
      let options = {strokeColor: route.color || "#000000", icons: previewIcon}
      let keyString = "route_" + index.toString()
      return(
      <Polyline key={keyString} path={route.poly} options={options} editable={false} />
    );
  });

  return polylines;
}


  render() {
    if (this.props.routes) {
      return (
        this.renderPolylines()
      );
    }
 }

}
