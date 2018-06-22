import React, {Component} from 'react';
import '../css/modal.css';

export default class Warnings extends Component{
    render(){
        return(
            <div className="logs-content">
                <div className="logs-header">
                    <h4 className="logs-title">Warning Information</h4>
                </div>
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
                               
                            </tbody>
                        </table>
                </div>
		    </div>
        );     
    }
}