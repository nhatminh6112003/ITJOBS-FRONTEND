import classNames from 'classnames/bind';
import { Suspense, cloneElement } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loading from '~/Core/components/common/Loading';
import SideBar from '../../Components/admin/SideBar';
import TopNav from '../../Components/admin/TopNav';
import styles from '../../styles/Admin/admin.module.css';
const cx = classNames.bind(styles);

export const AdminLayout = ({ children }) => {
	const themeReducer = useSelector((state) => state.theme);
	const location = useLocation();
	return (
		<div className={cx('layout', `${themeReducer.mode}`, `${themeReducer.color}`)}>
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
