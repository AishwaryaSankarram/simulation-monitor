
import React, {Component} from 'react';
import '../css/warnings.css';
import { connect } from 'react-redux';

class Warnings extends Component {

  render() {
    
  return (<div id="warnings" className="clearfix">
    <div className="warrning_label">FCW
      <span className="tooltiptext">Forward Collision Warning</span>:
    </div>
    <div className="warrning_desc">{this.props.warningCount.FCW}</div>
    <div className="warrning_label">FRCA
      <span className="tooltiptext">Front Right Collision Alert</span>:
    </div>
    <div id="FRCA" className="warrning_desc">{this.props.warningCount.FRCA}</div>
    <div className="warrning_label">FLCA
      <span className="tooltiptext">Front Left Collision Alert</span>:
    </div>
    <div id="FLCA" className="warrning_desc">{this.props.warningCount.FLCA}
    </div>
    <div className="warrning_label">ICW
      <span className="tooltiptext">Intersection Collision Warning</span>:
    </div>
    <div id="ICW" className="warrning_desc">{this.props.warningCount.ICW}</div>
    <div className="warrning_label">EBW
      <span className="tooltiptext">Emergency Brake Warning</span>:
    </div>
    <div id="EBW" className="warrning_desc">{this.props.warningCount.EBW}</div>
    <div className="warrning_label">SMVA
      <span className="tooltiptext">Slow Moving Vehicle Ahead</span>:
    </div>
    <div id="SMVA" className="warrning_desc">{this.props.warningCount.SMVA}</div>
    <div className="warrning_label">SVA
      <span className="tooltiptext">Stopped Vehicle Ahead</span>:
    </div>
    <div id="SVA" className="warrning_desc">{this.props.warningCount.SVA}</div>
    <div className="warrning_label">BSW
      <span className="tooltiptext">Blind Spot Warning
      </span>:
    </div>
    <div id="BSW" className="warrning_desc">{this.props.warningCount.BSW}</div>
    <div className="warrning_label">LCW
      <span className="tooltiptext">Lane Change Warning</span>:
    </div>
    <div id="LCW" className="warrning_desc">{this.props.warningCount.LCW}</div>
    <div className="warrning_label">RRCA
      <span className="tooltiptext">Rear Right Collision Alert</span>:
    </div>
    <div id="RRCA" className="warrning_desc">{this.props.warningCount.RRCA}</div>
    <div className="warrning_label">RLCA
      <span className="tooltiptext">Rear Left Collision Alert</span>:
    </div>
    <div id="RLCA" className="warrning_desc">{this.props.warningCount.RLCA}</div>
  </div>);

  }
}

function mapStateToProps(state) {
  return {
    warningCount: state.warningCount
  };
}

export default connect(mapStateToProps)(Warnings);
