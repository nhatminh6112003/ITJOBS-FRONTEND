import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import UserRoleEnum, { UserType } from '~/App/constants/roleEnum';
import { logout } from '~/App/providers/slices/authSlice';
import { Fragment } from 'react';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';

const cx = classNames.bind(styles);
const Header = () => {
	const employer = useSelector((state) => state.auth?.employer);
	const dispatch = useDispatch();
	const { data: listServiceType } = useGetAllServiceTypeQuery();

	const handleLogout = () => {
		dispatch(logout({ Role: UserType[UserRoleEnum.EMPLOYER] }));
	};
	return (
		<header className={cx('for-customers')}>
			<div className={cx('container-fluid')}>
				<div className={cx('main-wrap')}>
					<div className={cx('left-wrap')}>
						<div className={cx('button-hambuger')}>
							<span className={cx('mdi mdi-menu')} />
						</div>
						<div className={cx('logo')}>
							<Link to={routesPath.EmployerPaths.dashboard}>
								<img src='/logo.png' style={{ height: 50 }} />
							</Link>
						</div>
						<div className={cx('main-menu')}>
							<ul className={cx('menu')}>
								<li className={cx('')}>
									<a href='/employers/dashboard' alt='Trang chủ' title='Trang chủ'>
										Trang Chủ
									</a>
								</li>
								<li className={cx('dropdown')}>
									<Link to={routesPath.EmployerPaths.serviceAndContact}>Sản Phẩm và Dịch Vụ</Link>
									<div className={cx('dropdown-menu')}>
										<ul>
											{listServiceType?.data?.map((item) => (
												<li key={item.id}>
													<Link to={`/employers/products-and-services/${item.id}`}>{item.name}</Link>
												</li>
											))}
											<li>
												<Link to={routesPath.EmployerPaths.allService}>Xem tất cả dịch vụ</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className={cx('dropdown')}>
									<Link to={routesPath.EmployerPaths.dashboard}>HR Central</Link>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='/employers/dashboard'>Dashboard</a>
											</li>
											<li>
												<a href='/employers/postjobs'>Đăng Tuyển Dụng</a>
											</li>
											<li>
												<a href='/tim-ung-vien'>Tìm Hồ Sơ</a>
											</li>
										</ul>
									</div>
								</li>
								<li className=''>
									<Link to={routesPath.EmployerPaths.serviceAndContact}>Mua Dịch Vụ</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={cx('right-wrap')}>
						<div className={cx('main-login', 'dropdown')}>
							{employer ? (
								<Fragment>
									<Link
										to='/employers/hrcentral/accounts/edit_employer'
										title={employer?.firstname + employer?.lastname}>
										<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
										Hi,{' '}
										<span className={cx('name')}>
											{employer?.firstname} {employer?.lastname}
										</span>
									</Link>

									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='/employers/dashboard' title='Dashboard'>
													Dashboard
												</a>
											</li>
											<li>
												<a href='/employers/hrcentral/posting' title='Quản Lý Đăng Tuyển'>
													Quản Lý Đăng Tuyển
												</a>
											</li>
											<li>
												<a
													href='/employers/hrcentral/manageresume'
													className={cx('active')}
													title='Quản Lý Ứng Viên'>
													Quản Lý Ứng Viên
												</a>
											</li>
											<li>
												<a href='/employers/hrcentral/orders-available' title='Đơn Hàng '>
													Đơn Hàng
												</a>
											</li>
											<li>
												<a href='/employers/hrcentral/accounts/edit_employer'> Tài khoản</a>
											</li>
											<li>
												<Link title='Thoát' onClick={handleLogout}>
													{' '}
													Thoát
												</Link>
											</li>
										</ul>
									</div>
								</Fragment>
							) : (
								<Fragment>
									<div className={cx('title-login')}>
										<Link to={routesPath.EmployerPaths.login}>
											<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
											Đăng nhập
										</Link>
									</div>
									<div className={cx('main-register')}>
										<Link to={routesPath.EmployerPaths.register}>Đăng ký</Link>
									</div>
								</Fragment>
							)}
						</div>

						<div className={cx('main-candidates')}>
							<Link to={routesPath.JobseekerPaths.home}>
								<em className={cx('fa', 'fa-external-link')} />
								<h4>Dành cho Ứng Viên</h4>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
