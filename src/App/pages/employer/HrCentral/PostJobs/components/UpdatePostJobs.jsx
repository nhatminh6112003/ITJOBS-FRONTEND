import React, { useEffect, useState } from 'react';
import styles from '../postjobs.module.css';
import classNames from 'classnames/bind';
import Tooltip from '@mui/material/Tooltip';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import { useForm } from 'react-hook-form';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
import { experienceEnum } from '~/App/constants/experienceEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import { DegreeArray } from '~/App/constants/degreeArray';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobPostSchema } from '~/App/schemas/jobPostSchema';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetOneJobPostQuery, useUpdateJobPostMutation } from '~/App/providers/apis/jobPostApi';
import { useNavigate, useParams } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import moment from 'moment';
const sx = classNames.bind(styles);
const UpdatePostJobs = ({ cx }) => {
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(jobPostSchema)
	});
	const user_account_id = useSelector((state) => state?.auth.employer?.id);
	const company_id = useSelector((state) => state?.auth?.employer?.company?.id);
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProfession } = useGetAllProfessionQuery({});
	const { data: listProvinces } = useGetAllProvincesQuery();
	const { data: listJobWelfare } = useGetAllJobWelfareQuery({});
	const selectedProvince = watch('provinces', null);
	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: selectedProvince
		},
		{
			skip: !selectedProvince
		}
	);
	const [updateJobPost] = useUpdateJobPostMutation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { data: jobPost } = useGetOneJobPostQuery(id);

	const [displayExperience, setDisplayExperience] = useState(false);

	useEffect(() => {
		reset({
			expiry_date: moment(jobPost?.expiry_date).format('YYYY-MM-DD'),
			districts: jobPost?.districts,
			address: jobPost?.address,
			form_age: jobPost?.form_age,
			to_age: jobPost?.to_age,
			job_degree_value: jobPost?.job_degree_value,
			job_desc: jobPost?.job_desc,
			job_experience_value: jobPost?.job_experience_value,
			job_position_value: jobPost?.job_position_value,
			job_request: jobPost?.job_request,
			job_title: jobPost?.job_title,
			max_salary: jobPost?.max_salary,
			min_salary: jobPost?.min_salary,
			provinces: jobPost?.provinces,
			work_home: jobPost?.work_home,
			job_formExperience: jobPost?.job_formExperience,
			job_ToExperience: jobPost?.job_ToExperience
		});
	}, [jobPost, reset]);
	const handleExperienceChange = (selectedValue) => {
		if (Number(selectedValue) === 1) {
			setDisplayExperience(true);
		} else {
			setDisplayExperience(false);
		}
	};
	const onUpdatePostJobs = (data) => {
		const job_work_type_id = [];
		for (let i = 1; i <= 4; i++) {
			const key = `job_work_type_id_${i}`;
			if (data[key]) {
				job_work_type_id.push(data[key]);
			}
			delete data[key];
		}
		const job_welfare_id = [];
		for (let i = 1; i <= 16; i++) {
			const key = `job_welfare_id_${i}`;
			if (data[key]) {
				job_welfare_id.push(data[key]);
			}
			delete data[key];
		}
		const form = {
			job_welfare_id,
			job_work_type_id,
			posted_by_id: user_account_id,
			company_id,
			...data
		};
		updateJobPost({
			id: id,
			payload: form
		})
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					navigate(routesPath.EmployerPaths.waitPosting);
					return;
				}
			});
	};
	useEffect(() => {
		if (jobPost?.job_experience_value == 1) {
			setDisplayExperience(true);
		}
	}, [jobPost?.job_experience_value]);
	return (
		<>
			<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
				<div className={cx('container')}>
					<div className={sx('box-manage-job-posting')}>
						<div className={sx('heading-manage')}>
							<div className={sx('left-heading')}>
								<h1 className={sx('title-manage')}>Đăng Tuyển Dụng</h1>
							</div>
							<div className={sx('right-heading')}>
								<a href='https://careerbuilder.vn/vi/employers/faq' className={sx('support')}>
									Hướng dẫn
								</a>
							</div>
						</div>
						<form onSubmit={handleSubmit(onUpdatePostJobs)}>
							<div className={sx('main-tabslet')}>
								<ul className={sx('tabslet-tab')}>
									<li className={sx('active')}>
										<a href='javascript:void(0);'>Thông Tin Tuyển Dụng</a>
									</li>
									<li>
										<a href='javascript:void(0)' onclick='is_Filter_Form();'>
											Thông Tin Liên Hệ
										</a>
									</li>
									<li>
										<a href='javascript:void(0)' onclick='is_Filter_Form();'>
											Thiết Lập Độ Phù Hợp Ứng Viên
										</a>
									</li>
								</ul>
								<div className={sx('tabslet-content', 'active')} id='tab-1'>
									<input name='ispublic' type='hidden' defaultValue={0} />
									<input name='emp_id' type='hidden' defaultValue='35A94C80' />
									<input name='job_id' type='hidden' defaultValue='35A4E900' />
									<input type='hidden' id='jobsamp_id' name='jobsamp_id' defaultValue='' />
									<input type='hidden' id='lang' name='lang' defaultValue='' />
									<input name='intSave' id='intSave' type='hidden' defaultValue={1} />
									<input name='job_source' id='job_source' type='hidden' defaultValue={1} />
									<input name='work_location_0' id='work_location_0' type='hidden' defaultValue='' />
									<input name='work_location_1' id='work_location_1' type='hidden' defaultValue='' />
									<input name='work_location_2' id='work_location_2' type='hidden' defaultValue='' />
									<div className={sx('main-application-information')}>
										<h2 className={sx('title-application')}>Thông tin tuyển dụng</h2>
										<div className={sx('form-wrap')}>
											<div className={cx('row')}>
												<div className={cx('col-lg-6')}>
													<div className={sx('form-group', 'form-text')}>
														<InputFieldControl
															control={control}
															name='job_title'
															placeholder='Chức danh tuyển dụng'
															autoComplete='off'
															style={{ width: '100%' }}
														/>
													</div>
												</div>
												<div className={cx('col-lg-6')}>
													<div className={sx('noti', 'mt-20')}>
														<Tooltip
															title={
																<div className={sx('toolip')}>
																	Lưu ý: Chức danh nên mô tả chính xác vị trí tuyển dụng cần tuyển. Đây
																	là một phần quan trọng thu hút người tìm việc ứng tuyển và hệ thống
																	gợi ý hồ sơ phù hợp.
																</div>
															}>
															<em className={cx('material-icons')}>info</em>
														</Tooltip>
													</div>
												</div>
											</div>

											<div className={cx('row')}>
												<div className={cx('col-lg-6')}>
													<div className={sx('form-group', 'form-select-chosen')}>
														<SelectMultipleFieldControl
															label='Ngành nghề mong muốn'
															options={listProfession?.data?.map((value) => ({
																value: value.id,
																label: value.name
															}))}
															placeholder='Chọn'
															maxItems={3}
															control={control}
															name='job_profession_id'
															selectedValues={jobPost?.jobProfessionDetail?.map((item) =>
																Number(item.profession_id)
															)}
														/>
													</div>
												</div>
											</div>
											<div id='post_job_location'>
												<div className={sx('item_post_job_location')}>
													<div className={cx('row')}>
														<div className={cx('col-lg-6')}>
															<div className={sx('form-group', 'form-select')}>
																<label>
																	Thành phố <font style={{ color: 'red' }}>*</font>
																</label>
																<SelectFieldControl
																	control={control}
																	options={listProvinces?.map((value) => {
																		return {
																			value: value.code,
																			label: value.name
																		};
																	})}
																	name='provinces'
																	id='provinces'
																/>
															</div>
														</div>
													</div>
													<div className={cx('row')}>
														<div className={cx('col-lg-6')}>
															<div className={sx('form-group', 'form-select')}>
																<label>Quận</label>
																<SelectFieldControl
																	control={control}
																	options={listDistricts?.districts?.map((value) => {
																		return {
																			value: value.code,
																			label: value.name
																		};
																	})}
																	placeholder='Chọn'
																	name='districts'
																	id='districts'
																/>
															</div>
														</div>
													</div>
													<div className={cx('row')}>
														<div className={cx('col-lg-6')}>
															<div className={sx('form-group', 'form-select-chosen')}>
																<InputFieldControl
																	name='address'
																	control={control}
																	placeholder={'Địa điểm làm việc'}
																	label={'Địa chỉ làm việc'}
																	style={{ width: '100%' }}
																/>
															</div>
														</div>
														<div className={cx('col-lg-6', 'd-flex', 'align-center')}>
															<div className={sx('form-group', 'form-checkbox', 'mt-5')}>
																<CheckBoxFieldControl
																	label='Hiển thị trên tin tuyển dụng để thu hút ứng viên hơn'
																	control={control}
																	name='is_address_work_hidden'
																	value={false}
																	defaultChecked={jobPost?.is_address_work_hidden === 1 ? true : false}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={sx('form-group', 'form-editor')} id='div_jobdesc'>
												<TextAreaFieldControl
													rows={30}
													label='Mô Tả Công Việc'
													name='job_desc'
													control={control}
												/>
											</div>
											<div className={sx('form-group', 'form-editor')} id='div_jobreq'>
												<TextAreaFieldControl
													rows={30}
													label='Yêu cầu công việc'
													name='job_request'
													control={control}
												/>
											</div>
											<div className={cx('row')}>
												<div className={cx('col-lg-6')}>
													<label htmlFor=''>
														Mức lương <font style={{ color: 'red' }}>*</font>
													</label>
													<div className={sx('form-salary', 'd-flex', 'align-center')}>
														<div className={sx('form-group', 'form-text')}>
															<InputFieldControl
																name='min_salary'
																control={control}
																maxLength={12}
																placeholder='Tối Thiểu *'
															/>
														</div>
														<div className={sx('form-group', 'form-text')}>
															<InputFieldControl
																name='max_salary'
																control={control}
																maxLength={12}
																placeholder='Tối Đa *'
															/>
														</div>
													</div>
												</div>
												<div className={cx('col-lg-6', 'd-flex', 'align-center', 'salaryOnPostJob')}>
													<div className={sx('noti')}>
														<Tooltip
															title={
																<div className={sx('toolip')}>
																	<p className={sx('width_62', 'fl_left')}>
																		<b>Lưu ý:</b>
																	</p>
																	<br />- 72% ứng viên chia sẻ rằng thông tin lương ảnh hưởng đến quyết
																	định ứng tuyển của họ.
																	<br />- Bạn có thể quyết định “hiển thị thông tin lương” để thu hút
																	thêm nhiều hồ sơ ứng tuyển vào vị trí tuyển dụng.
																	<p style={{ color: 'white', fontWeight: 'bold' }}>
																		- Bạn nên nhập cả hai mức lương tối thiểu và tối đa cho vị trí cần
																		đăng tuyển.
																	</p>
																</div>
															}>
															<em className={cx('material-icons')}>info</em>
														</Tooltip>
													</div>
												</div>
											</div>

											<div className={sx('formality')}>
												<div className={sx('form-group')}>
													<p className={sx('title-label')}>
														Hình thức <font style={{ color: 'red' }}>*</font>
													</p>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-sm-6', 'col-lg-3')}>
														<div>
															{listWorkType?.map((listWork, index) => {
																return (
																	<CheckBoxFieldControl
																		name={`job_work_type_id_${listWork.id}`}
																		id='job_work_type_id'
																		control={control}
																		label={listWork.name}
																		value={listWork.id}
																		onChange={(e) => {
																			if (e.target.checked)
																				setValue(
																					`job_work_type_id_${listWork.id}`,
																					Number(e.target.value)
																				);
																		}}
																		defaultChecked={jobPost?.jobWorkTypeDetail
																			?.map((item) => item.work_type_id)
																			?.includes(listWork.id)}
																	/>
																);
															})}
														</div>
													</div>
												</div>
											</div>
											<div className={cx('row')}>
												<div className={cx('col-lg-3')}>
													<div style={{ display: 'flex', flexDirection: 'column' }}>
														<InputFieldControl
															control={control}
															name='expiry_date'
															label='Hạn nhận hồ sơ'
															type='date'
															style={{
																border: '1px solid #e5e5e5',
																padding: '0 15px',
																borderRadius: 5,
																height: 40,
																marginTop: 10
															}}
														/>
														<div className={cx('icon')}></div>
														<span className={cx('form-error', 'error_job_lastdate')} />
													</div>
												</div>
											</div>
											<h2 className={sx('title-application')}>Phúc lợi</h2>
											<div className={sx('checkbox-wrap')}>
												<div className={cx('row')}>
													{listJobWelfare?.data?.map((jobWelfare, index) => {
														return (
															<div className={cx('col-sm-6', 'col-lg-3')}>
																<div>
																	<CheckBoxFieldControl
																		name={`job_welfare_id_${jobWelfare.id}`}
																		id='job_welfare_id'
																		control={control}
																		label={jobWelfare.welfare_type}
																		value={jobWelfare.id}
																		onChange={(e) => {
																			if (e.target.checked)
																				setValue(
																					`job_welfare_id_${jobWelfare.id}`,
																					Number(e.target.value)
																				);
																		}}
																		defaultChecked={jobPost?.jobWelfare
																			?.map((item) => item.job_welfare_id)
																			?.includes(jobWelfare.id)}
																	/>
																</div>
															</div>
														);
													})}
												</div>
											</div>
											<h2 className={sx('title-application')}>Yêu cầu chung</h2>
											<div className={sx('form-wrap')}>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group')}>
															<p className={sx('title-label')}>Giới tính</p>
														</div>
														<div className={sx('d-flex', 'gender-wrap')}>
															<div
																className={sx('form-group', 'form-radio', 'align-items-center')}
																style={{ gap: 4 }}>
																<InputFieldControl
																	type='radio'
																	name='gender'
																	control={control}
																	label='Khác'
																	value={0}
																	checked={jobPost?.gender == 0 ? true : false}
																	id='gender0'
																	style={{ position: 'relative', top: 3 }}
																	onChange={(e) => {
																		if (e.target.checked) {
																			setValue(`gender`, Number(e.target.value));
																		}
																	}}
																/>
															</div>
															<div
																className={sx('form-group', 'form-radio', 'align-items-center')}
																style={{ gap: 4 }}>
																<InputFieldControl
																	type='radio'
																	name='gender'
																	control={control}
																	label='Nam'
																	value={1}
																	checked={jobPost?.gender == 1 ? true : false}
																	id='gender1'
																	style={{ position: 'relative', top: 3 }}
																	onChange={(e) => {
																		if (e.target.checked) {
																			setValue(`gender`, Number(e.target.value));
																		}
																	}}
																/>
															</div>
															<div
																className={sx('form-group', 'form-radio', 'align-items-center')}
																style={{ gap: 4 }}>
																<InputFieldControl
																	type='radio'
																	name='gender'
																	control={control}
																	label='Nữ'
																	checked={jobPost?.gender == 2 ? true : false}
																	id='gender2'
																	style={{ position: 'relative', top: 3 }}
																	onChange={(e) => {
																		if (e.target.checked) {
																			setValue(`gender`, Number(e.target.value));
																		}
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group')}>
															<p className={sx('title-label')}>Tuổi</p>
														</div>
														<div className={sx('d-flex', 'form-age', 'align-center')}>
															<div className={sx('form-group', 'form-text')}>
																<InputFieldControl
																	name='form_age'
																	id='form_age'
																	control={control}
																	label='Từ'
																	maxLength={2}
																/>
															</div>
															<div className={sx('form-group', 'form-text')}>
																<InputFieldControl
																	name='to_age'
																	id='to_age'
																	control={control}
																	label='Đến'
																	maxLength={2}
																/>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group', 'form-select')}>
															<label>
																Kinh nghiệm <font style={{ color: 'red' }}>*</font>
															</label>
															<SelectFieldControl
																control={control}
																options={experienceEnum?.map((value) => {
																	return {
																		value: value.value,
																		label: value.label
																	};
																})}
																name='job_experience_value'
																id='job_experience_value'
																onChange={(e) => handleExperienceChange(e.target.value)}
															/>
														</div>
													</div>
													<div
														className={cx('col-lg-6')}
														id='job_experience'
														style={{ display: displayExperience ? 'block' : 'none' }}>
														<div className={sx('d-flex', 'form-age', 'align-center')}>
															<div className={sx('form-group', 'form-text')}>
																<InputFieldControl
																	name='job_formExperience'
																	id='job_formExperience'
																	control={control}
																	label='Từ'
																/>
															</div>
															<div className={sx('form-group', 'form-text')}>
																<InputFieldControl
																	name='job_ToExperience'
																	id='job_ToExperience'
																	control={control}
																	label='Đến'
																/>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group', 'form-select')}>
															<label>
																Cấp bậc <font style={{ color: 'red' }}>*</font>
															</label>
															<SelectFieldControl
																control={control}
																options={LevelArray?.map((value) => {
																	return {
																		value: value.value,
																		label: value.label
																	};
																})}
																name='job_position_value'
																id='job_position_value'
															/>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-6')}>
														<div className={sx('form-group', 'form-select')}>
															<label>
																Bằng cấp
																<font style={{ color: 'red' }}>*</font>
															</label>
															<SelectFieldControl
																control={control}
																options={DegreeArray?.map((value) => {
																	return {
																		value: value.value,
																		label: value.label
																	};
																})}
																name='job_degree_value'
																id='job_degree_value'
															/>
														</div>
													</div>
												</div>
											</div>

											<h2 className={sx('title-application')}>
												Thông tin khác
												<span>
													<span className={sx('txt_required', 'mar_left10')}>(Không bắt buộc)</span>
												</span>
											</h2>
											<div className={sx('form-wrap', 'other-information-wrap')}>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<CheckBoxFieldControl
																name='work_home'
																id='work_home'
																control={control}
																label='Work form home'
																value={jobPost?.work_home === 1 ? true : false}
																defaultChecked={jobPost?.work_home === 1 ? true : false}
															/>
														</div>
														<div className={sx('form-group', 'mt-0', 'form-note-workfromhome')}>
															Tick chọn nếu vị trí tuyển dụng này cho phép ứng viên có thể chọn chế độ
															làm việc tại nhà trong thời điểm hiện tại (Work from home) mà không nhất
															thiết phải có mặt tại văn phòng công ty. Hệ thống sẽ phân loại và đánh dấu
															đăng tuyển này vào danh mục tìm kiếm loại công việc là “Work from Home”.
														</div>
													</div>
												</div>
											</div>
											<div className={sx('form-group', 'form-submit', 'form-continue')}>
												<button
													className={sx('btn-gradient', 'btn-submit')}
													id='btn_submit_form_postjobs'
													type='button'
													onclick='is_Filter_Form();'>
													Tiếp tục
												</button>
												<button
													className={sx('btn-gradient', 'btn-post')}
													id='btn_submit_form_postjobs_finish'
													type='submit'
													onclick='is_Filter_Form3();'>
													Lưu
												</button>
											</div>
										</div>
									</div>
									<div className={sx('tabslet-content')} id='tab-2'>
										<div className={sx('main-application-information')}>
											<h2 className={sx('title-application')}>Thông tin liên hệ</h2>
											<div className={sx('form-wrap')}>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																name='checkprofile'
																id='checkprofile'
																defaultValue={1}
															/>
															<label htmlFor='checkprofile'>
																Ẩn thông tin công ty: tên công ty và giới thiệu về công ty
															</label>
															<a
																className={sx('btnlink', 'preview-company')}
																href='javascript:void(0)'
																onclick='popupProfileAjax(); return false;'>
																(Xem lại thông tin công ty đã tạo)
															</a>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																className={sx('input_margin')}
																onclick='change_security(this);'
																name='hide_contact'
																id='hide_contact'
																defaultValue={1}
															/>
															<label htmlFor='hide_contact'>
																Ẩn thông tin liên hệ: tên công ty, địa chỉ, người liên hệ
															</label>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-text')}>
															<input
																type='text'
																name='JOB_CONTACT_COMPANY'
																id='JOB_CONTACT_COMPANY'
																defaultValue='Công ty it minh nguyễn'
																placeholder='Tên công ty *'
															/>
														</div>
														<div id='security_client' style={{ display: 'none' }}>
															<div className={sx('form-group', 'form-checkbox')}>
																<input
																	type='radio'
																	name='Hide_Job'
																	id='JOB_CONTACT_SECRECY'
																	defaultChecked='checked'
																	defaultValue={0}
																/>
																<label htmlFor='JOB_CONTACT_SECRECY'>Bảo mật</label>
															</div>
															<div className={sx('form-group', 'form-checkbox')}>
																<input
																	type='radio'
																	className={sx('input_margin')}
																	name='Hide_Job'
																	defaultValue={1}
																	id='JOB_CONTACT_CLIENT'
																/>
																<label htmlFor='JOB_CONTACT_CLIENT'>CareerBuilder's client</label>
															</div>
														</div>
														<input
															name='company_profile'
															id='company_profile'
															type='hidden'
															defaultValue='35A94C80'
														/>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-text')}>
															<input
																type='text'
																id='JOB_CONTACT_ADDRESS'
																name='JOB_CONTACT_ADDRESS'
																defaultValue='phố bái thị trấn nho quan ninh bình'
																placeholder='Địa chỉ *'
															/>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-text')}>
															<input
																type='text'
																name='JOB_CONTACT_NAME'
																id='JOB_CONTACT_NAME'
																defaultValue='minh nguyễn 123'
																placeholder='Người liên hệ *'
															/>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-text')}>
															<input
																type='text'
																className={sx('width_295')}
																name='JOB_CONTACT_EMAIL'
																id='JOB_CONTACT_EMAIL'
																maxLength={150}
																defaultValue='lop7cttnq@gmail.com'
																placeholder='Email 1 *'
															/>
														</div>
													</div>
													<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
														<div className={sx('noti')}>
															<em className={cx('material-icons')}>info</em>
															<div className={sx('toolip')}>
																<p>(Email sẽ được bảo mật)</p>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-text')}>
															<input
																type='text'
																name='JOB_CONTACT_EMAIL2'
																id='JOB_CONTACT_EMAIL2'
																maxLength={150}
																defaultValue=''
																placeholder='Email 2'
															/>
														</div>
													</div>
													<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
														<div className={sx('noti')}>
															<em className={cx('material-icons')}>info</em>
															<div className={sx('toolip')}>
																<p>(Email sẽ được bảo mật)</p>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-select')}>
															<select name='receivemail'>
																<option value={0}>Tiếng Việt</option>
																<option value={1}>Tiếng Anh</option>
																<option value={2}>Không nhận email thông báo</option>
															</select>
														</div>
													</div>
													<div className={cx('col-lg-5', 'd-flex', 'align-center')}>
														<div className={sx('noti')}>
															<em className={cx('material-icons')}>info</em>
															<div className={sx('toolip')}>
																<p>Nhận email thông báo khi có ứng viên nộp đơn trực tuyến.</p>
																<p>
																	Khi nhấn chọn chức năng này, Quý công ty sẽ nhận được email thông báo
																	từ hệ thống mỗi khi có ứng viên nộp đơn trực tuyến vào các vị trí
																	công việc tương ứng mà Quý công ty đang đăng tuyển trên hệ thống.
																</p>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('row')}>
													<div className={cx('col-lg-7')}>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																name='JOB_RECEIVEEMAIL_RESUME'
																defaultChecked='checked'
																defaultValue={1}
																id='records1'
															/>
															<label htmlFor='records1'>
																Nhận hồ sơ gợi ý phù hợp với vị trí tuyển dụng
															</label>
														</div>
														<div className={sx('form-group', 'form-checkbox')}>
															<input
																type='checkbox'
																className={sx('input_margin')}
																name='JOB_APPLYONLINE'
																id='JOB_APPLYONLINE'
																defaultValue={1}
															/>
															<label htmlFor='JOB_APPLYONLINE'>
																Thiết lập thư trả lời tự động khi có ứng viên nộp đơn ứng tuyển
															</label>
															<div className={sx('noti')}>
																<em className={cx('material-icons')}>info</em>
																<div className={sx('toolip')}>
																	<p>
																		Hệ thống sẽ tự động gửi Thư tự động trả lời cho các ứng viên nộp
																		hồ sơ trực tuyến. Thư này sẽ không đính kèm trong quảng cáo đăng
																		tuyển của quý khách.
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={sx('form-standard')} id='MailReply'>
													<div className={cx('row')}>
														<div className={cx('col-lg-7')}>
															<input name='job_id' type='hidden' defaultValue='35A4E900' />
															<input name='savetype' type='hidden' defaultValue={1} />
															<input name='emp_id' type='hidden' defaultValue={287616} />
															<div className={sx('form-wrap')}>
																<div className={sx('form-group', 'form-select')}>
																	<label htmlFor=''>Thư trả lời</label>
																	<select name='slAutoReply' id='slAutoReply'>
																		<option value={0}>Chọn</option>
																	</select>
																</div>
																<div className={sx('form-group', 'form-text')}>
																	<label htmlFor=''>Tiêu đề</label>
																	<input
																		type='text'
																		placeholder='Nhập tiêu đề'
																		name='reply_title'
																		id='reply_title'
																		defaultValue=''
																	/>
																	<span className={sx('error')} />
																	<span className={sx('noted')}>Tối đa 70 kí tự</span>
																</div>
																<div className={sx('form-group', 'form-textarea')}>
																	<label>Nội dung thư</label>
																	<div className={sx('d-flex')}>
																		<p>Smart Fields</p>
																		<select
																			name='addfield'
																			id='addfield'
																			onchange="addSmartField('reply_content', this.value);">
																			<option value=''>Chọn</option>
																			<option value='[firstname]'>[firstname]</option>
																			<option value='[lastname]'>[lastname]</option>
																			<option value='[job-title]'>[job-title]</option>
																			<option value='[contact-name]'>[contact-name]</option>
																		</select>
																		<a
																			className={sx('see-sample')}
																			href='javascript:void(0);'
																			id='view_sample'>
																			Xem mẫu
																		</a>
																	</div>
																	<textarea
																		name='reply_content'
																		id='reply_content'
																		defaultValue={''}
																	/>
																	<span className={sx('error')} />
																	<span className={sx('noted')}>
																		Ít nhất 30 ký tự, Nhiều nhất 3000 ký tự
																	</span>
																</div>
																<div className={sx('form-group', 'form-radio')}>
																	<div className={sx('group')}>
																		<input
																			type='radio'
																			className={sx('input_margin')}
																			name='replyto'
																			defaultValue={1}
																			id='edit-email-1'
																		/>
																		<label htmlFor='edit-email-1'>
																			Chỉ riêng vị trí tuyển dụng này
																		</label>
																	</div>
																	<div className={sx('group')}>
																		<input
																			type='radio'
																			className={sx('input_margin')}
																			name='replyto'
																			defaultValue={0}
																			id='edit-email-2'
																		/>
																		<label htmlFor='edit-email-2'>Tất cả các tuyển dụng</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div
													className={sx('jobs-posting-modal', 'jobs-posting-17-modal')}
													id='LetterAbout'
													style={{ display: 'none' }}>
													<div className={sx('modal-head')}>
														<p className={sx('title')}>Thư trả lời tự động mẫu</p>
													</div>
													<div className={sx('modal-body')}>
														<div className={sx('preview-reply-letter')}>
															<div className={sx('title')}>
																<p>Tiêu đề: Thanks you for applying</p>
															</div>
															<div className={sx('full-content')}>
																Dear <strong>[firstname] [lastname]</strong>,<br />
																We have received your resume submission for the
																<strong>[job-title]</strong> position. We appreciate your interest and
																look forward to reviewing your resume.
																<br />
																We will contact you within seven days if your qualifications meet the
																requirements of the position.
																<br />
																Thanks you again for applying!
																<br />
																<br />
																Best regards,
																<br />
																<strong>[contact-name]</strong>
															</div>
														</div>
														<div className={sx('form-group', 'form-submit')}>
															<button
																className={sx('btn-gradient')}
																type='button'
																name='save'
																id='btn_preview_sample'
																onclick="createMail('35A4E900');">
																Trở lại
															</button>
															<a
																className={sx('btn-cancel')}
																href='javascript:void(0);'
																data-fancybox-close=''>
																Bỏ qua
															</a>
														</div>
													</div>
												</div>
											</div>
											<div
												className={sx('form-group', 'form-submit', 'form-continue', 'form-back-continue')}>
												<button
													className={sx('btn-gradient', 'btn-save')}
													href='javascript:void(0);'
													onclick='is_Filter_Form2()'>
													Tiếp tục
												</button>
											</div>
										</div>
									</div>
									<div className={sx('tabslet-content')} id='tab-3'></div>
								</div>
								<input type='hidden' name='inputchange' id='inputchange' defaultValue={0} />
							</div>
						</form>
					</div>
				</div>
				{Object.keys(errors).length > 0 && (
					<div>
						<p>Có lỗi xảy ra:</p>
						<ul>
							{Object.keys(errors).map((errorKey) => (
								<li key={errorKey}>{errors[errorKey].message}</li>
							))}
						</ul>
					</div>
				)}
			</section>
		</>
	);
};

export default UpdatePostJobs;
