import { Route, RouteProps } from 'react-router-dom';

import LoginPage from "./app/modules/auth/login-page/LoginPage";
import HomePage from "./app/modules/home/home-page/HomePage";

import { CustomRoute, ICustomRoute } from './app/AppHOC';

export type CustomRouteProps = { isPrivate?: boolean } & RouteProps;

export const routes: ICustomRoute[] = [
    CustomRoute({ path: "/", component: LoginPage, exact: true }),
    CustomRoute({ path: "/:id", component: HomePage, exact: false }),
];
