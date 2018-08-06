import React, {Component} from 'react';
import {MyMapComponent} from '../components/map.jsx';
import { connect } from 'react-redux';

class MyMapContainer extends Component {

  componentDidUpdate(){
    if(this.props.msgId){
      console.log('PROCESSED : ', this.props.msgId, " at time ", new Date().toLocaleTimeString() + " " + new Date().getMilliseconds());
      let obj = { processed: true, messageID: this.props.msgId }
      window.socket.emit("callback", JSON.stringify(obj));
    }
  }

  render() {
    return(
      <MyMapComponent
        isMarkerShown
        mapView={this.props.mapView}
      />

    );

  }
}

function mapStateToProps(state) {
  return {
    mapView: state.mapView,
    msgId: state.msgId
  }
}

export default connect(mapStateToProps)(MyMapContainer)
