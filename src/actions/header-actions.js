import { SHOW_WARNINGS } from "./constants";

export function showWarnings(params) {
    return {
        type: SHOW_WARNINGS,
        currentState: params
    };
}