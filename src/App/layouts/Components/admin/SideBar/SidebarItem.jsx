import React from 'react';

const SidebarItem = (props) => {
	const active = props.active ? 'active' : '';
	const cx = props.cx;
	return (
		<div className={cx('sidebar__item')}>
			<div className={cx(`sidebar__item-inner`, active && 'active')}>
				{props.icon}
				<span>{props.title}</span>
			</div>
		</div>
	);
};

export default SidebarItem;
