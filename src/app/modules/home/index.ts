import HomePage from "./home-page/HomePage";

// import profileReducer from "./profile-page/reducer/ProfileReducer";

export const HomeModule = [
    { path: "/", component: HomePage, exact: false, isPrivate: false },
    // { path: "/change-password", component: ChangePasswordPage, exact: false, isPrivate: false },
];

export const homeReducers = {
    // profileReducer,
};
