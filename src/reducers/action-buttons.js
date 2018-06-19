import { FETCH_ALL_SCENARIOS, FETCH_CARS } from '../actions/constants.js'

import { actionButtonInitialState } from '../constants.js'

export default function(state = actionButtonInitialState, action) {

  switch(action.type) {
    case FETCH_ALL_SCENARIOS:
      return {playEnabled: false, replayEnabled: false, warningViewEnabled: false};

    case FETCH_CARS:
      return {playEnabled: true, replayEnabled: false, warningViewEnabled: false};

    default:
       return state;  
  }
}
