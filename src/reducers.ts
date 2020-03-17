import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

import { profileReducers } from './app/modules/profile';

type State = {

};

type Action = {

};

const appReducer = combineReducers({
    i18n: i18nReducer,

    ...profileReducers,
});

// const rootReducer = (state: RootState, action: any) => {
//     if (action.type === "RESET_STATE") {
//         state = {} as RootState;
//     }

//     return appReducer(state, action);
// }

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
