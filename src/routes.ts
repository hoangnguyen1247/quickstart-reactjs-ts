import LoginPage from "./app/modules/auth/login-page/LoginPage";
import HomePage from "./app/modules/home/home-page/HomePage";

export const routes = [
    { path: '/', component: LoginPage, exact: true },
    { path: '/:id', component: HomePage, exact: false },
];
