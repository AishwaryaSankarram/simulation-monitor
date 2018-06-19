
import React, {Component} from 'react';
import '../css/car-card.css'

export default class CarCard extends Component {

  render() {

    let evClassName;
    let evDisplayText, title;

    if(this.props.car.isEv) {
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
          <div >
            <div className="state_name">
              <div className="stats_label">{"Name: "}</div>
              <div className="stats_desc">{this.props.name}</div>
            </div><br />
            <div className="lat_long">
              <div className="stats_label">{"(lat,lng): "}</div>
              <div className="stats_desc">
              {"("}<div className="lat_point">{this.props.latitude}
              </div>{", "}
              <div className="lat_point">{this.props.longitude}</div>{")"}
              </div>
            </div><br />
            <div className="time_dest">
              <div className="stats_label">{"Time to Destination: "}</div>
              <div className="stats_desc">
                <div>{this.props.timeToDest + " sec"}</div>
              </div>
            </div><br />
            <div className="speed">
              <div className="stats_label">{"Speed: "}
              </div>
              <div className="stats_desc">
                <div>{this.props.speed}</div>
              </div>
            </div>
          </div>
          <div className={evClassName} title={title} onClick={()=>this.props.updateEV(this.props.car)}>{evDisplayText}</div>
        </li>
    )
  }

}
