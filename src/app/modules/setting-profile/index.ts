import { AllRoleTypes } from "../../enum/RoleType";

import ProfilePage from "./profile-page/ProfilePage";
import ChangeProfilePage from "./change-profile/ChangeProfilePage";
import ChangePasswordPage from './change-password/ChangePasswordPage';

import profileReducer from "./profile-page/ProfileReducer";
import changeProfileReducer from "./change-profile/ChangeProfileReducer";
import changePasswordReducer from "./change-password/ChangePasswordReducer";

export const ProfileModule = [
    { path: "/profile", component: ProfilePage, exact: true, isPrivate: true, allowRoles: AllRoleTypes },
    { path: "/profile/change", component: ChangeProfilePage, exact: true, isPrivate: true, allowRoles: AllRoleTypes },
    { path: "/profile/change-password", component: ChangePasswordPage, exact: true, isPrivate: false, allowRoles: AllRoleTypes },
];

export const profileReducers = {
    profileReducer,
    changeProfileReducer,
    changePasswordReducer,
};
