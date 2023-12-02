import React, { useEffect, useState } from 'react';
import styles from './ordersAvailable.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';
import { Link, useLocation } from 'react-router-dom';

const sx = classNames.bind(styles);
import moment from 'moment';
import formatDate from '~/Core/utils/formatDate';
import TabMenu from '../components/TabMenu';
const OrdersAvailable = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
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
										<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
											<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
												<em className={cx('material-icons')}>find_in_page</em> Tìm
											</button>
										</div>
									</div>
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
																				<p>
																					{' '}
																					{daysRemaining
																						? Math.floor(daysRemaining % 30) + ' ngày'
																						: '0 ngày'}
																				</p>
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
