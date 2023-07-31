import React from 'react';
import { cx } from '..';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const No_Content = ({ title, onShowTip, action = 'ADD' }) => {
	const tipsAction = {
		ADD: 'THÊM MỚI',
		EDIT: 'CHỈNH SỬA'
	};
	return (
		<div className={cx('no-content')} onClick={onShowTip}>
			<p>{title}</p>
			<a href='javascript:void(0)'>
				<AddCircleIcon />
				<span>{tipsAction[action]}</span>
			</a>
		</div>
	);
};

export default No_Content;
