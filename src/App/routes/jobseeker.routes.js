import { lazy } from 'react';

import routesPath from '~/App/config/routesPath';
const Home = lazy(() => import('../pages/jobseeker/Home'));
const About = lazy(() => import('../pages/jobseeker/About'));
const Cart = lazy(() => import('../pages/jobseeker/Cart'));
const Product = lazy(() => import('../pages/jobseeker/Product'));
const Login = lazy(() => import('../pages/jobseeker/Login'));
const Register = lazy(() => import('../pages/jobseeker/Register'));
const AllJob = lazy(() => import('../pages/jobseeker/AllJob'));
const Dashboard = lazy(() => import('../pages/jobseeker/Dashboard'));
const MyProfile = lazy(() => import('../pages/jobseeker/MyProfile'));
const ChangeTemplate = lazy(() => import('../pages/jobseeker/ChangeTemplate'));
const MyAttach = lazy(() => import('../pages/jobseeker/MyAttach'));
const UpdateMyAttach = lazy(() => import('../pages/jobseeker/UpdateMyAttach'));
const MyCvDetail = lazy(() => import('../pages/jobseeker/MyCvDetail'));
const FindJob = lazy(() => import('../pages/jobseeker/DetailJobPost'));
const DetailCompany = lazy(() => import('../pages/jobseeker/DetailCompany'));
const ApplyJob = lazy(() => import('../pages/jobseeker/ApplyJob'));
const JobApplied = lazy(() => import('../pages/jobseeker/JobApplied'));
const JobSaved = lazy(() => import('../pages/jobseeker/JobSaved'));
const FindAllJob = lazy(() => import('../pages/jobseeker/FindAllJob'));

const jobSeekerPublicRoutes = [
	{ path: routesPath.JobseekerPaths.home, component: Home },
	{ path: routesPath.JobseekerPaths.about, component: About },
	{ path: routesPath.JobseekerPaths.product, component: Product },
	{ path: routesPath.JobseekerPaths.allJob, component: AllJob },
	{ path: routesPath.JobseekerPaths.login, component: Login },
	{ path: routesPath.JobseekerPaths.register, component: Register },
	{ path: routesPath.JobseekerPaths.detailCompany, component: DetailCompany },
	{ path: routesPath.JobseekerPaths.findJob, component: FindJob },
	{ path: routesPath.JobseekerPaths.findAllJob, component: FindAllJob }
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
	{ path: routesPath.JobseekerPaths.jobApplied, component: JobApplied },
	{ path: routesPath.JobseekerPaths.jobSaved, component: JobSaved }
];

export { jobSeekerPublicRoutes, jobSeekerPrivateRoutes };
