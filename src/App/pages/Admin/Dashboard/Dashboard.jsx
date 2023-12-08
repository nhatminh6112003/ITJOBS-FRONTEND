import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import StatusCard from '../components/status-card/StatusCard';

import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import useSearchDateDashBoard from '../../employer/components/useSearchDateDashBoard';
import styles from './dashboard.module.css';
import classNames from 'classnames/bind';

import ReactApexChart from 'react-apexcharts';

import { useCalculateTotalRevenueQuery } from '~/App/providers/apis/company_serviceApi';
import moment from 'moment';
import formatVND from '~/Core/utils/formatVND';
import UserRoleEnum from '~/App/constants/roleEnum';
import { useAnalysisUserQuery } from '~/App/providers/apis/userApi';
import { useAnalysisOrderQuery } from '~/App/providers/apis/orderApi';
import { useAnalyticTotalPostQuery } from '~/App/providers/apis/jobPostApi';
const sx = classNames.bind(styles);
const Dashboard = ({ cx }) => {
	const themeReducer = useSelector((state) => state.theme.mode);
	const { pushQuery, query } = useSearchDateDashBoard();
	const [startDate, setStartDate] = useState(moment().subtract(15, 'days').format('YYYY-MM-DD'));
	const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		values: {
			startDate_1: query.startDate_1 || startDate,
			endDate_1: query.endDate_1 || endDate
		}
	});
	const { data: countEmployer } = useAnalysisUserQuery({ params: { user_type_id: UserRoleEnum.EMPLOYER } });
	const { data: countJobSeeker } = useAnalysisUserQuery({ params: { user_type_id: UserRoleEnum.JOBSEEKER } });
	const { data: countOrder } = useAnalysisOrderQuery();
	const { data: countJobPost } = useAnalyticTotalPostQuery();

	const statusCards = [
		{
			count: countEmployer?.data ? countEmployer?.data : 0,
			title: 'Nhà tuyển dụng'
		},
		{
			count: countJobSeeker?.data ? countJobSeeker?.data : 0,
			title: 'Ứng viên'
		},
		{
			count: countOrder ? countOrder : 0,
			title: 'Đơn hàng'
		},
		{
			count: countJobPost?.length ? countJobPost?.length : 0,
			title: 'Bài đăng tuyển dụng'
		}
	];
	const onSubmit = (data) => {
		pushQuery({ ...data });
	};
	const { data: CalculateTotalRevenue } = useCalculateTotalRevenueQuery({
		params: {
			startDate: query.startDate_1 || startDate,
			endDate: query.endDate_1 || endDate
		}
	});

	const analyticJobSeekerApplyByDayQueryOptions = {
		series: [
			{
				name: 'Tổng tiền',
				data: CalculateTotalRevenue?.data?.data
			}
		],
		options: {
			color: ['#6ab04c', '#2980b9'],
			chart: {
				background: 'transparent'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				categories: CalculateTotalRevenue?.data?.label
			},
			legend: {
				position: 'top'
			},
			grid: {
				show: false
			}
		}
	};

	return (
		<div >
			<div className={cx('row')}>
				<div className={cx('col-12')}>
					<div className={cx('row')}>
						{statusCards.map((item, index) => (
							<div className={cx('col-3')} key={index}>
								<StatusCard count={item.count} title={item.title} />
							</div>
						))}
					</div>
				</div>
				<div className={cx('col-12')}>
					<div className={cx('card')}>
						<div className={cx('card__header')}>
							<h3>Tổng doanh thu dịch vụ</h3>
						</div>
						<div className={cx('card__body')}>
							<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
								<div className={sx('form-wrap')}>
									<div
										className={sx('form-group', 'form-date')}
										style={{ display: 'flex', justifyContent: 'end', marginBottom: 12 }}>
										<InputFieldControl
											style={{ border: '1px solid #6c6e6f', padding: '2px', borderRadius: 5 }}
											className={sx('dates_range')}
											id='startDate_1'
											type='date'
											name='startDate_1'
											control={control}
										/>
										<div style={{ paddingRight: '10px' }}> </div>
										<InputFieldControl
											style={{ border: '1px solid #6c6e6f', padding: '2px', borderRadius: 5 }}
											className={sx('dates_range')}
											id='endDate_1'
											type='date'
											name='endDate_1'
											control={control}
										/>
										<div className={sx('form-group', 'form-submit')} style={{ marginLeft: '10px' }}>
											<button
												className={sx('btn-gradient', 'btn-submit')}
												id='btn_chart1'
												type='submit'
												style={{
													backgroundColor: '#349eff',
													color: 'white',
													padding: '4px 8px',
													borderRadius: 5
												}}>
												Áp dụng
											</button>
										</div>
									</div>
								</div>
							</form>
							<ReactApexChart
								options={analyticJobSeekerApplyByDayQueryOptions.options}
								series={analyticJobSeekerApplyByDayQueryOptions.series}
								type='bar'
								height={300}
							/>
						</div>
					</div>
				</div>
				{/* <div className={cx('col-12')}>
					<div className={cx('card')}>
						<div className={cx('card__header')}>
							<h3>latest orders</h3>
						</div>
						<div className={cx('card__body')}></div>
						<div className={cx('card__footer')}>
							<Link to='/'>view all</Link>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Dashboard;
