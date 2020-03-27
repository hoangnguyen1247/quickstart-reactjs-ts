// import { Route, RouteProps } from 'react-router-dom';

import { AuthModule } from './app/modules/auth';
import { HomeModule } from './app/modules/home';
import { ProfileModule } from './app/modules/profile';

import NotFoundPage from './app/modules/home/not-found-page/NotFoundPage';

// export type CustomRouteProps = { isPrivate?: boolean } & RouteProps;

export const routes = [
    ...HomeModule,
    ...AuthModule,
    ...ProfileModule,
    { path: "/:id", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
    { path: "*", component: NotFoundPage, exact: false, isPrivate: false, allowRoles: [] },
];
