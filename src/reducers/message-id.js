import { CAR_DATA } from '../actions/constants';

export default function (state = null, action) {
    switch (action.type) {
        case CAR_DATA:
            return action.payload.messageID;
        default:
            return state;    
    }
}