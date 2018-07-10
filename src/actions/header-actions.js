import { SHOW_WARNINGS, ZOOM_OPTION_CHANGE, TOGGLE_ROUTES } from "./constants";

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

export function toggleRoutes(value) {
    return {
        type: TOGGLE_ROUTES,
        payload: value
    }
}