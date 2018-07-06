import { ZOOM_OPTION_CHANGE } from '../actions/constants';

export default function (state = "1", action) {

    switch (action.type) {

        case ZOOM_OPTION_CHANGE:
            return action.payload;

        default:
            return state;
    }
}