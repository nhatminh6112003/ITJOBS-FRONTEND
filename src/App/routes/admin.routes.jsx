import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';
const Login = lazy(() => import('../pages/admin/Login'));

const adminPublicRoutes = [{ path: routesPath.AdminPaths.login, component: Login }];

const adminPrivateRoutes = [{}];
export { adminPublicRoutes, adminPrivateRoutes };
