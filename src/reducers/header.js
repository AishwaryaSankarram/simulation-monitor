import { SHOW_WARNINGS } from '../actions/constants.js'


export default function (state = false, action) {
    // console.log("The reducer handling the action---", action);
    switch (action.type) {
        case SHOW_WARNINGS:
            return  !action.currentState;

        default:
            return state;
    }
}
