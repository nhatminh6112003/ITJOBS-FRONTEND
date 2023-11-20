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
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { resumeActiveEnum } from '~/App/constants/resumeActiveEnum';
import useSearchResume from '../components/useSearchResume';
const sx = classNames.bind(styles);

const ResumeSaved = ({ cx }) => {
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

	const { data: allEmployerResume, isLoading } = useGetAllEmployerResumeApiQuery({
		params: {
			user_account_id: employer?.id,
			keyword: query.keyword || '',
			resume_active: query.resume_active || '',
			fromDate: query.fromDate || '',
			toDate: query.toDate || ''
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
				toast.error(error.data.message);
			});
	};

	const onSubmit = (data) => {
		console.log(data);
		pushQuery({
			...data
		});
	};

	return (
		<section className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('heading-manage')}>
						<div className={sx('left-heading')}>
							<h1 className={sx('title-manage')}>Hồ Sơ Đã Lưu</h1>
							{/* <div className={sx('button')}>
								<a className={sx('btn-gradient')} href='https://careerbuilder.vn/vi/employers/saved_search'>
									<em className={cx('material-icons')}>notifications_none</em>
									Thông Báo Ứng Viên
								</a>
							</div> */}
						</div>
						{/* <div className={sx('right-heading')}>
							<a className={sx('support')} href='https://careerbuilder.vn/vi/employers/faq'>
								Hướng dẫn
							</a>
						</div> */}
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
																				marginLeft: '6px'
																			}}
																			onClick={() => handleDelete(employer_resume?.id)}
																			title='Xóa hồ sơ'>
																			<DeleteIcon 
																			style={{color:'#2f4ba0'}}
																			/>
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
