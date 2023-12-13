import { EditIcon } from '~/Core/resources';
import React from 'react';
import styles from '~/App/pages/jobseeker/MyProfile/MyProfile.module.css';
import classNames from 'classnames/bind';
export const cx = classNames.bind(styles);
import { AddIcon } from '~/Core/resources';

const Utilities = ({
	action = 'ADD',
	children,
	avatar,
	icon,
	title,
	status,
	onOpenResume,
	onOpenTipSlide,
	...props
}) => {
	const modalAction = {
		ADD: 'THÊM MỚI',
		EDIT: 'CHỈNH SỬA'
	};
	return (
		<div {...props}>
			<div className={cx('widget-head')}>
				<div className={cx('cb-title-h3')}>
					<div className={cx('figure')}>
						<div className={cx('image')}>
							{avatar && <img src={avatar} alt='' />}
							{icon && icon}
						</div>
					</div>
					<div className={cx('right-action')}>
						<div className={cx('link-edit')}>
							<a href='javascript:void(0)' onClick={onOpenResume}>
								<em style={{ display: 'flex' }} className={cx('material-icons')}>
									{action == 'ADD' ? <AddIcon sx={{ fontSize: '20px' }} /> : <EditIcon fontSize='normal' />}
								</em>
								<span>{modalAction[action]}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('widget-body')}>{children}</div>
		</div>
	);
};

export default Utilities;
