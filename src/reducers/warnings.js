import { warningsInitialState } from '../constants.js'
import { CAR_DATA, PLAY_CLICKED, REPLAY_CLICKED } from '../actions/constants.js';

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
                copiedState.data = copiedState.data.concat({ type: warning, timestamp: new Date().toLocaleString(),
                      lat: evLocation.LatitudeInDeg, lng: evLocation.LongitudeInDeg,
                      evId: evLocation.vehID, rvId: rvLocation.vehID, speed: evLocation.SpeedInMetersPerSec});
            }
          });
      }
      return { count: warningsHash, data: copiedState.data };

    case REPLAY_CLICKED:
    case PLAY_CLICKED:
      return {
        count: {
          "FCW": 0,
          "FRCA": 0,
          "FLCA": 0,
          "ICW": 0,
          "EBW": 0,
          "SMVA": 0,
          "SVA": 0,
          "BSW": 0,
          "LCW": 0,
          "RRCA": 0,
          "RLCA": 0
        }, data: []
       };      
  
    default:
      return state;
  }
}
