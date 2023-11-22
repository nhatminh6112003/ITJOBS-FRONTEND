import { NavLink, Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useDispatch } from 'react-redux';
import { logout } from '~/App/providers/slices/authSlice';
import { UserType } from '~/App/constants/roleEnum';
import UserRoleEnum from '~/App/constants/roleEnum';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const SideBar = ({ className: cx }) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout({ Role: UserType[UserRoleEnum.JOBSEEKER] }));
	};
	useEffect(() => {
		if (location.pathname == routesPath.JobseekerPaths.jobApplied) {
			setIsOpen(true);
		}
	}, [location]);

	return (
		<div className={cx('default-sidebar', 'sticky')}>
			<nav className={cx('side-navbar')}>
				<div className={cx('head-nav')}>
					<div className={cx('my-cb-center')}>
						<h2>My CareerBuilder Center </h2>
					</div>
					<ul className={cx('list-unstyled')}>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? cx('active') : undefined)}
								to={routesPath.JobseekerPaths.dashboard}
								title='Quản lý hồ sơ'>
								<span>Quản lý hồ sơ</span>
							</NavLink>
						</li>
						<li style={{ display: 'none' }}>
							<a href='https://careerbuilder.vn/vi/jobseekers/cv-hay/my-profile'>
								<span>Hồ sơ Careerbuilder</span>
							</a>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? cx('active') : undefined)}
								to={routesPath.JobseekerPaths.myProfile}>
								<span>Hồ sơ Careerbuilder</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? cx('active') : undefined)}
								to={routesPath.JobseekerPaths.changeTemplate}>
								<span>Chỉnh mẫu hồ sơ</span>
							</NavLink>
						</li>
						<li>
							<a
								className={
									location.pathname === routesPath.JobseekerPaths.jobApplied
										? cx('active', 'collapse')
										: cx('collapse')
								}
								href='javascript:;'
								onClick={() => setIsOpen(!isOpen)}>
								<span>Việc làm của tôi</span>
							</a>
							<ul className={cx('list-unstyled', 'collapse')} style={{ display: isOpen ? 'block' : 'none' }}>
								<li>
									<NavLink
										className={({ isActive }) => (isActive ? cx('active') : undefined)}
										to={routesPath.JobseekerPaths.jobSaved}>
										Việc làm đã lưu
									</NavLink>
								</li>
								<li>
									<NavLink
										className={({ isActive }) => (isActive ? cx('active') : undefined)}
										to={routesPath.JobseekerPaths.jobApplied}>
										Việc làm đã nộp
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink title='Thoát' onClick={handleLogout}>
								<span>Thoát</span>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={cx('toggle-nav')}></div>
			</nav>
		</div>
	);
};

export default SideBar;
