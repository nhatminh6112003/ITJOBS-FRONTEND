import React from 'react';

import './topnav.css';

import { Link } from 'react-router-dom';

// import Dropdown from '~/App/pages/Admin/components/dropdown/Dropdown';

import ThemeMenu from '../ThemeMenu';

import { logout } from '~/App/providers/slices/authSlice';
import { UserType } from '~/App/constants/roleEnum';
import UserRoleEnum from '~/App/constants/roleEnum';
import { useDispatch } from 'react-redux';
import AccountMenu from '../AccountMenu';

const notifications = [
	{
		icon: 'bx bx-error',
		content: 'Curabitur id eros quis nunc suscipit blandit'
	},
	{
		icon: 'bx bx-package',
		content: 'Duis malesuada justo eu sapien elementum, in semper diam posuere'
	},
	{
		icon: 'bx bx-cart',
		content: 'Donec at nisi sit amet tortor commodo porttitor pretium a erat'
	},
	{
		icon: 'bx bx-error',
		content: 'In gravida mauris et nisi'
	},
	{
		icon: 'bx bx-cart',
		content: 'Curabitur id eros quis nunc suscipit blandit'
	}
];

// import user_image from '../../assets/images/tuat.png'


const curr_user = {
	display_name: 'Tuat Tran'
};

const renderNotificationItem = (item, index) => (
	<div className='notification-item' key={index}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</div>
);

const renderUserToggle = (user) => (
	<div className='topnav__right-user'>
		<div className='topnav__right-user__image'>{/* <img src={user.image} alt="" /> */}</div>
		<div className='topnav__right-user__name'>{user.display_name}</div>
	</div>
);

const renderUserMenu = (item, index) => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout({ Role: UserType[UserRoleEnum.ADMIN] }));
	};

	return (
		<Link to='/' key={index}>
			<div className='notification-item' onClick={item.content === 'Logout' ? handleLogout : undefined}>
				{item.icon}
				<span>{item.content}</span>
			</div>
		</Link>
	);
};
const TopNav = () => {
	return (
		<div className='topnav'>
			<div className='topnav__search'>
				{/* <input type='text' placeholder='Search here...' />
				<i className='bx bx-search'></i> */}
			</div>
			<div className='topnav__right'>
				<div className='topnav__right-item'>
					<AccountMenu />
				</div>
				<div className='topnav__right-item'>
					<ThemeMenu />
					{/* <Dropdown
						icon={<NotificationsIcon />}
						badge='12'
						contentData={notifications}
						renderItems={(item, index) => renderNotificationItem(item, index)}
						renderFooter={() => <Link to='/'>View All</Link>}
					/> */}
				</div>
				<div className='topnav__right-item'></div>
			</div>
		</div>
	);
};

export default TopNav;
