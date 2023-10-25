import React from 'react';

import { Link } from 'react-router-dom';

import './sidebar.css';
import SidebarItem from './SidebarItem';
import { HomeIcon, CategoryIcon, Settings } from '~/Core/resources';
import routesPath from '~/App/config/routesPath';

const SideBar = (props) => {
	const SideBarMenu = [
		{
			title: 'Dashboard',
			route: routesPath.AdminPaths.dashboard,
			icon: <HomeIcon />
		},

		{
			title: 'Quản lý Danh mục nghề nghiệp',
			route: routesPath.AdminPaths.jobPositionCategory,
			icon: <CategoryIcon />
		},

		{
			title: 'Phúc lợi công việc',
			route: routesPath.AdminPaths.jobWelfare,
			icon: <CategoryIcon />
		},
		
		{
			title: 'Quản lý nhà tuyển dụng',
			route: routesPath.AdminPaths.employer,
			icon: <CategoryIcon />
		},
		
		{
			title: 'Quản lý ứng viên',
			route: routesPath.AdminPaths.jobSeeker,
			icon: <CategoryIcon />
		},
		{
			title: 'Quản lý nghề nghiệp',
			route: routesPath.AdminPaths.profession,
			icon: <CategoryIcon />
		},
		{
			title: 'Quản lý công ty',
			route: routesPath.AdminPaths.company,
			icon: <CategoryIcon />
		},
		{
			title: 'Cài đặt',
			route: '/settings',
			icon: <Settings />
		}
	];
	console.log("TCL: SideBar -> SideBarMenu", SideBarMenu)

	const activeItem = SideBarMenu.findIndex((item) => item.route === props?.location?.pathname);

	return (
		<div className='sidebar'>
			<div className='sidebar__logo'>
				<img src={'/vite.svg'} alt='company logo' />
			</div>
			{SideBarMenu.map((item, index) => (
				<Link to={item.route} key={index}>
					<SidebarItem title={item.title} icon={item.icon} active={index === activeItem} />
				</Link>
			))}
		</div>
	);
};

export default SideBar;
