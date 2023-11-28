import routesPath from '~/App/config/routesPath';

const TabMenu = [
	{
		title: 'Đơn hàng đang sử dụng',
		path: routesPath.EmployerPaths.ordersAvailable
	},
	{
		title: 'Đơn hàng hết hạn/ đã sử dụng',
		path: routesPath.EmployerPaths.ordersExpired
	},
	{
		title: 'Mua dịch vụ',
		path: routesPath.EmployerPaths.productAndService
	}
];

export default TabMenu;
