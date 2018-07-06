import { SHOW_WARNINGS, ZOOM_OPTION_CHANGE } from "./constants";

export function showWarnings(params) {
    return {
        type: SHOW_WARNINGS,
        currentState: params
    };
}

export function zoomOptionChange(value) {
    return {
        type: ZOOM_OPTION_CHANGE,
        payload: value
    }
}