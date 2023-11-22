import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import routesPath from '~/App/config/routesPath';
import { AccountCircleIcon, ExpandMoreIcon, CheckIcon, Notifications } from '~/Core/resources';
import { logout } from '~/App/providers/slices/authSlice';
import { Fragment, useEffect } from 'react';
import UserRoleEnum, { UserType } from '~/App/constants/roleEnum';
import { useGetOneUserQuery } from '~/App/providers/apis/userApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
const cx = classNames.bind(styles);

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth?.user);
	const { data } = useGetOneUserQuery(user?.id);
	const { data: allProfession } = useGetAllProfessionQuery({
		params: {
			limit: 5
		}
	});

	const handleLogout = () => {
		dispatch(logout({ Role: UserType[UserRoleEnum.JOBSEEKER] }));
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
								<Link to={routesPath.JobseekerPaths.home}>
									<img style={{ height: 50 }} src='/logo.png' alt='Tuyển dụng & Tìm kiếm việc làm nhanh 1' />
								</Link>
							</div>
							<div className={cx('main-menu')}>
								<ul className={cx('menu')}>
									<li className={cx('dropdown')} style={{ cursor: 'pointer' }}>
										<a tabindex='0' role='button'>
											Tìm việc làm
										</a>
										<div className={cx('dropdown-menu')}>
											<ul>
												<li>
													<Link to={routesPath.JobseekerPaths.allJob} title='Việc làm mới nhất'>
														Việc làm mới nhất
													</Link>
												</li>
												{allProfession?.data &&
													allProfession?.data.map((profession) => {
														return (
															<li key={profession.id}>
																<Link
																	to={{
																		pathname: routesPath.JobseekerPaths.allJob,
																		search: `?profession_id=${profession.id}`
																	}}
																	title={profession.name}>
																	{profession.name}
																</Link>
															</li>
														);
													})}
											</ul>
										</div>
									</li>
									{allProfession?.data &&
										allProfession?.data.map((profession) => {
											return (
												<li key={profession.id}>
													<Link
														to={{
															pathname: routesPath.JobseekerPaths.allJob,
															search: `?profession_id=${profession.id}`
														}}
														title={profession.name}>
														{profession.name}
													</Link>
												</li>
											);
										})}
									{/* <li>
										{' '}
										<a href="<?= _WEB_ROOT.'/tinh_luong_gross_net' ?>" title='Tính Lương'>
											Tính Lương
										</a>
									</li> */}
								</ul>
							</div>
						</div>
						<div className={cx('right-wrap')}>
							{/* hide */}
							{!user ? (
								<>
									<div className={cx('main-login', 'dropdown')}>
										<div className={cx('title-login')}>
											<Link to={routesPath.JobseekerPaths.login} title='Đăng nhập'>
												<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
												Đăng nhập
											</Link>
										</div>
									</div>
									<div className={cx('main-register')}>
										<Link to={routesPath.JobseekerPaths.register} title='Đăng ký'>
											Đăng ký
										</Link>
									</div>
								</>
							) : (
								<div className={cx('main-login', 'logged', 'dropdown')}>
									<Link to={routesPath.JobseekerPaths.dashboard} rel='nofollow'>
										<AccountCircleIcon sx={{ fontSize: 20, paddingRight: '5px' }} />
										Chào
										<span className={cx('nameUser')}>{data?.firstname}</span>
									</Link>
									<div className={cx('dropdown-menu')}>
										<ul>
											<li>
												<Link to={routesPath.JobseekerPaths.dashboard}>Quản Lý Hồ Sơ</Link>
											</li>
											<li>
												<Link to={routesPath.JobseekerPaths.myProfile}>Hồ sơ của tôi</Link>
											</li>
											<li>
												<Link to={routesPath.JobseekerPaths.jobSaved}>Việc làm đã lưu</Link>
											</li>
											<li>
												<Link to={routesPath.JobseekerPaths.jobApplied}>Việc làm đã ứng tuyển</Link>
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
											<Link to={routesPath.EmployerPaths.login}>Đăng nhập</Link>
										</li>
										<li>
											<a href='' title='Đăng Tuyển Dụng'>
												Đăng Tuyển Dụng
											</a>
										</li>
										<li>
											<Link to={routesPath.EmployerPaths.findJobSeeker}>Tìm Ứng Viên</Link>
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
