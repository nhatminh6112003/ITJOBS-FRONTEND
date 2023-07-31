import { EditIcon } from '~/Core/resources';
import React from 'react';
import { cx } from '..';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const Widget = ({ children,avatar, title, status, onOpenResume, onOpenTipSlide, ...props }) => {
	const statusWidget = {
		error: 'error',
		success: 'success',
		default: 'default'
	};
	const statusContent = {
		error: 'Chưa hoàn thành',
		success: 'Hoàn thành',
		default: 'Không bắt buộc'
	};
	return (
		<div {...props}>
			<div className={cx('widget-head')}>
				<div className={cx('cb-title-h3')}>
					<div className={cx('figure')}>
						<div className={cx('image')}>
							<img src={avatar} alt='' />
						</div>
						<div className={cx('figcaption')}>
							<h3>{title} *</h3>
							<div className={cx('status', statusWidget[status])}>
								<p>{statusContent[status]}</p>
							</div>
						</div>
					</div>
					<div className={cx('right-action')}>
						<div className={cx('tips', 'p1')} onClick={onOpenTipSlide}>
							<div className={cx('icon')}>
								<LightbulbIcon />
							</div>
							<p>Tips</p>
						</div>
						<div className={cx('link-edit')}>
							<a href='javascript:void(0)' onClick={onOpenResume}>
								<em className={cx('material-icons')}>
									<EditIcon fontSize='normal' />
								</em>
								<span>Chỉnh sửa</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('widget-body')}>{children}</div>
		</div>
	);
};

export default Widget;
