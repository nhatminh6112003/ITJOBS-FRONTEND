import { lazy } from 'react';
import routesPath from '~/App/config/routesPath';

const Login = lazy(() => import('~/App/pages/employer/Login'));
const Register = lazy(() => import('~/App/pages/employer/Register'));
const EmployerDashboard = lazy(() => import('~/App/pages/employer/Dashboard'));
const Posting = lazy(() => import('~/App/pages/employer/HrCentral/Posting'));
const ManageResume = lazy(() => import('~/App/pages/employer/HrCentral/ManageResume'));
const OrdersAvailable = lazy(() => import('~/App/pages/employer/HrCentral/OrdersAvailable'));
const SearchHistory = lazy(() => import('~/App/pages/employer/HrCentral/SearchHistory'));
const EmailManagement = lazy(() => import('~/App/pages/employer/HrCentral/EmailManagement'));
const Accounts = lazy(() => import('~/App/pages/employer/HrCentral/Accounts'));
const WaitPosting = lazy(() => import('~/App/pages/employer/HrCentral/WaitPosting'));
const UnPosting = lazy(() => import('~/App/pages/employer/HrCentral/UnPosting'));
const ExpirePosting = lazy(() => import('~/App/pages/employer/HrCentral/ExpirePosting'));
const PostJobs = lazy(() => import('~/App/pages/employer/HrCentral/PostJobs/PostJobs'));
const UpdatePostJobs = lazy(() => import('~/App/pages/employer/HrCentral/PostJobs/components/UpdatePostJobs'));
const ViewJob = lazy(() => import('../pages/employer/HrCentral/ViewJob'));
const EditEmployer = lazy(() => import('../pages/employer/HrCentral/Accounts/EditEmployer'));
const EditContact = lazy(() => import('../pages/employer/HrCentral/Accounts/EditContact/EditContact'));
const ChangePassword = lazy(() => import('../pages/employer/HrCentral/Accounts/ChangePassword/ChangePassword'));
const ResumeDetail = lazy(() => import('../pages/employer/HrCentral/ManageResume/ResumeDetail'));
const FindJobSeeker = lazy(() => import('../pages/employer/FindJobSeeker'));
const ProductAndServices = lazy(() => import('../pages/employer/ProductAndServices'));
const ServicesAndContact = lazy(() => import('../pages/employer/ServicesAndContact'));
const ResumeInfo = lazy(() => import('../pages/employer/ResumeInfo'));
const ResumeSaved = lazy(() => import('../pages/employer/HrCentral/ManageResume/ResumeSaved'));
const VnpayReturn = lazy(() => import('../pages/employer/VnpayReturn'));
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
		path: routesPath.EmployerPaths.editContact,
		component: EditContact
	},
	{
		path: routesPath.EmployerPaths.changePassword,
		component: ChangePassword
	},
	{
		path: routesPath.EmployerPaths.resumeDetail,
		component: ResumeDetail
	},
	{
		path: routesPath.EmployerPaths.findJobSeeker,
		component: FindJobSeeker
	},
	{
		path: routesPath.EmployerPaths.productAndService,
		component: ProductAndServices
	},
	{
		path: routesPath.EmployerPaths.serviceAndContact,
		component: ServicesAndContact
	},
	{
		path: routesPath.EmployerPaths.resumeInfo,
		component: ResumeInfo
	},
	{
		path: routesPath.EmployerPaths.resumeSaved,
		component: ResumeSaved
	},
	{
		path: routesPath.EmployerPaths.vnpay_return,
		component: VnpayReturn
	}
];
export { employerPublicRoutes, employerPrivateRoutes };
