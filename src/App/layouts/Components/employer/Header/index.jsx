import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux';
import UserRoleEnum, { UserType } from '~/App/constants/roleEnum';
import { logout } from '~/App/providers/slices/authSlice';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
const Header = () => {
	const employer = useSelector((state) => state.auth?.employer);
	const dispatch = useDispatch();

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
							<Link to={routesPath.JobseekerPaths.home}>
								<img
									src='./img/logo.png'
									alt='CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder'
									title='CareerBuilder.vn - Nghĩ Nhân Tài, Nghĩ CareerBuilder'
								/>
							</Link>
						</div>
						<div className={cx('main-menu')}>
							<ul className={cx('menu')}>
								<li className={cx('')}>
									<a href='https://careerbuilder.vn/vi/employers' alt='Trang chủ' title='Trang chủ'>
										Trang Chủ
									</a>
								</li>
								<li className={cx('dropdown')}>
									<a href='https://careerbuilder.vn/vi/employers/products-and-services'>Sản Phẩm và Dịch Vụ</a>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3'>
													Đăng Tuyển Dụng
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8'>
													Tìm Hồ Sơ Ứng Viên
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/'>
													Talent Solution
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9'>
													Quảng Cáo Tuyển Dụng
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14'>
													Talent Driver
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/'>
													Targeted Email Marketing
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/'>
													Talent Referral
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10'>
													Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/products-and-services'>
													Xem tất cả sản phẩm / dịch vụ
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className={cx('dropdown')}>
									<Link to={routesPath.JobseekerPaths.dashboard}>HR Central</Link>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/dashboard'>Dashboard</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/postjobs'>Đăng Tuyển Dụng</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/tim-ung-vien.html'>Tìm Hồ Sơ</a>
											</li>
										</ul>
									</div>
								</li>
								<li className=''>
									<a href='https://careerbuilder.vn/vi/hiringsite'>Cẩm Nang Tuyển Dụng</a>
								</li>
								<li className=''>
									<a href='https://careerbuilder.vn/vi/employers/services/contact'>Liên hệ</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={cx('right-wrap')}>
						<div className={cx('main-login', 'dropdown')}>
							{employer ? (
								<Fragment>
									<Link to='https://careerbuilder.vn/vi/employers/hrcentral/accounts' title='minh nguyễn 123'>
										<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
										Hi,{' '}
										<span className={cx('name')}>
											{employer?.firstname} {employer?.lastname}
										</span>
									</Link>

									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/dashboard' title='Dashboard'>
													Dashboard
												</a>
											</li>
											<li>
												<a
													href='https://careerbuilder.vn/vi/employers/hrcentral/posting'
													title='Quản Lý Đăng Tuyển'>
													Quản Lý Đăng Tuyển
												</a>
											</li>
											<li>
												<a
													href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume'
													className={cx('active')}
													title='Quản Lý Ứng Viên'>
													Quản Lý Ứng Viên
												</a>
											</li>
											<li>
												<a
													href='https://careerbuilder.vn/vi/employers/hrcentral/search-history'
													title='Lịch Sử Tìm Kiếm'>
													Lịch Sử Tìm Kiếm
												</a>
											</li>
											<li>
												<a
													href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_available'
													title='Đơn Hàng '>
													Đơn Hàng
												</a>
											</li>
											<li>
												<a
													href='https://careerbuilder.vn/vi/employers/hrcentral/emailcontentmanagement'
													title='Cấu Hình Email'>
													Cấu Hình Email
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/careerbuilder-rewards'>
													CareerBuilder Rewards
												</a>
											</li>
											<li>
												<a href='https://careerbuilder.vn/vi/employers/hrcentral/accounts'> Tài khoản</a>
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

						<div className={cx('main-noti')} style={{ display: 'none' }}>
							<a href=''>
								<span className='mdi mdi-cart' />
							</a>
						</div>
						<div className={cx('main-language', 'dropdown')}>
							<div className={cx('dropdown-toggle')}>
								<p>
									VI
									<ExpandMoreIcon fontSize='small' />
								</p>
							</div>
							<div className={cx('dropdown-menu')}>
								<div className={cx('item', 'active')}>
									<CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
									<a className='dropdown-item' href='' title='Change language'>
										VI
									</a>
								</div>
								<div className={cx('item')}>
									<CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
									<a
										className={cx('dropdown-item')}
										href='https://careerbuilder.vn/en/employers/login'
										title='Change language'>
										EN
									</a>
								</div>
							</div>
						</div>
						<div className={cx('main-candidates')}>
							<Link to={routesPath.JobseekerPaths.home}>
								<em className='fa fa-external-link' />
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
