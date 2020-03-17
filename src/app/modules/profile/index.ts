// import ProfilePage from "app/modules/profile/profile-page/ProfilePage";
// import ChangePasswordPage from 'app/modules/profile/change-password-page/ChangePasswordPage';

import profileReducer from "./profile-page/reducer/ProfileReducer";

export const ProfileModule = [
    // { path: "/profile", component: ProfilePage, exact: false, isPrivate: false },
    // { path: "/change-password", component: ChangePasswordPage, exact: false, isPrivate: false },
];

export const profileReducers = {
    profileReducer,
};
