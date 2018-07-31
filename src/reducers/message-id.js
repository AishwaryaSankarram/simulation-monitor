import { CAR_DATA, STOP_CLICKED, PLAY_CLICKED, REPLAY_CLICKED } from '../actions/constants';

export default function (state = null, action) {
    switch (action.type) {
        case CAR_DATA:
            return action.payload.messageID || state;

        case REPLAY_CLICKED:
        case STOP_CLICKED:
        case PLAY_CLICKED:
            return false;

        default:
            return state;    
    }
}