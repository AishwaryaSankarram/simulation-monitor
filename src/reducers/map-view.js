import { FETCH_CARS, CAR_DATA, STOP_CLICKED } from '../actions/constants'

import { mapViewInitialState } from '../constants';

export default function(state = mapViewInitialState, action) {

  switch(action.type) {
    case FETCH_CARS:
       return {previewMode: true, playMode: false};

    case STOP_CLICKED:
      return { previewMode: true, playMode: false };

    case CAR_DATA:
      return window.socketStart ? { previewMode: false, playMode: true } : { previewMode: true, playMode: false };

    default:
      return state;
  }

}
