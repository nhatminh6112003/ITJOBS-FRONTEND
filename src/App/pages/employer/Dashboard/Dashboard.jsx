import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import classNames from 'classnames/bind';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import {
	useAnalyticsQuery,
	useCalculateCorrelationIndexQuery,
	useAnalyticJobSeekerApplyByDayQuery,
	useAnalyticResumeStatusQuery,
	useAnalyticDegreeValueQuery
} from '~/App/providers/apis/jobPostApi';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const sx = classNames.bind(styles);

const EmployerDashboard = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const [currentDate, setCurrentDate] = useState('');
	const [nextMonthDate, setNextMonthDate] = useState('');

	useEffect(() => {
		const today = new Date();
		const year = today.getFullYear();
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const day = today.getDate().toString().padStart(2, '0');
		const formattedToday = `${year}-${month}-${day}`;

		const nextMonth = new Date(today);
		nextMonth.setMonth(nextMonth.getMonth() + 1);
		const nextMonthYear = nextMonth.getFullYear();
		const nextMonthMonth = (nextMonth.getMonth() - 1).toString().padStart(2, '0');
		const nextMonthDay = nextMonth.getDate().toString().padStart(2, '0');
		const formattedNextMonth = `${nextMonthYear}-${nextMonthMonth}-${nextMonthDay}`;

		setCurrentDate(formattedToday);
		console.log('TCL: EmployerDashboard -> formattedToday', formattedToday);
		setNextMonthDate(formattedNextMonth);
		console.log('TCL: EmployerDashboard -> formattedNextMonth', formattedNextMonth);
	}, []);
	const { data } = useAnalyticsQuery();
	const { data: analyticDegreeValueQuery } = useAnalyticDegreeValueQuery(
		{
			params: {
				user_account_id: employer?.id,
				startDate: nextMonthDate,
				endDate: currentDate
			}
		},
		{
			skip: !nextMonthDate && !nextMonthDate
		}
	);

	const { data: analyticResumeStatus } = useAnalyticResumeStatusQuery(
		{
			params: {
				user_account_id: employer?.id,
				startDate: nextMonthDate,
				endDate: currentDate
			}
		},
		{
			skip: !nextMonthDate && !nextMonthDate
		}
	);

	const { data: calculateCorrelationIndexData } = useCalculateCorrelationIndexQuery(
		{
			params: {
				user_account_id: employer?.id,
				startDate: nextMonthDate,
				endDate: currentDate
			}
		},
		{
			skip: !nextMonthDate && !nextMonthDate
		}
	);

	const { data: analyticJobSeekerApplyByDayQuery } = useAnalyticJobSeekerApplyByDayQuery(
		{
			params: {
				user_account_id: employer?.id,
				startDate: nextMonthDate,
				endDate: currentDate
			}
		},
		{
			skip: !nextMonthDate && !nextMonthDate
		}
	);

	const analyticJobSeekerApplyByDayQueryOptions = {
		series: [
			{
				name: calculateCorrelationIndexData?.title_1,
				data: analyticJobSeekerApplyByDayQuery?.data_1
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
				categories: analyticJobSeekerApplyByDayQuery?.label
			},
			legend: {
				position: 'top'
			},
			grid: {
				show: false
			}
		}
	};

	const calculateCorrelationchartOptions = {
		series: [
			{
				name: calculateCorrelationIndexData?.title_1,
				data: calculateCorrelationIndexData?.data_1
			},
			{
				name: calculateCorrelationIndexData?.title_2,
				data: calculateCorrelationIndexData?.data_2
			}
		],

		options: {
			chart: {
				type: 'bar',
				height: 350
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded'
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: calculateCorrelationIndexData?.label
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val;
					}
				}
			}
		}
	};

	const analyticResumeStatusOption = {
		series: [
			{
				name: 'Số lượng',
				data: analyticResumeStatus?.data_1
			}
		],
		options: {
			chart: {
				height: 350,
				type: 'bar',
				events: {
					click: function (chart, w, e) {}
				}
			},
			colors: ['#bd2352', '#1da1f2'],
			plotOptions: {
				bar: {
					columnWidth: '45%',
					distributed: true
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			xaxis: {
				categories: analyticResumeStatus?.label.map((status, index) => {
					return index % 2 === 0 ? [status, ''] : status;
				}),
				labels: {
					style: {
						colors: ['red', 'blue', 'purple', 'green', 'purple', 'orange'],
						fontSize: '12px',
						fontWeight: 'bold'
					}
				}
			}
		}
	};

	const analyticDegreeValueQueryOptions = {
		series: analyticDegreeValueQuery?.data_1,
		options: {
			chart: {
				width: 380,
				type: 'pie'
			},
			labels: ['Chưa tốt nghiệp', 'Trung học', 'Trung cấp', 'Cao đẳng', 'Đại học', 'Sau đại học', 'Khác'],
			dataLabels: {
				formatter(val, opts) {
					const name = opts.w.globals.labels[opts.seriesIndex];
					return [name, val.toFixed(0) + '%'];
				}
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: 'bottom'
						}
					}
				}
			]
		}
	};

	return (
		<section className={sx('employer-dasboard', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('main-dasboard-top')}>
					<div className={cx('row')}>
						<div className={cx('col-xl-3')}>
							<div className={sx('box-dasboard-top')}>
								<div className={sx('head')}>
									<h2 className={sx('title-dashboard')}>Thông tin tài khoản</h2>
								</div>
								<div className={sx('body')}>
									<div className={sx('image')}>
										<a
											href='https://careerbuilder.vn/careerbuilder-rewards'
											title='CareerBuilder Rewards 2022'>
											<img
												src='https://images.careerbuilder.vn/content/Event/CBR2023/icon/CB_CBR_2023_standard.jpg'
												alt='CareerBuilder Rewards 2022'
											/>
										</a>
									</div>
									<ul className={sx('list-account-information')}>
										<li>
											<p className={sx('number', 'intNumPostNoUse')}>0</p>
											<a
												className={sx('title')}
												href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_available'>
												Vị trí chưa sử dụng
											</a>
										</li>
										<li>
											<p className={sx('number', 'orderNew')}>0</p>
											<a
												className={sx('title')}
												href='https://careerbuilder.vn/vi/employers/hrcentral/reports/orders_available'>
												Đơn hàng đang sử dụng
											</a>
										</li>
										<li>
											<p className={sx('number', 'JskNew')}>0</p>
											<a
												className={sx('title')}
												href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume'>
												Ứng viên ứng tuyển
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={cx('col-xl-5')}>
							<div className={sx('box-dasboard-top')}>
								<div className={sx('head')}>
									<h2 className={sx('title-dashboard')}>Tìm Kiếm Hồ Sơ</h2>
								</div>
								<div className={sx('body')}>
									<ul className={sx('list-search-management')}>
										<li>
											<p className={sx('textNodata')}>Chưa có điểm xem hồ sơ</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={cx('col-xl-4')}>
							<div className={sx('box-dasboard-top')}>
								<div className={sx('head')}>
									<h2 className={sx('title-dashboard')}>Quản Lý Đăng Tuyển</h2>
								</div>
								<div className={sx('body')}>
									<ul className={sx('list-post-management')}>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/posting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', 'green')}>{data?.publishStatus}</span>
												<span className={sx('title')}>Việc làm đang đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/waitposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', 'blue')}>{data?.pendingStatus}</span>
												<span className={sx('title')}>Việc làm chờ đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/unposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', '')}>{data?.pauseStatus}</span>
												<span className={sx('title')}>Việc làm tạm dừng đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/expireposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', '')}>{data?.expiredStatus}</span>
												<span className={sx('title')}>Việc làm hết hạn</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/manageresume/followers'>
												<span className={sx('number', '')}>0</span>
												<span className={sx('title')}>Followers</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className={cx('col-xl-3')}>
							<div className={sx('box-dasboard-top')}>
								<div className={sx('head')}>
									<h2 className={sx('title-dashboard')}>Lịch Sử Hoạt Động</h2>
								</div>
								<div className={sx('body')}>
									<ul className={sx('list-operation-management')}>
										<li>
											<p className={sx('time')}>
												<time>30/07/2023</time>
											</p>
											<p className={sx('title')}>
												IP 58.186.70.135, Change Pass User lop7cttnq.1667207375 At 19:29:12 30-07-2023
											</p>
										</li>
										<li>
											<p className={sx('time')}>
												<time>02/07/2023</time>
											</p>
											<p className={sx('title')}>
												IP 1.53.89.109, Change Pass User lop7cttnq.1667207375 At 11:34:32 02-07-2023
											</p>
										</li>
										<li>
											<p className={sx('time')}>
												<time>03/05/2023</time>
											</p>
											<p className={sx('title')}>
												IP 27.73.242.118, Change Pass User lop7cttnq.1667207375 At 22:39:31 03-05-2023
											</p>
										</li>
									</ul>
									<div className={sx('view-more')}>
										<a
											className={sx('btn-view-more')}
											href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/report_task_log'>
											Xem thêm
										</a>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div className={sx('main-dasboard-bottom')}>
					<div className={cx('row')}>
						<div className={cx('col-lg-12')}>
							<div className={sx('box-dasboard-bottom', 'topresume-list')}>
								<div className={sx('topresume-list-head')}>
									Top{' '}
									<span
										className={sx('swiper-pagination', 'swiper-pagination-fraction')}
										style={{ position: 'inherit' }}>
										<span className={sx('swiper-pagination-current')}>1</span> /{' '}
										<span className={sx('swiper-pagination-total')}>10</span>
									</span>{' '}
									hồ sơ mới <Link to='/tim-ung-vien'>Xem thêm tìm kiếm ứng viên</Link>
									<div className={sx('main-button')}>
										<div className={sx('button-prev')} tabIndex={0} role='button' aria-label='Previous slide'>
											<em className={sx('mdi', 'mdi-chevron-left')} />
										</div>
										<div className={sx('button-next')} tabIndex={0} role='button' aria-label='Next slide'>
											<em className={sx('mdi', 'mdi-chevron-right')} />
										</div>
									</div>
								</div>
								<div className={sx('main-slide')}>
									<div
										className={sx(
											'swiper-container',
											'swiper-container-initialized',
											'swiper-container-horizontal'
										)}>
										<span className={sx('swiper-notification')} aria-live='assertive' aria-atomic='true' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={sx('main-dasboard-middle')}>
					<div className={cx('row')}>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-middle')}>
								<div className={sx('head')}>
									<h3 className={sx('title')}>Biểu Đồ Số lượng ứng viên theo trạng thái</h3>
									<div className={sx('toollips')}>
										<em className={cx('material-icons')}>infomation</em>
										{/* <div className={sx('toolip')}>
											<p>Thông kê </p>
										</div> */}
									</div>
								</div>
								<div className={sx('body')}>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-date')}>
											<input
												className={sx('dates_range')}
												id='date_mychart1'
												readOnly=''
												defaultValue='16/08/2023 - 16/09/2023'
											/>
										</div>
										<div className={sx('form-group', 'form-submit')}>
											<button
												className={sx('btn-gradient', 'btn-submit')}
												id='btn_chart1'
												type='button'
												onclick='actChart1(this);'>
												Áp dụng
											</button>
										</div>
									</div>
									<ReactApexChart
										options={analyticResumeStatusOption.options}
										series={analyticResumeStatusOption.series}
										type='bar'
										height={350}
									/>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-middle')} style={{ height: 487 }}>
								<div className={sx('head')}>
									<h3 className={sx('title')}>Biểu Đồ Ứng Viên</h3>
									<div className={sx('toollips')}>
										<em className={cx('material-icons')}>infomation</em>
										<div className={sx('toolip')}>
											<p>Thống kê số hồ sơ ứng tuyển nhận được theo ngày.</p>
										</div>
									</div>
								</div>
								<div className={sx('body')}>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-date')}>
											<input
												className={sx('dates_range')}
												id='date_mychart2'
												readOnly=''
												defaultValue='16/08/2023 - 16/09/2023'
											/>
										</div>
										<div className={sx('form-group', 'form-submit')}>
											<button
												className={sx('btn-gradient', 'btn-submit')}
												id='btn_chart2'
												type='button'
												onclick='actChart2(this);'>
												Áp dụng
											</button>
										</div>
									</div>
									<div className={sx('chart')}>
										<div className={sx('chartjs-size-monitor')}>
											<div className={sx('chartjs-size-monitor-expand')}>
												<div className={sx('')} />
											</div>
											<div className={sx('chartjs-size-monitor-shrink')}>
												<div className={sx('')} />
											</div>
										</div>
										<Chart
											options={analyticJobSeekerApplyByDayQueryOptions.options}
											series={analyticJobSeekerApplyByDayQueryOptions.series}
											type='line'
											height='260'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-middle')}>
								<div className={sx('head')}>
									<h3 className={sx('title')}>BIỂU ĐỒ TUYỂN DỤNG &amp; ỨNG TUYỂN</h3>
									<Tooltip title='Thống kê chỉ số tương quan giữa nhu cầu tuyển dụng và lượt hồ sơ ứng tuyển.'>
										<IconButton>
											<InfoIcon style={{ color: '#0097d1' }} />
										</IconButton>
									</Tooltip>
								</div>
								<div className={sx('body')}>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-date')}>
											<input type='date' name='dates' value='01/01/2018 - 01/15/2018' />
										</div>
										<div className={sx('form-group', 'form-submit')}>
											<button
												className={sx('btn-gradient', 'btn-submit')}
												id='btn_chart3'
												type='button'
												onclick='actChart3(this);'>
												Áp dụng
											</button>
										</div>
									</div>
									<div className={sx('chart')}>
										<div className={sx('chartjs-size-monitor')}>
											<div className={sx('chartjs-size-monitor-expand')}>
												<div className={sx('')} />
											</div>
											<div className={sx('chartjs-size-monitor-shrink')}>
												<div className={sx('')} />
											</div>
										</div>

										<ReactApexChart
											options={calculateCorrelationchartOptions.options}
											series={calculateCorrelationchartOptions.series}
											type='bar'
											height={240}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-middle')}>
								<div className={sx('head')}>
									<h3 className={sx('title')}>BIỂU ĐỒ TUYỂN DỤNG THEO CẤP BẬC</h3>
									<Tooltip title='Thống kê chỉ số hồ sơ ứng tuyển theo cấp bậc'>
										<IconButton>
											<InfoIcon style={{ color: '#0097d1' }} />
										</IconButton>
									</Tooltip>
								</div>
								<div className={sx('body')}>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-date')}>
											<input
												className={sx('dates_range')}
												id='date_mychart3'
												readOnly=''
												defaultValue='16/08/2023 - 16/09/2023'
											/>
										</div>
										<div className={sx('form-group', 'form-submit')}>
											<button
												className={sx('btn-gradient', 'btn-submit')}
												id='btn_chart3'
												type='button'
												onclick='actChart3(this);'>
												Áp dụng
											</button>
										</div>
									</div>
									<div className={sx('chart')}>
										<div className={sx('chartjs-size-monitor')}>
											<div className={sx('chartjs-size-monitor-expand')}>
												<div className={sx('')} />
											</div>
											<div className={sx('chartjs-size-monitor-shrink')}>
												<div className={sx('')} />
											</div>
										</div>
										<ReactApexChart
											options={analyticDegreeValueQueryOptions.options}
											series={analyticDegreeValueQueryOptions.series}
											type='pie'
											width={380}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployerDashboard;
