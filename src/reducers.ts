import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

type State = {

};

type Action = {

};

const appReducer = combineReducers({
    i18n: i18nReducer,
});

export default (state, action) => {
    if (action.type === "RESET_STATE") {
        state = undefined;
    }

    return appReducer(state, action);
}
