import React, {Component} from 'react';
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logouticon from 'material-ui/svg-icons/action/power-settings-new';
import { ConfirmModal } from "../layouts/confirm-modal";
import '../css/action-buttons.css';


export class ActionButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false,
      dialogVisible: false
    };
  }

  menuClick() {
    // This prevents ghost click.
    // this.props.preventDefault();
    this.setState({
      isMenuOpen: true,
      // anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      isMenuOpen: false,
    });
  }

  signOutPopupClicked = () => {
    this.handleRequestClose();
    this.logout();
  }

  logout() {
    this.setState({ dialogVisible: true});
  }

  handleLogout() {
    console.log("Comes to logout---------");
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
          <div className="action-button-container ">
            <button onClick={this.menuClick.bind(this)}>
              <i className="fa fa-user-circle"> {this.props.userName}</i>
            </button>
          </div>
          <div className="action-button-container">
            <button disabled={!this.props.actionButtons.warningViewEnabled} onClick={this.props.displayWarnings}>
              <i className="fa fa-exclamation-circle"></i>
            </button>
          </div>

        <div className="action-button-container">
              <button disabled={!this.props.actionButtons.replayEnabled} onClick={this.props.startSimulation}>
                <i className="fa fa-repeat"></i>
              </button>
        </div>

          <div className="action-button-container">
            <button disabled={!this.props.actionButtons.playEnabled} onClick={this.props.startSimulation}>
              <i className="fa fa-play"></i>
            </button>
          </div>
        
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
