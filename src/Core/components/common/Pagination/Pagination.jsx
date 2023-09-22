import React from 'react';
import classNames from 'classnames/bind';
import styles from './pagination.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@mui/icons-material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useSearchParams } from 'react-router-dom';
import useCustomRouter from '~/App/hooks/useCustomRouter';
const cx = classNames.bind(styles);
const Pagination = ({ gotoPreviousPage, gotoNextPage, total, pageSize, currentPage, onChange, onSizeChange }) => {
	const { pushQuery } = useCustomRouter();

	const pages = Array.from({ length: Math.ceil(total) }, (_, index) => index + 1);

	return (
		<div className={cx('page-container')}>
			{/* <button className={cx('first-page')} disabled=''>
				<KeyboardDoubleArrowLeftIcon />
			</button> */}
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
