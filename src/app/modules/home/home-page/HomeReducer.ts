import { Dispatch } from 'redux';

import { PAGE_STATES } from "src/app/utils/Constants";

export const HOME__CHANGE_PAGE_STATE = "HOME__CHANGE_PAGE_STATE";

export function home_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: HOME__CHANGE_PAGE_STATE,
        });
    }
}

const initialState = {
    pageState: PAGE_STATES.PRISTINE,
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case HOME__CHANGE_PAGE_STATE:
            return {
                ...state,
                pageState: action.pageState,
            };
        default:
            return state;
    }
}
