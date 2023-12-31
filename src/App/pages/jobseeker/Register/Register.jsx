import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import RegisterForm from './components/RegisterForm';
import routesPath from '~/App/config/routesPath';
import styles from './Register.module.css';
const cx = classNames.bind(styles);
const Register = () => {
	return (
		<section className={cx('register-form', 'cb-section')} style={{ paddingBottom: 60 }}>
			<div className={cx('container')}>
				<div className={cx('cb-title', 'cb-title-center')}>
					<h2
						style={{
							marginBottom: '1.875rem',
							color: '#182642',
							fontSize: '1.875rem',
							fontWeight: '700',
							paddingTop: '60px'
						}}>
						Tham gia hôm nay
					</h2>
				</div>
				<div className={cx('box-shadown')}>
					<div className={cx('row')}>
						<div className={cx('col-md-6')}>
							<div className={cx('information')}>
								<div className={cx('list-info')} id={cx('list-info')}>
									<div className={cx('job-item')}>
										<div className={cx('figure')}>
											<div className={cx('image', 'is-blue')}>
												<img
													className='lazy-bg'
													src='	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i1.png'
													alt=''
												/>
											</div>
											<div className={cx('figcaption')}>
												<div className={cx('title')}>
													<h3>Thông báo việc làm</h3>
												</div>
												<div className={cx('caption')}>
													<p>Được cập nhật các cơ hội việc làm mới nhất từ nhiều công ty hàng đầu</p>
												</div>
											</div>
										</div>
									</div>
									<div className={cx('job-item')}>
										<div className={cx('figure')}>
											<div className={cx('image', 'is-green')}>
												<img
													className='lazy-bg'
													src='	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i2.png'
													alt=''
												/>
											</div>
											<div className={cx('figcaption')}>
												<div className={cx('title')}>
													<h3>Kiếm việc dễ dàng</h3>
												</div>
												<div className={cx('caption')}>
													<p>
														Tìm được công việc bạn yêu thích phù hợp với kỹ năng và tiêu chí bạn quan tâm
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className={cx('job-item')}>
										<div className={cx('figure')}>
											<div className={cx('image', 'is-yellow')}>
												<img
													className='lazy-bg'
													src='	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i3.png'
													alt=''
												/>
											</div>
											<div className={cx('figcaption')}>
												<div className={cx('title')}>
													<h3>Ứng tuyển nhanh chóng</h3>
												</div>
												<div className={cx('caption')}>
													<p>Dễ dàng ứng tuyển nhiều vị trí mà không cần mất nhiều thời gian</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-md-6')}>
							<div className={cx('main-form')}>
								<ul className={cx('list-tabs')}>
									<li>
										<Link
											style={{ padding: '5px 0' }}
											to={routesPath.JobseekerPaths.login}
											title='Đăng Nhập '>
											Đăng Nhập
										</Link>
									</li>
									<li className={cx('active')}>
										<Link
											style={{ padding: '5px 0' }}
											to={routesPath.JobseekerPaths.register}
											title='Đăng ký'>
											Đăng ký
										</Link>
									</li>
								</ul>

								<div className={cx('form-register')}>
									<RegisterForm className={cx} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
