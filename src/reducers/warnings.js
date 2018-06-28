import { warningsInitialState } from '../constants.js'
import { CAR_DATA } from '../actions/constants.js';

export default function (state = { count: warningsInitialState, data: [] }, action) {
  switch(action.type) {
    case CAR_DATA:
      let copiedState = Object.assign(state, {});
      let warningsHash = Object.assign(copiedState.count, {});
      let warningArray = action.payload["AwarenessData"].Warning.split(" ");
      if (Object.keys(warningsInitialState).indexOf(warningArray[0]) > -1){

          let evLocation = action.payload["EVLocation"];
          let rvLocation = action.payload["RVLocation"];
          warningArray.forEach(warning => {
            if(warningsInitialState.hasOwnProperty(warning)){
                warningsHash[warning] = warningsHash[warning] + 1;
                console.log("WARNINGS HASH ->", warningsHash);
                copiedState.data = copiedState.data.concat({ type: warning, timestamp: new Date().toLocaleString(),
                      lat: evLocation.LatitudeInDeg, lng: evLocation.LongitudeInDeg,
                      evId: evLocation.vehID, rvId: rvLocation.vehID, speed: evLocation.SpeedInMetersPerSec});
            }
          });
      }
      return { count: warningsHash, data: copiedState.data };
    default:
      return state;
  }
}
