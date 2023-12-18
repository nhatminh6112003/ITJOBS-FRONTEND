import { Link } from 'react-router-dom';

import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BadgeIcon from '@mui/icons-material/Badge';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FeedIcon from '@mui/icons-material/Feed';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import routesPath from '~/App/config/routesPath';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlagIcon from '@mui/icons-material/Flag';
import { CategoryIcon, Settings } from '~/Core/resources';
import SidebarItem from './SidebarItem';
import styles from './sidebar.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const SideBar = (props) => {
	const SideBarMenu = [
		{
			title: 'Dashboard',
			route: routesPath.AdminPaths.dashboard,
			icon: <AssessmentIcon />
		},

		{
			title: 'Quản lý Danh mục nghề nghiệp',
			route: routesPath.AdminPaths.jobPositionCategory,
			icon: <CategoryIcon />
		},

		{
			title: 'Quản lý phúc lợi công việc',
			route: routesPath.AdminPaths.jobWelfare,
			icon: <Diversity1Icon />
		},

		{
			title: 'Quản lý nhà tuyển dụng',
			route: routesPath.AdminPaths.employer,
			icon: <BadgeIcon />
		},

		{
			title: 'Quản lý ứng viên',
			route: routesPath.AdminPaths.jobSeeker,
			icon: <PeopleAltIcon />
		},
		{
			title: 'Quản lý nghề nghiệp',
			route: routesPath.AdminPaths.profession,
			icon: <FeedIcon />
		},
		{
			title: 'Quản lý công ty',
			route: routesPath.AdminPaths.company,
			icon: <ApartmentIcon />
		},
		{
			title: 'Quản lý lợi ích dịch vụ',
			route: routesPath.AdminPaths.benefits,
			icon: <AnalyticsIcon />
		},
		{
			title: 'Quản lý dịch vụ',
			route: routesPath.AdminPaths.service,
			icon: <HomeRepairServiceIcon />
		},
		{
			title: 'Quản lý loại dịch vụ',
			route: routesPath.AdminPaths.serviceType,
			icon: <LayersIcon />
		},
		{
			title: 'Quản lý báo cáo ',
			route: routesPath.AdminPaths.feedBack,
			icon: <FlagIcon />
		},
		{
			title: 'Quản lý đơn hàng',
			route: routesPath.AdminPaths.order,
			icon: <AccountBalanceIcon />
		}
	];

	const activeItem = SideBarMenu.findIndex((item) => item.route === props?.location?.pathname);

	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar__logo')}>
				<img src={'/logo.png'} alt='company logo' />
			</div>
			{SideBarMenu.map((item, index) => (
				<Link to={item.route} key={index}>
					<SidebarItem title={item.title} icon={item.icon} active={index === activeItem} cx={cx} />
				</Link>
			))}
		</div>
	);
};

export default SideBar;
