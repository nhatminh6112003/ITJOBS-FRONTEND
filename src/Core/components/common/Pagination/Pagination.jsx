import { KeyboardArrowRight } from '@mui/icons-material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import useCustomRouter from '~/App/hooks/useCustomRouter';
import styles from './pagination.module.css';
const cx = classNames.bind(styles);
const Pagination = ({
	gotoPreviousPage,
	gotoNextPage,
	total,
	pageSize,
	currentPage,
	onChange,
	onSizeChange,
	...props
}) => {
	const { pushQuery } = useCustomRouter();

	const pages = Array.from({ length: Math.ceil(total) }, (_, index) => index + 1);

	return (
		<div className={cx('page-container')} {...props}>
			<button className={cx('prev-page')} onClick={gotoPreviousPage} disabled={currentPage === 1}>
				<KeyboardArrowLeftIcon />
			</button>
			<div id={cx('pagination')}>
				{pages.map((page) => (
					<li
						key={page}
						className={cx('pg-item', { active: total === 1 || page === currentPage })}
						data-page={page}
						onClick={() => {
							pushQuery({ page });
							onChange(page);
						}}>
						<Link className={cx('pg-link')}>{page}</Link>
					</li>
				))}
			</div>
			<button className={cx('next-page')} onClick={gotoNextPage} disabled={currentPage === pages.length}>
				<KeyboardArrowRight />
			</button>
			<button className={cx('last-page')}>
				<i className={cx('fas', 'fa-angle-double-right')} />
			</button>
		</div>
	);
};

export default Pagination;
