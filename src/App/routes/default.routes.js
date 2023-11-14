import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';
const NotFound = lazy(() => import('~/App/pages/Default/NotFound'));
const ResumeStyle = lazy(() => import('~/App/pages/Default/ResumeStyle'));

const defaultRoutes = [
	{ path: routesPath.BasePaths.NOT_FOUND, component: NotFound, layout: null },
	{ path: routesPath.BasePaths.ResumeStyle, component: ResumeStyle, layout: null }
];

export { defaultRoutes };
