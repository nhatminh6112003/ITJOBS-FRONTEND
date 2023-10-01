import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';
const Home = lazy(() => import('../pages/Jobseeker/Home'));
const About = lazy(() => import('../pages/Jobseeker/About'));
const Detail = lazy(() => import('../pages/Jobseeker/Detail'));
const Cart = lazy(() => import('../pages/Jobseeker/Cart'));
const Product = lazy(() => import('../pages/Jobseeker/Product'));
const Login = lazy(() => import('../pages/Jobseeker/Login'));
const Register = lazy(() => import('../pages/Jobseeker/Register'));
const AllJob = lazy(() => import('../pages/Jobseeker/AllJob'));
const Dashboard = lazy(() => import('../pages/Jobseeker/Dashboard'));
const MyProfile = lazy(() => import('../pages/Jobseeker/MyProfile'));
const ChangeTemplate = lazy(() => import('../pages/Jobseeker/ChangeTemplate'));
const MyAttach = lazy(() => import('../pages/Jobseeker/MyAttach'));

const jobSeekerPublicRoutes = [
	{ path: routesPath.JobseekerPaths.home, component: Home },
	{ path: routesPath.JobseekerPaths.about, component: About },
	{ path: routesPath.JobseekerPaths.detail, component: Detail },
	{ path: routesPath.JobseekerPaths.product, component: Product },
	{ path: routesPath.JobseekerPaths.allJob, component: AllJob },
	{ path: routesPath.JobseekerPaths.login, component: Login },
	{ path: routesPath.JobseekerPaths.register, component: Register }
];

const jobSeekerPrivateRoutes = [
	{ path: routesPath.JobseekerPaths.cart, component: Cart },
	{ path: routesPath.JobseekerPaths.dashboard, component: Dashboard },
	{ path: routesPath.JobseekerPaths.myProfile, component: MyProfile },
	{ path: routesPath.JobseekerPaths.changeTemplate, component: ChangeTemplate },
	{ path: routesPath.JobseekerPaths.myAttach, component: MyAttach },
];
export { jobSeekerPublicRoutes, jobSeekerPrivateRoutes };
