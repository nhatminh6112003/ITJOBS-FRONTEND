import { lazy } from 'react';
import routesPath from '~/App/config/routesPath';
const Login = lazy(() => import('~/App/pages/Admin/Login'));
const Dashboard = lazy(() => import('~/App/pages/Admin/Dashboard'));
const Products = lazy(() => import('~/App/pages/Admin/Products'));
const JobPositionCategory = lazy(() => import('~/App/pages/Admin/JobPositionCategory'));
const JobWelfare = lazy(() => import('~/App/pages/Admin/JobWelfare'));
const JobSeeker = lazy(() => import('~/App/pages/Admin/JobSeeker'));
const Employer = lazy(() => import('~/App/pages/Admin/Employer'));
const Profession = lazy(() => import('~/App/pages/Admin/Profession'));
const adminPublicRoutes = [{ path: routesPath.AdminPaths.login, component: Login, layout: null }];
const Company = lazy(() => import('~/App/pages/Admin/Company'));
const Benefits = lazy(() => import('~/App/pages/Admin/Benefits'))

const adminPrivateRoutes = [
	{ path: routesPath.AdminPaths.dashboard, component: Dashboard },
	{ path: routesPath.AdminPaths.products, component: Products },
	{ path: routesPath.AdminPaths.jobPositionCategory, component: JobPositionCategory },
	{ path: routesPath.AdminPaths.jobWelfare, component: JobWelfare },
	{ path: routesPath.AdminPaths.jobSeeker, component: JobSeeker },
	{ path: routesPath.AdminPaths.employer, component: Employer },
	{ path: routesPath.AdminPaths.profession, component: Profession },
	{ path: routesPath.AdminPaths.company, component: Company },
	{ path: routesPath.AdminPaths.benefits, component: Benefits }
];
export { adminPublicRoutes, adminPrivateRoutes };
