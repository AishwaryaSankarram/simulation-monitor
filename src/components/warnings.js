
import React, {Component} from 'react';
import '../css/warnings.css';
import { connect } from 'react-redux';
import { warnings } from "../constants";

class Warnings extends Component {

  render() {
   let warningData = [];
      for(let key in warnings){
      let value = warnings[key];
        warningData.push(
          <div key={key + "-container"}>
              <div className="warrning_label">{key}
                  <span className="tooltiptext">{value}</span>:
              </div>
              <div className="warrning_desc">{this.props.warningCount[key]}</div>
          </div>
        );
      }
  return (
    <div id="warnings" className="clearfix">
        {warningData}
    </div>
  );

  }
}

function mapStateToProps(state) {
  return {
    warningCount: state.warningCount
  };
}

export default connect(mapStateToProps)(Warnings);
