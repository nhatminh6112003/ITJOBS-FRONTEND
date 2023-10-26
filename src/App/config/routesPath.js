const AdminPaths = {
	dashboard: '/admin/dashboard',
	login: '/admin/login',
	products: '/admin/products',
	jobPositionCategory: '/admin/job-position-category',
	jobWelfare: '/admin/job-welfare',
	jobSeeker: '/admin/jobSeeker',
	employer: '/admin/employer',
	profession: '/admin/profession',
	company: '/admin/company'
};
const JobseekerPaths = {
	home: '/',
	about: '/about',
	cart: '/cart',
	product: '/product',
	allJob: '/tat-ca-viec-lam',
	login: '/account/login',
	register: '/account/register',
	dashboard: '/jobseekers/dashboard',
	myProfile: '/jobseekers/my-profile',
	changeTemplate: '/jobseekers/changetemplate',
	myAttach: '/jobseekers/myresume/myattach',
	myUpdateAttach: '/jobseekers/myresume/myattach/:id',
	myCvDetail: '/ho-so-cua-toi/ho-so-dinh-kem/:id',
	findJob:'/tim-viec-lam/:id',
	detailCompany:'/nha-tuyen-dung/:id',
	applyJobs:'/jobseekers/jobs/apply/:id',
	jobApplied:'/jobseekers/mykiemviec/jobapplied'
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
	updatePostJobs: '/employers/postjobs/:id',
	viewJob: '/employers/hrcentral/viewjob/:id'
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
