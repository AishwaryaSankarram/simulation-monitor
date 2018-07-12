import { warningsInitialState } from '../constants.js'
import { CAR_DATA, PLAY_CLICKED, REPLAY_CLICKED } from '../actions/constants.js';

export default function (state = warningsInitialState, action) {
    let copiedState = Object.assign({}, state);
    switch (action.type) {
        case CAR_DATA:
            let warningsHash = Object.assign({}, copiedState);
            let warningArray = action.payload["AwarenessData"].Warning.split(" ");
            if (Object.keys(warningsInitialState).indexOf(warningArray[0]) > -1) {
                warningArray.forEach(warning => {
                    let wc = warningsHash[warning];
                    if (warningsInitialState.hasOwnProperty(warning)) {
                        warningsHash[warning] = wc + 1;
                    }
                });
            }
            return warningsHash;

        case REPLAY_CLICKED:
        case PLAY_CLICKED:
            return {
                    "FCW": 0,
                    "FRCA": 0,
                    "FLCA": 0,
                    "ICW": 0,
                    "EBW": 0,
                    "SMVA": 0,
                    "SVA": 0,
                    "BSW": 0,
                    "LCW": 0,
                    "RRCA": 0,
                    "RLCA": 0
            };

        default:
            return copiedState;
    }
}
