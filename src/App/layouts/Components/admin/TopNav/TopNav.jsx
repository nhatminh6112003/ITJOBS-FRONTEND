import React from 'react';

import './topnav.css';

import { Link } from 'react-router-dom';

import ThemeMenu from '../ThemeMenu';

import AccountMenu from '../AccountMenu';

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
