
import React, {Component} from 'react';
import '../css/car-card.css'

export default class CarCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li id="rvli">
          <div id="RV1">
            <div class="state_name">
              <div class="stats_label">{"Name: "}</div>
              <div class="stats_desc">{this.props.name}</div>
            </div>
            <div class="state_name">
              <div class="stats_label">{"Type: "}</div>
              <div class="stats_desc">{this.props.type} </div>
            </div>
            <div class="lat_long">
              <div class="stats_label">{"(lat,lng): "}</div>
              <div class="stats_desc">
              {"("}<div id="latitudeRV1" class="lat_point">{this.props.latitude}
              </div>{","}
              <div id="longitudeRV1" class="lat_point">{this.props.longitude}</div>{")"}
              </div>
            </div>
            <div class="time_dest">
              <div class="stats_label">{"Time to Destination: "}</div>
              <div class="stats_desc">
                <div id="timeToDestRV1">{this.props.timeToDest + " sec"}</div>
              </div>
            </div>
            <div class="speed">
              <div class="stats_label">{"Speed: "}
              </div>
              <div class="stats_desc">
                <div id="SpeedRV1">{this.props.speed}</div>
              </div>
            </div>
          </div>
        </li>
    )
  }

}
