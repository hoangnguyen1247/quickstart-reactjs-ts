import SignInPage from "app/modules/auth/login-page/SignInPage";
import HomePage from "app/modules/home/home-page/HomePage";

export const routes = [
    { path: '/', component: SignInPage, exact: true },
    { path: '/:id', component: HomePage, exact: false },
];
