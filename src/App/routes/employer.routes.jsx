import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';

const Login = lazy(() => import('~/App/pages/Employer/Login'));
const Register = lazy(() => import('~/App/pages/Employer/Register'));
const EmployerDashboard = lazy(() => import('~/App/pages/Employer/Dashboard'));

const employerPublicRoutes = [
	{ path: routesPath.EmployerPaths.register, component: Register },
	{ path: routesPath.EmployerPaths.login, component: Login }
];

const employerPrivateRoutes = [
	{
		path: routesPath.EmployerPaths.dashboard,
		component: EmployerDashboard
	}
];
export { employerPublicRoutes, employerPrivateRoutes };
