import React, { useEffect, useState } from 'react';
import styles from './ordersAvailable.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import {
	useGetAllCompany_serviceQuery,
	useUpdateCompany_serviceMutation
} from '~/App/providers/apis/company_serviceApi';
import { Link, useLocation } from 'react-router-dom';

const sx = classNames.bind(styles);
import moment from 'moment';
import formatDate from '~/Core/utils/formatDate';
import TabMenu from '../components/TabMenu';
import Button from '~/Core/components/common/Button';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import { toast } from 'react-toastify';
const OrdersAvailable = ({ cx }) => {
	const [dataUpdate, setDataUpdate] = useState(null);
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });

	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { data: allOrder } = useGetAllCompany_serviceQuery({
		params: {
			company_id: employer?.company?.id,
			isExpiry: 0
		}
	});
	const activedOrder = allOrder?.data?.filter((item) => {
		return item?.isActive === true;
	});
	const [update] = useUpdateCompany_serviceMutation();

	const updateCompany_service = (id) => {
		const now = moment();
		const register_date = now.format('YYYY-MM-DD');
		const expiration_date = now.add(30, 'days').format('YYYY-MM-DD');
		update({ id, payload: { isActive: true, register_date: register_date, expiration_date: expiration_date } })
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			})
			.catch((err) => {
				toast.error(err?.data?.message);
			});
		setModalConfirmState({ open: false, payload: null });
	};

	const calculateRemainingDays = (order) => {
		if (order?.expiration_date) {
			const expirationDate = moment(order.expiration_date);
			const currentDate = moment();
			const remainingDays = expirationDate.diff(currentDate, 'days');
			return Math.max(0, remainingDays) + ' ngày';
		}
		return '0 ngày';
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
							<div id='frm-filter-reports'>
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
														<th width='6%'>Số thứ tự</th>
														<th width='15%'>Gói dịch vụ</th>
														<th width='6%'>Số lượng</th>
														<th width='6%'>Còn lại</th>
														<th width='15%'>Ngày bắt đầu kích hoạt</th>
														<th width='15%'>Ngày hết hạn kích hoạt</th>
														<th width='15%'>Trạng thái</th>
														<th width='10%'>Hành động</th>
													</tr>
												</thead>
												<tbody>
													{allOrder?.data && allOrder?.data.length > 0 ? (
														allOrder?.data.map((order, index) => {
															return (
																<>
																	<tr>
																		<td>{index + 1}</td>
																		<td>
																			<div className={sx('title')}>
																				<p>{order?.service?.name}</p>
																			</div>
																		</td>
																		<td>
																			<div className={sx('title')}>
																				<p>{order?.quantity}</p>
																			</div>
																		</td>
																		<td>
																			<div className={sx('title')}>
																				<p>
																					{order?.isActive === true
																						? calculateRemainingDays(order)
																						: '30 ngày'}
																				</p>
																			</div>
																		</td>
																		<td>
																			<p>{formatDate(order?.register_date) || 'Chưa bắt đầu'}</p>
																		</td>
																		<td>
																			<p>{formatDate(order?.expiration_date) || 'Chưa bắt đầu'}</p>
																		</td>
																		<td>
																			<p>
																				{order?.isActive === true
																					? 'Đang kích hoạt'
																					: 'Chưa kích hoạt'}
																			</p>
																		</td>
																		<td>
																			<button
																				className={sx('btn-submit', 'btn-gradient')}
																				onClick={() => {
																					const checkActive = activedOrder.some((item) => {
																						return (
																							item?.service?.service_type_id ===
																							order?.service?.service_type_id
																						);
																					});
																					if (checkActive) {
																						return toast.error('Bạn không thể thực hiện!');
																					}
																					return setModalConfirmState({
																						open: true,
																						payload: order?.id
																					});
																				}}>
																				Kích hoạt
																			</button>
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
							</div>
						</div>
					</div>
				</div>
				<ConfirmDialog
					contentText='Bạn sẽ không thể thay đổi cùng 1 loại dịch vụ trong 30 ngày!'
					open={modalConfirmState.open}
					onConfirm={() => updateCompany_service(modalConfirmState.payload)}
					onCancel={() => setModalConfirmState({ open: false, payload: null })}
				/>
			</div>
		</section>
	);
};

export default OrdersAvailable;
