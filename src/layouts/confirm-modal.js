import React, { Component } from 'react';
import Modal from 'react-modal';
import { MuiThemeProvider, RaisedButton } from 'material-ui';
import '../css/modal.css';

const style = {
    margin: 15,
    customWidth: {
        width: 200,
    }
};

export class ConfirmModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: this.props.modalIsOpen,
            className: this.props.title.toLowerCase().replace(/\s/g, "-")
        };
        this.closeModal = this.closeModal.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('div');
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        this.props.cancelAction();
    }

    onSave() {
        this.setState({ modalIsOpen: false });
        this.props.okAction(this.props.data);
    }

    render() {
        return (
            <Modal isOpen={this.state.modalIsOpen}
                shouldCloseOnOverlayClick={false}
                contentLabel={this.props.title} className={" " + this.state.className} >
                <MuiThemeProvider>
                    <div className="confirmation-modal">
                        <div className="modal-header">
                            <h4 className="modal-title" ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                        </div>
                        {this.props.okAction &&
                            <div className="modal-footer">
                                <RaisedButton label={this.props.labelOk || "Yes"} primary={true} style={style} onClick={this.onSave} />
                                <RaisedButton label={this.props.labelCancel || "No"} style={style} onClick={this.closeModal} />
                            </div>
                        }
                    </div>
                </MuiThemeProvider>
            </Modal>
        );
    }

}
