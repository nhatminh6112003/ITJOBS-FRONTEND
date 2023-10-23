import React, { useEffect } from 'react';
import styles from '../Posting/posting.module.css';
import classNames from 'classnames/bind';
import CreateIcon from '@mui/icons-material/Create';
import TabMenu from '../Posting/components/TabMenu';
import { useLocation, Link } from 'react-router-dom';
import { SearchIcon } from '~/Core/resources';
import SortIcon from '@mui/icons-material/Sort';
import PublishIcon from '@mui/icons-material/Publish';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDeleteJobPostMutation, useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import formatDate from '~/Core/utils/formatDate';
import { toast } from 'react-toastify';
const sx = classNames.bind(styles);

const WaitPosting = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { data: allJobPost } = useGetAllJobPostQuery();
	const [deleteJobPost] = useDeleteJobPostMutation();
	useEffect(() => {}, [allJobPost?.data]);
	const handleDeleteJobPost = (id) => {
		deleteJobPost(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			});
	};
	return (
		<section className={sx('manage-job-posting-active-jobs', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-manage-job-posting')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Việc Làm Chờ Đăng </h1>
							<div className={sx('button')}>
								<Link className={sx('btn-gradient')} to='/employers/postjobs'>
									<CreateIcon style={{ paddingRight: 5 }} />
									Tạo Mẫu Tuyển Dụng
								</Link>
							</div>
						</div>
						<div className={sx('right-heading')}>
							<a href='https://careerbuilder.vn/vi/employers/faq' className={sx('support')}>
								Hướng dẫn
							</a>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form
							name='frmSearchJob'
							id='frmSearchJob'
							action=''
							method='post'
							onsubmit='return validateSearch();'>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<label>Từ khóa</label>
									<input type='text' name='keyword' id='keyword' placeholder='Nhập từ khóa' defaultValue='' />
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Tìm theo ngày</label>
									<select className={sx('fl_left', 'mar_left46')} name='date_type' id='date_type'>
										<option value={0}>Ngày Cập Nhật</option>
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
										<em className={sx('material-icons')}>event</em>
									</div>
									<div id='start-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
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
										<em className={sx('material-icons')}>event</em>
									</div>
									<div id='end-date' className={sx('dtpicker-overlay', 'dtpicker-mobile')}>
										<div className={sx('dtpicker-bg')}>
											<div className={sx('dtpicker-cont')}>
												<div className={sx('dtpicker-content')}>
													<div className={sx('dtpicker-subcontent')} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={sx('form-group', 'form-submit')}>
									<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
										<SearchIcon style={{ paddingRight: 5 }} />
										Tìm
									</button>
								</div>
							</div>
						</form>
					</div>
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
								<div className={sx('heading-jobs-posting')}>
									<div className={sx('left-heading')}>
										<p className={sx('name')}>Chọn và thao tác</p>
										<ul className={sx('list-check')}>
											<li className={sx('view-posting-detail', 'active')}>
												<a href='javascript:void(0);' id='dtail'>
													Chi tiết
												</a>
											</li>
											<li className={sx('view-posting-summary')}>
												<a href='javascript:void(0)'>Xem tóm tắt</a>
											</li>
											<li>
												<a href='javascript:void(0);' id='copy_multi_job'>
													Nhân bản
												</a>
											</li>
										</ul>
									</div>
									<div className={sx('right-heading')}>
										<div className={sx('to-display')}>
											<p className={sx('name')}>Hiển thị </p>
											<div className={sx('form-display')}>
												<select name='limit' id='limit'>
													<option value={20} selected=''>
														20
													</option>
													<option value={30}>30</option>
													<option value={50}>50</option>
													<option value={100}>100</option>
												</select>
											</div>
											<p className={sx('name-display')}>Hiển thị 1 - 5 của 5 việc làm</p>
										</div>
									</div>
								</div>
								<div className={sx('boding-jobs-posting')}>
									<div className={sx('table', 'table-jobs-posting')}>
										<table>
											<thead>
												<tr>
													<th width='1%' />
													<th width='49%'>Chức danh</th>
													<th width='10%' onClick="setTypeSort('waitposting', 'asc', 0)">
														Cập nhật
														<SortIcon style={{ paddingLeft: 5 }} />
													</th>
													<th width='15%'>Trạng thái</th>
													<th width='10%'>
														Đăng tuyển
														<em className={sx('material-icons')} />
													</th>
													<th width='15%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												{allJobPost?.data?.map((job_post) => {
													if (job_post.status === 0 && job_post.isDeleted === false) {
														return (
															<tr key={job_post.id}>
																<td>
																	<div className={sx('checkbox')}>
																		<input
																			type='checkbox'
																			name='listresumes[]'
																			defaultValue='35BADBC3'
																		/>
																	</div>
																</td>
																<td>
																	<div className={sx('title')}>
																		<Link to={`/employers/hrcentral/viewjob/${job_post.id}`}>
																			{job_post.job_title}
																		</Link>
																	</div>
																	<div className={sx('jobs-view-detail')}>
																		<p>
																			<strong>Ngành nghề:</strong> Bán hàng / Kinh doanh, CNTT - Phần
																			mềm
																		</p>
																		<p>
																			<strong>Địa điểm:</strong> Hà Nội
																		</p>
																	</div>
																</td>
																<td>
																	<time>{formatDate(job_post.createdAt)}</time>
																</td>
																<td>
																	<p>Hoàn tất</p>
																</td>
																<td>
																	<a
																		href='javascript:void(0);'
																		onclick="checkOrder('35BADBC3');return false;"
																		title='Thực hiện đăng tuyển'>
																		<img
																			alt='Thực hiện đăng tuyển'
																			src='https://static.careerbuilder.vn/images/icons/posted_13x16.png'
																		/>
																	</a>
																</td>
																<td>
																	<ul className={sx('list-manipulation')}>
																		<li>
																			<a
																				href='javascript:void(0);'
																				onClick="checkOrder('35BADBC3');return false;"
																				title='Đăng tuyển'>
																				<PublishIcon />
																			</a>
																		</li>
																		<li>
																			<Link
																				to={`/employers/hrcentral/viewjob/${job_post.id}`}
																				title='Chi tiết'>
																				<VisibilityIcon />
																			</Link>
																		</li>
																		<li>
																			<a
																				href='https://careerbuilder.vn/vi/employers/hrcentral/posting/copyjob/lop7cttnq.1667207375/35BADBC3/1/1'
																				title='Nhân bản'>
																				{/* <em className={sx('material-icons')}>content_copy </em> */}
																				<ContentCopyIcon />
																			</a>
																		</li>
																		<li>
																			<Link
																				to={`/employers/postjobs/${job_post.id}`}
																				title='Sửa'
																				style={{ cursor: 'pointer' }}>
																				<EditIcon />
																			</Link>
																		</li>
																		<li className={sx('end')}>
																			<a
																				title='Xóa'
																				onClick={() => handleDeleteJobPost(job_post.id)}
																				style={{ cursor: 'pointer' }}>
																				<CancelIcon />
																			</a>
																		</li>
																	</ul>
																</td>
															</tr>
														);
													}
												})}
											</tbody>
										</table>
									</div>
									<div className={sx('main-pagination')}>
										<ul className={sx('pagination')} />
									</div>
								</div>
							</div>
						</div>
						<div className={sx('jobs-posting-modal', 'jobs-posting-1-modal')} style={{ display: 'none' }}>
							<div className={sx('modal-body')}>
								<div className={sx('img-error')}>
									<img src='./img/employer/error.png' alt='' />
								</div>
								<p className={sx('name')}>Thông báo</p>
								<div className={sx('des')}>
									Quý khách chưa đăng ký gói dịch vụ phù hợp. <br />
									Vui lòng liên hệ với chúng tôi để được tư vấn sử dụng dịch vụ
								</div>
								<div className={sx('button')}>
									<a
										className={sx('btn-gradient')}
										href='https://careerbuilder.vn/vi/employers/services/contact'
										onClick='closeAllmodal();'>
										Đồng ý
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WaitPosting;
