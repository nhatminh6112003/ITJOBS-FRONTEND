import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Card = ({ header, toolbar, body }) => {
	return (
		<div className={cx('card')}>
			<div className={cx('card__header')}>
				<h3 className={cx('card__header__title')}>{header}</h3>

				<div className={cx('card__header_toolbar')}>{toolbar}</div>
			</div>

			<div className={'card__body'}>{body}</div>
		</div>
	);
};

export default Card;
