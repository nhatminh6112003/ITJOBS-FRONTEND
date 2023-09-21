import { lazy } from 'react';
import routesPath from '~/App/config/routesPath';
const Login = lazy(() => import('~/App/pages/Admin/Login'));
const Dashboard = lazy(() => import('~/App/pages/Admin/Dashboard'));
const Products = lazy(() => import('~/App/pages/Admin/Products'));
const JobPositionCategory = lazy(() => import('~/App/pages/Admin/JobPositionCategory'));
const JobWelfare = lazy(() => import('~/App/pages/Admin/JobWelfare'))

const adminPublicRoutes = [{ path: routesPath.AdminPaths.login, component: Login, layout: null }];

const adminPrivateRoutes = [
	{ path: routesPath.AdminPaths.dashboard, component: Dashboard },
	{ path: routesPath.AdminPaths.products, component: Products },
	{ path: routesPath.AdminPaths.jobPositionCategory, component: JobPositionCategory },
	{ path: routesPath.AdminPaths.jobWelfare, component: JobWelfare },
];
export { adminPublicRoutes, adminPrivateRoutes };
