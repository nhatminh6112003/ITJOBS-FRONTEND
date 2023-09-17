import { lazy } from 'react';
import routesPath from '~/App/config/routesPath';
const Login = lazy(() => import('~/App/pages/Admin/Login'));

const adminPublicRoutes = [{ path: routesPath.AdminPaths.login, component: Login }];

const adminPrivateRoutes = [{}];
export { adminPublicRoutes, adminPrivateRoutes };
