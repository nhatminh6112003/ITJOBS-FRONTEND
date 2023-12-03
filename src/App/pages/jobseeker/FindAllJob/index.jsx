import React from 'react';
import styles from './find-all-job.module.css';
import classNames from 'classnames/bind';
const sx = classNames.bind(styles);

const FindAllJob = ({ cx }) => {
	return (
		<section className={sx('find-jobsby-categories', 'cb-section')} style={{ padding: '60px 0', margin: '30px 0' }}>
			<div className={cx('container')}>
				<div className={sx('row')}>
					<div className={cx('col-xl-12')}>
						<div className={sx('cb-title')}>
							<h1
								style={{
									marginBottom: '1.875rem',
									color: ' #182642',
									fontSize: '1.875rem',
									fontweight: 700
								}}>
								Tìm Việc Làm Theo Ngành Nghề
							</h1>
						</div>
						<div className={sx('row', 'list-of-working-positions')}>
							<div className={cx('col-md-6', 'col-lg-4', 'cus-col')}>
								<div className={sx('title-h3')}>
									<h2>Tìm việc làm Bán hàng / Tiếp thị</h2>
								</div>
								<ul className={sx('list-jobs')}>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/ban-hang-kinh-doanh-c31-vi.html'
											title='Bán hàng / Kinh doanh'>
											Bán hàng / Kinh doanh
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/ban-hang-kinh-doanh-c31-vi.html'
												title='Bán hàng / Kinh doanh'>
												5.899
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html'
											title='Bán lẻ / Bán sỉ'>
											Bán lẻ / Bán sỉ
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html'
												title='Bán lẻ / Bán sỉ'>
												2.109
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/tiep-thi-marketing-c4-vi.html'
											title='Tiếp thị / Marketing'>
											Tiếp thị / Marketing
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/tiep-thi-marketing-c4-vi.html'
												title='Tiếp thị / Marketing'>
												2.452
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/tiep-thi-truc-tuyen-c37-vi.html'
											title='Tiếp thị trực tuyến'>
											Tiếp thị trực tuyến
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/tiep-thi-truc-tuyen-c37-vi.html'
												title='Tiếp thị trực tuyến'>
												625
											</a>
										</span>
									</li>
								</ul>
							</div>
							<div className={cx('col-md-6', 'col-lg-4', 'cus-col')}>
								<div className={sx('title-h3')}>
									<h2>Tìm việc làm Dịch vụ</h2>
								</div>
								<ul className={sx('list-jobs')}>
									<li>
										<a href='https://careerbuilder.vn/viec-lam/tu-van-c9-vi.html' title='Tư vấn'>
											Tư vấn
										</a>
										<span>
											<a href='https://careerbuilder.vn/viec-lam/tu-van-c9-vi.html' title='Tư vấn'>
												1.158
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/van-chuyen-giao-nhan-kho-van-c33-vi.html'
											title='Vận chuyển / Giao nhận / Kho vận'>
											Vận chuyển / Giao nhận / Kho vận
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/van-chuyen-giao-nhan-kho-van-c33-vi.html'
												title='Vận chuyển / Giao nhận / Kho vận'>
												654
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/lao-dong-pho-thong-c44-vi.html'
											title='Lao động phổ thông'>
											Lao động phổ thông
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/lao-dong-pho-thong-c44-vi.html'
												title='Lao động phổ thông'>
												187
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html'
											title='Dịch vụ khách hàng'>
											Dịch vụ khách hàng
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html'
												title='Dịch vụ khách hàng'>
												1.951
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/phi-chinh-phu-phi-loi-nhuan-c20-vi.html'
											title='Phi chính phủ / Phi lợi nhuận'>
											Phi chính phủ / Phi lợi nhuận
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/phi-chinh-phu-phi-loi-nhuan-c20-vi.html'
												title='Phi chính phủ / Phi lợi nhuận'>
												11
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/an-ninh-bao-ve-c51-vi.html'
											title='An Ninh / Bảo Vệ'>
											An Ninh / Bảo Vệ
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/an-ninh-bao-ve-c51-vi.html'
												title='An Ninh / Bảo Vệ'>
												59
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/luat-phap-ly-c24-vi.html'
											title='Luật / Pháp lý'>
											Luật / Pháp lý
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/luat-phap-ly-c24-vi.html'
												title='Luật / Pháp lý'>
												663
											</a>
										</span>
									</li>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/buu-chinh-vien-thong-c32-vi.html'
											title='Bưu chính viễn thông'>
											Bưu chính viễn thông
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/buu-chinh-vien-thong-c32-vi.html'
												title='Bưu chính viễn thông'>
												95
											</a>
										</span>
									</li>
								</ul>
							</div>
							<div className={cx('col-md-6', 'col-lg-4', 'cus-col')}>
								<div className={sx('title-h3')}>
									<h2>Tìm việc làm Chăm sóc sức khỏe</h2>
								</div>
								<ul className={sx('list-jobs')}>
									<li>
										<a
											href='https://careerbuilder.vn/viec-lam/y-te-cham-soc-suc-khoe-c56-vi.html'
											title='Y tế / Chăm sóc sức khỏe'>
											Y tế / Chăm sóc sức khỏe
										</a>
										<span>
											<a
												href='https://careerbuilder.vn/viec-lam/y-te-cham-soc-suc-khoe-c56-vi.html'
												title='Y tế / Chăm sóc sức khỏe'>
												772
											</a>
										</span>
									</li>
									<li>
										<a href='https://careerbuilder.vn/viec-lam/duoc-pham-c7-vi.html' title='Dược phẩm'>
											Dược phẩm
										</a>
										<span>
											<a href='https://careerbuilder.vn/viec-lam/duoc-pham-c7-vi.html' title='Dược phẩm'>
												494
											</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FindAllJob;
