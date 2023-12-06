import React from 'react';
import styles from './all-product.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);

const AllProduct = ({ cx }) => {
	return (
		<>
			<section className={sx('all-product-banner')}>
				<div className={sx('swiper-container')}>
					<div className={sx('swiper-wrapper')}>
						<div className={sx('swiper-slide')}>
							<div className={sx('banner-pc')}>
								<div className={sx('image')}>
									<img
										className={sx('swiper-lazy')}
										src='https://images.careerbuilder.vn/content/images/Banner/CB%20landingpage_employer%20banner%20copy.jpg'
										alt=' '
									/>
									<div className={sx('swiper-lazy-preloader')} />
								</div>
							</div>
					
							<div className={cx('container')}>
								<div className={sx('box-content')}>
									<h1> </h1>
									<div className={sx('content')}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={sx('all-product-service', 'cb-section')}>
				<div className={cx('container')}>
					<h2 className={sx('cb-title', 'cb-title-center')}>Chúng tôi mang đến trải nghiệm dịch vụ tốt nhất</h2>
					<div className={sx('sub-title')}>
						<p>
							Tại Việt Nam, CareerBuilder là lựa chọn của hơn 17.000 doanh nghiệp hàng đầu với các ưu thế: Tiếp
							cận hiệu quả nhiều nguồn ứng viên tiềm năng với Giải pháp kết nối, tuyển dụng và quản lý nhân tài
							Talent Solution, Talent Driver, Targeted Email Marketing, Talent Referral. Thu hút hàng trăm ngàn
							hồ sơ ứng viên hoàn chỉnh và được cập nhật mới thường xuyên
						</p>
					</div>
					<div className={sx('list-service')}>
						<div className={cx('row')}>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3'>
											<img
												className={sx('lazy-new')}
												src='https://static.careerbuilder.vn/themes/employer/img/employer/i1.png'
												alt='Đăng Tuyển Dụng'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3'>
												Đăng Tuyển Dụng
											</a>
										</h3>
										<div className={sx('content')}>
											<p style={{ fontWeight: 'bold' }}>Xây dựng đội ngũ nhân tài cho doanh nghiệp</p>
											<p>
												Thông tin đăng tuyển của bạn sẽ hiển thị trực tuyến trên CareerBuilder.vn và các
												trang đối tác của chúng tôi trong vòng 30 ngày.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8'>
											<img
												className={sx('lazy-new')}
												src='https://static.careerbuilder.vn/themes/employer/img/employer/i2.png'
												alt='Tìm Hồ Sơ Ứng Viên'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8'>
												Tìm Hồ Sơ Ứng Viên
											</a>
										</h3>
										<div className={sx('content')}>
											<p style={{ fontWeight: 'bold' }}>Không bỏ lỡ nhân tài</p>
											<p>
												Truy cập vào hàng trăm ngàn hồ sơ hoàn chỉnh và được cập nhật mới thường xuyên để
												tìm kiếm những ứng viên phù hợp nhất với vị trí tuyển dụng.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/'>
											<img
												className={sx('lazy-new')}
												src='https://static.careerbuilder.vn/themes/employer/img/employer/i3.png'
												alt='Talent Solution'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/'>
												Talent Solution
											</a>
										</h3>
										<div className={sx('content')}>
											<p>
												<strong>Talent Solution Kết nối, tuyển dụng &amp; quản lý nhân tài</strong>
											</p>
											<p>
												Talent Solution - giải pháp tuyển dụng toàn diện cho doanh nghiệp được sáng tạo độc
												quyền bởi CareerBuilder.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9'>
											<img
												className={sx('lazy-new')}
												src='https://static.careerbuilder.vn/themes/employer/img/employer/i3.png'
												alt='Quảng Cáo Tuyển Dụng'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9'>
												Quảng Cáo Tuyển Dụng
											</a>
										</h3>
										<div className={sx('content')}>
											<p style={{ fontWeight: 'bold' }}>
												Xây dựng thương hiệu tuyển dụng ấn tượng trong mắt ứng viên
											</p>
											<p>
												Quảng cáo tuyển dụng có thể thu hút sự chú ý của các ứng viên tài năng nhờ gắn liên
												kết trực tiếp đến thông tin tuyển dụng của bạn trên Logo hoặc Banner.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14'>
											<img className={sx('lazy-new')} src='./img/employer/i5.png' alt='Talent Driver' />
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14'>
												Talent Driver
											</a>
										</h3>
										<div className={sx('content')}>
											<p>
												<strong>Giải pháp quảng bá thương hiệu tuyển dụng &amp; Thu hút nhân tài</strong>
											</p>
											<p>
												Kết hợp giữa chuyên môn tuyển dụng và marketing nhằm thu hút nhân tài, quảng bá
												thương hiệu chuyên nghiệp.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/'>
											<img
												className={sx('lazy-new')}
												data-src='./img/employer/i6.png'
												alt='Targeted Email Marketing'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/'>
												Targeted Email Marketing
											</a>
										</h3>
										<div className={sx('content')}>
											<p>
												<strong>Nâng cao hiệu quả tiếp cận đối tượng tiềm năng.</strong>
											</p>
											<p>
												Targeted Email Marketing (Quảng bá tập trung bằng thư điện tử) là giải pháp giúp
												nâng cao hiệu quả tiếp cận nhóm đối tượng tiềm năng thông qua phương thức gửi thư
												điện tử.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/'>
											<img
												className={sx('lazy-new')}
												data-src='./img/employer/i7.png'
												alt='Talent Referral'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/'>
												Talent Referral
											</a>
										</h3>
										<div className={sx('content')}>
											<p>
												<strong>Đa dạng nguồn ứng viên từ sự giới thiệu của nhân viên nội bộ</strong>
											</p>
											<p>
												Hệ thống được thiết kế đặc biệt giúp tự động hóa quy trình quản lý tuyển dụng ứng
												viên qua sự giới thiệu của nhân viên nội bộ.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
							<div className={cx('col-md-6')}>
								<div className={sx('item')}>
									<div className={sx('image')}>
										<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10'>
											<img
												className={sx('lazy-new')}
												data-src='./img/employer/i8.png'
												alt='Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế'
											/>
										</a>
									</div>
									<div className={sx('caption')}>
										<h3 className={sx('title')}>
											<a href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10'>
												Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế
											</a>
										</h3>
										<div className={sx('content')}>
											<p>
												<strong>Giải pháp quốc tế cho nhu cầu tuyển dụng</strong>
											</p>
											<p>
												CareerBuilder.vn tự hào mang đến những giải pháp toàn diện cho nhu cầu tuyển dụng
												nhân tài từ khắp nơi trên thế giới.
											</p>
										</div>
										<a
											className={sx('view-more')}
											href='https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10'>
											Xem thêm
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className={sx('employer-customer', 'cb-section')}>
				<div className={cx('container')}>
					<h2 className={sx('cb-title', 'cb-title-center')}>Khách hàng của chúng tôi:</h2>
					<div className={sx('sub-title')}>
						<p>
							CareerBuilder tự hào đã cung cấp dịch vụ cho hơn <strong>17.000 + </strong>doanh nghiệp hàng đầu
							tại Việt Nam
						</p>
					</div>
					<div className={sx('main-slide')}>
						<div className={sx('swiper-container')}>
							<div className={sx('swiper-wrapper')}>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/1.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/2.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/3.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/4.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/5.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/6.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/7.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/8.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/9.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/10.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/11.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/12.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/13.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/14.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/15.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/16.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/17.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/18.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/19.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/20.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/21.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/22.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/23.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/24.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/25.png'
										alt='careerbuilder.vn'
									/>
								</div>
								<div className={sx('swiper-slide')}>
									<img
										src='https://images.careerbuilder.vn/content/images/logo/26.png'
										alt='careerbuilder.vn'
									/>
								</div>
							</div>
						</div>
						<div className={sx('main-button')}>
							<div className={sx('button-prev')}>
								<em className={sx('mdi', 'mdi-chevron-left')}> </em>
							</div>
							<div className={sx('button-next')}>
								<em className={sx('mdi', 'mdi-chevron-right')} />
							</div>
						</div>
					</div>
					<div className={sx('view-more')}>
						<a className={sx('btn-gradient')} href='https://careerbuilder.vn/vi/talentnetwork'>
							Xem thêm
						</a>
					</div>
				</div>
			</section> */}
			{/* Danh Gia Khach Hang */}
		</>
	);
};

export default AllProduct;
