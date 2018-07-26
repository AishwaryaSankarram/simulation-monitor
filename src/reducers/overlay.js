import { PLAY_CLICKED, CAR_DATA, REPLAY_CLICKED } from '../actions/constants'

export default function(state={overlayShow: false, overlayText:""}, action) {

  switch(action.type) {
    
    case REPLAY_CLICKED:
    case PLAY_CLICKED:
      return {overlayShow: true, overlayText: "Simulation is starting up between " + action.payload + " cars . Please Wait..."};

    case CAR_DATA:
      return {overlayShow: false, overlayText: ""};

    default:
      return state;
  }
}
