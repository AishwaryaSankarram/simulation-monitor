import { SHOW_WARNINGS } from '../actions/constants.js'

import { mapViewInitialState } from '../constants.js'

export default function (state = mapViewInitialState, action) {
    console.log("The reducer handling the action---", action);
    switch (action.type) {
        case SHOW_WARNINGS:
            return  !action.currentState;

        default:
            return false;
    }
}
