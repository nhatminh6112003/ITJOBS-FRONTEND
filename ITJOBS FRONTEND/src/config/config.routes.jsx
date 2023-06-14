const adminRoutes = {
	home: 'admin/dashboard',
	login: 'admin/login',
	errorPage: '*'
};
const jobSeekerRoutes = {
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
	changeTemplate: '/jobseekers/changetemplate',
	errorPage: '*'
};
const employerRoutes = {
	login: '/employers/login',
	register: '/employers/register',
	errorPage: '*'
};

const config = {
	jobSeekerRoutes,
	adminRoutes,
	employerRoutes
};
export default config;
