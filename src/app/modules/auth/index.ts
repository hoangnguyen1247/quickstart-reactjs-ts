import LoginPage from "./login-page/LoginPage";

// import profileReducer from "./profile-page/reducer/ProfileReducer";

export const AuthModule = [
    { path: "/login", component: LoginPage, exact: false, isPrivate: false },
];

export const authReducers = {
    // profileReducer,
};
