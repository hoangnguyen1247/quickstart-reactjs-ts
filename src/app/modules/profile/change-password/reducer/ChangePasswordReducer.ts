import { PAGE_STATES } from "../../../../utils/Constants";
// import { 
//     HOME__CHANGE_PAGE_STATE,
// } from "../actions/HomeActions";

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
