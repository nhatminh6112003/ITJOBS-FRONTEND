const AdminPaths = {
	dashboard: '/admin/dashboard',
	login: '/admin/login',
	products: '/admin/products',
	jobPositionCategory: '/admin/job-position-category',
	jobWelfare: '/admin/job-welfare',
	jobSeeker: '/admin/jobSeeker',
	employer: '/admin/employer',
	profession: '/admin/profession',
	company: '/admin/company',
	benefits: '/admin/benefits',
	service: '/admin/service',
	serviceType: '/admin/service_type',
};
const JobseekerPaths = {
	home: '/',
	about: '/about',
	cart: '/cart',
	product: '/product',
	allJob: '/viec-lam/tat-ca-viec-lam',
	login: '/account/login',
	register: '/account/register',
	dashboard: '/jobseekers/dashboard',
	myProfile: '/jobseekers/my-profile',
	changeTemplate: '/jobseekers/changetemplate',
	myAttach: '/jobseekers/myresume/myattach',
	myUpdateAttach: '/jobseekers/myresume/myattach/:id',
	myCvDetail: '/ho-so-cua-toi/ho-so-dinh-kem/:id',
	findJob: '/tim-viec-lam/:id',
	detailCompany: '/nha-tuyen-dung/:id',
	applyJobs: '/jobseekers/jobs/apply/:id',
	jobApplied: '/jobseekers/mykiemviec/jobapplied',
	viewJob: '/employers/hrcentral/viewjob/:id'
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
	viewJob: '/employers/hrcentral/viewjob/:id',
	editEmployer: '/employers/hrcentral/accounts/edit_employer',
	resumeDetail: '/employers/hrcentral/resume_detail/:id',
	findJobSeeker: '/tim-ung-vien',
	productAndService: '/employers/products-and-services',
	serviceAndContact: '/employers/services-and-contact',
	resumeInfo: '/employers/resumeinfo/:id',
	resumeSaved: '/employers/hrcentral/manageresume/resume-saved'
};

const BasePaths = {
	NOT_FOUND: '*',
	ResumeStyle: '/resume-style/:id',
};
const routesPath = {
	JobseekerPaths,
	AdminPaths,
	EmployerPaths,
	BasePaths
};
export default routesPath;
