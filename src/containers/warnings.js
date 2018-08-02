import React, {Component} from 'react';
import { connect } from 'react-redux';

class WarningsTable extends Component{
    render(){
        let self = this;
        let warningData = this.props.warnings.map((w, index) => {
            return (
                <tr key={"warning_"+ index}>
                <td>{w.type}</td>
                <td>{w.timestamp}</td>
                <td>{w.lat}</td>
                <td>{w.lng}</td>
                <td>{w.speed}</td>
                <td>{self.props.carMap[w.evId].label}</td>
                <td>{self.props.carMap[w.rvId].label}</td>
            </tr>
            );
        });
        return(
            <div className="logs-content">
                <div id="logsBody" className="logs-body">
                        <table id="warningTable">
                            <thead>
                                <tr>
                                    <th>Warning Type</th>
                                    <th>Time</th>
                                    <th>Latitude(N)</th>
                                    <th>Longitude(W)</th>
                                    <th>Speed(mph)</th>
                                    <th>EV ID</th>
                                    <th>RV ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warningData}
                            </tbody>
                        </table>
                </div>
		    </div>
        );     
    }
}

function mapStateToProps(state){
    return {
        warnings: state.warnings,
        carMap: state.carMap
    };
}

export default connect(mapStateToProps)(WarningsTable);