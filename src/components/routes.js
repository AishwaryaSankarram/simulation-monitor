import React, { Component } from 'react';
import { Polyline } from 'react-google-maps';
import { connect } from 'react-redux';

class Routes extends Component {

    render() {
        let carMap = this.props.carMap; 
        let carMarkers = [];
        if(this.props.showRoutes){
            for(let index in this.props.carMap){
                let car = carMap[index];
                let lineSymbol = {}, previewIcon = [];
                if (this.props.showRoutes) {
                    lineSymbol = {
                        path: 'M 0,-1 0,1',
                        strokeOpacity: 1,
                        strokeColor: car.color || "#000000",
                        scale: 4
                    };
                    previewIcon = [{
                        icon: lineSymbol,
                        offset: '0',
                        repeat: '20px'
                    }];
                }
                let routeOptions = { strokeColor: car.color || "#000000", strokeOpacity: 0, icons: previewIcon }
                carMarkers.push(<div key={"car_route_" + index}>
                    <Polyline key={"old_path_veh_" + index} path={car.poly} options={routeOptions} />
                </div>);
            }
        }
        return (
            <div id="warnings" className="clearfix">
                {this.props.showRoutes && carMarkers}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        carMap: state.carMap,
        showRoutes: state.showRoutes
    }
}

export default connect(mapStateToProps)(Routes);