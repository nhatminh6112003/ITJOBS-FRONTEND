import React from 'react';
import styles from './dashboard.module.css';
import classNames from 'classnames/bind';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const sx = classNames.bind(styles);

const EmployerDashboard = ({ cx }) => {
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
						<div className={cx('col-xl-3')}>
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
						<div className={cx('col-xl-3')}>
							<div className={sx('box-dasboard-top')}>
								<div className={sx('head')}>
									<h2 className={sx('title-dashboard')}>Quản Lý Đăng Tuyển</h2>
								</div>
								<div className={sx('body')}>
									<ul className={sx('list-post-management')}>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/posting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', 'green')}>0</span>
												<span className={sx('title')}>Việc làm đang đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/waitposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', 'blue')}>5</span>
												<span className={sx('title')}>Việc làm chờ đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/unposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', '')}>0</span>
												<span className={sx('title')}>Việc làm tạm dừng đăng</span>
											</a>
										</li>
										<li>
											<a href='https://careerbuilder.vn/vi/employers/hrcentral/expireposting/user_id/lop7cttnq.1667207375'>
												<span className={sx('number', '')}>0</span>
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
						<div className={cx('col-xl-3')}>
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
						</div>
					</div>
				</div>
				<div className={sx('main-dasboard-bottom')}>
					<div className={cx('row')}>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-bottom')}>
								<h3 className={sx('title-info')}>Thông Tin Nhân Viên Tư Vấn</h3>
								<div className={sx('wrap-info')}>
									<div className={sx('image')}>
										<img
											src='https://images.careerbuilder.vn//admin_avatar/1624174428_no_callcentrer.png'
											alt='cs-avtar'
										/>
									</div>
									<ul className={sx('list-info')}>
										<li>
											<p className={sx('name')}>Lan Nguyen (Athena)</p>
										</li>
										<li>
											<p>
												Tel: <a href='tel:(84.28) 3822 6060'>(84.28) 3822 6060 (Ext) 222 </a>
											</p>
										</li>
										<li>
											<div className={sx('email-and-history')}>
												<p className={sx('email')}>
													Email:{' '}
													<a href='mailto:lan.nguyentt@mail.careerbuilder.vn'>
														lan.nguyentt@mail.careerbuilder.vn
													</a>
												</p>
											</div>
										</li>
										<li></li>
									</ul>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-bottom', 'topresume-list')}>
								<div className={sx('topresume-list-head')}>
									Top{' '}
									<span
										className={sx('swiper-pagination', 'swiper-pagination-fraction')}
										style={{ position: 'inherit' }}>
										<span className={sx('swiper-pagination-current')}>1</span> /{' '}
										<span className={sx('swiper-pagination-total')}>10</span>
									</span>{' '}
									hồ sơ mới{' '}
									<a href='https://careerbuilder.vn/vi/tim-ung-vien.html'>Xem thêm tìm kiếm ứng viên</a>
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
									<h3 className={sx('title')}>Biểu Đồ Tuyển Dụng</h3>
									<div className={sx('toollips')}>
										<em className={sx('material-icons')}>infomation</em>
										<div className={sx('toolip')}>
											<p>Thông kê chỉ số tuyển dụng trong vòng 1 tháng gần nhất.</p>
										</div>
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
									<div className={sx('chart')}>
										<div id='mychart1' style={{ overflow: 'hidden', textAlign: 'left' }}>
											<div
												className={sx('amcharts-main-div')}
												style={{
													position: 'relative',
													width: '100%',
													height: '100%'
												}}>
												<div
													className={sx('amcharts-chart-div')}
													style={{
														overflow: 'hidden',
														position: 'absolute',
														textAlign: 'left',
														width: '280.025px',
														height: 153,
														padding: 0,
														left: 0
													}}>
													<svg
														version='1.1'
														style={{
															position: 'absolute',
															width: 480,
															height: 153,
															top: '-0.200012px',
															left: '-0.399994px'
														}}>
														<desc>JavaScript chart by amCharts 3.21.15</desc>
														<g>
															<path
																cs='100,100'
																d='M0.5,0.5 L279.5,0.5 L279.5,152.5 L0.5,152.5 Z'
																fill='#FFFFFF'
																stroke='#000000'
																fillOpacity={0}
																strokeWidth={1}
																strokeOpacity={0}
															/>
														</g>
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g />
														<g>
															<g />
														</g>
														<g />
														<g />
														<g />
														<g />
														<g />
													</svg>
												</div>
												<div
													className={sx('amChartsLegend', 'amcharts-legend-div')}
													style={{
														overflow: 'hidden',
														position: 'relative',
														textAlign: 'left',
														width: '199.975px',
														top: 0,
														height: 153,
														left: '280.025px'
													}}>
													<svg
														version='1.1'
														style={{
															position: 'absolute',
															width: '199.975px',
															height: '152.6px',
															top: '-0.200012px',
															left: '-0.375px'
														}}>
														<desc>JavaScript chart by amCharts 3.21.15</desc>
														<g transform='translate(10,0)'>
															<path
																cs='100,100'
																d='M0.5,0.5 L180.5,0.5 L180.5,152.5 L0.5,152.5 Z'
																fill='#FFFFFF'
																stroke='#000000'
																fillOpacity={0}
																strokeWidth={1}
																strokeOpacity={0}
															/>
															<g transform='translate(0,11)'>
																<g cursor='pointer' aria-label='Lượt xem' transform='translate(0,0)'>
																	<path
																		cs='100,100'
																		d='M-7.5,8.5 L8.5,8.5 L8.5,-7.5 L-7.5,-7.5 Z'
																		fill='#FF0F00'
																		stroke='#FF0F00'
																		fillOpacity={1}
																		strokeWidth={1}
																		strokeOpacity={1}
																		transform='translate(8,8)'
																	/>
																	<g transform='translate(8,8)' visibility='hidden'>
																		<path
																			cs='100,100'
																			d='M-5.5,-5.5 L6.5,6.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																		<path
																			cs='100,100'
																			d='M-5.5,6.5 L6.5,-5.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																	</g>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='start'
																		transform='translate(21,7)'>
																		<tspan y={6} x={0}>
																			Lượt xem
																		</tspan>
																	</text>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='end'
																		transform='translate(180,7)'>
																		0
																	</text>
																	<rect
																		x={16}
																		y={0}
																		width='164.4749984741211'
																		height='18.600000381469727'
																		rx={0}
																		ry={0}
																		strokeWidth={0}
																		stroke='none'
																		fill='#fff'
																		fillOpacity='0.005'
																	/>
																</g>
																<g
																	cursor='pointer'
																	aria-label='Tổng số ứng tuyển'
																	transform='translate(0,29)'>
																	<path
																		cs='100,100'
																		d='M-7.5,8.5 L8.5,8.5 L8.5,-7.5 L-7.5,-7.5 Z'
																		fill='#FF6600'
																		stroke='#FF6600'
																		fillOpacity={1}
																		strokeWidth={1}
																		strokeOpacity={1}
																		transform='translate(8,8)'
																	/>
																	<g transform='translate(8,8)' visibility='hidden'>
																		<path
																			cs='100,100'
																			d='M-5.5,-5.5 L6.5,6.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																		<path
																			cs='100,100'
																			d='M-5.5,6.5 L6.5,-5.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																	</g>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='start'
																		transform='translate(21,7)'>
																		<tspan y={6} x={0}>
																			Tổng số ứng tuyển
																		</tspan>
																	</text>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='end'
																		transform='translate(180,7)'>
																		0
																	</text>
																	<rect
																		x={16}
																		y={0}
																		width='164.4749984741211'
																		height='18.600000381469727'
																		rx={0}
																		ry={0}
																		strokeWidth={0}
																		stroke='none'
																		fill='#fff'
																		fillOpacity='0.005'
																	/>
																</g>
																<g cursor='pointer' aria-label='Chưa xem' transform='translate(0,57)'>
																	<path
																		cs='100,100'
																		d='M-7.5,8.5 L8.5,8.5 L8.5,-7.5 L-7.5,-7.5 Z'
																		fill='#FF9E01'
																		stroke='#FF9E01'
																		fillOpacity={1}
																		strokeWidth={1}
																		strokeOpacity={1}
																		transform='translate(8,8)'
																	/>
																	<g transform='translate(8,8)' visibility='hidden'>
																		<path
																			cs='100,100'
																			d='M-5.5,-5.5 L6.5,6.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																		<path
																			cs='100,100'
																			d='M-5.5,6.5 L6.5,-5.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																	</g>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='start'
																		transform='translate(21,7)'>
																		<tspan y={6} x={0}>
																			Chưa xem
																		</tspan>
																	</text>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='end'
																		transform='translate(180,7)'>
																		0
																	</text>
																	<rect
																		x={16}
																		y={0}
																		width='164.4749984741211'
																		height='18.600000381469727'
																		rx={0}
																		ry={0}
																		strokeWidth={0}
																		stroke='none'
																		fill='#fff'
																		fillOpacity='0.005'
																	/>
																</g>
																<g cursor='pointer' aria-label='Đang xử lý' transform='translate(0,86)'>
																	<path
																		cs='100,100'
																		d='M-7.5,8.5 L8.5,8.5 L8.5,-7.5 L-7.5,-7.5 Z'
																		fill='#FCD202'
																		stroke='#FCD202'
																		fillOpacity={1}
																		strokeWidth={1}
																		strokeOpacity={1}
																		transform='translate(8,8)'
																	/>
																	<g transform='translate(8,8)' visibility='hidden'>
																		<path
																			cs='100,100'
																			d='M-5.5,-5.5 L6.5,6.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																		<path
																			cs='100,100'
																			d='M-5.5,6.5 L6.5,-5.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																	</g>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='start'
																		transform='translate(21,7)'>
																		<tspan y={6} x={0}>
																			Đang xử lý
																		</tspan>
																	</text>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='end'
																		transform='translate(180,7)'>
																		0
																	</text>
																	<rect
																		x={16}
																		y={0}
																		width='164.4749984741211'
																		height='18.600000381469727'
																		rx={0}
																		ry={0}
																		strokeWidth={0}
																		stroke='none'
																		fill='#fff'
																		fillOpacity='0.005'
																	/>
																</g>
																<g
																	cursor='pointer'
																	aria-label='Mời nhận việc'
																	transform='translate(0,114)'>
																	<path
																		cs='100,100'
																		d='M-7.5,8.5 L8.5,8.5 L8.5,-7.5 L-7.5,-7.5 Z'
																		fill='#F8FF01'
																		stroke='#F8FF01'
																		fillOpacity={1}
																		strokeWidth={1}
																		strokeOpacity={1}
																		transform='translate(8,8)'
																	/>
																	<g transform='translate(8,8)' visibility='hidden'>
																		<path
																			cs='100,100'
																			d='M-5.5,-5.5 L6.5,6.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																		<path
																			cs='100,100'
																			d='M-5.5,6.5 L6.5,-5.5'
																			fill='none'
																			stroke='#FFFFFF'
																			strokeWidth={3}
																		/>
																	</g>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='start'
																		transform='translate(21,7)'>
																		<tspan y={6} x={0}>
																			Mời nhận việc
																		</tspan>
																	</text>
																	<text
																		y={6}
																		fill='#000000'
																		fontFamily='Verdana'
																		fontSize='11px'
																		opacity={1}
																		textAnchor='end'
																		transform='translate(180,7)'>
																		0
																	</text>
																	<rect
																		x={16}
																		y={0}
																		width='164.4749984741211'
																		height='18.600000381469727'
																		rx={0}
																		ry={0}
																		strokeWidth={0}
																		stroke='none'
																		fill='#fff'
																		fillOpacity='0.005'
																	/>
																</g>
															</g>
														</g>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('col-lg-6')}>
							<div className={sx('box-dasboard-middle')}>
								<div className={sx('head')}>
									<h3 className={sx('title')}>Biểu Đồ Ứng Viên</h3>
									<div className={sx('toollips')}>
										<em className={sx('material-icons')}>infomation</em>
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
										<canvas
											id='myChart2'
											style={{ display: 'block', height: 200, width: 480 }}
											width={600}
											height={250}
											className={sx('chartjs-render-monitor')}
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
										<canvas
											id='myChart3'
											style={{ display: 'block', height: 200, width: 480 }}
											width={600}
											height={250}
											className={sx('chartjs-render-monitor')}
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
										<canvas
											id='myChart3'
											style={{ display: 'block', height: 200, width: 480 }}
											width={600}
											height={250}
											className={sx('chartjs-render-monitor')}
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
