import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Login.module.css';
import LoginForm from './components/LoginForm';
import { useLoginMutation } from '~/App/providers/apis/authApi';
import routesPath from '~/App/config/routesPath';
const cx = classNames.bind(styles);
const Login = () => {
	const user = useSelector((state) => state.auth?.user);
	const [loginMutation, { isLoading }] = useLoginMutation();
	const handleLoginFormSubmit = async (data) => {
		await loginMutation(data);
	};

	return (
		<>
			{user && <Navigate to={routesPath.JobseekerPaths.dashboard} />}
			<section className={cx('signin-form', 'cb-section')}>
				<div className={cx('container')}>
					<div className={cx('cb-title', 'cb-title-center')}>
						<h2>Chào mừng bạn tham gia ItJobs</h2>
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
															Tìm được công việc bạn yêu thích phù hợp với kỹ năng và tiêu chí bạn quan
															tâm
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
										<li className={cx('active')}>
											<Link to={routesPath.JobseekerPaths.login} title='Đăng Nhập '>
												Đăng Nhập{' '}
											</Link>
										</li>
										<li>
											<Link to={routesPath.JobseekerPaths.register} title='Đăng ký'>
												Đăng ký
											</Link>
										</li>
									</ul>
									<div className={cx('form-login')}>
										<LoginForm onSubmit={handleLoginFormSubmit} className={cx} />
									</div>
									<div className={cx('forgot-password')}>
										<a href='https://careerbuilder.vn/vi/jobseekers/forgotpassword'>Quên mật khẩu?</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="text" name="email" />
        <div>Password</div>

        <input type="text" name="password" />
        <div>
          <button type="submit">Gửi</button>
        </div>
      </form> */}
		</>
	);
};
export default Login;
