import { FETCH_ALL_SCENARIOS, FETCH_CARS, PLAY_CLICKED, STOP_CLICKED, REPLAY_CLICKED } from '../actions/constants.js'

import { actionButtonInitialState } from '../constants.js'

export default function(state = actionButtonInitialState, action) {

  switch(action.type) {
    case FETCH_ALL_SCENARIOS:
      return {playEnabled: false, replayEnabled: false, warningViewEnabled: false};

    case FETCH_CARS:
      return {playEnabled: true, replayEnabled: false, warningViewEnabled: false};

    case PLAY_CLICKED:
    case REPLAY_CLICKED:
      return {playEnabled: false, replayEnabled: true, warningViewEnabled: true};

    case STOP_CLICKED:
      return { playEnabled: true, replayEnabled: true, warningViewEnabled: true };

    default:
       return state;
  }
}
