import React, { useEffect } from 'react';
import styles from '../manageResume.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TabMenu from '../components/TabMenu';
import {
	useDeleteEmployerResumeApiMutation,
	useGetAllEmployerResumeApiQuery
} from '~/App/providers/apis/employerResumeApi';
import { toast } from 'react-toastify';
import { DeleteIcon } from '~/Core/resources';
const sx = classNames.bind(styles);

const ResumeSaved = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { data: allEmployerResume, isLoading } = useGetAllEmployerResumeApiQuery({
		params: {
			user_account_id: employer?.id
		}
	});
	const [deleteEmployerResume] = useDeleteEmployerResumeApiMutation();
	useEffect(() => {
		console.log(allEmployerResume?.data);
	}, [allEmployerResume]);

	const handleDelete = (id) => {
		deleteEmployerResume(id)
			.unwrap()
			.then(() => {
				toast.success('Xóa thành công');
			})
			.catch((error) => {
				toast.error(error);
			});
	};
	return (
		<section className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Hồ Sơ Đã Lưu</h1>
							<div className={sx('button')}>
								<a className={sx('btn-gradient')} href='https://careerbuilder.vn/vi/employers/saved_search'>
									<em className={cx('material-icons')}>notifications_none</em>
									Thông Báo Ứng Viên
								</a>
							</div>
						</div>
						<div className={sx('right-heading')}>
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn
							</a>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form name='frmSearchResume'>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<label>Từ khóa</label>
									<input
										type='text'
										id='strKeyword'
										defaultValue=''
										maxLength={200}
										placeholder='Nhập từ khóa'
									/>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Tìm theo</label>
									<select id='intKeywordType'>
										<option value={0}>Tên hồ sơ</option>
										<option value={1}>Tên ứng viên</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<label>Trạng thái tìm việc</label>
									<select name='urgentjob' id='inturgentjob'>
										<option value={0}>Tất cả</option>
										<option value={1}>Ứng viên tìm việc khẩn cấp</option>
									</select>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<label>Từ</label>
									<input
										type='text'
										name=''
										id='strFromDate'
										defaultValue=''
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										readOnly=''
									/>
									<div className={sx('icon')}>
										<em className={cx('material-icons')}>event</em>
									</div>
								</div>
								<div className={sx('form-group', 'form-date', 'end-date')}>
									<label>Đến</label>
									<input
										type='text'
										name=''
										id='strToDate'
										defaultValue=''
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										readOnly=''
									/>
									<div className={sx('icon')}>
										<em className={cx('material-icons')}>event</em>
									</div>
								</div>
								<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
									<button
										className={sx('btn-submit', 'btn-gradient')}
										type='button'
										onclick='searchResumeApply()'>
										<em className={cx('material-icons')}>find_in_page</em>Tìm
									</button>
								</div>
								<div className={sx('form-group', 'form-filter-advanced')}></div>
							</div>
							<div className={sx('form-wrap-advanced')}>
								<div className={sx('form-wrap')}>
									<div className={sx('form-group', 'form-select')}>
										<label>Trạng thái</label>
										<select id='intStatus'>
											<option value={7}>Tất cả</option>
											<option value={8}>Chưa Xem </option>
											<option value={0}>Chưa quyết định</option>
											<option value={1}>Không phù hợp</option>
											<option value={2}>Từ chối</option>
											<option value={3}>Kiểm tra</option>
											<option value={4}>Phỏng vấn</option>
											<option value={5}>Đề nghị tuyển dụng</option>
											<option value={6}>Nhận việc</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Phân loại tự động</label>
										<select id='intSuitable'>
											<option value={2} selected='selected'>
												Tất cả
											</option>
											<option value={1}>Phù hợp</option>
											<option value={0}>Tiềm Năng</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Xếp loại</label>
										<select id='intType'>
											<option value={6}>Tất cả</option>
											<option value={0}>Chưa xếp loại</option>
											<option value={1}>Kém</option>
											<option value={2}>Trung bình</option>
											<option value={3}>Khá</option>
											<option value={4}>Tốt</option>
											<option value={5}>Rất Tốt</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-select')}>
										<label>Ghi chú</label>
										<select id='intNote'>
											<option value={2} selected='selected'>
												Tất cả
											</option>
											<option value={1}>Có ghi chú</option>
											<option value={0}>Không có ghi chú</option>
										</select>
									</div>
									<div className={sx('form-group', 'form-reset')}>
										<button className={sx('btn-reset')} type='button' onclick='resetFormSearchResume()'>
											<em className={sx('material-icons')}>loop</em>Xóa
										</button>
									</div>
									<div className={sx('form-group', 'form-submit')}>
										<button
											className={sx('btn-submit', 'btn-gradient')}
											type='button'
											onclick='searchResumeApply()'>
											<em className={sx('material-icons')}>find_in_page</em>Tìm
										</button>
									</div>
									<div className={sx('form-group', 'form-filter-less')}>
										<a className={sx('btn-filter-less')} href='javascript:void(0);;'>
											<em className={sx('material-icons')}>highlight_off</em>
											Thu gọn
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<ul className={sx('tabslet-tab')}>
							{TabMenu.map((item) => (
								<li className={sx(currentPath == item.path && 'active')}>
									<Link to={item.path}>{item.title}</Link>
								</li>
							))}
						</ul>
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<div className={sx('main-resume-applied')}>
								<div className={sx('boding-resume-applied')}>
									<div className={sx('table', 'table-resume-applied')}>
										<table>
											<thead>
												<tr>
													<th width='1%'>
														<div className={sx('checkbox')}>
															<input type='checkbox' id='check-all' />
														</div>
													</th>
													<th width='27%'>Chọn tất cả</th>
													<th width='10%'>Kinh nghiệm</th>
													<th width='10%'>Mức lương</th>
													<th width='12%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												{allEmployerResume?.data && allEmployerResume?.data.length > 0 ? (
													allEmployerResume?.data.map((employer_resume) => {
														return (
															<>
																<tr>
																	<td>
																		<div className={cx('checkbox')}></div>
																	</td>
																	<td>
																		<div className={sx('title')}>
																			<Link
																				to={`/employers/hrcentral/resume_detail/${employer_resume?.resume?.id}`}
																				style={{
																					cursor: 'pointer'
																				}}>
																				{employer_resume?.resume?.user_account?.lastname +
																					'' +
																					employer_resume?.resume?.user_account?.firstname}
																			</Link>
																		</div>
																		<div className={sx('detail')}>
																			<p>
																				<strong>Chức danh:</strong>{' '}
																				{employer_resume?.resume?.resume_title?.title}
																			</p>
																		</div>
																	</td>
																	<td>
																		<p>
																			{employer_resume?.resume?.attachments[0]?.yearOfExperience} năm
																		</p>
																	</td>
																	<td>
																		<p>
																			{parseInt(
																				employer_resume?.resume?.resume_desired_job?.salary_from
																			)
																				.toString()
																				.charAt(0)}{' '}
																			Tr -{' '}
																			{parseInt(
																				employer_resume?.resume?.resume_desired_job?.salary_to
																			)
																				.toString()
																				.charAt(0)}{' '}
																			Tr VND
																		</p>
																	</td>
																	<td>
																		<Link
																			to={`/employers/hrcentral/resume_detail/${employer_resume?.resume?.id}`}
																			title='Xem chi tiết hồ sơ'>
																			<VisibilityIcon />
																		</Link>
																		<a
																			style={{
																				cursor: 'pointer',
																				marginLeft: '4px'
																			}}
																			onClick={() => handleDelete(employer_resume?.id)}
																			title='Xóa hồ sơ'>
																			<DeleteIcon />
																		</a>
																	</td>
																</tr>
															</>
														);
													})
												) : (
													<tr>
														<td colSpan={9}>
															<p align='center'>
																<strong> Hiện tại không có hồ sơ nào trong thư mục này!</strong>
															</p>
														</td>
													</tr>
												)}
											</tbody>
										</table>
									</div>
									<div className={sx('main-pagination')}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumeSaved;
