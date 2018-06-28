import { warningsInitialState } from '../constants.js'
import { DATA_RECEIVED } from '../actions/constants.js';

export default function (state = { count: warningsInitialState, data: [] }, action) {
  switch(action.type) {
    case "CAR_DATA":
      let warningsHash = Object.assign(copiedState.count, {});
      let copiedState = Object.assign(state, {});
      if (Object.keys(warningsInitialState).indexOf(content.AwarenessData.Warning.split(" ")[0]) > -1){
          let warningArray = action.content["AwarenessData"].Warning.split(" ");
          let evLocation = action.content["EVLocation"];
          let rvLocation = action.content["RVLocation"];
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
