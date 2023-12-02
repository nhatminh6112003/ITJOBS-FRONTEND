import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Chart from 'react-apexcharts';

import { useSelector } from 'react-redux';

import StatusCard from '../components/status-card/StatusCard';

// import Table from '../components/table/Table';

import Badge from '~/Core/components/common/Badge/Badge';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import useSearchDateDashBoard from '../../employer/components/useSearchDateDashBoard';
import styles from './dashboard.module.css';
import classNames from 'classnames/bind';

import ReactApexChart from 'react-apexcharts';

import { useAnalysisQuery, useCalculateTotalRevenueQuery } from '~/App/providers/apis/company_serviceApi';
import moment from 'moment';
import formatVND from '~/Core/utils/formatVND';
// import statusCards from "../assets/JsonData/status-card-data.json"
const statusCards = [
	{
		icon: 'bx bx-shopping-bag',
		count: '1,995',
		title: 'Total sales'
	},
	{
		icon: 'bx bx-cart',
		count: '2,001',
		title: 'Daily visits'
	},
	{
		icon: 'bx bx-dollar-circle',
		count: '$2,632',
		title: 'Total income'
	},
	{
		icon: 'bx bx-receipt',
		count: '1,711',
		title: 'Total orders'
	}
];
const chartOptions = {
	series: [
		{
			name: 'Online Customers',
			data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
		},
		{
			name: 'Store Customers',
			data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
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
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
		},
		legend: {
			position: 'top'
		},
		grid: {
			show: false
		}
	}
};

const topCustomers = {
	head: ['user', 'total orders', 'total spending'],
	body: [
		{
			username: 'john doe',
			order: '490',
			price: '$15,870'
		},
		{
			username: 'frank iva',
			order: '250',
			price: '$12,251'
		},
		{
			username: 'anthony baker',
			order: '120',
			price: '$10,840'
		},
		{
			username: 'frank iva',
			order: '110',
			price: '$9,251'
		},
		{
			username: 'anthony baker',
			order: '80',
			price: '$8,840'
		}
	]
};

// const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

// const renderCusomerBody = (item, index) => (
// 	<tr key={index}>
// 		<td>{item.username}</td>
// 		<td>{item.order}</td>
// 		<td>{item.price}</td>
// 	</tr>
// );

const latestOrders = {
	header: ['order id', 'user', 'total price', 'date', 'status'],
	body: [
		{
			id: '#OD1711',
			user: 'john doe',
			date: '17 Jun 2021',
			price: '$900',
			status: 'shipping'
		},
		{
			id: '#OD1712',
			user: 'frank iva',
			date: '1 Jun 2021',
			price: '$400',
			status: 'paid'
		},
		{
			id: '#OD1713',
			user: 'anthony baker',
			date: '27 Jun 2021',
			price: '$200',
			status: 'pending'
		},
		{
			id: '#OD1712',
			user: 'frank iva',
			date: '1 Jun 2021',
			price: '$400',
			status: 'paid'
		},
		{
			id: '#OD1713',
			user: 'anthony baker',
			date: '27 Jun 2021',
			price: '$200',
			status: 'refund'
		}
	]
};

const orderStatus = {
	shipping: 'primary',
	pending: 'warning',
	paid: 'success',
	refund: 'danger'
};

// const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

// const renderOrderBody = (item, index) => (
// 	<tr key={index}>
// 		<td>{item.id}</td>
// 		<td>{item.user}</td>
// 		<td>{item.price}</td>
// 		<td>{item.date}</td>
// 		<td>
// 			<Badge type={orderStatus[item.status]} content={item.status} />
// 		</td>
// 	</tr>
// );
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
				name: CalculateTotalRevenue?.data?.service_name,
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
		<div className={cx('container')}>
			<h2 className={cx('page-header')}>Dashboard</h2>
			<div className={cx('row')}>
				<div className={cx('col-12')}>
					<div className={cx('row')}>
						{statusCards.map((item, index) => (
							<div className={cx('col-3')} key={index}>
								<StatusCard icon={item.icon} count={item.count} title={item.title} />
							</div>
						))}
					</div>
				</div>
				{/* <div className={cx('col-6')}>
					<div className={cx('card', 'full-height')}>
						<Chart
							options={
								themeReducer === 'theme-mode-dark'
									? {
											...chartOptions.options,
											theme: { mode: 'dark' }
									  }
									: {
											...chartOptions.options,
											theme: { mode: 'light' }
									  }
							}
							series={chartOptions.series}
							type='line'
							height='100%'
						/>
					</div>
				</div> */}
				<div className={cx('col-12')}>
					<div className={cx('card')}>
						<div className={cx('card__header')}>
							<h3>Tổng doanh thu dịch vụ</h3>
						</div>
						<div className={cx('card__body')}>
							<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
								<div className={sx('form-wrap')}>
									<div className={sx('form-group', 'form-date')} style={{ display: 'flex' }}>
										<InputFieldControl
											className={sx('dates_range')}
											id='startDate_1'
											type='date'
											name='startDate_1'
											control={control}
										/>
										<div style={{ paddingRight: '10px' }}> </div>
										<InputFieldControl
											className={sx('dates_range')}
											id='endDate_1'
											type='date'
											name='endDate_1'
											control={control}
										/>
										<div className={sx('form-group', 'form-submit')} style={{ marginLeft: '10px' }}>
											<button className={sx('btn-gradient', 'btn-submit')} id='btn_chart1' type='submit'>
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
				<div className={cx('col-12')}>
					<div className={cx('card')}>
						<div className={cx('card__header')}>
							<h3>latest orders</h3>
						</div>
						<div className={cx('card__body')}></div>
						<div className={cx('card__footer')}>
							<Link to='/'>view all</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
