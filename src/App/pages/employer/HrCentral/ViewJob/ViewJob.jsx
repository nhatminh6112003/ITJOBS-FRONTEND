import React from 'react';
import styles from './viewJob.module.css';
import classNames from 'classnames/bind';
import { useGetOneJobPostQuery } from '~/App/providers/apis/jobPostApi';
import { useParams } from 'react-router-dom';
import formatDate from '~/Core/utils/formatDate';
import { LevelArray } from '~/App/constants/levelEnum';
import { experienceEnum } from '~/App/constants/experienceEnum';
import { DegreeArray } from '~/App/constants/degreeArray';
import { GenderArray } from '~/App/constants/genderEnum';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TabMenu from '../Posting/components/TabMenu';
import routesPath from '~/App/config/routesPath';
import { useLocation } from 'react-router-dom';
import formatVND from '~/Core/utils/formatVND';
const sx = classNames.bind(styles);

const ViewJob = ({ cx }) => {
	const employer = useSelector((state) => state.auth.employer);
	const location = useLocation();
	const currentPath = location.pathname;
	const { id } = useParams();
	const { data: jobPost } = useGetOneJobPostQuery(id);

	return (
		<>
			<section
				className={sx('manage-job-posting-active-jobs', 'cb-section', 'bg-manage')}
				style={{ padding: '0 30px' }}>
				<div className={cx('container')}>
					<div className={sx('box-manage-job-posting')}>
						<div className={sx('heading-manage')}>
							<div className={sx('left-heading')}>
								<h1 className={sx('title-manage')}>Chi Tiết Bài Đăng </h1>
								<div className={sx('button')}>
									<Link className={sx('btn-gradient')} to={routesPath.EmployerPaths.postjobs}>
										<em className={cx('material-icons')}>create</em>Tạo Mẫu Tuyển Dụng
									</Link>
								</div>
							</div>
						</div>
						{/* <div className={sx('main-form-posting')}>
							<form
								name='frmSearchJob'
								id='frmSearchJob'
								action=''
								method='post'
								onsubmit='return validateSearch();'>
								<div className={sx('form-wrap')}>
									<div className={sx('form-group', 'form-text')}>
										<label>Từ khóa</label>
										<input
											type='text'
											name='keyword'
											id='keyword'
											placeholder='Nhập từ khóa'
											defaultValue=''
										/>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Tìm theo ngày</label>
										<select className={sx('fl_left', 'mar_left46')} name='date_type' id='date_type'>
											<option value={0}>Ngày đăng</option>
											<option value={1}>Ngày hết hạn</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-date', 'start-date')}>
										<label>Từ</label>
										<input
											type='text'
											readOnly=''
											name='date_from'
											id='date_from'
											placeholder='Chọn'
											className={sx('dates_cus_select')}
											defaultValue=''
										/>
										<div className={sx('icon')}>
											<em className={cx('material-icons')}>event</em>
										</div>
										<div id='start-date' />
									</div>
									<div className={sx('form-group', 'form-date', 'end-date')}>
										<label>Đến</label>
										<input
											type='text'
											readOnly=''
											name='date_to'
											id='date_to'
											placeholder='Chọn'
											className={sx('dates_cus_select')}
											defaultValue=''
										/>
										<div className={sx('icon')}>
											<em className={cx('material-icons')}>event</em>
										</div>
										<div id='end-date' />
									</div>
									<div className={sx('form-group', 'form-submit')}>
										<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
											<em className={cx('material-icons')}>search</em>Tìm
										</button>
									</div>
								</div>
							</form>
						</div> */}
						<div className={sx('main-tabslet')}>
							<ul className={sx('tabslet-tab')}>
								{TabMenu.map((item) => (
									<li className={sx(currentPath == item.path && 'active')}>
										<Link to={item.path}>{item.title}</Link>
									</li>
								))}
							</ul>
							<div className={sx('tabslet-content', 'active')}>
								<div className={sx('main-jobs-posting')}>
									<div className={sx('jobs-posting-detail')}>
										<h2 className={sx('jobs-posting-title')}>
											<a href='javascript:;' onclick='activeTab(1);'>
												{jobPost?.job_title}
											</a>
										</h2>
										<div className={sx('row', 'jobs-posting-detail-top')}>
											<div className={sx('col-lg-6', 'col-xl-4')}>
												<ul className={sx('list-info-posting')}>
													{/* <li>
														<p className={sx('name')}>Trạng thái</p>
														<p>Hoàn tất</p>
													</li> */}
													<li>
														<p className={sx('name')}>Hết hạn</p>
														<p>{formatDate(jobPost?.expiry_date)}</p>
													</li>
												</ul>
											</div>
										</div>
										<div className={sx('jobs-posting-detail-bottom')}>
											<div className={sx('tabslet-detail')}>
												<ul className={sx('tabslet-tab-detail')}>
													<li className={sx('active')} data-tab-detail={1}>
														<a href='javascript:void(0);'>Chi Tiết Công Việc</a>
													</li>
												</ul>
												<div className={sx('tabslet-content-detail', 'active')} data-content-detail={1}>
													<div className={sx('content-detail-top')}>
														<div className={sx('head')}>
															<h3 className={sx('title')}>
																Chức danh: <span>{jobPost?.job_title}</span>
															</h3>
															<Link
																className={sx('edit')}
																to={'/employers/postjobs/' + jobPost?.id}
																title='Sửa'>
																<em className={cx('material-icons')}>created </em> Sửa
															</Link>
														</div>
														<div className={sx('body')}>
															<div className={sx('row')}>
																<div className={sx('col-md-6', 'col-lg-4')}>
																	<ul className={sx('list-info-posting')}>
																		<li>
																			<p className={sx('name')}>Mã số</p>
																			<p>{jobPost?.id}</p>
																		</li>
																		<li>
																			<p className={sx('name')}>Địa điểm</p>
																			<p> {jobPost?.address}</p>
																		</li>
																		<li>
																			<p className={sx('name')}>Mức lương</p>
																			<p>
																				{jobPost?.isAgreement === 1 ? (
																					<>
																						<p>Thỏa thuận</p>
																					</>
																				) : (
																					<>
																						<div>
																							{jobPost?.min_salary.toLocaleString('vi-VN', {
																								style: 'currency',
																								currency: 'VND'
																							}) +
																								' - ' +
																								jobPost?.max_salary.toLocaleString('vi-VN', {
																									style: 'currency',
																									currency: 'VND'
																								})}
																						</div>
																					</>
																				)}
																			</p>
																		</li>
																		<li>
																			<p className={sx('name')}>Cấp bậc</p>
																			{LevelArray?.map(
																				(item) =>
																					item.value == jobPost?.job_position_value && (
																						<p>{item.label}</p>
																					)
																			)}
																		</li>
																		<li>
																			<p className={sx('name')}>Bằng cấp</p>
																			{DegreeArray?.map(
																				(item) =>
																					item.value == jobPost?.job_degree_value && (
																						<p>{item.label}</p>
																					)
																			)}
																		</li>
																		<li>
																			<p className={sx('name')}>Kinh nghiệm</p>
																			{experienceEnum?.map(
																				(item) =>
																					item.value == jobPost?.job_experience_value && (
																						<p>{item.label}</p>
																					)
																			)}
																		</li>
																	</ul>
																</div>
																<div className={sx('col-md-6', 'col-lg-4')}>
																	<ul className={sx('list-info-posting')}>
																		<li>
																			<p className={sx('name')}>Ngành nghề</p>

																			<p>
																				{jobPost?.jobProfessionDetail
																					?.map((item) => item.profession.name)
																					.join(', ')}
																			</p>
																		</li>
																		<li>
																			<p className={sx('name')}>Hình thức</p>
																			<p>
																				{' '}
																				<p>
																					{jobPost?.jobWorkTypeDetail
																						?.map((item) => item.work_type.name)
																						.join(', ')}
																				</p>
																			</p>
																		</li>
																		{jobPost?.form_age && jobPost?.to_age && (
																			<>
																				<li>
																					<p className={sx('name')}>Tuổi</p>
																					<p>
																						{' '}
																						{jobPost?.form_age} - {jobPost?.to_age}{' '}
																					</p>
																				</li>
																			</>
																		)}
																		<li>
																			<p className={sx('name')}>Giới tính</p>
																			{GenderArray?.map(
																				(item) =>
																					item.value == jobPost?.gender && <p>{item.label}</p>
																			)}
																		</li>
																		<li>
																			<p className={sx('name')}>Hạn nhận hồ sơ</p>
																			<p>{formatDate(jobPost?.expiry_date)}</p>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className={sx('content-detail-bottom')}>
														<h4 className={sx('detail-title')}>Phúc lợi</h4>
														<div className={sx('full-content')}>
															<ul>
																{jobPost?.jobWelfare?.map((item) => (
																	<li> {item?.job_welfare?.welfare_type}</li>
																))}
															</ul>
														</div>
														<h4 className={sx('detail-title')}>Mô tả công việc</h4>
														<div className={sx('full-content')}>
															<div dangerouslySetInnerHTML={{ __html: jobPost?.job_desc }} />
														</div>
														<h4 className={sx('detail-title')}>Yêu cầu công việc</h4>
														<div className={sx('full-content')}>
															<div dangerouslySetInnerHTML={{ __html: jobPost?.job_request }} />
														</div>
														<h4 className={sx('detail-title')}>Thông tin liên hệ</h4>
														<div className={sx('full-content')}>
															<ul className={sx('jobother')}>
																<li>Công ty: {jobPost?.company?.company_name}</li>
																<li>Người liên hệ: {jobPost?.company?.contact_name}</li>
																<li>Email: {employer?.email}</li>
																<li>Địa chỉ liên hệ: {jobPost?.company?.address}</li>
															</ul>
														</div>
													</div>
												</div>
												<div className={sx('tabslet-content-detail', '')} data-content-detail={2}>
													<div className={sx('content-detail-top')} id='tabs-thongtindangtuyen'>
														<div className={sx('row')}>
															<div className={sx('col-md-6', 'col-lg-4')}>
																<ul className={sx('list-info-posting')}>
																	<li>
																		<p className={sx('name')}>Trạng thái</p>
																		<p>Hoàn tất</p>
																	</li>
																	<li>
																		<p className={sx('name')}>Thời gian</p>
																		<p>30 ngày</p>
																	</li>
																	<li>
																		<p className={sx('name')}>Ngày đăng</p>
																		<p>26/10/2023</p>
																	</li>
																	<li>
																		<p className={sx('name')}>Ngày hết hạn</p>
																		<p>25/11/2023</p>
																	</li>
																</ul>
															</div>
															<div className={sx('col-md-6', 'col-lg-4')}>
																<ul className={sx('list-info-posting')}></ul>
															</div>
														</div>
														<div className={sx('button', 'buttom-add-service')}></div>
													</div>
												</div>
												<div className={sx('tabslet-content-detail', '')} data-content-detail={3}>
													<div className={sx('content-detail-top')}>
														<div
															className={sx('automatic-reply-mail')}
															id='div_automatic_reply_mail'
															style={{ display: 'none' }}>
															<div className={sx('automatic-item')}>
																<div className={sx('name')}>
																	<p>Tiêu đề:</p>
																</div>
																<div className={sx('content')}>
																	<p id='div_title' />
																</div>
															</div>
															<div className={sx('automatic-item')}>
																<div className={sx('name')}>
																	<p>Nội dung:</p>
																</div>
																<div className={sx('content')} id='div_content'></div>
															</div>
														</div>
														<div className={sx('automatic-no-reply')} id='div_no_automatic_reply_mail'>
															<p>Việc làm này hiện chưa có thiết lập thư trả lời tự động</p>
															<div className={sx('button')}>
																<a
																	className={sx('btn-gradient', 'btn-add-mail-reply')}
																	href='javascript:void(0);'
																	onclick="showAutoReply('35BE12BA');">
																	Thêm thư trả lời tự động
																</a>
															</div>
														</div>
													</div>
												</div>
												<div className={sx('tabslet-content-detail', '')} data-content-detail={4}>
													<div className={sx('content-detail-top')}>
														<div className={sx('content')}>
															<p>
																{' '}
																<strong>
																	<b>Kỹ Năng </b>
																</strong>
															</p>
															<p></p>
															<p>
																- Là các từ khóa thường xuất hiện trong hồ sơ ứng viên hay chức danh
																tương tự như chức danh đăng tuyển của công ty bạn. <br />
																<b>Lưu ý:</b>
																<br /> - Hệ thống sẽ tìm và gợi ý những hồ sơ ứng viên phù hợp dựa trên
																các “Resume Skill” được tạo.
																<br /> - Thêm mới hoặc lựa chọn các “Tag/Kỹ năng” phù hợp với vị trí
																tuyển dụng của Quý công ty.
																<br /> - Bạn được phép tạo tối đa 10 “Tag/Kỹ năng” cho một vị trí tuyển
																dụng.
															</p>
															<p />
														</div>
													</div>
													<div className={sx('content-detail-bottom', 'box-manage-job-posting')}>
														<div className={sx('main-jobs-posting')}>
															<div className={sx('table')}>
																<div className={sx('head')}>
																	<div className={sx('form-group', 'form-checkbox')}>
																		<input
																			type='checkbox'
																			name='tag'
																			id='show_mytags'
																			defaultChecked=''
																		/>
																		<label htmlFor='show_mytags'>My Tags </label>
																	</div>
																	<div className={sx('form-group', 'form-checkbox')}>
																		<input
																			type='checkbox'
																			name='tag'
																			id='show_others'
																			defaultChecked=''
																		/>
																		<label htmlFor='show_others'>Coworker Tag</label>
																	</div>
																	<div className={sx('form-group', 'form-add')}>
																		<a className={sx('btn-gradient')} href='javascript:void(0)'>
																			Thêm Tag
																		</a>
																	</div>
																</div>
																<table id='listTags'>
																	<thead>
																		<tr>
																			<th />
																			<th width='30%'>Tag/Kỹ Năng</th>
																			<th>Hồ Sơ Gợi Ý</th>
																			<th>Ngày Tạo</th>
																			<th>Owner</th>
																			<th />
																		</tr>
																	</thead>
																	<tbody>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Fresher Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Fresher Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('bg', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						NET Android IOS Programmer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'NET Android IOS Programmer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Embedded Software Engineer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Embedded Software Engineer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('bg', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Java Android Programmer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Java Android Programmer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						.NET Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, '.NET Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('bg', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						ASP NET Software Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'ASP NET Software Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						lập trình viên
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'lập trình viên');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('bg', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Frontend Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Frontend Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Software Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Software Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('bg', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Game Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Game Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
																			</td>
																		</tr>
																		<tr className={sx('', 'lop7cttnq1667207375')}>
																			<td>
																				<div className={sx('tag-icon')}>
																					<em className={sx('material-icons')}>local_offer </em>
																				</div>
																			</td>
																			<td>
																				<div className={sx('title')}>
																					{' '}
																					<a className={sx('name')} href='javascript:void(0);'>
																						Advert Developer
																					</a>
																				</div>
																			</td>
																			<td></td>
																			<td>
																				<time>23/10/2023</time>
																			</td>
																			<td>
																				<p className={sx('user')}>minh nguyễn 123</p>
																			</td>
																			<td>
																				<a
																					href='javascript:void(0);'
																					onclick="return deleteTag(this, 'Advert Developer');"
																					title='Xóa'>
																					<em className={sx('material-icons')}>cancel</em>
																				</a>
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
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ViewJob;
