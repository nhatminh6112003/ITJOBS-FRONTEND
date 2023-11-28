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
import { useForm } from 'react-hook-form';
import useSearchDateDashBoard from '../components/useSearchDateDashBoard';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useAnalysisQuery } from '~/App/providers/apis/company_serviceApi';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';

const sx = classNames.bind(styles);

const EmployerDashboard = ({ cx }) => {
	const employer = useSelector((state) => state.auth?.employer);
	const { pushQuery, query } = useSearchDateDashBoard();
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		values: {
			startDate_1: '' || query.startDate_1,
			endDate_1: '' || query.endDate_1,
			startDate_2: '' || query.startDate_2,
			endDate_2: '' || query.endDate_2,
			startDate_3: '' || query.startDate_3,
			endDate_3: '' || query.endDate_3
		}
	});
	const { data: countCompanyService } = useAnalysisQuery(employer?.company?.id);

	const onSubmit = (data) => {
		pushQuery({ ...data });
		console.log('TCL: EmployerDashboard -> onsubmit -> data', data);
	};

	const { data } = useAnalyticsQuery();
	const { data: analyticDegreeValueQuery } = useAnalyticDegreeValueQuery({
		params: {
			user_account_id: employer?.id,
			startDate: query.startDate_3,
			endDate: query.endDate_3
		}
	});

	const { data: analyticResumeStatus } = useAnalyticResumeStatusQuery({
		params: {
			user_account_id: employer?.id,
			startDate: query.startDate_1,
			endDate: query.endDate_1
		}
	});

	const { data: calculateCorrelationIndexData } = useCalculateCorrelationIndexQuery({
		params: {
			user_account_id: employer?.id,
			startDate: query.startDate_2,
			endDate: query.endDate_2
		}
	});

	const { data: analyticJobSeekerApplyByDayQuery } = useAnalyticJobSeekerApplyByDayQuery({
		params: {
			user_account_id: employer?.id,
			startDate: query.startDate_2,
			endDate: query.endDate_2
		}
	});

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
						<div className={cx('col-xl-6')}>
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
											<p className={sx('number', 'orderNew')}>
												{countCompanyService.data ? countCompanyService.data : 0}
											</p>
											<Link className={sx('title')} to={routesPath.EmployerPaths.ordersAvailable}>
												Đơn hàng đang sử dụng
											</Link>
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
						<div className={cx('col-xl-6')}>
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
									</ul>
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
									<h3 className={sx('title')}>Biểu Đồ Trạng Thái Nộp CV</h3>
									<Tooltip title='Biểu đồ số lượng ứng viên theo trạng thái'>
										<IconButton>
											<InfoIcon style={{ color: '#0097d1' }} />
										</IconButton>
									</Tooltip>
								</div>
								<div className={sx('body')}>
									<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-wrap')}>
											<div className={sx('form-group', 'form-date')}>
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
											</div>
											<div className={sx('form-group', 'form-submit')}>
												<button className={sx('btn-gradient', 'btn-submit')} id='btn_chart1' type='submit'>
													Áp dụng
												</button>
											</div>
										</div>
									</form>
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
									<Tooltip title='Thống kê số hồ sơ ứng tuyển nhận được theo ngày.'>
										<IconButton>
											<InfoIcon style={{ color: '#0097d1' }} />
										</IconButton>
									</Tooltip>
								</div>
								<div className={sx('body')}>
									<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-wrap')}>
											<div className={sx('form-group', 'form-date')}>
												<InputFieldControl
													className={sx('dates_range')}
													id='startDate_2'
													type='date'
													name='startDate_2'
													control={control}
												/>
												<div style={{ paddingRight: '10px' }}> </div>
												<InputFieldControl
													className={sx('dates_range')}
													id='endDate_2'
													type='date'
													name='endDate_2'
													control={control}
												/>
											</div>
											<div className={sx('form-group', 'form-submit')}>
												<button className={sx('btn-gradient', 'btn-submit')} id='btn_chart1' type='submit'>
													Áp dụng
												</button>
											</div>
										</div>
									</form>
									<div className={sx('chart')}>
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
									<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-wrap')}>
											<div className={sx('form-group', 'form-date')}>
												<InputFieldControl
													className={sx('dates_range')}
													id='startDate_2'
													type='date'
													name='startDate_2'
													control={control}
												/>
												<div style={{ paddingRight: '10px' }}> </div>
												<InputFieldControl
													className={sx('dates_range')}
													id='endDate_2'
													type='date'
													name='endDate_2'
													control={control}
												/>
											</div>
											<div className={sx('form-group', 'form-submit')}>
												<button className={sx('btn-gradient', 'btn-submit')} id='btn_chart1' type='submit'>
													Áp dụng
												</button>
											</div>
										</div>
									</form>
									<div className={sx('chart')}>
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
									<form className={sx('form')} onSubmit={handleSubmit(onSubmit)}>
										<div className={sx('form-wrap')}>
											<div className={sx('form-group', 'form-date')}>
												<InputFieldControl
													className={sx('dates_range')}
													id='startDate_3'
													type='date'
													name='startDate_3'
													control={control}
												/>
												<div style={{ paddingRight: '10px' }}> </div>
												<InputFieldControl
													className={sx('dates_range')}
													id='endDate_3'
													type='date'
													name='endDate_3'
													control={control}
												/>
											</div>
											<div className={sx('form-group', 'form-submit')}>
												<button className={sx('btn-gradient', 'btn-submit')} id='btn_chart1' type='submit'>
													Áp dụng
												</button>
											</div>
										</div>
									</form>
									<div className={sx('chart')}>
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
