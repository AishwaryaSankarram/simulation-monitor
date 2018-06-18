import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import '../css/action-buttons.css'


export class ActionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playEnabled: false,
      replayEnabled: false,
      warningViewEnabled: false
    }
  }

  render() {
    return (
      <div style={{display:'inline-block', float: 'right'}}>
        <div className="action-button-container ">
            <button>
              <i className="fa fa-user-circle"> {this.props.userName}</i>
            </button>
        </div>
        <div className="action-button-container">
              <button disabled={!this.props.actionButtons.warningViewEnabled}>
                <i className="fa fa-exclamation-circle"></i>
              </button>
        </div>

        <div className="action-button-container">
              <button disabled={!this.props.actionButtons.replayEnabled}>
                <i className="fa fa-repeat"></i>
              </button>
          </div>

        <div className="action-button-container">
                <button disabled={!this.props.actionButtons.playEnabled}>
                  <i className="fa fa-play"></i>
                </button>
        </div>
      </div>
    );
  }
}
