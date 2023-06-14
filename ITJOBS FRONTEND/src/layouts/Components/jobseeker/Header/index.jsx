import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '~/features/authentication/authRequest';
import CardItem from '~/layouts/Components/jobseeker/JobItem';
import config from '~/config/config.routes';

import { AccountCircleIcon, ExpandMoreIcon, CheckIcon } from '~/resources';
const cx = classNames.bind(styles);

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.auth.login.currentUser);
	const handleLogout = () => {
		logoutUser(dispatch, navigate);
	};
	return (
		<>
			<header>
				<div className={cx('container-fluid')}>
					<div className={cx('main-wrap')}>
						<div className={cx('left-wrap')}>
							<div className={cx('button-hambuger')}>
								<span className={cx('mdi mdi-menu')} />
							</div>
							<div className={cx('logo')}>
								<Link to={config.jobSeekerRoutes.home} title='Tuyển dụng & Tìm kiếm việc làm nhanh'>
									<img style={{ height: 80 }} src='' alt='Tuyển dụng & Tìm kiếm việc làm nhanh' />
								</Link>
							</div>
							<div className={cx('main-menu')}>
								<ul className={cx('menu')}>
									<li class={cx('dropdown')}>
										<Link to={config.jobSeekerRoutes.allJob} title='Tìm việc làm'>
											Tìm việc làm
										</Link>
										<div className={cx('dropdown-menu')}>
											<ul>
												<li>
													<a
														href='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html'
														title='Việc làm mới nhất'>
														Việc làm mới nhất
													</a>
												</li>
												<li>
													<a
														href='https://careerbuilder.vn/tim-viec-lam.html'
														title='Ngành nghề / Địa điểm'>
														Ngành nghề / Địa điểm
													</a>
												</li>
												<li>
													<a
														href='https://careerbuilder.vn/viec-lam/ban-hang-kinh-doanh-c31-vi.html'
														title='Bán hàng / Kinh doanh'>
														Bán hàng / Kinh doanh
													</a>
												</li>
												<li>
													<a
														href='https://careerbuilder.vn/viec-lam/hanh-chinh-thu-ky-c3-vi.html'
														title='Hành chính / Thư ký'>
														Hành chính / Thư ký
													</a>
												</li>
												<li>
													<a
														href='https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html'
														title='Kế toán / Kiểm toán'>
														Kế toán / Kiểm toán
													</a>
												</li>
												<li>
													<a href='https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html' title='Nhân sự'>
														Nhân sự
													</a>
												</li>
												<li>
													<a
														href='https://careerbuilder.vn/viec-lam/tiep-thi-marketing-c4-vi.html'
														title='Tiếp thị / Marketing'>
														Tiếp thị / Marketing
													</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<a href="<?= _WEB_ROOT.'/tim_viec_lam' ?>" title='Ngành nghề / Địa điểm'>
											Ngành nghề / Địa điểm
										</a>
									</li>
									<li>
										{' '}
										<a
											href='http://localhost//itjobs/Alljob?keyword=&industry%5B%5D=1'
											title='Tiếp thị / Marketing'>
											Tiếp thị / Marketing
										</a>
									</li>
									<li>
										{' '}
										<a
											href='http://localhost//itjobs/Alljob?keyword=&industry%5B%5D=2'
											title='CNTT - Phần mềm'>
											CNTT - Phần mềm
										</a>
									</li>
									<li>
										{' '}
										<a href="<?= _WEB_ROOT.'/tinh_luong_gross_net' ?>" title='Tính Lương'>
											Tính Lương
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={cx('right-wrap')}>
							<div className={cx('main-noti', 'dropdown')}>
								<>
									<a href='https://careerbuilder.vn/thong-bao-viec-lam' title='Thông Báo Việc Làm'>
										<span className={cx('mdi', 'mdi-bell')} />
									</a>
									<div className={cx('dropdown-menu')}>
										<div className={cx('noti')}>
											<p />
											<p>Chào mừng bạn đến CareerBuilder.vn</p>
											<p>
												Đăng nhập ngay để xem việc làm phù hợp với bạn, nhà tuyển dụng đã xem hồ sơ của bạn
												và cập nhật nhiều hơn nữa ...
												<br />
												<br />
											</p>
											<p />
											<a
												className={cx('email')}
												href='https://careerbuilder.vn/thong-bao-viec-lam'
												title='Tạo Ngay'>
												Tạo Ngay
											</a>
										</div>
									</div>
								</>
							</div>
							{/* <div className={cx("main-login","dropdown")}>
          <div className={cx("title-login")}>
            <a title="Đăng nhập" onClick={redirectLogin} >
              <span className={cx("mdi","mdi-account-circle")}></span>
              Đăng nhập
            </a>
          </div>
        </div> */}
							{/* hide */}
							{!currentUser ? (
								<>
									<div className={cx('main-login', 'dropdown')}>
										<div className={cx('title-login')}>
											<Link to={config.jobSeekerRoutes.login} title='Đăng nhập'>
												<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
												Đăng nhập
											</Link>
										</div>
									</div>
									<div className={cx('main-register')}>
										<Link to={config.jobSeekerRoutes.register} title='Đăng ký'>
											Đăng ký
										</Link>
									</div>
								</>
							) : (
								<div className={cx('main-login', 'logged', 'dropdown')}>
									<Link to={config.jobSeekerRoutes.dashboard} rel='nofollow'>
										<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
										Chào
										<span className={cx('nameUser')}>Minh</span>
									</Link>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<Link to={config.jobSeekerRoutes.dashboard}>Quản Lý Hồ Sơ</Link>
											</li>
											<li>
												<Link to={config.jobSeekerRoutes.myProfile}>Hồ sơ của tôi</Link>
											</li>
											<li>
												<a>Việc làm đã lưu</a>
											</li>
											<li>
												<a>Việc làm đã ứng tuyển</a>
											</li>
											<li>
												<a>Cài đặt</a>
											</li>
											<li>
												<Link title='Thoát' onClick={handleLogout}>
													Thoát
												</Link>
											</li>
										</ul>
									</div>
								</div>
							)}

							<div className={cx('main-language', 'dropdown')}>
								<div className={cx('dropdown-toggle')}>
									<p>
										VI
										<ExpandMoreIcon fontSize='small' />
									</p>
								</div>
								<div className={cx('dropdown-menu')}>
									<div className={cx('item', 'active')}>
										{/* <CheckIcon fontSize="small" sx={{paddingRight:'5px'}} /> */}
										<a className='dropdown-item' href='' title='Change language'>
											VI
										</a>
									</div>
									<div className={cx('item')}>
										{/* <CheckIcon fontSize="small" sx={{paddingRight:'5px'}} /> */}
										<a
											className={cx('dropdown-item')}
											href='https://careerbuilder.vn/en/employers/login'
											title='Change language'>
											EN
										</a>
									</div>
								</div>
							</div>

							<div className={cx('main-employer', 'dropdown')}>
								<a>
									<div className={cx('dropdown-toggle')}>
										<h4>
											Dành cho nhà tuyển dụng
											<ExpandMoreIcon fontSize='small' />
										</h4>
										<p>Đăng tuyển, Tìm ứng viên</p>
									</div>
								</a>
								<div className={cx('dropdown-menu')}>
									<ul>
										<li>
											<Link to={config.employerRoutes.login}>Đăng nhập</Link>
										</li>
										<li>
											<a href='' title='Đăng Tuyển Dụng'>
												Đăng Tuyển Dụng
											</a>
										</li>
										<li>
											<a href=''>Tìm Ứng Viên</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
