
import React, {Component} from 'react';
import '../css/car-card.css'

export default class CarCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let evClassName;
    this.props.car.isEv ? evClassName = "load_ev_icon": evClassName = "load_ev_icon disable_ev"

    return (
        <li style={{border: "2px solid " + this.props.color}} >
          <div >
            <div class="state_name">
              <div class="stats_label">{"Name: "}</div>
              <div class="stats_desc">{this.props.name}</div>
            </div><br />
            <div class="lat_long">
              <div class="stats_label">{"(lat,lng): "}</div>
              <div class="stats_desc">
              {"("}<div class="lat_point">{this.props.latitude}
              </div>{","}
              <div class="lat_point">{this.props.longitude}</div>{")"}
              </div>
            </div><br />
            <div class="time_dest">
              <div class="stats_label">{"Time to Destination: "}</div>
              <div class="stats_desc">
                <div>{this.props.timeToDest + " sec"}</div>
              </div>
            </div><br />
            <div class="speed">
              <div class="stats_label">{"Speed: "}
              </div>
              <div class="stats_desc">
                <div>{this.props.speed}</div>
              </div>
            </div>
          </div>
          <div className={evClassName} title="This is your EV" onClick={()=>this.props.updateEV(this.props.car)}>EV</div>
        </li>
    )
  }

}
