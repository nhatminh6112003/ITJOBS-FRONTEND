import React, { useEffect } from 'react';
import styles from './manageResume.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';
import formatDate from '~/Core/utils/formatDate';
import { Link, useLocation } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ResumeStatusOptions } from '~/App/constants/resumeStatusEnum';
import TabMenu from './components/TabMenu';
import { resumeActiveEnum } from '~/App/constants/resumeActiveEnum';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import useSearchResume from './components/useSearchResume';
const sx = classNames.bind(styles);

const ManageResume = ({ cx }) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const employer = useSelector((state) => state.auth?.employer);
	const { pushQuery, query } = useSearchResume();

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			keyword: '' || query.keyword,
			resume_active: '' || query.resume_active,
			fromDate: '' || query.fromDate,
			toDate: '' || query.toDate
		}
	});

	const { data: allJobPostActivity, isLoading } = useGetAllJobPostActivityApiQuery({
		params: {
			keyword: query.keyword || '',
			resume_active: query.resume_active || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || '',
			posted_by_id: employer?.id
		}
	});

	const onSubmit = (data) => {
		pushQuery({
			...data
		});
	};
	const formatSalary = (salary) => {
		if (!salary) {
			return '0';
		}

		const salaryNumber = parseInt(salary);
		const salaryInMillions = Math.floor(salaryNumber / 1000000);
		const remainingDigits = salaryInMillions % 10;

		if (remainingDigits === 0) {
			return `${salaryInMillions / 10} Tr`;
		} else {
			return `${salaryInMillions} Tr`;
		}
	};
	return (
		<section className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Quản lý hồ sơ</h1>
						</div>
					</div>
					<div className={sx('main-form-posting')}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={sx('form-wrap')}>
								<div className={sx('form-group', 'form-text')}>
									<InputFieldControl
										id='strKeyword'
										maxLength={200}
										placeholder='Nhập từ khóa'
										label='Từ khóa'
										name='keyword'
										control={control}
									/>
								</div>
								<div className={sx('form-group', 'form-select')}>
									<SelectFieldControl
										label='Trạng thái tìm việc'
										name='resume_active'
										control={control}
										options={resumeActiveEnum.map((item) => ({ value: item.value, label: item.label }))}
									/>
								</div>
								<div className={sx('form-group', 'form-date', 'start-date')}>
									<InputFieldControl
										type='date'
										name='fromDate'
										id='fromDate'
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										label='Từ'
										control={control}
									/>
								</div>
								<div className={sx('form-group', 'form-date', 'end-date')}>
									<InputFieldControl
										type='date'
										name='toDate'
										id='toDate'
										className={sx('dates_cus_select')}
										placeholder='Chọn'
										autoComplete='off'
										label='Đến'
										control={control}
									/>
								</div>
								<div className={sx('form-group', 'form-submit', 'form-submit-less')}>
									<button className={sx('btn-submit', 'btn-gradient')} type='submit'>
										<em className={cx('material-icons')}>find_in_page</em>Tìm
									</button>
								</div>
								<div className={sx('form-group', 'form-filter-advanced')}></div>
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
													<th width='10%'>Ngày nộp</th>
													<th width='10%'>Cập nhật</th>
													{/* <th width='10%%'>Trạng thái</th> */}
													<th width='10%'>Trạng thái</th>
													<th width='10%'>Kinh nghiệm</th>
													<th width='10%'>Mức lương</th>
													<th width='12%'>Thao tác</th>
												</tr>
											</thead>
											<tbody>
												{allJobPostActivity?.data && allJobPostActivity?.data.length > 0 ? (
													allJobPostActivity?.data.map((jobPostActivity) => {
														return (
															<>
																<tr>
																	<td>
																		<div className={cx('checkbox')}></div>
																	</td>
																	<td>
																		<div className={sx('title')}>
																			<Link
																				to={`/employers/hrcentral/resume_detail/${jobPostActivity?.resume?.id}?job_id=${jobPostActivity?.job_post?.id}&jobPostActivityId=${jobPostActivity.id}`}
																				style={{
																					cursor: 'pointer'
																				}}>
																				{jobPostActivity?.user_account?.lastname +
																					'' +
																					jobPostActivity?.user_account?.firstname}
																			</Link>
																		</div>
																		<div className={sx('detail')}>
																			<p>
																				<strong>Chức danh:</strong>{' '}
																				{jobPostActivity?.resume?.resume_title?.title}
																			</p>
																		</div>
																	</td>
																	<td>
																		<time>{formatDate(jobPostActivity.apply_date)}</time>
																	</td>
																	<td>
																		<time>{formatDate(jobPostActivity.updatedAt)}</time>
																	</td>

																	<td>
																		{ResumeStatusOptions?.map(
																			(item) =>
																				item.value == jobPostActivity?.status && <p>{item.label}</p>
																		)}
																	</td>
																	<td>
																		<p>
																			{jobPostActivity?.resume?.my_attaches[0]?.yearOfExperience
																				? jobPostActivity?.resume?.my_attaches[0]
																						?.yearOfExperience + 'năm'
																				: 'Không có kinh nghiệm'}{' '}
																		</p>
																	</td>
																	<td>
																		<p>
																			{formatSalary(jobPostActivity?.job_post?.min_salary)} -{' '}
																			{formatSalary(jobPostActivity?.job_post?.max_salary)} VND
																		</p>
																	</td>
																	<td>
																		<Link
																			to={`/employers/hrcentral/resume_detail/${jobPostActivity?.resume?.id}?job_id=${jobPostActivity?.job_post?.id}&jobPostActivityId=${jobPostActivity.id}`}
																			title='Xem chi tiết hồ sơ'>
																			<VisibilityIcon />
																		</Link>
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

export default ManageResume;
