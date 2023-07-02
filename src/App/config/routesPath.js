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
	dashboard: '/employers/dashboard'
};

const BasePaths = {
	errorPage: '*'
};
const routesPath = {
	JobseekerPaths,
	AdminPaths,
	EmployerPaths,
	BasePaths
};
export default routesPath;
