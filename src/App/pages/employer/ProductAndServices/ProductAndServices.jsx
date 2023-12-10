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
			<section
				id='section-61'
				style={{
					marginTop: 30
				}}>
				<div className={sx('all-product-detail-build', 'cb-section')}>
					<div className={cx('container')}>
						<div className={cx('row', 'list-build', 'no-gutters')}>
							{listService?.data.map((service) => {
								return (
									<div className={cx('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xxl-5-12')}>
										<div
											className={sx('build-item')}
											style={{
												border: '1px solid #e7e7e7',
												boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
											}}>
											<div className={sx('top-build')}>
												<p className={sx('name')}>{service?.name}</p>
												<p className={sx('price')}>{service?.price.toLocaleString('vi-VN')}đ </p>
												<ul className={sx('list-service')}>
													{service.benefits.map((benefit) => {
														return <li>{benefit?.name}</li>;
													})}
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
