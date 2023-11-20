import React from 'react';
import styles from './accounts.module.css';
import classNames from 'classnames/bind';
import routesPath from '~/App/config/routesPath';
import { Link } from 'react-router-dom';
const sx = classNames.bind(styles);

const Accounts = ({ cx }) => {
	return (
		<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}> Thông Tin Tài Khoản</h1>
						</div>
						{/* <div className={sx('right-heading')}>
							{' '}
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn
							</a>
						</div> */}
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							{/* <li className={sx('active')}>
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/1' alt='Quản lý user'>
									<span>Quản lý user</span>
								</a>
							</li> */}
							<li>
								<Link to={routesPath.EmployerPaths.editEmployer} alt='Thông tin công ty'>
									<span>Thông tin công ty</span>
								</Link>
							</li>
							{/* <li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/edit_contact'
									alt='Thông tin liên hệ'>
									<span>Thông tin liên hệ</span>
								</a>
							</li> */}
							{/* <li>
								<a
									href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/changepassword'
									alt='Đổi mật khẩu'>
									<span>Đổi mật khẩu</span>
								</a>
							</li> */}
						</ul>
						<div className={sx('tabslet-content', '', 'active')} id='tab-1'>
							<div className={sx('main-application-information')}>
								<h2 className={sx('title-application', 'no-bg', 'no-pad')}>Danh sách user</h2>
								<div className={sx('application-content')}>
								</div>
							</div>
							<div className={sx('main-jobs-posting')}>
								<div className={sx('jobs-posting-detail')}>
									<div className={sx('jobs-posting-detail-bottom')}>
										<div className={sx('content-detail-bottom')}>
											<div className={sx('heading-resume-applied')}>
												<div className={sx('left-heading')}>
													<ul className={sx('list-check')}>
														<li>
															<a
																className={sx('btn-created-user')}
																href='javascript:;'
																onclick="getInfouser('',0);">
																Tạo user phụ
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className={sx('boding-jobs-posting')}>
											<div className={sx('table', 'table-account-user')}>
												<table>
													<thead>
														<tr>
															<th width='10%'>Ngày</th>
															<th width='30%'>Email Đăng nhập</th>
															<th width='20%'>Họ và tên</th>
															<th width='12%'>Trạng thái</th>
															<th width='10%'>Loại user</th>
															<th width='10%'>Tác vụ</th>
															<th width='8%'>Thao tác</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<time>31/10/2022</time>
															</td>
															<td>
																<a
																	className={sx('btn-edit-user')}
																	href='javascript:;'
																	onclick="getInfouser('lop7cttnq.1667207375',1);"
																	title='Cập nhật thông tin'
																	id='lop7cttnq.1667207375_email'>
																	lop7cttnq@gmail.com
																</a>
															</td>
															<td>
																<p id='lop7cttnq.1667207375_name'>minh nguyễn 123</p>
															</td>
															<td id='lop7cttnq.1667207375'>
																<p>Kích hoạt</p>
															</td>
															<td>
																<p>Chính</p>
															</td>
															<td>
																{' '}
																<a
																	href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/report_task_log/lop7cttnq.1667207375/%25/%25/0/0/15'
																	alt='Xem tác vụ'>
																	Xem tác vụ
																</a>
															</td>
															<td>
																<ul className={sx('list-manipulation')}>
																	<li>
																		<a href='javascript:void(0);' className={sx('fl_left')} />
																	</li>
																</ul>
															</td>
														</tr>
														<tr>
															<td>
																<time>26/12/2022</time>
															</td>
															<td>
																<a
																	className={sx('btn-edit-user')}
																	href='javascript:;'
																	onclick="getInfouser('nhatminhnguyen6112003.1672041283',1);"
																	title='Cập nhật thông tin'
																	id='nhatminhnguyen6112003.1672041283_email'>
																	nhatminhnguyen6112003@gmail.com
																</a>
															</td>
															<td>
																<p id='nhatminhnguyen6112003.1672041283_name'>nguyễn minh</p>
															</td>
															<td id='nhatminhnguyen6112003.1672041283'>
																<p>Kích hoạt</p>
															</td>
															<td>
																<p>Phụ</p>
															</td>
															<td>
																{' '}
																<a
																	href='https://careerbuilder.vn/vi/employers/hrcentral/accounts/report_task_log/nhatminhnguyen6112003.1672041283/%25/%25/0/0/15'
																	alt='Xem tác vụ'>
																	Xem tác vụ
																</a>
															</td>
															<td>
																<ul className={sx('list-manipulation')}>
																	<li>
																		<a
																			className={sx('btn-authorization', 'active')}
																			href='javascript:void(0);'
																			onclick="getPermissionuser('nhatminhnguyen6112003.1672041283','nguyễn minh');"
																			title='Cấp quyền'>
																			<em className={cx('material-icons')}>gavel</em>
																		</a>
																	</li>
																</ul>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
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

export default Accounts;
