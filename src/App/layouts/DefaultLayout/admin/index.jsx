import { Suspense, cloneElement, useEffect } from 'react';
import Loading from '~/Core/components/common/Loading';
import styles from '../../styles/Admin/admin.module.css';
import classNames from 'classnames/bind';
import SideBar from '../../components/Admin/SideBar';
import TopNav from '../../components/Admin/TopNav';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMode, setColor } from '~/App/providers/slices/ThemeSlice';
const cx = classNames.bind(styles);

export const AdminLayout = ({ children }) => {
	const themeReducer = useSelector((state) => state.theme);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

	// 	const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

	// 	dispatch(setMode(themeClass));

	// 	dispatch(setColor(colorClass));
	// }, [themeReducer, dispatch]);

	const location = useLocation();
	return (
		<div className={cx('layout',`${themeReducer.mode}`,`${themeReducer.color}`)}>
			<SideBar location={location} />
			<div className={cx('layout__content')}>
				<TopNav />
				<Suspense fallback={<Loading color='#349eff' />}>
					<div className={cx('layout__content-main')}>{cloneElement(children, { cx })}</div>
				</Suspense>
			</div>
		</div>
	);
};
