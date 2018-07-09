
import React, {Component} from 'react';
import '../css/car-card.css'

export default class CarCard extends Component {

  render() {

    let evClassName;
    let evDisplayText, title;

    if(this.props.car.useAsEv) {
      evClassName = "load_ev_icon";
      title="This is your EV";
      evDisplayText = "EV";
    } else {
      evClassName = "load_ev_icon disable_ev";
      title="Mark as EV";
      evDisplayText = "RV";
    }

    return (
        <li style={{border: "2px solid " + this.props.color}} >
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td className="car-label">{this.props.name}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{this.props.latitude.toString().length > 17 ? this.props.latitude.toFixed(12) : this.props.latitude}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{this.props.longitude.toString().length > 17 ? this.props.longitude.toFixed(12) : this.props.longitude}</td>
            </tr>
            <tr>
              <td>Time to Destination</td>
              <td>{this.props.timeToDest}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{this.props.speed + ' mph' }</td>
            </tr>
          </tbody>
        </table>
        <div className={evClassName} title={title} onClick={()=>this.props.updateEV(this.props.car)}>{evDisplayText}</div>
        </li>
    )
  }

}
