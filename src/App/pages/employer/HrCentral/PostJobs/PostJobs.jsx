import React, { useEffect, useState } from 'react';
import styles from './postjobs.module.css';
import classNames from 'classnames/bind';
import Tooltip from '@mui/material/Tooltip';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import SelectMultipleFieldControl from '~/Core/components/common/FormControl/SelectMultipleFieldControl';
import { useGetAllWorkTypeQuery } from '~/App/providers/apis/workTypeApi';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllJobWelfareQuery } from '~/App/providers/apis/jobWelfareApi';
import { experienceEnum } from '~/App/constants/experienceEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import { DegreeArray } from '~/App/constants/degreeArray';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobPostSchema } from '~/App/schemas/jobPostSchema';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateJobPostMutation } from '~/App/providers/apis/jobPostApi';
import { useNavigate } from 'react-router-dom';
import { listProvinces } from '~/App/constants/provincesData';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { modules, formats } from '~/App/constants/reactQuill';
const sx = classNames.bind(styles);
const PostJobs = ({ cx }) => {
	const { control, handleSubmit, setValue, watch } = useForm({
		resolver: yupResolver(jobPostSchema),
		values: {
			min_salary: 0,
			max_salary: 0
		}
	});
	const user_account_id = useSelector((state) => state?.auth.employer?.id);
	const company_id = useSelector((state) => state?.auth?.employer?.company?.id);
	const [description, setDescription] = useState('');
	const [requirements, setRequirements] = useState('');
	const { data: listWorkType } = useGetAllWorkTypeQuery();
	const { data: listProfession } = useGetAllProfessionQuery({});
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
	const [createJobPost] = useCreateJobPostMutation();
	const navigate = useNavigate();
	const [isAgreementChecked, setIsAgreementChecked] = useState(false);

	const [displayExperience, setDisplayExperience] = useState(false);
	const handleExperienceChange = (selectedValue) => {
		if (Number(selectedValue) === 1) {
			setDisplayExperience(true);
		} else {
			setDisplayExperience(false);
		}
	};

	const onCreatePostJobs = (data) => {
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
			job_desc: description,
			job_request: requirements,
			...data
		};
		createJobPost(form)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					navigate('/employers/hrcentral/waitposting');
					return;
				}
			});
	};
	const handleDescription = (Description) => {
		setDescription(Description);
	};
	const handleRequirements = (Requirements) => {
		setRequirements(Requirements);
	};
	return (
		<>
			<section className={sx('manage-job-posting-post-jobs', 'cb-section', 'bg-manage')}>
				<div className={cx('container')}>
					<div className={sx('box-manage-job-posting')}>
						<div className={sx('heading-manage')}>
							<div className={sx('left-heading')}>
								<h1 className={sx('title-manage')}>Đăng Tuyển Dụng</h1>
							</div>
						</div>
						<form onSubmit={handleSubmit(onCreatePostJobs)}>
							<div className={sx('main-tabslet')}>
								<ul className={sx('tabslet-tab')}>
									<li className={sx('active')}>
										{' '}
										<a href='javascript:void(0);'>Thông Tin Tuyển Dụng</a>
									</li>
								</ul>
								<div
									className={sx('tabslet-content', 'active')}
									id='tab-1 '
									style={{
										padding: '10px 20px'
									}}>
									<div className={sx('main-application-information')}>
										<h2 className={sx('title-application')}>Thông tin tuyển dụng</h2>
										<div className={sx('')}>
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
															<em
																style={{
																	position: 'relative',
																	bottom: 10
																}}
																className={cx('material-icons')}>
																info
															</em>
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
														/>
													</div>
												</div>
											</div>
											<div id='post_job_location' style={{ marginTop: 30 }}>
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
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												className={sx('form-group', 'form-editor')}
												style={{
													margin: '60px 0'
												}}>
												<label
													style={{
														padding: '4px'
													}}>
													Mô tả Công Việc
												</label>
												<ReactQuill
													onChange={handleDescription}
													theme={'snow'}
													formats={formats}
													placeholder='Mô tả công việc'
													modules={modules}
													style={{ height: '200px' }}
												/>
											</div>
										</div>
										<div
											className={sx('form-group', 'form-editor')}
											style={{
												margin: '60px 0'
											}}>
											<label
												style={{
													padding: '4px'
												}}>
												Yêu cầu công việc
											</label>
											<ReactQuill
												// text={text}
												onChange={handleRequirements}
												theme={'snow'}
												formats={formats}
												placeholder='Yêu cầu công việc'
												modules={modules}
												style={{ height: '200px' }}
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
															id='min_salary'
															defaultValue={0}
															control={control}
															maxLength={12}
															placeholder='Tối Thiểu *'
															disabled={isAgreementChecked}
														/>
													</div>
													<div className={sx('form-group', 'form-text')}>
														<InputFieldControl
															name='max_salary'
															id='max_salary'
															defaultValue={0}
															control={control}
															maxLength={12}
															placeholder='Tối Đa *'
															disabled={isAgreementChecked}
														/>
													</div>
													<div
														style={{
															display: 'flex',
															justifyContent: 'center'
														}}>
														<CheckBoxFieldControl
															name='isAgreement'
															id='isAgreement'
															control={control}
															label={'Thỏa thuận'}
															onChange={(e) => setIsAgreementChecked(e.target.checked)}
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
																<br />- Bạn có thể quyết định “hiển thị thông tin lương” để thu hút thêm
																nhiều hồ sơ ứng tuyển vào vị trí tuyển dụng.
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
												{listJobWelfare?.data?.map((JobWelfare, index) => {
													return (
														<div className={cx('col-sm-6', 'col-lg-3')}>
															<div>
																<CheckBoxFieldControl
																	name={`job_welfare_id_${JobWelfare.id}`}
																	id='job_welfare_id'
																	control={control}
																	label={JobWelfare.welfare_type}
																	value={JobWelfare.id}
																	onChange={(e) => {
																		if (e.target.checked)
																			setValue(
																				`job_welfare_id_${JobWelfare.id}`,
																				Number(e.target.value)
																			);
																	}}
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
																label='Nam/Nữ'
																value={0}
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
																value={2}
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
											Thông tin khác{' '}
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
															label='Work from home'
															defaultValue={false}
														/>
													</div>
													<div className={sx('form-group', 'mt-0', 'form-note-workfromhome')}>
														Tick chọn nếu vị trí tuyển dụng này cho phép ứng viên có thể chọn chế độ làm
														việc tại nhà trong thời điểm hiện tại (Work from home) mà không nhất thiết
														phải có mặt tại văn phòng công ty. Hệ thống sẽ phân loại và đánh dấu đăng
														tuyển này vào danh mục tìm kiếm loại công việc là “Work from Home”.
													</div>
												</div>
											</div>
										</div>
										<div className={sx('form-group', 'form-submit', 'form-continue')}>
											{/* <button
													className={sx('btn-gradient', 'btn-submit')}
													id='btn_submit_form_postjobs'
													type='button'
													onclick='is_Filter_Form();'>
													Tiếp tục
												</button> */}
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
																Khi nhấn chọn chức năng này, Quý công ty sẽ nhận được email thông báo từ
																hệ thống mỗi khi có ứng viên nộp đơn trực tuyến vào các vị trí công việc
																tương ứng mà Quý công ty đang đăng tuyển trên hệ thống.
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
																	Hệ thống sẽ tự động gửi Thư tự động trả lời cho các ứng viên nộp hồ
																	sơ trực tuyến. Thư này sẽ không đính kèm trong quảng cáo đăng tuyển
																	của quý khách.
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
																<textarea name='reply_content' id='reply_content' defaultValue={''} />
																<span className={sx('error')} />
																<span className={sx('noted')}>
																	{' '}
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
																	<label htmlFor='edit-email-1'>Chỉ riêng vị trí tuyển dụng này</label>
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
										</div>
										<div className={sx('form-group', 'form-submit', 'form-continue', 'form-back-continue')}>
											<button
												className={sx('btn-gradient', 'btn-save')}
												href='javascript:void(0);'
												onclick='is_Filter_Form2()'>
												Tiếp tục
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default PostJobs;
