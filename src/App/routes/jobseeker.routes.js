import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';
const Home = lazy(() => import('../pages/Jobseeker/Home'));
const About = lazy(() => import('../pages/Jobseeker/About'));
const Cart = lazy(() => import('../pages/Jobseeker/Cart'));
const Product = lazy(() => import('../pages/Jobseeker/Product'));
const Login = lazy(() => import('../pages/Jobseeker/Login'));
const Register = lazy(() => import('../pages/Jobseeker/Register'));
const AllJob = lazy(() => import('../pages/Jobseeker/AllJob'));
const Dashboard = lazy(() => import('../pages/Jobseeker/Dashboard'));
const MyProfile = lazy(() => import('../pages/Jobseeker/MyProfile'));
const ChangeTemplate = lazy(() => import('../pages/Jobseeker/ChangeTemplate'));
const MyAttach = lazy(() => import('../pages/Jobseeker/MyAttach'));
const UpdateMyAttach = lazy(() => import('../pages/Jobseeker/UpdateMyAttach'));
const MyCvDetail = lazy(() => import('../pages/Jobseeker/MyCvDetail'));
const FindJob = lazy(() => import('../pages/Jobseeker/DetailJobPost'));
const DetailCompany = lazy(() => import('../pages/Jobseeker/DetailCompany'));
const ApplyJob = lazy(() => import('../pages/Jobseeker/ApplyJob'));
const JobApplied = lazy(() => import('../pages/Jobseeker/JobApplied'));

const jobSeekerPublicRoutes = [
	{ path: routesPath.JobseekerPaths.home, component: Home },
	{ path: routesPath.JobseekerPaths.about, component: About },
	{ path: routesPath.JobseekerPaths.product, component: Product },
	{ path: routesPath.JobseekerPaths.allJob, component: AllJob },
	{ path: routesPath.JobseekerPaths.login, component: Login },
	{ path: routesPath.JobseekerPaths.register, component: Register },
	{ path: routesPath.JobseekerPaths.detailCompany, component: DetailCompany },
	{ path: routesPath.JobseekerPaths.findJob, component: FindJob }
];

const jobSeekerPrivateRoutes = [
	{ path: routesPath.JobseekerPaths.cart, component: Cart },
	{ path: routesPath.JobseekerPaths.dashboard, component: Dashboard },
	{ path: routesPath.JobseekerPaths.myProfile, component: MyProfile },
	{ path: routesPath.JobseekerPaths.changeTemplate, component: ChangeTemplate },
	{ path: routesPath.JobseekerPaths.myAttach, component: MyAttach },
	{ path: routesPath.JobseekerPaths.myUpdateAttach, component: UpdateMyAttach },
	{ path: routesPath.JobseekerPaths.myCvDetail, component: MyCvDetail },
	{ path: routesPath.JobseekerPaths.applyJobs, component: ApplyJob },
	{ path: routesPath.JobseekerPaths.jobApplied, component: JobApplied }
];

export { jobSeekerPublicRoutes, jobSeekerPrivateRoutes };
