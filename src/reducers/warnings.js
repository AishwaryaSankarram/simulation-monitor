import { warningsInitialState } from '../constants.js'
import { DATA_RECEIVED } from '../actions/constants.js';

export default function (state = { count: warningsInitialState, data: [] }, action) {
  switch(action.type) {
    case DATA_RECEIVED:
      let warningArray = action.content["AwarenessData"].Warning.split(" ");
      let warningsHash = Object.assign(state.count, {});
      warningArray.forEach(warning => {
        if(warningsInitialState.hasOwnProperty(warning)){
            warningsHash[warning] = warningsHash[warning] + 1;
        }
      });
      return { count: warningsHash, data: [] };
    default:
      return {count: warningsInitialState, data: []};
  }
}
