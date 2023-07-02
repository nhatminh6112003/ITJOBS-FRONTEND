const Register = ({ cx }) => {
	return (
		<section className={cx('employer-signup-new', 'step-1', 'cb-section')}>
			<div className={cx('container')}>
				<div className={cx('row', 'row-sp')}>
					<div className={cx('col-xl-5')}>
						<div className='box-img'>
							{' '}
							<img src='https://images.careerbuilder.vn/content/images/Banner/pic-laptop.png' alt='' />{' '}
						</div>
					</div>
					<div className={cx('col-xl-7')}>
						<div className={cx('box-info-signup')}>
							<div className={cx('title')}>
								<h2>Đăng Ký Tài Khoản Nhà Tuyển Dụng</h2>
							</div>
							<form name={cx('frmRegister')} id={cx('frmRegister')} method='post' autoComplete='off'>
								<div className={cx('step-1')} id='step-1'>
									{' '}
									<div className={cx('step-title', 'd-flex')}>
										<div className={cx('main-step-title')}>
											<h3>Bước 1 : Thông Tin Đăng Nhập</h3>
											<p>Quý khách sử dụng thông tin tài khoản này để đăng nhập vào CareerBuilder.vn</p>
										</div>
										<div className={cx('text-sup')}>
											<a
												href='https://careerbuilder.vn/vi/employers/faq'
												target='_blank'
												title='Hướng dẫn'
												className={cx('support')}
												rel='noreferrer'>
												Hướng dẫn
											</a>
										</div>
									</div>
									<div className={cx('main-form')}>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Email đăng nhập</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='email'
													id={cx('email')}
													defaultValue=''
													autoComplete='off'
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<span className='form-error error_email' id='error_email'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Xác nhận email</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='re_email'
													id='re_email'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<a className='check-email' href='' onClick='checkEmailExist();'>
													Kiểm tra sự tồn tại của email
												</a>{' '}
												<span className='form-error error_re_email' id='error_re_email'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Mật khẩu</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='password'
													className={cx('form-control')}
													name='password'
													id='password'
													defaultValue=''
												/>
												<span className='form-error error_password'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Xác nhận mật khẩu</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													name='re_password'
													id='re_password'
													type='password'
													defaultValue=''
													className={cx('form-control')}
												/>
												<span className='form-error error_re_password'></span>{' '}
											</div>
										</div>
										<div className={cx('btn-area')}>
											<button type='submit' className={cx('btn-action', 'next-tab2')}>
												Tiếp tục
											</button>
										</div>
									</div>{' '}
								</div>
								<div className='step-2' id='step-2' style={{ display: 'none' }}>
									{' '}
									<div className='step-title d-flex'>
										<div className='main-step-title'>
											<h3>Bước 2 : Thông Tin Công Ty</h3>
											<p>Thông tin doanh nghiệp của Quý Công ty trên CareerBuilder</p>
										</div>
										<div className='text-sup'>
											<a
												href='https://careerbuilder.vn/vi/employers/faq'
												target='_blank'
												className='support'
												rel='noreferrer'>
												Hướng dẫn
											</a>
										</div>
									</div>
									<div className={cx('main-form')}>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Tên công ty</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='company_name'
													id='company_name'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<span className='form-error error_company_name'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Loại hình hoạt động</span>{' '}
											</div>
											<div className='form-input short form-input-select'>
												<select className={cx('form-control')} id='company_type' name='company_type'>
													<option value=''>Vui lòng chọn</option>
													<option value={6}>100% vốn nước ngoài</option>
													<option value={4}>Cá nhân</option>
													<option value={7}>Công ty đa quốc gia</option>
													<option value={2}>Cổ phần</option>
													<option value={5}>Liên doanh</option>
													<option value={1}>Nhà nước</option>
													<option value={3}>Trách nhiệm hữu hạn</option>
												</select>
												<span className='form-error error_company_type' />{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Chọn số nhân viên</span>{' '}
											</div>
											<div className='form-input short form-input-select'>
												<select className={cx('form-control')} name='company_size'>
													<option value=''>Chọn số nhân viên</option>
													<option value='Ít hơn 10'>Ít hơn 10</option>
													<option value='10-20'>10-20</option>
													<option value='25-99'>25-99</option>
													<option value='100-499'>100-499</option>
													<option value='500-999'>500-999</option>
													<option value='1.000-4.999'>1.000-4.999</option>
													<option value='5.000-9.999'>5.000-9.999</option>
													<option value='10.000-19.999'>10.000-19.999</option>
													<option value='20.000-49.999'>20.000-49.999</option>
													<option value='Hơn 50.000'>Hơn 50.000</option>
												</select>
												<span className='form-error error_company_size' />{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Quốc gia</span>{' '}
											</div>
											<div className='form-input short form-input-select'>
												<select
													className={cx('form-control')}
													name='country_id'
													id='country_id'
													onChange='loadLocations(this.value);'>
													<option value={1} selected=''>
														Việt Nam
													</option>
													<option value={22}>Bangladesh</option>
													<option value={14}>Campuchia</option>
													<option value={4}>Canada</option>
													<option value={25}>Công Gô</option>
													<option value={20}>Đài Loan</option>
													<option value={8}>Hàn Quốc</option>
													<option value={13}>Hoa Kỳ</option>
													<option value={24}>Hồng Kông</option>
													<option value={169}>Khác</option>
													<option value={19}>Lào</option>
													<option value={9}>Malaysia</option>
													<option value={21}>Myanmar</option>
													<option value={2}>Nhật Bản</option>
													<option value={17}>Qatar</option>
													<option value={23}>Quốc tế</option>
													<option value={10}>Singapore</option>
													<option value={5}>Trung Quốc</option>
													<option value={3}>Úc</option>
													<option value={16}>Ukraine</option>
												</select>
												<span className='form-error error_country_id' />{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span id='lable_location'>Tỉnh / TP</span>{' '}
											</div>
											<div className='form-input short form-input-select'>
												<select className={cx('form-control')} name='location_id' id='location_id'>
													<option value={4}>Hà Nội</option>
													<option value={8}>Hồ Chí Minh</option>
													<option value={76}>An Giang</option>
													<option value={64}>Bà Rịa - Vũng Tàu</option>
													<option value={781}>Bạc Liêu</option>
													<option value={281}>Bắc Cạn</option>
													<option value={240}>Bắc Giang</option>
													<option value={241}>Bắc Ninh</option>
													<option value={75}>Bến Tre</option>
													<option value={650}>Bình Dương</option>
													<option value={56}>Bình Định</option>
													<option value={651}>Bình Phước</option>
													<option value={62}>Bình Thuận</option>
													<option value={78}>Cà Mau</option>
													<option value={26}>Cao Bằng</option>
													<option value={71}>Cần Thơ</option>
													<option value={50}>Dak Lak</option>
													<option value={1042}>Dak Nông</option>
													<option value={511}>Đà Nẵng</option>
													<option value={900}>Điện Biên</option>
													<option value={1064}>Đồng Bằng Sông Cửu Long</option>
													<option value={61}>Đồng Nai</option>
													<option value={67}>Đồng Tháp</option>
													<option value={59}>Gia Lai</option>
													<option value={19}>Hà Giang</option>
													<option value={351}>Hà Nam</option>
													<option value={39}>Hà Tĩnh</option>
													<option value={320}>Hải Dương</option>
													<option value={31}>Hải Phòng</option>
													<option value={780}>Hậu Giang</option>
													<option value={18}>Hòa Bình</option>
													<option value={321}>Hưng Yên</option>
													<option value={901}>Khác</option>
													<option value={58}>Khánh Hòa</option>
													<option value={77}>Kiên Giang</option>
													<option value={60}>Kon Tum</option>
													<option value={1071}>KV Bắc Trung Bộ</option>
													<option value={1069}>KV Đông Nam Bộ</option>
													<option value={1070}>KV Nam Trung Bộ</option>
													<option value={1072}>KV Tây Nguyên</option>
													<option value={23}>Lai Châu</option>
													<option value={25}>Lạng Sơn</option>
													<option value={20}>Lào Cai</option>
													<option value={63}>Lâm Đồng</option>
													<option value={72}>Long An</option>
													<option value={350}>Nam Định</option>
													<option value={38}>Nghệ An</option>
													<option value={30}>Ninh Bình</option>
													<option value={68}>Ninh Thuận</option>
													<option value={210}>Phú Thọ</option>
													<option value={57}>Phú Yên</option>
													<option value={52}>Quảng Bình</option>
													<option value={510}>Quảng Nam</option>
													<option value={55}>Quảng Ngãi</option>
													<option value={33}>Quảng Ninh</option>
													<option value={53}>Quảng Trị</option>
													<option value={79}>Sóc Trăng</option>
													<option value={22}>Sơn La</option>
													<option value={66}>Tây Ninh</option>
													<option value={36}>Thái Bình</option>
													<option value={280}>Thái Nguyên</option>
													<option value={37}>Thanh Hóa</option>
													<option value={54}>Thừa Thiên- Huế</option>
													<option value={73}>Tiền Giang</option>
													<option value={1065}>Toàn quốc</option>
													<option value={74}>Trà Vinh</option>
													<option value={27}>Tuyên Quang</option>
													<option value={70}>Vĩnh Long</option>
													<option value={211}>Vĩnh Phúc</option>
													<option value={29}>Yên Bái</option>
												</select>
												<span className='form-error error_location_id' />{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Địa chỉ công ty</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='company_address'
													id='company_address'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<span className='form-error error_company_address' />{' '}
											</div>
										</div>
										<div className='form-group d-flex info-company'>
											<div className={cx('form-info')}>
												{' '}
												<span>Sơ lược về công ty</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<textarea
													className={cx('form-control')}
													rows={5}
													name='company_summary'
													id='company_summary'
													defaultValue={''}
												/>
												<span className='form-error error_company_summary'></span>{' '}
											</div>
											<div className='noti'>
												<em className='material-icons'>error</em>
												<div className='toolip'>
													<p>
														{' '}
														<strong>Gợi ý</strong>
													</p>
													<p>
														Giới thiệu thông tin về công ty là cách tốt nhất làm nổi bật công ty của Quý
														khách trước các ứng viên tiềm năng. Một bản sơ lược tốt về công ty sẽ gây ấn
														tượng đối với ứng viên, khiến họ chọn công ty của Quý khách làm nơi phát triển
														nghề nghiệp lâu dài.
													</p>
													<p>
														Hãy giới thiệu các đặc trưng của công ty bằng cách trình bày nhiều thông tin
														hấp dẫn về công ty:{' '}
													</p>
													<ul>
														<p>Năm thành lập công ty</p>
														<p>Vị trí tọa lạc ( thành phố/ quận/huyện)</p>
														<p>Quốc tịch (công ty Việt Nam hay chi nhánh tập đoàn nước ngoài)</p>
														<p>Dòng sản phẩm/các dịch vụ</p>
														<p>Quy mô công ty (số nhân viên, văn phòng, nhà máy)</p>
														<p>Hoạt động và thành tựu kinh doanh</p>
													</ul>
												</div>
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Tên người liên hệ</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='contact_name'
													id='contact_name'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<span className='form-error error_contact_name'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Điện thoại</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='contact_phone'
													id='contact_phone'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập thông tin'
												/>
												<span className='form-error error_contact_phone'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Mã số thuế</span>{' '}
											</div>
											<div className={cx('form-input')}>
												<input
													type='text'
													name='taxid'
													id='taxid'
													defaultValue=''
													className={cx('form-control')}
													placeholder='Vui lòng nhập mã số thuế'
												/>
												<span className='form-error error_taxid'></span>{' '}
											</div>
										</div>
										<div className={cx('form-group', 'd-flex')}>
											<div className={cx('form-info')}>
												{' '}
												<span>Mã xác nhận</span>{' '}
											</div>
											<div className='form-input short'>
												<input
													type='text'
													name='captcha'
													id='captcha'
													autoComplete='off'
													className={cx('form-control')}
												/>
												<span className='form-error error_captcha'></span>{' '}
											</div>
											<div className='box-captcha d-flex'>
												<div id='captchaim'>
													<img
														width={180}
														height={50}
														alt=''
														src='https://images.careerbuilder.vn/rws/captcha/da94aade66c152641ba56532635aa311.png'
														className='img_code'
													/>
													<input
														type='hidden'
														name='key_captcha'
														id='key_captcha'
														defaultValue='da94aade66c152641ba56532635aa311'
													/>
												</div>
												<div className='reCapcha' style={{ fontSize: 24 }}>
													<a onClick="refeshImgCaptcha('captchaim');" href=''>
														{' '}
														<em className='fa fa-repeat' />
													</a>
												</div>
											</div>
										</div>
										<div className='btn-area list-btn'>
											<input
												type='hidden'
												name='csrf_token_register'
												defaultValue='e878fa221ebf40aafdc968edc18c04dc54f131201835c480ed4efac413d27d13'
											/>
											<button type='button' className='btn-prev'>
												Quay lại
											</button>
											<button className='btn-action' type='submit'>
												Đăng ký
											</button>
										</div>
										<div className='right-note'>
											<p>
												{' '}
												Bằng việc nhấp vào "Đăng Ký Ngay!", bạn đã đồng ý với các điều khoản ghi trong{' '}
												<a href='https://careerbuilder.vn/vi/jobseekers/use'>
													Thỏa thuận dịch vụ của CareerBuilder.vn.
												</a>
											</p>
										</div>
									</div>{' '}
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={cx('row', 'row-intro')}>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-1', 'd-flex', 'align-center')}>
							<img src='img/signup-new/icon-folder.png' />
							<p>
								Hơn <strong>50.000</strong> hồ sơ cập nhật mỗi tháng
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-2', 'd-flex', 'align-center')}>
							<img src='img/signup-new/icon-link.png' />
							<p>
								Website tuyển dụng toàn cầu <strong>duy nhất</strong> tại <strong>Việt Nam</strong>
							</p>
						</div>
					</div>
					<div className={cx('col-12', 'col-xl-4')}>
						<div className={cx('box-intro', 'box-intro-3', 'd-flex', 'align-center')}>
							<img src='img/signup-new/icon-triangle.png' />
							<p>
								Hơn <strong>18 triệu </strong>lượt xem mỗi tháng
							</p>
						</div>
					</div>{' '}
					<div className={cx('col-12')}>
						<div className={cx('right-note')}>
							<p>
								Nếu bạn đã có tài khoản. Vui lòng{' '}
								<a href='https://careerbuilder.vn/vi/employers/login'>Đăng nhập</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
