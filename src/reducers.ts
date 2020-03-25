import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

import { commonReducers } from './app/modules/common';
import { profileReducers } from './app/modules/profile';

const appReducer = combineReducers({
    i18n: i18nReducer,

    ...commonReducers,
    ...profileReducers,
});

const rootReducer = (state, action: any) => {
    if (action.type === "RESET_STATE") {
        state = undefined;
    }

    return appReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
