import React, { useEffect, useState } from 'react';
import styles from './ordersAvailable.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const sx = classNames.bind(styles);
import moment from 'moment';
import formatDate from '~/Core/utils/formatDate';
const OrdersAvailable = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const [expirationDate, setExpirationDate] = useState(0);
	const { data: allOrder } = useGetAllCompany_serviceQuery({
		params: {
			company_id: employer?.company?.id
		}
	});
	const now = moment();
	const expirationMoment = moment(expirationDate);
	const duration = moment.duration(expirationMoment.diff(now));
	// Lấy số ngày
	const daysRemaining = duration.asDays();
	useEffect(() => {
		allOrder?.data?.map((value) => {
			const expirationDate = value?.expiration_date;
			setExpirationDate(expirationDate);
		});
	}, [allOrder, now, setExpirationDate]);

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
							<li className={sx('active')}>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_available'
									className={sx('expand')}>
									Đơn Hàng Đang Sử Dụng
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_expired'
									className={sx('collapse')}>
									Đơn Hàng Hết Hạn/Đã Sử Dụng
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_search'
									className={sx('collapse')}>
									Báo Cáo Dịch Vụ Hồ Sơ
								</a>
							</li>
							<li>
								<a
									href='https://careerbuilder.vn/vi/employers/services/services_price'
									target='_blank'
									rel='noreferrer'>
									Mua dịch vụ
								</a>
							</li>
						</ul>{' '}
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<form
								method='post'
								id='frm-filter-reports'
								action='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_available'>
								<div className={sx('main-form-posting')}>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-text')}>
											<label>Từ khóa</label>
											<input type='text' name='keywords' defaultValue='' placeholder='Số đơn hàng' />
										</div>
										<div className={sx('form-group', 'form-date', 'start-date')}>
											<label> Từ ngày</label>
											<input
												type='text'
												className={sx('dates_cus_select')}
												name='fromdate'
												id='fromdate'
												defaultValue=''
												placeholder='Chọn'
												readOnly=''
											/>
											<div className={sx('icon')}>
												<em className={cx('material-icons')}>event</em>
											</div>
											<div id='start-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
												<div className={sx('dtpicker-bg')}>
													<div className={sx('dtpicker-cont')}>
														<div className={sx('dtpicker-content')}>
															<div className={sx('dtpicker-subcontent')} />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-date', 'end-date')}>
											<label> Tới ngày</label>
											<input
												type='text'
												className={sx('dates_cus_select')}
												name='todate'
												id='todate'
												defaultValue=''
												readOnly=''
												placeholder='Chọn'
											/>
											<div className={sx('icon')}>
												<em className={cx('material-icons')}>event</em>
											</div>
											<div id='end-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
												<div className={sx('dtpicker-bg')}>
													<div className={sx('dtpicker-cont')}>
														<div className={sx('dtpicker-content')}>
															<div className={sx('dtpicker-subcontent')} />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-select')}>
											<label>Loại dịch vụ</label>
											<select name='servicetype' className={sx('select_long')}>
												<option selected='' value={-1}>
													Tất cả
												</option>
												<option value={0}>Đăng tuyển dụng</option>
												<option value={1}>Tìm hồ sơ</option>
												<option value={2}>Dịch vụ khác</option>
											</select>
										</div>
										{/* <div className={sx('form-group', 'form-reset')}>
											<button className={sx('btn-reset')} type='reset' href='javascript:void(0);'>
												<em className={cx('material-icons')}>loop</em> Bỏ qua{' '}
											</button>
										</div> */}
										<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
											<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
												<em className={cx('material-icons')}>find_in_page</em> Tìm
											</button>
										</div>
									</div>
								</div>
								<div className={sx('main-resume-applied')}>
									<div className={sx('heading-resume-applied')}>
										<div className={sx('left-heading')}>
											<ul className={sx('list-check')}>
												<li className={sx('view-posting-detail', 'active')}>
													<a href='javascript:void(0)'>Xem chi tiết</a>
												</li>
												<li className={sx('view-posting-summary')}>
													<a href='javascript:void(0)'>Xem tóm tắt</a>
												</li>
											</ul>
										</div>
									</div>
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
														allOrder?.data.map((order) => {
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
																				<p> {Math.floor(daysRemaining % 30)} ngày</p>
																			</div>
																		</td>
																		<td>
																			<p>{formatDate(order?.register_date)}</p>
																		</td>
																		<td>
																			<p>{formatDate(order?.expiration_date)}</p>
																		</td>
																		<td>
																			<p>{order?.expiration_date !== 0 ? 'Còn hạn' : 'Hết hạn'}</p>
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

export default OrdersAvailable;
