import styles from '~/App/layouts/DefaultLayout/jobseeker/jobseeker-layout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Banner = () => {
	return (
		<div className={cx('cb-main-search')}>
			<section className={cx('cb-banner-home')}>
				<div className={cx('banner-pc')}>
					<div className={cx('swiper-container')}>
						<div className={cx('swiper-wrapper', 'pc-swiper-wrapper')}>
							<div className={cx('swiper-slide')}>
								<a
									href='https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL25oYS10dXllbi1kdW5nL25nYW4taGFuZy10bWNwLXF1YW4tZG9pLjM1QTY2RDcwLmh0bWw=&id=291'
									rel='nofollow; noreferrer'
									target='_blank'>
									<div className={cx('image')}>
										<img
											src='https://images.careerbuilder.vn/background/mbbank_1900x570_2022_12_12_1670843523.jpg'
											alt='Banner'
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className={cx('main-page')}>
						<div className={cx('swiper-pagination')} />
					</div>
				</div>
				<div className={cx('banner-mobile')}>
					<div className={cx('swiper-container')}>
						<div className={cx('swiper-wrapper', 'mobile-swiper-wrapper')}>
							<div className={cx('swiper-slide')}>
								<a
									href='https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL25oYS10dXllbi1kdW5nL25nYW4taGFuZy10bWNwLXF1YW4tZG9pLjM1QTY2RDcwLmh0bWw=&id=291'
									rel='nofollow; noreferrer'
									target='_blank'>
									<div className={cx('image')}>
										<img
											src='https://images.careerbuilder.vn/background/mbbank_640x430_2022_12_12_1670843523.jpg'
											alt='Banner'
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className={cx('main-page')}>
						<div className={cx('swiper-pagination')} />
					</div>
				</div>
			</section>
			<section className={cx('cb-box-find')}>
				<div className={cx('container')}>
					<div className={cx('main-box')}>
						<div className={cx('box-body')}>
							<div className={cx('title')}>
								<h1>
									Đón lấy thành công với <span> 17,664 cơ hội nghề nghiệp </span>
								</h1>
							</div>
							<form>
								<div className={cx('main-form')}>
									<div className={cx('row')}>
										<div className={cx('form-group', 'col-12', 'form-keyword')}>
											<label>
												<span className={cx('mdi', 'mdi-magnify')} />
											</label>
											<input
												style={{
													appearance: 'none',
													width: '100%',
													height: 40,
													padding: '5px 10px',
													paddingLeft: 40,
													border: '1px solid #cccccc',
													borderRadius: 4,
													background: '#fff',
													color: '#172642',
													fontSize: 16,
													fontWeight: 500
												}}
												type='search'
												className='prompt keyword'
												autoFocus=''
												name='keyword'
												id='keyword'
												placeholder='Chức danh, Kỹ năng, Tên công ty'
												autoComplete='off'
											/>

											<div className={cx('cleartext')}>
												<em className={cx('mdi', 'mdi-close-circle')} />
											</div>
										</div>
									</div>
									<div className={cx('advanced-search')}>
										<div className={cx('row')}>
											<div className={cx('form-group', 'col-sm-6')}>
												<label>{/* <span className={cx("mdi","mdi-map-marker")} /> */}</label>
												<select
													id={cx('location')}
													name={cx('location')}
													className={cx('chosen-select', 'chosen-select-max-three')}
													data-placeholder='Tất cả địa điểm'
													style={{
														appearance: 'none',
														width: '100%',
														height: 40,
														padding: '5px 10px',
														paddingLeft: 40,
														border: '1px solid #cccccc',
														borderRadius: 4,
														backgroundColor: '#fff!important',
														color: '#172642',
														fontSize: 16,
														fontWeight: 500
													}}>
													<option value=''>Chọn địa điểm</option>
													<option value='ha-noi_4'>Hà Nội</option>
												</select>
											</div>
											<div className='form-group col-sm-6'>
												<label>{/* <span className="mdi mdi-menu" /> */}</label>
												<select
													id='industry'
													name='industry'
													className='chosen-select chosen-select-max-three'
													data-placeholder='Tất cả ngành nghề'
													multiple=''>
													<option value=''>Chọn ngành nghề</option>
													<option value='bao-tri-sua-chua_71'>Bảo trì / Sửa chữa</option>
													<option value='nganh-khac_27'>Ngành khác</option>
												</select>
											</div>
											<div className='form-group col-sm-6'>
												<label>{/* <span className={cx("mdi", "mdi-currency-usd")} /> */}</label>
												<select
													name='salary'
													id={cx('salary')}
													className={cx('chosen-select')}
													data-placeholder='Chọn Mức Lương'
													multiple=''>
													<option value=''>Chọn mức lương</option>
													<option value={3}>Từ 3.000.000 đ</option>
													<option value={5}>Từ 5.000.000 đ</option>
													<option value={7}>Từ 7.000.000 đ</option>
													<option value={10}>Từ 10.000.000 đ</option>
													<option value={15}>Từ 15.000.000 đ</option>
													<option value={20}>Từ 20.000.000 đ</option>
													<option value={30}>Từ 30.000.000 đ</option>
													<option value={40}>Từ 40.000.000 đ</option>
													<option value={50}>Từ 50.000.000 đ</option>
													<option value={60}>Từ 60.000.000 đ</option>
													<option value={70}>Từ 70.000.000 đ</option>
												</select>
											</div>
											<div className={cx('form-group', 'col-sm-6')}>
												<label>{/* <span className={cx("mdi", "mdi-briefcase")} /> */}</label>
												<select
													id={cx('level')}
													name='level'
													className='chosen-select chosen-select-max-one'
													data-placeholder='Cấp bậc'
													multiple=''>
													<option value=''>Chọn cấp bậc</option>
													<option value='sinh-vien-thuc-tap-sinh_1'>Sinh viên/ Thực tập sinh</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className={cx('reset-form')}>
									<a href=''>
										<i className={cx('fa', 'fa-rotate-right')} /> Reset
									</a>
								</div>
								<div className={cx('toggle-search')}>
									<div className={cx('advanced-search-btn')}>
										<a href='#'>
											<span className={cx('mdi', 'mdi-magnify-plus-outline')} /> Tìm kiếm nâng cao
										</a>
									</div>
									<div className={cx('expend-less-btn')}>
										<a href='#'>
											<span className={cx('mdi', 'mdi-chevron-up')} /> Thu gọn
										</a>
									</div>
								</div>
								<div className={cx('find-jobs')}>
									<button className={cx('btn-gradient')}>TÌM VIỆC NGAY</button>
								</div>
							</form>
						</div>
						<div className={cx('box-footer')}>
							<div className={cx('content')}>
								<p>Đăng hồ sơ nghề nghiệp để dễ dàng ứng tuyển nhanh</p>
							</div>
							<div className={cx('upload-resume')}>
								<button className={cx('btn-gradient')}>ĐĂNG NGAY</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
