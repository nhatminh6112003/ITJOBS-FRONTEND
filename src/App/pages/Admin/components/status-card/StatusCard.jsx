import React from 'react';
import classNames from 'classnames/bind';
import styles from './statuscard.module.css';

const cx = classNames.bind(styles);

const StatusCard = (props) => {
	return (
		<div className={cx('status-card')}>
			<div className={cx('status-card__info')}>
				<h4>{props.count}</h4>
				<span>{props.title}</span>
			</div>
		</div>
	);
};

export default StatusCard;
