const AdminPaths = {
	home: 'admin/dashboard',
	login: 'admin/login'
};
const JobseekerPaths = {
	home: '/',
	about: '/about',
	detail: '/detail/:id',
	cart: '/cart',
	product: '/product',
	allJob: '/tat-ca-viec-lam',
	login: '/account/login',
	register: '/account/register',
	dashboard: '/jobseekers/dashboard',
	myProfile: '/jobseekers/my-profile',
	changeTemplate: '/jobseekers/changetemplate'
};
const EmployerPaths = {
	login: '/employers/login',
	register: '/employers/register',
	dashboard: '/employers/dashboard',
	posting: '/employers/hrcentral/posting',
	manageResume: '/employers/hrcentral/manageresume',
	searchHistory: '/employers/hrcentral/search-history',
	ordersAvailable: '/employers/hrcentral/orders-available',
	emailManagement: '/employers/hrcentral/emailcontentmanagement',
	accounts: '/employers/hrcentral/accounts',
	waitPosting: '/employers/hrcentral/waitposting',
	unPosting: '/employers/hrcentral/unposting',
	expirePosting: '/employers/hrcentral/expireposting',
	postjobs: '/employers/postjobs',
	
};

const BasePaths = {
	NOT_FOUND: '*'
};
const routesPath = {
	JobseekerPaths,
	AdminPaths,
	EmployerPaths,
	BasePaths
};
export default routesPath;
