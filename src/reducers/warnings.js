import { warningsInitialState } from '../constants.js'

export default function(state = warningsInitialState, action) {
  switch(action.type) {

    default:
      return state;
  }
}
