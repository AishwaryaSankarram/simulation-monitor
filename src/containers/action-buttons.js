import React, {Component} from 'react';
import '../css/action-buttons.css'


export class ActionButtons extends Component {

  render() {
    return (
      <div className="pull-right">
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
                <button disabled={!this.props.actionButtons.playEnabled} onClick={this.props.startSimulation}>
                  <i className="fa fa-play"></i>
                </button>
        </div>
      </div>
    );
  }
}
