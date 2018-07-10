import { TOGGLE_ROUTES } from '../actions/constants';

export default function (state = false, action) {

    switch (action.type) {

        case TOGGLE_ROUTES:
            return action.payload;

        default:
            return state;
    }
}