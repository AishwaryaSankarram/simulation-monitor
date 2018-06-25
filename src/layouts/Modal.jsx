import React, {Component} from 'react';
import Modal from 'react-modal';
import WarningsTable from '../containers/warnings';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { showWarnings } from "../actions/header-actions";


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
					 <div className="confirmation-modal">
           <div className="modal-body">
              <WarningsTable/>
							</div>

            <div className="modal-footer">
                <button label="Close"  style={style} onClick={this.closeModal} />
            </div>
            </div>
    </Modal>
    );
	}

}

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modalIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showWarnings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (WarningsModal);
