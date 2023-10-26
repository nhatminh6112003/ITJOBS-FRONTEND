import React,{Frgament} from 'react';
import styles from './jobApplied.module.css';
import classNames from 'classnames/bind';
import { cx } from '../MyProfile';
import SideBar from '~/App/layouts/components/Jobseeker/SideBar';
const sx = classNames.bind(styles);
const JobApplied = () => {
	return (
	<div className={cx('page-content', 'd-flex', 'align-items-stretch')}>
    <SideBar className={cx} />
		<div className={cx('content-inner')}>
			<div className={cx('container-fluid')}>
				<div className={sx('applied-jobs-wrap')}>
					<div className={sx('widget', 'widget-10')}>
						<div className={sx('widget-head')}>
							<div className={sx('cb-title-h3')}>
								<h3>Việc làm đã nộp</h3>
							</div>
						</div>
						<div className={sx('widget-body')}>
							<div className={sx('content')}>
								<p>Bạn đã ứng tuyển vào các vị trí tuyển dụng trong 6 tháng gần nhất</p>
								<div className={sx('list-hidden')}>
									<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobappliedhidden'>
										Danh Sách Việc Làm Đã Ẩn
									</a>
								</div>
							</div>
							<div className={sx('table')}>
								<form name='frmJobapplied' id='frmJobapplied' method='post' action=''>
									<input type='hidden' name='intIsHide' id='intIsHide' defaultValue={1} />
									<input type='hidden' name='jobapplied_id' id='jobapplied_id' />
									<table>
										<thead>
											<tr>
												<th className={sx('title')}>Chức danh</th>
												<th>Trạng thái</th>
												<th>Ngày nộp</th>
												<th>Hồ sơ ứng tuyển</th>
												<th>&nbsp;</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className={sx('job')}>
													<div className={sx('name')}>
														<div className={sx('figure')}>
															<div className={sx('image')}>
																<a href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-madi-group.35A98821.html'>
																	<img
																		src='https://images.careerbuilder.vn/employer_folders/lot1/302881/72x45/101358anhmadi-2.jpg'
																		alt='Công ty Cổ Phần Tập đoàn Madi Group'
																		title='Công ty Cổ Phần Tập đoàn Madi Group'
																	/>{' '}
																</a>
															</div>
															<div className={sx('figcaption')}>
																<h3>
																	<a href='https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-truong.35BE3AB5.html'>
																		KẾ TOÁN TRƯỞNG
																	</a>
																</h3>
																<p className={sx('company-name')}>
																	<a
																		href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-madi-group.35A98821.html'
																		title='Công ty Cổ Phần Tập đoàn Madi Group'>
																		Công ty Cổ Phần Tập đoàn Madi Group
																	</a>
																</p>
															</div>
														</div>
													</div>
												</td>
												<td></td>
												<td className={sx('date')}>
													<p className={sx('mb-show')}>Ngày nộp: </p>
													<time>26/10/2023</time>
												</td>
												<td className={sx('curriculum-vitae')}>
													<p>
														{' '}
														<a href='https://careerbuilder.vn/vi/jobseekers/cv-hay/my-profile'>
															<span className={sx('mb-show')}>Hồ sơ ứng tuyển:</span>
															Frontend Developerhello
														</a>
													</p>
												</td>
												<td className={sx('action')}>
													<ul className={sx('list-action')}>
														<li className={sx('button-hidden')}>
															<a
																href='javascript:void(0);'
																onclick="checkHiddenJobapplied('3605B8F5_36B354B7_35BE3AB5',1);return false;">
																<em className={sx('material-icons')}>visibility_off</em>
																<span>Ẩn</span>
															</a>
														</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
									<div className={sx('main-pagination')}> </div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   </div>
	);
};

export default JobApplied;
