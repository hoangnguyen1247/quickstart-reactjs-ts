// import { Route, RouteProps } from 'react-router-dom';

// import LoginPage from "./app/modules/auth/login-page/LoginPage";
// import HomePage from "./app/modules/home/home-page/HomePage";

import { AuthModule } from './app/modules/auth';
import { HomeModule } from './app/modules/home';

// export type CustomRouteProps = { isPrivate?: boolean } & RouteProps;

export const routes = [
    ...AuthModule,
    ...HomeModule,
    // { path: "/", component: LoginPage, exact: true, isPrivate: false },
    // { path: "/:id", component: HomePage, exact: false, isPrivate: false },
];
