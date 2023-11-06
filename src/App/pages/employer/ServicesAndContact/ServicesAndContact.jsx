import React from 'react';
import styles from './servicesAndContact.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);

const ServicesAndContact = ({ cx }) => {
	return (
		<section className={sx('employer-contact-us', 'cb-section')}>
			<div className={cx('container')}>
				<div className={sx('cb-title', 'cb-title-center')}>
					<h2> Liên hệ</h2>
				</div>
				<div className={sx('box-contact-us')}>
					<div className={cx('row', 'no-gutters')}>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-left')}>
								<ul className={sx('contact-list')}>
									<li></li>
									<li>
										<p className={sx('title')}>Tp. Hồ Chí Minh</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-phone')}> </em>Điện thoại: (84.28) 3822 6060
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-email')}> </em>Email: sales@careerbuilder.vn
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-map-marker')}> </em>Địa chỉ: Pasteur Tower, 139 Pasteur,
											Phường 6, Quận 3
										</p>
									</li>
									<li></li>
									<li>
										<p className={sx('title')}>Hà Nội</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-phone')}> </em>Điện thoại : (84.24) 7305 6060
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-email')}> </em>Email : sales.north@careerbuilder.vn
										</p>
										<p>
											{' '}
											<em className={sx('mdi', 'mdi-map-marker')}> </em>Địa chỉ : VIT Tower, tầng 17- 519 Kim
											Mã, Ba Đình
										</p>
									</li>
								</ul>
								<div className={sx('maps')}>
									<iframe
										id='map_cb_office'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3639812238152!2d106.68978781523721!3d10.783409692316816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f31657477bf%3A0x9c5d979e75996fc4!2zMTM5IFBhc3RldXIsIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1609139708588!5m2!1svi!2s'
										width='100%'
										height={580}
										frameBorder={0}
										style={{ border: 0, verticalAlign: 'middle' }}
										allowFullScreen=''
										aria-hidden='false'
										tabIndex={0}
									/>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('main-form', 'box-right')}>
								<h3 className={sx('form-title')}> Liên hệ chuyên viên tư vấn của CareerBuilder.vn </h3>
								<div className={sx('contact-us-form')}>
									<form name='frmContactUs' id='frmContactUs' method='post'>
										<input
											type='hidden'
											name='csrf_token_contact'
											defaultValue='9f008ddcdc71df0f265ddb44061e7de28948d045884621c7d024f82e430e26c4'
										/>
										<input type='hidden' defaultValue='' name='am' id='am' />
										<input type='hidden' defaultValue='' name='gam' id='gam' />
										<input type='hidden' defaultValue={0} name='job_id' id='job_id' />
										<div className={sx('form-group', 'form-text')}>
											<input
												type='text'
												name='strFullName'
												id='strFullName'
												onkeyup="this.setAttribute('value', this.value);"
												defaultValue=''
											/>
											<label htmlFor=''>
												Họ tên<font style={{ color: 'red' }}>*</font>
											</label>
											<span className={sx('error_strFullName')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-text')}>
											<input
												type='text'
												name='strPhone'
												id='strPhone'
												onkeyup="this.setAttribute('value', this.value);"
												defaultValue=''
											/>
											<label htmlFor=''>
												Điện thoại<font style={{ color: 'red' }}>*</font>
											</label>
											<span className={sx('error_strPhone')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-text')}>
											<input
												type='text'
												name='strEmail'
												id='strEmail'
												onkeyup="this.setAttribute('value', this.value);"
												defaultValue=''
											/>
											<label htmlFor=''>
												Email<font style={{ color: 'red' }}>*</font>
											</label>
											<span className={sx('error_strEmail')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-text')}>
											<input
												type='text'
												id='title'
												name='title'
												onkeyup="this.setAttribute('value', this.value);"
												defaultValue=''
											/>
											<label htmlFor=''>
												Chức danh<font style={{ color: 'red' }}>*</font>
											</label>
											<span className={sx('error_title')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-text')}>
											<input
												type='text'
												id='strComname'
												name='strComname'
												onkeyup="this.setAttribute('value', this.value);"
												defaultValue=''
											/>
											<label htmlFor=''>
												Tên Công ty<font style={{ color: 'red' }}>*</font>
											</label>
											<span className={sx('error_strComname')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-select')}>
											<label htmlFor=''>Quy mô công ty</label>
											<select name='company_size' id='company_size'>
												<option value={1}>1-50</option>
												<option value={2}>50-100</option>
												<option value={3}>100+</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-select')}>
											<label htmlFor=''>Địa Điểm</label>
											<select name='intLocation_id' id='intLocation_id'>
												<option value=''>Chọn Địa điểm</option>
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
												<option value={34}>Hà Tây</option>
												<option value={39}>Hà Tĩnh</option>
												<option value={320}>Hải Dương</option>
												<option value={31}>Hải Phòng</option>
												<option value={780}>Hậu Giang</option>
												<option value={18}>Hòa Bình</option>
												<option value={321}>Hưng Yên</option>
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
												<option value={901}>Khác</option>
												<option value={1073}>Quốc tế</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-select')}>
											<label htmlFor=''>
												Sản phẩm/Dịch vụ Quý khách quan tâm
												<font style={{ color: 'red' }}>*</font>
											</label>
											<select name='intProduct_id' id='intProduct_id'>
												<option value=''>Chọn sản phẩm và dịch vụ...</option>
												<option value={3}>Đăng Tuyển Dụng</option>
												<option value={8}>Tìm Hồ Sơ Ứng Viên</option>
												<option value={13}>Talent Solution</option>
												<option value={9}>Quảng Cáo Tuyển Dụng</option>
												<option value={14}>Talent Driver</option>
												<option value={19}>Targeted Email Marketing</option>
												<option value={20}>Talent Referral</option>
												<option value={10}>Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế</option>
											</select>
											<span className={sx('error_intProduct_id')} style={{ display: 'none' }} />{' '}
										</div>
										<div className={sx('form-group', 'form-textarea')}>
											<textarea name='strContent' id='strContent' placeholder='Nội dung' defaultValue={''} />
										</div>
										<div className={sx('form-group')}>
											<label htmlFor=''>
												Mã xác nhận<font style={{ color: 'red' }}> *</font>
											</label>
											<div className={sx('form-input', 'short')}>
												<input
													type='text'
													name='security_code'
													maxLength={4}
													id='security_code'
													onkeyup="this.setAttribute('value', this.value);"
													defaultValue=''
													autoComplete='off'
													className={sx('form-control')}
												/>
												<span
													className={sx('form-error', 'error_security_code')}
													id='error_security_code'></span>{' '}
											</div>
											<div className={sx('box-captcha')}>
												<div className={sx('capcha')} id='captchaim'>
													<input
														type='hidden'
														name='key_captcha'
														id='key_captcha'
														defaultValue='ff7eba95227a4f2b527d8f523d5c215f'
													/>{' '}
												</div>
												<div className={sx('reCapcha')}>
													{' '}
													<a onclick="refeshCaptchaContact('captchaim');" href='javascript:void(0);'>
														{' '}
														<em className={sx('fa', 'fa-repeat')} />
													</a>{' '}
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-submit')}>
											<button
												className={sx('btn-gradient')}
												id='contact_emp_form_btn'
												type='submit'
												value='Gửi'>
												Gửi
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesAndContact;
