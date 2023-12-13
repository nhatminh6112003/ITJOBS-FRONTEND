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
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import { toast } from 'react-toastify';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import useSearchOrder from '../components/useSearchOrder';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { useGetAllServiceTypeQuery } from '~/App/providers/apis/serviceTypeApi';
const OrdersAvailable = ({ cx }) => {
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });

	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { pushQuery, query } = useSearchOrder();
	const { control, handleSubmit } = useForm({
		values: {
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
		}
	});
	const { data: allOrder } = useGetAllCompany_serviceQuery({
		params: {
			company_id: employer?.company?.id,
			isExpiry: 0,
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
		},
		refetchOnMountOrArgChange: true
	});
	const { data: allServiceType } = useGetAllServiceTypeQuery();
	useEffect(() => {
		console.log(allOrder?.data);
	}, [allOrder]);
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
							<div id='frm-filter-reports'>
								<div className={sx('main-form-posting')}>
									<form className={sx('form-wrap')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-group', 'form-date', 'start-date')}>
											<InputFieldControl label='Từ ngày' type='date' name='fromDate' control={control} />
										</div>
										<div className={sx('form-group', 'form-date', 'end-date')}>
											<InputFieldControl label='Tới ngày' type='date' name='toDate' control={control} />
										</div>
										{/* <div className={sx('form-group', 'form-select')}>
											<SelectFieldControl
												label='Loại dịch vụ'
												name='service_type_id'
												control={control}
												className={sx('select_long')}
												options={allServiceType?.data.map((value) => {
													return {
														value: value.id,
														label: value.name
													};
												})}
											/>
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
