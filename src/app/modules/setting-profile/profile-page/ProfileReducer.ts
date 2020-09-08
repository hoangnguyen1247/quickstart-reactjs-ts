import { Dispatch } from 'redux';

import { PAGE_STATES } from "src/app/utils/Constants";

export const PROFILE_PAGE__CHANGE_PAGE_STATE = "PROFILE_PAGE__CHANGE_PAGE_STATE";

export function profilePage_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: PROFILE_PAGE__CHANGE_PAGE_STATE,
        });
    }
}

const initialState = {
    pageState: PAGE_STATES.PRISTINE,
    profile: null,
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        // case HOME__CHANGE_PAGE_STATE:
        //     return {
        //         ...state,
        //         pageState: action.pageState,
        //     };
        default:
            return state;
    }
}
