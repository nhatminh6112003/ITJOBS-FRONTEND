import React from 'react';
import styles from './emailManagement.module.css';
import classNames from 'classnames/bind';

const sx = classNames.bind(styles);

const EmailManagement = ({ cx }) => {
	return (
		<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Cài đặt</h1>
						</div>
						<div className={sx('right-heading')}>
							<a href='https://careerbuilder.vn/vi/employers/faq' target='_blank'>
								Hướng dẫn{' '}
							</a>
						</div>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							<li className={sx('active')}>
								{' '}
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/emailcontentmanagement'>
									Yêu cầu email marketing
								</a>
							</li>
							<li className={sx('')}>
								{' '}
								<a href='https://careerbuilder.vn/vi/employers/hrcentral/notifymail'>Email mẫu </a>
							</li>
							<li className={sx('')}>
								{' '}
								<a href='https://careerbuilder.vn/vi/employers/saved_search'>Thông báo ứng viên</a>
							</li>
						</ul>{' '}
						<div className={sx('tabslet-content', 'active')} id='tab-2'>
							<ul className={sx('tabslet-tab-detail')}>
								<li className={sx('active')} data-tab-detail={1}>
									<a href='javascript:void(0);'> Quản Lý Nội Dung Yêu Cầu</a>
								</li>
								<li data-tab-detail={2}>
									<a href='https://careerbuilder.vn/vi/employers/hrcentral/emailcontentrequest'>
										{' '}
										Quản Lý Nội Dung Yêu Cầu{' '}
									</a>
								</li>
							</ul>
							<div className={sx('tabslet-content-detail', 'active')} data-content-detail={1}>
								<div className={sx('content-detail-top')}>
									<div className={sx('main-application-information')}>
										<h2 className={sx('title-application', 'no-bg', 'no-pad')}>
											TẠO MỚI HOẶC CHỈNH SỬA YÊU CẦU THỰC HIỆN EMAIL MARKETING
										</h2>
										<div className={sx('application-content')}>
											- Thông tin Quý công ty cung cấp sẽ dược sử dụng để thống kê số lượng ứng viên phù hợp
											&amp; thiết kế mẫu email marketing
											<br />
											- Bộ phận kinh doanh của CareerBuilder sẽ liên hệ Quý công ty trong vòng 01 ngày làm
											việc kể từ khi nhận yêu cầu email marketing
											<br />- Quý khách hàng nhận được ưu đãi chiến dịch email marketing theo chương trình
											CareerBuilder Rewards vui lòng tạo yêu cầu thực hiện chiến dịch email marketing tại đây
										</div>
									</div>
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
																className={sx('btn-create-request')}
																href='https://careerbuilder.vn/vi/employers/hrcentral/emailcontentrequest'>
																TẠO YÊU CẦU
															</a>
														</li>
													</ul>
												</div>
												<div className={sx('right-heading')}>
													<div className={sx('to-display')}>
														<p className={sx('name')}>Người tạo</p>
														<div className={sx('form-display')}>
															<select id='user_id' name='user_id' onchange='filterCreated(this.value);'>
																<option value='all'>Tất cả</option>
																<option value='lop7cttnq.1667207375' selected='selected'>
																	minh nguyễn 123
																</option>
																<option value='nhatminhnguyen6112003.1672041283'>nguyễn minh</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('boding-jobs-posting')}>
											<div className={sx('table', 'table-jobs-posting', 'table-request')}>
												<table>
													<thead>
														<tr>
															<th width='5%'>STT</th>
															<th width='25%'>Ngày tạo/Tạo bởi</th>
															<th width='15%'>Hình/Banner</th>
															<th width='30%'>
																Tên đơn vị/người gửi
																<br />
																và Tiêu đề
															</th>
															<th width='15%'>Nút Call to Action</th>
															<th width='10%'>Thao tác</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td colSpan={6}>Chưa có dữ liệu!</td>
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

export default EmailManagement;
