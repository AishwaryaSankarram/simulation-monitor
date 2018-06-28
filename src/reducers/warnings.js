import { warningsInitialState } from '../constants.js'
import { DATA_RECEIVED } from '../actions/constants.js';

export default function (state = { count: warningsInitialState, data: [] }, action) {
  switch(action.type) {
    case DATA_RECEIVED:
      let warningArray = action.content["AwarenessData"].Warning.split(" ");
      let copiedState = Object.assign(state, {});
      let evLocation = action.content["EVLocation"];
      let rvLocation = action.content["RVLocation"];
      let warningsHash = Object.assign(copiedState.count, {});
      warningArray.forEach(warning => {
        if(warningsInitialState.hasOwnProperty(warning)){
            warningsHash[warning] = warningsHash[warning] + 1;
            console.log("WARNINGS HASH ->", warningsHash);
            copiedState.data = copiedState.data.concat({ type: warning, timestamp: new Date().toLocaleString(),
                  lat: evLocation.LatitudeInDeg, lng: evLocation.LongitudeInDeg,
                  evId: evLocation.vehID, rvId: rvLocation.vehID, speed: evLocation.SpeedInMetersPerSec});
        }
      });
      return { count: warningsHash, data: copiedState.data };
    default:
      return state;
  }
}
