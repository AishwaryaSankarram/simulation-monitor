
import React, {Component} from 'react';
import '../css/warnings.css';


export class Warnings extends Component {


  render() {

  return (<div id="warnings" class="clearfix">
    <div class="warrning_label">{"FCW"}
      <span class="tooltiptext">{"Forward Collision Warning"}
      </span>:
    </div>
    <div class="warrning_desc">0</div>
    <div class="warrning_label">FRCA
      <span class="tooltiptext">Front Right Collision Alert</span>:
    </div>
    <div id="FRCA" class="warrning_desc">0</div>
    <div class="warrning_label">FLCA
      <span class="tooltiptext">Front Left Collision Alert</span>:
    </div>
    <div id="FLCA" class="warrning_desc">0
    </div>
    <div class="warrning_label">ICW
      <span class="tooltiptext">Intersection Collision Warning</span>:
    </div>
    <div id="ICW" class="warrning_desc">0</div>
    <div class="warrning_label">EBW
      <span class="tooltiptext">Emergency Brake Warning</span>:
    </div>
    <div id="EBW" class="warrning_desc">0</div>
    <div class="warrning_label">SMVA
      <span class="tooltiptext">Slow Moving Vehicle Ahead</span>:
    </div>
    <div id="SMVA" class="warrning_desc">0</div>
    <div class="warrning_label">SVA
      <span class="tooltiptext">Stopped Vehicle Ahead</span>:
    </div>
    <div id="SVA" class="warrning_desc">0</div>
    <div class="warrning_label">BSW
      <span class="tooltiptext">Blind Spot Warning
      </span>:
    </div>
    <div id="BSW" class="warrning_desc">0</div>
    <div class="warrning_label">LCW
      <span class="tooltiptext">Lane Change Warning</span>:
    </div>
    <div id="LCW" class="warrning_desc">0</div>
    <div class="warrning_label">RRCA
      <span class="tooltiptext">Rear Right Collision Alert</span>:
    </div>
    <div id="RRCA" class="warrning_desc">0</div>
    <div class="warrning_label">RLCA
      <span class="tooltiptext">Rear Left Collision Alert</span>:
    </div>
    <div id="RLCA" class="warrning_desc">0</div>
  </div>);

  }
}
