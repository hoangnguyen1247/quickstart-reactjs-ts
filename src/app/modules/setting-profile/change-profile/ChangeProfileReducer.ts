import { Dispatch } from 'redux';

import { PAGE_STATES } from "src/app/utils/Constants";

export const CHANGE_PROFILE__CHANGE_PAGE_STATE = "CHANGE_PROFILE__CHANGE_PAGE_STATE";

export function changeProfile_changePageState() {
    return function(dispatch: Dispatch) {
        dispatch({
            type: CHANGE_PROFILE__CHANGE_PAGE_STATE,
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
