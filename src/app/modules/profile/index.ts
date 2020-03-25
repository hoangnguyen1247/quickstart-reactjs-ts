import ProfilePage from "./profile-page/ProfilePage";
import ChangeProfilePage from "./change-profile/ChangeProfilePage";
import ChangePasswordPage from './change-password/ChangePasswordPage';

import profileReducer from "./profile-page/reducer/ProfileReducer";
import changeProfileReducer from "./change-profile/reducer/ChangeProfileReducer";
import changePasswordReducer from "./change-password/reducer/ChangePasswordReducer";

export const ProfileModule = [
    { path: "/profile", component: ProfilePage, exact: true, isPrivate: true },
    { path: "/profile/change", component: ChangeProfilePage, exact: true, isPrivate: true },
    { path: "/change-password", component: ChangePasswordPage, exact: false, isPrivate: false },
];

export const profileReducers = {
    profileReducer,
    changeProfileReducer,
    changePasswordReducer,
};
