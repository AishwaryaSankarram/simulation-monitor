import { PLAY_CLICKED } from '../actions/constants'

export default function(state={overlayShow: false, overlayText:""}, action) {

  switch(action.type) {

    case PLAY_CLICKED:
      return {overlayShow: true, overlayText: "Simulation is Starting Up. Please Wait..."};

    case "CAR_DATA":
      return {overlayShow: false, overlayText: ""};

    default:
      return state;
  }
}
