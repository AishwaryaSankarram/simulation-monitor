import React, {Component} from 'react';
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logouticon from 'material-ui/svg-icons/action/power-settings-new';
import { ConfirmModal } from "../layouts/confirm-modal";
import { Checkbox } from "react-bootstrap";
import '../css/action-buttons.css';


export class ActionButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false,
      isSettingsOpen: false,
      mapOption: this.props.zoomOption,
      showRoutes: this.props.showRoutes,
      dialogVisible: false
    };
    this.settingsClick = this.settingsClick.bind(this);
    this.radioChange = this.radioChange.bind(this); 
    this.toggleRoutes = this.toggleRoutes.bind(this); 
  }

  menuClick() {
    // This prevents ghost click.
    // this.props.preventDefault();
    this.setState({
      isMenuOpen: true,
      // anchorEl: event.currentTarget,
    });
  }

  toggleRoutes(event) {
    this.setState({showRoutes: event.target.checked});
    this.props.toggleRoutes(event.target.checked);
  }

  settingsClick (event) {
    this.setState({
      isSettingsOpen: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose = () => {
    this.setState({
      isMenuOpen: false,
    });
  }

  handleSettingsClose = () => {
    this.setState({
      isSettingsOpen: false,
    });
  }

  mapViewHandleChange = () => {
    this.handleSettingsClose();
    this.props.changeView();
  }

  radioChange = (e) => {
    let value = e.target.value;
    this.setState({mapOption: value});
    this.props.zoomOptionChange(value);
  }

  signOutPopupClicked = () => {
    this.handleRequestClose();
    this.logout();
  }

  logout() {
    this.setState({ dialogVisible: true});
  }

  handleLogout() {
    // console.log("Comes to logout---------");
    this.props.stopSimulation();
    localStorage.clear();
    window.location.reload();
  }

  closeDialog() {
    this.setState({ dialogVisible: false});
  }

  render() {
    let confimation = "Are you sure you would want to log out ?";
    return (
      <MuiThemeProvider >
        <div className="pull-right">
          <div className="action-button-container " title={"Logged in as " + this.props.userName }>
            <button onClick={this.menuClick.bind(this)}>
              <i className="fa fa-user-circle"> {this.props.userName}</i>
            </button>
          </div>

          <div className="action-button-container" title="View Settings">
            <button onClick={this.settingsClick.bind(this)}>
              <i className="fa fa-eye"></i>
            </button>
          </div>

          <div className="action-button-container" title="Show Warnings">
            <button disabled={!this.props.actionButtons.warningViewEnabled} onClick={this.props.displayWarnings}>
              <i className="fa fa-exclamation-circle"></i>
            </button>
          </div>

        <div className="action-button-container" title="Restart Simulation">
            <button disabled={!this.props.actionButtons.replayEnabled} onClick={this.props.restartSimulation}>
                <i className="fa fa-repeat"></i>
              </button>
        </div>

          <div className="action-button-container" title={!window.socketStart ? "Start Simulation" : this.props.actionButtons.playEnabled ? "Start Simulation" : "Stop Simulation"}>
            <button onClick={this.props.startSimulation} disabled={!this.props.actionButtons.playEnabled && !window.socketStart}>
              <i className={!window.socketStart ? "fa fa-play" : this.props.actionButtons.playEnabled ? "fa fa-play" : "fa fa-stop"} ></i>
            </button>
          </div>
          
          <Popover className="settings-menu" open={this.state.isSettingsOpen}
            autoCloseWhenOffScreen={true}
            canAutoPosition={true}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onRequestClose={this.handleSettingsClose.bind(this)}>
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="1"
                    checked={this.state.mapOption === '1'}
                    onChange={this.radioChange} />
                        Focus all Cars
                 </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="2"
                    checked={this.state.mapOption === '2'}
                    onChange={this.radioChange} />
                        Focus only EV 
                 </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="3"
                    checked={this.state.mapOption === '3'}
                    onChange={this.radioChange} />
                        Allow Manual Zoom
                 </label>
              </div>
              <Checkbox checked={this.state.showRoutes} onChange={(event) => this.toggleRoutes(event)}>
                Show Car Path
              </Checkbox>
            </form>
          </Popover>


          {this.state.dialogVisible &&
            <ConfirmModal title="Log Out" modalIsOpen={this.state.dialogVisible} content={confimation}
            okAction={this.handleLogout.bind(this)} cancelAction={this.closeDialog.bind(this)} />  }

          <Popover className="menu_header"
            open={this.state.isMenuOpen}
            autoCloseWhenOffScreen={true}
            canAutoPosition={true}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onRequestClose={this.handleRequestClose.bind(this)}>
              <Menu >
                <MenuItem primaryText="Sign out" leftIcon={<Logouticon />} onClick={this.signOutPopupClicked.bind(this)} />
              </Menu>
          </Popover>
        </div>
      </MuiThemeProvider>

    );
  }
}
