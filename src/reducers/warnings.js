import { warningsInitialState } from '../constants.js';
import { CAR_DATA, PLAY_CLICKED, REPLAY_CLICKED } from '../actions/constants.js';

export default function (state = [], action) {
  switch(action.type) {
    case CAR_DATA:
      let copiedState = [].concat(state);
      let warningArray = action.payload["AwarenessData"].Warning.split(" ");
      if (Object.keys(warningsInitialState).indexOf(warningArray[0]) > -1){
          let evLocation = action.payload["EVLocation"];
          let rvLocation = action.payload["RVLocation"];
          warningArray.forEach(warning => {
            if(warningsInitialState.hasOwnProperty(warning)){
                copiedState = copiedState.concat({ type: warning, timestamp: new Date().toLocaleString(),
                      lat: evLocation.LatitudeInDeg, lng: evLocation.LongitudeInDeg,
                      evId: evLocation.vehID, rvId: rvLocation.vehID, speed: evLocation.SpeedInMetersPerSec});
            }
          });
      }
      return copiedState;

    case REPLAY_CLICKED:
    case PLAY_CLICKED:
      return [];      
  
    default:
      return state;
  }
}
