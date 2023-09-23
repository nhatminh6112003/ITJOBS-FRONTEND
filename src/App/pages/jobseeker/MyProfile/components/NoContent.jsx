import React from 'react';
import { cx } from '..';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const NoContent = ({ title, onShowTip, action = 'ADD', onClick }) => {
	const tipsAction = {
		ADD: 'THÊM MỚI',
		EDIT: 'CHỈNH SỬA'
	};
	return (
		<div className={cx('no-content')} onClick={onShowTip}>
			<p>{title}</p>
			<a href='javascript:void(0)' onClick={onClick}>
				<AddCircleIcon />
				<span>{tipsAction[action]}</span>
			</a>
		</div>
	);
};

export default NoContent;
