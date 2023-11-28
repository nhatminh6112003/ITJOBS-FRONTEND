import React, { Frgament } from 'react';
import styles from './productServices.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
const sx = classNames.bind(styles);

const ProductAndServices = ({ cx }) => {
	return (
		<div>
			<img src='https://images.careerbuilder.vn/product/cb-employer_banner_vn-12_1624435035.jpg' />
			<section className={sx('all-product-detail-nav')}>
				<div className={cx('container')}>
					<ul className={sx('list-menu')}>
						<li className={sx('active')} data-menu={11}>
							<a href='javascript:void(0)'>Tổng quan</a>
						</li>
						<li className={sx('')} data-menu={12}>
							<a href='javascript:void(0)'>Lợi ích</a>
						</li>
						<li className={sx('')} data-menu={61}>
							<a href='javascript:void(0)'>Bảng giá</a>
						</li>
						<li className={sx('contact')} data-menu={100}>
							<Link to={routesPath.EmployerPaths.serviceAndContact}>Liên hệ</Link>
						</li>
					</ul>
				</div>
			</section>
			<section id='section-11'>
				<div className={sx('all-product-detail-build', 'cb-section')} style={{ padding: '60px 0' }}>
					<div className={cx('container')}>
						<h2 className={sx('cb-title', 'cb-title-center')} style={{ textAlign: 'center', marginTop: 30 }}>
							Không bỏ lỡ nhân tài
						</h2>
						<div className={sx('button')}>
							<div className={sx('full-content')}>
								<p style={{ textAlign: 'center' }}>
									Hơn 1.000.000+ hồ sơ chất lượng tại Job Hunters được cập nhật mới mỗi ngày phù hợp với nhu
									cầu tìm kiếm ứng viên của các doanh nghiệp.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id='section-12'>
				<section className={sx('all-product-detail-attractive', 'cb-section')}>
					<div className={cx('container')}>
						<h2 className={sx('cb-title', 'cb-title-center')} style={{ padding: '60px 0', textAlign: 'center' }}>
							Lợi ích
						</h2>
						<div className={sx('main-attractive')}>
							<div className={cx('row', 'attractive-list')}>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://static.careerbuilder.vn/themes/employer/img/employer/32.png'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>
												Hơn 1 triệu hồ sơ hoàn chỉnh và được cập nhật mới thường xuyên.
											</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://static.careerbuilder.vn/themes/employer/img/employer/34.png'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>Tìm ứng viên phù hợp với 1 cú nhấp chuột</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://static.careerbuilder.vn/themes/employer/img/employer/21.png'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>Chủ động liên hệ với ứng viên tiềm năng.</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://images.careerbuilder.vn/content/images/viber_image_2021-05-26_14-49-29.jpg'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>Nhanh chóng tiếp cận ứng viên qua chức năng gửi email.</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://static.careerbuilder.vn/themes/employer/img/employer/35.png'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>Dễ dàng quản lý và phân loại hồ sơ ứng viên.</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src='https://static.careerbuilder.vn/themes/employer/img/employer/33.png'
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>
												Tìm và lưu trữ hồ sơ ứng viên cho nhu cầu tuyển dụng trong tương lai.
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<section id='section-61'>
				<div className={sx('all-product-detail-build', 'cb-section')}>
					<div className={cx('container')}>
						<h2 className={sx('cb-title', 'cb-title-center')} style={{ textAlign: 'center', padding: '60px 0' }}>
							Tìm hồ sơ ứng viên ngay
						</h2>
					</div>
					<div className={cx('container')}>
						<div className={cx('row', 'list-build', 'no-gutters')}>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 1M</p>
										<p className={sx('price')}>3.483.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 30 ngày</li>
											<li>Số điểm: 100</li>
											<li>Đơn giá: 3.483.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 2M</p>
										<p className={sx('price')}>6.966.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 60 ngày</li>
											<li>Số điểm: 200</li>
											<li>Đơn giá: 6.966.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 3M</p>
										<p className={sx('price')}>9.413.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 90 ngày</li>
											<li>Số điểm: 300</li>
											<li>Tiết kiệm: 1.036.000 đ</li>
											<li>Đơn giá: 10.449.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 6M</p>
										<p className={sx('price')}>17.780.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 180 ngày</li>
											<li>Số điểm: 600</li>
											<li>Tiết kiệm: 3.118.000 đ</li>
											<li>Đơn giá: 20.898.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 9M</p>
										<p className={sx('price')}>33.880.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 270 ngày</li>
											<li>Số điểm: 1200</li>
											<li>Tiết kiệm: 7.916.000 đ</li>
											<li>Đơn giá: 41.796.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 12M</p>
										<p className={sx('price')}>69.694.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 360 ngày</li>
											<li>Số điểm: 2500</li>
											<li>Tiết kiệm: 17.381.000 đ</li>
											<li>Đơn giá: 87.075.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
								<div className={sx('build-item')}>
									<div className={sx('top-build')}>
										<p className={sx('name')}>RD 12M - 3000 điểm</p>
										<p className={sx('price')}>83.633.000đ</p>
										<ul className={sx('list-service')}>
											<li>Thời gian: 360 ngày</li>
											<li>Số điểm: 3000</li>
											<li>Tiết kiệm: 20.857.000 đ</li>
											<li>Đơn giá: 104.490.000 đ</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<br />
						{/* <strong>Căn cứ vào cấp bậc mong muốn của ứng viên:</strong>
						<div className={sx('button')}>
							<div className={sx('full-content')}>
								<div className={sx('button')}>
									<div className={sx('full-content')}>
										<ul className={sx('list-service')}>
											<li>
												<p>
													<strong>• Cấp Quản lý trở lên: 3 điểm</strong>
												</p>
											</li>
											<li>
												<p>
													<strong>• Nhân viên/ Trưởng nhóm: 2 điểm</strong>
												</p>
											</li>
											<li>
												<p>
													<strong>• Sinh viên/ Mới tốt nghiệp: 1 điểm</strong>
												</p>
											</li>
										</ul>
										<p>
											<strong>Lưu ý: Giá chưa bao gồm VAT</strong>
										</p>
										<p>&nbsp;</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			<section className={sx('all-product-detail-handbook', 'cb-section')} id='section-99'>
				{/* <div className={cx('container')}>
					<h2 className={sx('cb-title', 'cb-title-center')} style={{padding:'60px 0',textAlign:'center'}}>Cẩm nang tuyển dụng</h2>
					<div className={sx('main-slide')}>
						<div className={sx('swiper-container')}>
							<div className={sx('swiper-wrapper')}>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a href='https://careerbuilder.vn/vi/hiringsite/careerbuilder-cong-bo-top-100-nha-tuyen-dung-yeu-thich-nam-2022.35A4F0CA.html'>
												<img
													src='https://images.careerbuilder.vn/tintuc/hiring/20230328/500x280/1679995626_careerbuilder-cong-bo-top-100-nha-tuyen-dung-yeu-thich-2022-careerbuilder.jpg'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													href='https://careerbuilder.vn/vi/hiringsite/careerbuilder-cong-bo-top-100-nha-tuyen-dung-yeu-thich-nam-2022.35A4F0CA.html'>
													CAREERBUILDER công bố top 100 nhà tuyển dụng yêu thích năm 2022
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													href='https://careerbuilder.vn/vi/hiringsite/careerbuilder-cong-bo-top-100-nha-tuyen-dung-yeu-thich-nam-2022.35A4F0CA.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												href='https://careerbuilder.vn/vi/hiringsite/dung-tu-bo-ky-nghi-ma-ban-xung-dang.35A4F0C8.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20230213/500x280/1676281553_dung-tu-bo-ky-nghi-ma-ban-xung-dang-careerbuilder-1.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													href='https://careerbuilder.vn/vi/hiringsite/dung-tu-bo-ky-nghi-ma-ban-xung-dang.35A4F0C8.html'>
													Đừng từ bỏ kỳ nghỉ mà bạn xứng đáng
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													href='https://careerbuilder.vn/vi/hiringsite/dung-tu-bo-ky-nghi-ma-ban-xung-dang.35A4F0C8.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												
												href='https://careerbuilder.vn/vi/hiringsite/cai-toi-cang-lon-quan-ly-cang-kho.35A4F0C7.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20230208/500x280/1675822570_cai-toi-cang-lon-quan-ly-cang-kho-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/cai-toi-cang-lon-quan-ly-cang-kho.35A4F0C7.html'>
													Cái tôi càng lớn - quản lý càng khó
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/cai-toi-cang-lon-quan-ly-cang-kho.35A4F0C7.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/nhung-cau-hoi-quan-trong-hon-ban-tuong.35A4F0C6.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20230207/500x280/1675735569_nhung-cau-hoi-quan-trong-hon-ban-tuong-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/nhung-cau-hoi-quan-trong-hon-ban-tuong.35A4F0C6.html'>
													Những câu hỏi quan trọng hơn bạn tưởng
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/nhung-cau-hoi-quan-trong-hon-ban-tuong.35A4F0C6.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/giu-chan-nhan-vien-chinh-la-nghe-thuat-quan-ly.35A4F0C5.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20230206/500x280/1675653577_giu-chan-nhan-vien-chinh-la-nghe-thuat-quan-ly-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/giu-chan-nhan-vien-chinh-la-nghe-thuat-quan-ly.35A4F0C5.html'>
													Giữ chân nhân viên chính là nghệ thuật quản lý
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/giu-chan-nhan-vien-chinh-la-nghe-thuat-quan-ly.35A4F0C5.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/dung-ngai-neu-nhan-vien-cua-ban-gan-ket-than-thiet.35A4F0C4.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20221230/500x280/1672369925_dung-ngai-neu-nhan-vien-cua-ban-gan-ket-than-thiet-careerbulder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/dung-ngai-neu-nhan-vien-cua-ban-gan-ket-than-thiet.35A4F0C4.html'>
													Đừng ngại nếu nhân viên của bạn gắn kết thân thiết
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/dung-ngai-neu-nhan-vien-cua-ban-gan-ket-than-thiet.35A4F0C4.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/lam-sep-cua-nhung-nguoi-thong-minh.35A4F0C3.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20221229/500x280/1672296419_lam-sep-cua-nhung-nguoi-thong-minh-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/lam-sep-cua-nhung-nguoi-thong-minh.35A4F0C3.html'>
													Làm sếp của những người thông minh
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/lam-sep-cua-nhung-nguoi-thong-minh.35A4F0C3.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/hoa-ra-ban-khong-gioi-danh-gia-nhan-vien-nhu-ban-nghi.35A4F0C2.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20221227/500x280/1672126971_hoa-ra-ban-khong-gioi-danh-gia-nhan-vien-nhu-ban-nghi-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/hoa-ra-ban-khong-gioi-danh-gia-nhan-vien-nhu-ban-nghi.35A4F0C2.html'>
													Hóa ra bạn không giỏi đánh giá nhân viên như bạn nghĩ
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/hoa-ra-ban-khong-gioi-danh-gia-nhan-vien-nhu-ban-nghi.35A4F0C2.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/techcombank-tro-lai-duong-dua-nha-tuyen-dung-yeu-thich-2022.35A4F0C1.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20221227/500x280/1672110901_techcombank-tro-lai-duong-dua-nha-tuyen-dung-yeu-thich-2022.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/techcombank-tro-lai-duong-dua-nha-tuyen-dung-yeu-thich-2022.35A4F0C1.html'>
													Techcombank trở lại đường đua 'Nhà tuyển dụng yêu thích 2022'
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/techcombank-tro-lai-duong-dua-nha-tuyen-dung-yeu-thich-2022.35A4F0C1.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('swiper-slide')}>
									<div className={sx('handbook-item')}>
										<div className={sx('image')}>
											<a
												target='_blank'
												href='https://careerbuilder.vn/vi/hiringsite/lam-gi-voi-quan-ly-luoi-bieng-trong-cong-ty.35A4F0C0.html'>
												<img
													data-src='https://images.careerbuilder.vn/tintuc/hiring/20221223/500x280/1671761055_lam-gi-voi-quan-ly-luoi-bieng-trong-cong-ty-careerbuilder.jpg'
													src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif'
													className={sx('swiper-lazy')}
												/>
											</a>
										</div>
										<div className={sx('caption')}>
											<div className={sx('title')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/lam-gi-voi-quan-ly-luoi-bieng-trong-cong-ty.35A4F0C0.html'>
													Làm gì với quản lý lười biếng trong công ty?
												</a>
											</div>
											<div className={sx('view-more')}>
												<a
													target='_blank'
													href='https://careerbuilder.vn/vi/hiringsite/lam-gi-voi-quan-ly-luoi-bieng-trong-cong-ty.35A4F0C0.html'>
													<span>Xem thêm</span>
													<em className={sx('mdi', 'mdi-chevron-right')} />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={sx('main-page')}>
							<div className={sx('swiper-pagination')} />
						</div>
						<div className={sx('main-button')}>
							<div className={sx('button-prev')}>
								<em className={sx('mdi', 'mdi-chevron-left')} />
							</div>
							<div className={sx('button-next')}>
								<em className={sx('mdi', 'mdi-chevron-right')} />
							</div>
						</div>
					</div>
				</div> */}
			</section>
		</div>
	);
};

export default ProductAndServices;
