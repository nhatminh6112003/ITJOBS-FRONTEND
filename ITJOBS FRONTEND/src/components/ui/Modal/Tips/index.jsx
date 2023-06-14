import React from 'react';
import Modal from 'react-modal';
import styles from './tips.module.css';
import classNames from 'classnames/bind';
import { LightbulbIcon, CloseIcon } from '~/resources';
const cx = classNames.bind(styles);
const Tips = ({ isShowing, hide, title, content }) => {
	return isShowing ? (
		<div className={cx('ReactModal__Body--open')}>
			<Modal
				closeTimeoutMS={2000}
				isOpen={isShowing}
				onRequestClose={hide}
				style={{
					overlay: {
						zIndex: '9999',
						backgroundColor: 'rgb(55 50 50 / 75%)'
					},
					content: {
						overflow: 'hidden',
						maxWidth: '500px',
						padding: 0,
						backgroundColor: '#ffff',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)'
					}
				}}>
				<div className={cx('tips-modal')}>
					<div className={cx('head-modal')}>
						<div className={cx('icon')}>
							<LightbulbIcon />
						</div>
						<div className={cx('title')}>
							<h2>Gợi ý</h2>
						</div>
						<CloseIcon className={cx('close-icon')} onClick={hide} />
					</div>
					<div className={cx('body-modal')}>
						<div className={cx('widget', 'widget-12')}>
							<div className={cx('widget-body')}>
								<div className={cx('swiper-container')}>
									<div className={cx('swiper-wrapper')}>
										<div className={cx('cb-title-h3')}>
											<h3>Hồ sơ CareerBuilder</h3>
										</div>
										<div className={cx('content')}>
											<p>{content}</p>
										</div>
									</div>
									<div className={cx('main-button')}>
										<div className={cx('button-prev')}>
											<em className={cx('mdi', 'mdi-chevron-left')} />
										</div>
										<div className={cx('button-next')}>
											<em className={cx('mdi', 'mdi-chevron-right')} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	) : null;
};

export default Tips;
