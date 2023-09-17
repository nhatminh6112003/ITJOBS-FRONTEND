import routesPath from '~/App/config/routesPath';

const TabMenu = [
	{
		title: 'Việc Làm Đang Đăng',
		path: routesPath.EmployerPaths.posting
	},
	{
		title: 'Việc Làm Chờ Đăng',
		path: routesPath.EmployerPaths.waitPosting
	},
	{
		title: 'Việc Làm Tạm Dừng Đăng',
		path: routesPath.EmployerPaths.unPosting
	},
	{
		title: 'Việc Làm Hết Hạn',
		path: routesPath.EmployerPaths.expirePosting
	}
];

export default TabMenu;
