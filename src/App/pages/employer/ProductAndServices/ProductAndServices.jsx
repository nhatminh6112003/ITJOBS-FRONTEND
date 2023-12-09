import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllServiceQuery } from '~/App/providers/apis/serviceApi';
import styles from './productServices.module.css';
const sx = classNames.bind(styles);

const ProductAndServices = ({ cx }) => {
	const { id } = useParams();
	const { data: listService } = useGetAllServiceQuery(
		{
			params: {
				service_type_id: id
			}
		},
		{
			skip: !id
		}
	);

	return (
		<div>
			<img
				src={
					id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
						? `https://images.careerbuilder.vn/product/cb-employer_banner_vn-12_1624435035.jpg`
						: 'https://images.careerbuilder.vn/product/job_posting_1603264950_1603696837_1624203647.png'
				}
			/>
			<section id='section-12'>
				<section className={sx('all-product-detail-attractive', 'cb-section')}>
					<div className={cx('container')}>
						<h2 className={sx('cb-title', 'cb-title-center')} style={{ padding: '25px 0', textAlign: 'center' }}>
							{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
								? 'Lợi ích'
								: 'Thu hút và xây dựng đội ngũ nhân tài'}
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
												{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
													? 'Hơn 1 triệu hồ sơ hoàn chỉnh và được cập nhật mới thường xuyên.'
													: 'Hiển thị ngay lập tức trên trang CareerBuilder'}
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
											<h3 className={sx('title')}>
												{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
													? 'Tìm ứng viên phù hợp với 1 cú nhấp chuột'
													: 'Linh hoạt và tiết kiệm'}
											</h3>
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
											<h3 className={sx('title')}>
												{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
													? 'Chủ động liên hệ với ứng viên tiềm năng.'
													: 'Tùy chỉnh nội dung trong suốt thời gian đăng tuyển'}
											</h3>
										</div>
									</div>
								</div>
								<div className={cx('col-md-6')}>
									<div className={sx('attractive-item')}>
										<div className={sx('image')}>
											<img
												alt=''
												src={
													id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
														? 'https://images.careerbuilder.vn/content/images/viber_image_2021-05-26_14-49-29.jpg'
														: 'https://images.careerbuilder.vn/content/images/34.png'
												}
											/>
										</div>
										<div className={sx('caption')}>
											<h3 className={sx('title')}>
												{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
													? 'Nhanh chóng tiếp cận ứng viên qua chức năng gửi email.'
													: 'Thêm lợi ích, không phụ thu'}
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
						<h2 className={sx('cb-title', 'cb-title-center')} style={{ textAlign: 'center', padding: '25px 0' }}>
							{id !== '12689714-4b2c-4cc3-a50b-5cbf45f3469b'
								? 'Tìm hồ sơ ứng viên ngay'
								: 'Sẵn sàng xây dựng đội ngũ nhân tài cho doanh nghiệp'}
						</h2>
					</div>
					<div className={cx('container')}>
						<div className={cx('row', 'list-build', 'no-gutters')}>
							{listService?.data.map((service) => {
								return (
									<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
										<div className={sx('build-item')}>
											<div className={sx('top-build')}>
												<p className={sx('name')}>{service?.name}</p>
												<p className={sx('price')}>{service.price.toLocaleString('vi-VN')}đ </p>
												<ul className={sx('list-service')}>
													<li>Thời gian: 30 ngày</li>
												</ul>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<br />
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductAndServices;
