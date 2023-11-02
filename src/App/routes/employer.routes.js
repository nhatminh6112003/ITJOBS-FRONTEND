import { lazy } from 'react';
import routesPath from '~/App/config/routesPath';

const Login = lazy(() => import('~/App/pages/Employer/Login'));
const Register = lazy(() => import('~/App/pages/Employer/Register'));
const EmployerDashboard = lazy(() => import('~/App/pages/Employer/Dashboard'));
const Posting = lazy(() => import('~/App/pages/Employer/HrCentral/Posting'));
const ManageResume = lazy(() => import('~/App/pages/Employer/HrCentral/ManageResume'));
const OrdersAvailable = lazy(() => import('~/App/pages/Employer/HrCentral/OrdersAvailable'));
const SearchHistory = lazy(() => import('~/App/pages/Employer/HrCentral/SearchHistory'));
const EmailManagement = lazy(() => import('~/App/pages/Employer/HrCentral/EmailManagement'));
const Accounts = lazy(() => import('~/App/pages/Employer/HrCentral/Accounts'));
const WaitPosting = lazy(() => import('~/App/pages/Employer/HrCentral/WaitPosting'));
const UnPosting = lazy(() => import('~/App/pages/Employer/HrCentral/UnPosting'));
const ExpirePosting = lazy(() => import('~/App/pages/Employer/HrCentral/ExpirePosting'));
const PostJobs = lazy(() => import('~/App/pages/Employer/HrCentral/PostJobs/PostJobs'));
const UpdatePostJobs = lazy(() => import('~/App/pages/Employer/HrCentral/PostJobs/components/UpdatePostJobs'));
const ViewJob = lazy(() => import('../pages/Employer/HrCentral/ViewJob'));
const EditEmployer = lazy(() => import('../pages/Employer/HrCentral/Accounts/EditEmployer'));
const ResumeDetail = lazy(() => import('../pages/Employer/HrCentral/ManageResume/ResumeDetail'));
const FindJobSeeker = lazy(() => import('../pages/Employer/FindJobSeeker'));
const employerPublicRoutes = [
	{ path: routesPath.EmployerPaths.register, component: Register },
	{ path: routesPath.EmployerPaths.login, component: Login }
];

const employerPrivateRoutes = [
	{
		path: routesPath.EmployerPaths.dashboard,
		component: EmployerDashboard
	},
	{
		path: routesPath.EmployerPaths.posting,
		component: Posting
	},
	{
		path: routesPath.EmployerPaths.manageResume,
		component: ManageResume
	},
	{
		path: routesPath.EmployerPaths.searchHistory,
		component: SearchHistory
	},
	{
		path: routesPath.EmployerPaths.ordersAvailable,
		component: OrdersAvailable
	},
	{
		path: routesPath.EmployerPaths.emailManagement,
		component: EmailManagement
	},
	{
		path: routesPath.EmployerPaths.accounts,
		component: Accounts
	},
	{
		path: routesPath.EmployerPaths.waitPosting,
		component: WaitPosting
	},
	{
		path: routesPath.EmployerPaths.unPosting,
		component: UnPosting
	},
	{
		path: routesPath.EmployerPaths.expirePosting,
		component: ExpirePosting
	},
	{
		path: routesPath.EmployerPaths.postjobs,
		component: PostJobs
	},
	{
		path: routesPath.EmployerPaths.updatePostJobs,
		component: UpdatePostJobs
	},
	{
		path: routesPath.EmployerPaths.viewJob,
		component: ViewJob
	},
	{
		path: routesPath.EmployerPaths.editEmployer,
		component: EditEmployer
	},
	{
		path: routesPath.EmployerPaths.resumeDetail,
		component: ResumeDetail
	},
	{
		path: routesPath.EmployerPaths.findJobSeeker,
		component: FindJobSeeker
	}
];
export { employerPublicRoutes, employerPrivateRoutes };
