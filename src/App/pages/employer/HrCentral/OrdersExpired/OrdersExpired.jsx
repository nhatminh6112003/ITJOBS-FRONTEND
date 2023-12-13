import React from 'react';
import styles from '../OrdersAvailable/ordersAvailable.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';
import { Link, useLocation } from 'react-router-dom';

const sx = classNames.bind(styles);
import moment from 'moment';
import formatDate from '~/Core/utils/formatDate';
import TabMenu from '../components/TabMenu';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import useSearchOrder from '../components/useSearchOrder';
import { useForm } from 'react-hook-form';
const OrdersExpired = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { pushQuery, query } = useSearchOrder();
	const { control, handleSubmit } = useForm({
		values: {
			fromDate: query.fromDate || '',
			toDate: query.toDate || ''
		}
	});
	const { data: allOrder } = useGetAllCompany_serviceQuery({
		params: {
			company_id: employer?.company?.id,
			isExpiry: 1,
			fromDate: query.fromDate || '',
			toDate: query.toDate || ''
		},
		refetchOnMountOrArgChange: true
	});
	const calculateRemainingDays = (order) => {
		if (order?.expiration_date) {
			const expirationDate = moment(order.expiration_date);
			const currentDate = moment();
			const remainingDays = expirationDate.diff(currentDate, 'days');
			return Math.max(0, remainingDays) + ' ngày';
		}
		return '0 ngày';
	};
	const onSubmit = (data) => {
		pushQuery({ ...data });
	};
	return (
		<section className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Quản Lý Đơn Hàng</h1>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							{TabMenu.map((item) => (
								<li className={sx(currentPath == item.path && 'active')}>
									<Link to={item.path} alt={item.title}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>{' '}
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<form method='post' id='frm-filter-reports'>
								<div className={sx('main-form-posting')}>
									<form className={sx('form-wrap')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-group', 'form-date', 'start-date')}>
											<InputFieldControl label='Từ ngày' type='date' name='fromDate' control={control} />
										</div>
										<div className={sx('form-group', 'form-date', 'end-date')}>
											<InputFieldControl label='Tới ngày' type='date' name='toDate' control={control} />
										</div>
										{/* <div className={sx('form-group', 'form-select')}>
											<label>Loại dịch vụ</label>
											<select name='servicetype' className={sx('select_long')}>
												<option selected='' value={-1}>
													Tất cả
												</option>
												<option value={0}>Đăng tuyển dụng</option>
												<option value={1}>Tìm hồ sơ</option>
												<option value={2}>Dịch vụ khác</option>
											</select>
										</div> */}
										<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
											<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
												<em className={cx('material-icons')}>find_in_page</em> Tìm
											</button>
										</div>
									</form>
								</div>
								<div className={sx('main-resume-applied')}>
									<div className={sx('boding-resume-applied')}>
										<div className={sx('table', 'table-resume-applied')}>
											<table>
												<thead>
													<tr>
														<th width='15%'>Số đơn hàng</th>
														<th width='24%'>Gói dịch vụ</th>
														<th width='10%'>Còn lại</th>
														<th width='13%'>Ngày bắt đầu kích hoạt</th>
														<th width='13%'>Ngày hết hạn kích hoạt</th>
														<th width='15%'>Tình trạng</th>
													</tr>
												</thead>
												<tbody>
													{allOrder?.data && allOrder?.data.length > 0 ? (
														allOrder?.data?.map((order) => {
															return (
																<>
																	<tr>
																		<td>{order?.id}</td>
																		<td>
																			<div className={sx('title')}>
																				<p>{order?.service?.name}</p>
																			</div>
																		</td>
																		<td>
																			<div className={sx('title')}>
																				<p>{calculateRemainingDays(order)}</p>
																			</div>
																		</td>
																		<td>
																			<p>{formatDate(order?.register_date)}</p>
																		</td>
																		<td>
																			<p>{formatDate(order?.expiration_date)}</p>
																		</td>
																		<td>
																			<p>
																				{moment(order?.expiration_date).isAfter(moment(), 'day')
																					? 'Còn hạn'
																					: 'Hết hạn'}
																			</p>
																		</td>
																	</tr>
																</>
															);
														})
													) : (
														<tr>
															<td colSpan={7} className={sx('cb-text-center')}>
																Không có dữ liệu!
															</td>
														</tr>
													)}
												</tbody>
											</table>
										</div>
										<div className={sx('main-pagination')}></div>
									</div>
									<div className={sx('main-button-sticky')}>
										<div className={sx('button-prev', 'disabled')}>
											<em className={sx('mdi', 'mdi-chevron-left')} />
										</div>
										<div className={sx('button-next')}>
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdersExpired;
