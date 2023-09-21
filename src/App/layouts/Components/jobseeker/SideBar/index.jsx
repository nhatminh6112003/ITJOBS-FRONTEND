import { NavLink } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '~/App/providers/slices/authSlice';
import { UserType } from '~/App/constants/roleEnum';
import UserRoleEnum from '~/App/constants/roleEnum';
const SideBar = ({ className: cx }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout({ Role: UserType[UserRoleEnum.JOBSEEKER] }));
	};
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
							<a className={cx('collapse')} href=''>
								<span>Việc làm của tôi</span>
							</a>
							<ul className={cx('list-unstyled', 'collapse')}>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobsaved'>Việc làm đã lưu</a>
								</li>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied'>Việc làm đã nộp</a>
								</li>
							</ul>
						</li>
						<li>
							<a href='https://careerbuilder.vn/vi/jobseekers/jobalert'>
								<span>Thông Báo Việc Làm</span>
							</a>
						</li>
						<li>
							<a className={cx('collapse')} href='javascript:;'>
								<span>Nhà tuyển dụng của tôi</span>
							</a>
							<ul className={cx('list-unstyled', 'collapse')}>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp'>
										Nhà tuyển dụng xem hồ sơ của tôi
									</a>
								</li>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/following'>Following</a>
								</li>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/blacklist'>
										Nhà tuyển dụng được cài đặt hạn chế xem hồ sơ của tôi
									</a>
								</li>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/feedback'>
										Phản hồi từ nhà tuyển dụng
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/notify' title='Xem tất cả thông báo'>
								<span>Xem tất cả thông báo</span>
							</a>
						</li>
						<li>
							<a className={cx('collapse')} href='javascript:;'>
								<span>Cài đặt</span>
							</a>
							<ul className={cx('list-unstyled', 'collapse')}>
								<li>
									<a href='https://careerbuilder.vn/vi/jobseekers/member/myaccount' title='Tài Khoản'>
										Tài Khoản
									</a>
								</li>
								<li>
									<a
										href='https://careerbuilder.vn/vi/jobseekers/member/emailmanagement'
										title='Cài Đặt Thông Báo'>
										Cài Đặt Thông Báo
									</a>
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
