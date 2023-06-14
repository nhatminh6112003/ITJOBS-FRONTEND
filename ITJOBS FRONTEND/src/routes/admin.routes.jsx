import React from 'react';

import config from '~/config/config.routes';

import Cart from '~/pages/jobseeker/Cart';

const Login = React.lazy(() => import('~/pages/admin/Login'));

const ErrorPage = React.lazy(() => import('~/components/layouts/ErrorPage'));

const adminPublicRoutes = [
	{ path: config.adminRoutes.login, component: Login },
	{ path: config.adminRoutes.errorPage, component: ErrorPage, layout: null }
];

const adminPrivateRoutes = [{ path: config.adminRoutes.cart, component: Cart }];
export { adminPublicRoutes, adminPrivateRoutes };
