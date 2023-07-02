const Login = ({ cx }) => {
	return (
		<section className={cx('employer-signup-new', 'login', 'cb-section')}>
			<div className={cx('container')}>
				<div className={cx('row', 'row-sp')}>
					<div className={cx('col-xl-5')}>
						<div className={cx('box-img')}>
							<img src='https://images.careerbuilder.vn/content/images/Banner/pic-laptop.png' alt='' />
						</div>
					</div>
					<div className={cx('col-xl-7')}>
						<div className={cx('box-info-signup')}>
							<div className={cx('title')}>
								<h2>Dành Cho Nhà Tuyển Dụng</h2>
							</div>
							<div className={cx('step-title', 'd-flex', 'align-center')}>
								<div className={cx('main-step-title')}>
									<h3>THÔNG TIN ĐĂNG NHẬP</h3>
								</div>
								<div className={cx('text-sup')}>
									<a
										href='https://careerbuilder.vn/vi/employers/faq'
										target='_blank'
										className={cx('support')}
										rel='noreferrer'>
										Hướng dẫn
									</a>
								</div>
							</div>
							<div className={cx('main-form')}>
								<form
									name='frmLogin'
									id={cx('frmLogin')}
									method='post'
									action='https://careerbuilder.vn/vi/employers/login'>
									<div className={cx('form-group', 'd-flex')}>
										<div className={cx('form-info')}>
											<span>Email/Tên đăng nhập</span>
										</div>
										<div className={cx('form-input')}>
											<input
												type='text'
												name='username'
												className={cx('form-control')}
												placeholder=' Vui lòng nhập thông tin'
												onKeyUp="this.setAttribute('value', this.value);"
												onFocus="javascript:if(this.value=='Email/Tên đăng nhập') this.value='';"
											/>
										</div>
									</div>
									<div className={cx('form-group', 'd-flex')}>
										<div className={cx('form-info')}>
											<span>Mật khẩu</span>
										</div>
										<div className={cx('form-input')}>
											<input
												type='password'
												className={cx('form-control')}
												placeholder=' Vui lòng nhập thông tin'
												onKeyUp="this.setAttribute('value', this.value);"
												name='password'
												defaultValue=''
											/>
											<span className='form-error error_password'></span>
										</div>
									</div>
									<div className={cx('user-action')}>
										<a href='https://careerbuilder.vn/vi/employers/forgetpassword.html'>Quên Mật Khẩu</a>
										<div className={cx('btn-area')}>
											<input
												type='hidden'
												name='csrf_token'
												defaultValue='535fa5f4dcb545743c751643fd66148f68645b48e23d29c0012d779dfad71971'
											/>
											<button type='submit' className='btn-action'>
												Đăng nhập
											</button>
										</div>
										<p>
											<a
												className={cx('register')}
												href='javascript:void()'
												onClick="location.href='https://careerbuilder.vn/vi/employers/register'">
												Quý khách chưa có tài khoản?
											</a>
											Đăng ký dễ dàng, hoàn toàn miễn phí
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className={cx('row row-intro')}>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro box-intro-1 d-flex align-center')}>
							<img src='img/signup-new/icon-folder.png' />
							<p>
								Hơn <strong>50.000</strong> hồ sơ cập nhật mỗi tháng
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className='box-intro box-intro-2 d-flex align-center'>
							<img src='img/signup-new/icon-link.png' />
							<p>
								Website tuyển dụng toàn cầu <strong>duy nhất</strong> tại <strong>Việt Nam</strong>
							</p>
						</div>
					</div>
					<div className='col-12 col-xl-4'>
						<div className={cx('box-intro', 'box-intro-3', 'd-flex', 'align-center')}>
							<img src='img/signup-new/icon-triangle.png' />
							<p>
								Hơn <strong>18 triệu </strong>lượt xem mỗi tháng
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
