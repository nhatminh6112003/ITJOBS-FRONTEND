import React from 'react';

import config from '~/config/config.routes';

const Home = React.lazy(() => import('~/pages/jobseeker/Home'));
const About = React.lazy(() => import('~/pages/jobseeker/About'));
const Detail = React.lazy(() => import('~/pages/jobseeker/Detail'));
const Cart = React.lazy(() => import('~/pages/jobseeker/Cart'));
const Product = React.lazy(() => import('~/pages/jobseeker/Product'));
const Login = React.lazy(() => import('~/pages/jobseeker/Login'));
const Register = React.lazy(() => import('~/pages/jobseeker/Register'));
const AllJob = React.lazy(() => import('~/pages/jobseeker/AllJob'));
const Dashboard = React.lazy(() => import('~/pages/jobseeker/Dashboard'));
const MyProfile = React.lazy(() => import('~/pages/jobseeker/MyProfile'));
const ChangeTemplate = React.lazy(() => import('~/pages/jobseeker/ChangeTemplate'));

const ErrorPage = React.lazy(() => import('~/components/layouts/ErrorPage'));

const jobSeekerPublicRoutes = [
	{ path: config.jobSeekerRoutes.home, component: Home },
	{ path: config.jobSeekerRoutes.about, component: About },
	{ path: config.jobSeekerRoutes.detail, component: Detail },
	{ path: config.jobSeekerRoutes.product, component: Product },
	{ path: config.jobSeekerRoutes.allJob, component: AllJob },
	{ path: config.jobSeekerRoutes.login, component: Login },

	{ path: config.jobSeekerRoutes.register, component: Register }
];

const jobSeekerPrivateRoutes = [
	{ path: config.jobSeekerRoutes.cart, component: Cart },
	{ path: config.jobSeekerRoutes.dashboard, component: Dashboard },
	{ path: config.jobSeekerRoutes.myProfile, component: MyProfile },
	{ path: config.jobSeekerRoutes.changeTemplate, component: ChangeTemplate }
];
export { jobSeekerPublicRoutes, jobSeekerPrivateRoutes };
