import React from 'react';

import { Link } from 'react-router-dom';

import './sidebar.css';
import SidebarItem from './SidebarItem';
import { HomeIcon,CategoryIcon,Settings } from '~/Core/resources';
const SideBar = (props) => {
	const SidebarItems = [
		{
			title: 'Dashboard',
			route: '/admin/dashboard',
			icon: <HomeIcon />
		},
		
		{
			title: 'Danh mục vị trí công việc',
			route: '/admin/job-position-category',
			icon: <CategoryIcon />
		},
		
		{
			title: 'Cài đặt',
			route: '/settings',
			icon: <Settings />
		}
	];
	const activeItem = SidebarItems.findIndex((item) => item.route === props?.location?.pathname);

	return (
		<div className='sidebar'>
			<div className='sidebar__logo'>
				<img src={'/vite.svg'} alt='company logo' />
			</div>
			{SidebarItems.map((item, index) => (
				<Link to={item.route} key={index}>
					<SidebarItem title={item.title} icon={item.icon} active={index === activeItem} />
				</Link>
			))}
		</div>
	);
};

export default SideBar;
