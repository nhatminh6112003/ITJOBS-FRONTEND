import { EditIcon } from '~/resources';
import React from 'react';
import { cx } from '..';
const Widget = ({ children, title,...props }) => {
	return (
		<div {...props}>
			<WidgetHeader title={title} />
			<div className={cx('widget-body')}>{children}</div>
		</div>
	);
};
export const WidgetHeader = ({ title }) => {
	return (
		<div className={cx('widget-head')}>
			<div className={cx('cb-title-h3')}>
				<div className={cx('figure')}>
					<div className={cx('image')}>
						<img src='./img/dash-board/i14.png' alt='' />
					</div>
					<div className={cx('figcaption')}>
						<h3>{title} *</h3>
						<div className={cx('status', 'success')}>
							<p>Hoàn thành</p>
						</div>
					</div>
				</div>
				<div className={cx('right-action')}>
					<div className={cx('tips', 'p1')} onclick="openTipSlide('tip-t-resume')">
						<div className={cx('icon')}>
							<em className={cx('mdi', 'mdi-lightbulb')} />
						</div>
						<p>Tips</p>
					</div>
					<div className={cx('link-edit')}>
						<a href='javascript:void(0)' onclick='editResumeTitle();'>
							<em className={cx('material-icons')}>
								<EditIcon fontSize='normal' />
							</em>
							<span>Chỉnh sửa</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widget;
