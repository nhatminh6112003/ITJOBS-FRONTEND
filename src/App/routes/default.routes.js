import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';

const NotFound = lazy(() => import('~/App/pages/Default/NotFound'));

const defaultRoutes = [{ path: routesPath.BasePaths.NOT_FOUND, component: NotFound, layout: null }];

export { defaultRoutes };
