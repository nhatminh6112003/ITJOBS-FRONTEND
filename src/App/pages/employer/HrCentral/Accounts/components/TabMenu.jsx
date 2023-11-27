import routesPath from '~/App/config/routesPath';

const TabMenu = [
	{
		title: 'Thông tin công ty',
		path: routesPath.EmployerPaths.editEmployer
	},
	{
		title: 'Thông tin liên hệ',
		path: routesPath.EmployerPaths.editContact
	},
	// {
	// 	title: 'Đổi mật khẩu',
	// 	path: routesPath.EmployerPaths.editContact
	// }
];

export default TabMenu;
