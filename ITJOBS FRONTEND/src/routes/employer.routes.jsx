import React from 'react';

import config from '~/config/config.routes';

import Cart from '~/pages/jobseeker/Cart';

const Login = React.lazy(() => import('~/pages/employer/Login'));
const Register = React.lazy(() => import('~/pages/employer/Register'));
const ErrorPage = React.lazy(() => import('~/components/layouts/ErrorPage'));

const employerPublicRoutes = [
	{ path: config.employerRoutes.register, component: Register },
	{ path: config.employerRoutes.login, component: Login },

	{ path: config.employerRoutes.errorPage, component: ErrorPage, layout: null }
];

const employerPrivateRoutes = [{ path: config.employerRoutes.cart, component: Cart }];
export { employerPublicRoutes, employerPrivateRoutes };
