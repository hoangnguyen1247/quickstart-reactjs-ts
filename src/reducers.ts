import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

export interface RootState {
    i18n: any,
    homeReducer: any,
    profileReducer: any,
}

type State = {

};

type Action = {

};

const appReducer = combineReducers({
    i18n: i18nReducer,
});

export default (state: RootState | undefined, action: any) => {
    if (action.type === "RESET_STATE") {
        state = undefined;
    }

    return appReducer(state, action);
}
