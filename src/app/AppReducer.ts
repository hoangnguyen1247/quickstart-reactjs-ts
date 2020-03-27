import { 
    CATALOG__CHANGE_MIN_WIDTH_992,
    CATALOG__CHANGE_NAVIGATION_IN_RIGHT,
} from "./AppActions";

const initialState = {
    minWidth992: false,
    navigationInRight: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CATALOG__CHANGE_MIN_WIDTH_992:
            return {
                ...state,
                minWidth992: action.minWidth992,
            }
        case CATALOG__CHANGE_NAVIGATION_IN_RIGHT:
            return {
                ...state,
                navigationInRight: action.navigationInRight,
            }
        default:
            return state;
    }
}
