import { 
    CATALOG__CHANGE_MIN_WIDTH_992,
    CATALOG__CHANGE_DARK_MODE,
    CATALOG__CHANGE_NAVIGATION_IN_RIGHT,
    CATALOG__GET_PROFILE_SUCCESS,
    CATALOG__GET_PROFILE_FAILURE,
} from "./AppActions";

const initialState = {
    minWidth992: false,
    darkMode: false,
    navigationInRight: false,
    profile: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CATALOG__CHANGE_MIN_WIDTH_992:
            return {
                ...state,
                minWidth992: action.minWidth992,
            }
        case CATALOG__CHANGE_DARK_MODE:
            return {
                ...state,
                darkMode: action.darkMode,
            }
        case CATALOG__CHANGE_NAVIGATION_IN_RIGHT:
            return {
                ...state,
                navigationInRight: action.navigationInRight,
            }
        case CATALOG__GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile,
            }
        case CATALOG__GET_PROFILE_FAILURE:
            return {
                ...state,
                profile: null,
            }
        default:
            return state;
    }
}
