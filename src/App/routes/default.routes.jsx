import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';

const ErrorPage = lazy(() => import('~/Core/components/layouts/ErrorPage'));

const defaultRoutes = [{ path: routesPath.BasePaths.errorPage, component: ErrorPage, layout: null }];

export { defaultRoutes };
