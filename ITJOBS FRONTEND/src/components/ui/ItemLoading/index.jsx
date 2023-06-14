import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './itemLoading.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ItemLoading = ({ items }) => {
	return Array(items)
		.fill(0)
		.map((item, i) => (
			<div key={i} className={cx('col-lg-6')}>
				<div className={cx('job-item')}>
					<div className={cx('figure')}>
						<div className={cx('left-col')}>
							<Skeleton width={67} height={67} />
						</div>
						<div className={cx('right-col')}>
							<Skeleton count={4} />
						</div>
					</div>
				</div>
			</div>
		));
};

export default ItemLoading;
