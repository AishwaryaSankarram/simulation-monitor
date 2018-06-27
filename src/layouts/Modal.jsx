import React, {Component} from 'react';
import Modal from 'react-modal';
import WarningsTable from '../containers/warnings';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { showWarnings } from "../actions/header-actions";
import { MuiThemeProvider, RaisedButton } from 'material-ui';
import '../css/modal.css';


const style = {
  margin: 15,
  customWidth:{
    width:200,
  }
};

class WarningsModal extends Component {
  
	constructor(props){
		super(props);
    this.closeModal = this.closeModal.bind(this);
	}

  componentWillMount() {
    Modal.setAppElement('div');
  }

	closeModal() {
    this.props.showWarnings(this.props.modalIsOpen);
  }

	render(){
		return (
      <Modal isOpen={this.props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        contentLabel="Warnings" className="warnings-modal" >
        <MuiThemeProvider>
          <div className="confirmation-modal">
            <div className="modal-header">
              <h4 className="modal-title" ref={subtitle => this.subtitle = subtitle}>Warnings</h4>
            </div>
            <div className="modal-body">
              <WarningsTable warnings={this.props.warnings}/>
            </div>
            <div className="modal-footer">
              <RaisedButton label= "Close" style={style} onClick={this.closeModal} />
            </div>
          </div>
        </MuiThemeProvider>
      </Modal>
    );
	}

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showWarnings }, dispatch);
}

export default connect(null, mapDispatchToProps) (WarningsModal);
