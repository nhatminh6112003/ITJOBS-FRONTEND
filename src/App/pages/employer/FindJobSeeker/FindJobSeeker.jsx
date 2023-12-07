import React, { useEffect } from 'react';
import styles from './find-job-seeker.module.css';
import classNames from 'classnames/bind';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import SelectFieldControl from '~/Core/components/common/FormControl/SelectFieldControl';
import { useGetAllProfessionQuery } from '~/App/providers/apis/professionApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllResumeQuery } from '~/App/providers/apis/resumeApi';
import useSearchResume from '~/App/pages/employer/FindJobSeeker/components/useSearchResume';
import { resumeActiveEnum } from '~/App/constants/resumeActiveEnum';
import { Link, useNavigate } from 'react-router-dom';
import { degree } from '~/App/constants/degreeArray';
import { LevelArray } from '~/App/constants/levelEnum';
import { useCreateEmployerResumeApiMutation } from '~/App/providers/apis/employerResumeApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { listProvinces } from '~/App/constants/provincesData';
import formatVND from '~/Core/utils/formatVND';
import useRegisterServiceResume from './components/useRegisterServiceResume';
import ServiceSlugEnum from '~/App/constants/serviceEnum';
import moment from 'moment';
import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';

const sx = classNames.bind(styles);
const FindJobSeeker = ({ cx }) => {
	const { pushQuery, query } = useSearchResume();
	const { data: listProfession } = useGetAllProfessionQuery({});

	const { data: listResume } = useGetAllResumeQuery({
		params: {
			keyword: query.keyword || '',
			resume_active: query.resume_active || '',
			profession_id: query.profession_id || '',
			provinces: query.provinces || '',
			isFindJobSeeker: true
		}
	});
	const [createEmployerResume] = useCreateEmployerResumeApiMutation();
	const employer = useSelector((state) => state.auth?.employer);
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		values: {
			keyword: query.keyword || '',
			resume_active: query.resume_active || '',
			profession_id: query.profession_id || '',
			provinces: query.provinces || ''
		}
	});
	const isServiceJobPostExits = useRegisterServiceResume(employer?.company?.id, ServiceSlugEnum.FindResume);
	const { data: myCompanyService } = useGetAllCompany_serviceQuery({
		params: {
			company_id: employer?.company?.id
		}
	});
	const navigate = useNavigate();

	const onSubmit = (data) => {
		pushQuery({ ...data });
	};
	const handleSaveToFolder = (resumeId) => {
		const data = {
			user_account_id: employer.id,
			resume_id: resumeId
		};
		createEmployerResume(data)
			.unwrap()
			.then((res) => {
				toast.success('Đã lưu thành công!');
			})
			.catch((err) => {
				toast.error(err);
			});
	};

	useEffect(() => {
		const currentDate = moment();
		const getServiceFindResume = myCompanyService?.data?.find(
			(item) => item.service?.slug === ServiceSlugEnum.FindResume
		);

		if (currentDate.isAfter(getServiceFindResume?.expiration_date)) {
			toast.error('Dịch vụ tìm hồ sơ ứng viên của bạn đã hết hạn');
			return;
		}
		
		if (!isServiceJobPostExits) {
			navigate(`/employers/services-and-contact`);
		}
	}, [isServiceJobPostExits, myCompanyService?.data, navigate]);
	return (
		<section className={sx('resume-search', 'cb-section', 'bg-manage', 'main-tabslet')}>
			<div className={cx('container')}>
				<div className={sx('box-resume-search')}>
					<div className={sx('form-head')}>
						<h1 className={sx('title')}>Từ khóa</h1>
					</div>
					<div className={sx('form-body')}>
						<form name='frm_search' id='frm_search' onSubmit={handleSubmit(onSubmit)}>
							<div className={sx('form-wrap', 'form-normal')}>
								<div className={sx('form-group', 'form-text')}>
									<InputFieldControl
										name='keyword'
										id='keyword'
										placeholder='Nhập từ khóa'
										autoComplete='off'
										label='Nội dung hồ sơ'
										control={control}
									/>
								</div>
								<div className={sx('form-group')}>
									<SelectFieldControl
										className={sx('chosen-select-max-three')}
										label='Ngành nghề'
										initialValue='Chọn ngành nghề'
										options={listProfession?.data?.map((item) => ({
											value: item.id,
											label: item.name
										}))}
										control={control}
										name='profession_id'
										id='profession_id'
									/>
								</div>
								<div className={sx('form-group')}>
									{listProvinces && listProvinces?.length > 0 && (
										<SelectFieldControl
											control={control}
											id='provinces'
											name='provinces'
											className={sx('chosen-select-max-three')}
											initialValue='Chọn địa điểm'
											options={listProvinces?.map((item) => ({
												value: item?.code,
												label: item?.name
											}))}
											label='Địa điểm'
										/>
									)}
								</div>
								<div className={sx('form-group')}>
									<SelectFieldControl
										className={sx('chosen-select-max-three')}
										label='Trạng thái tìm việc'
										initialValue='Chọn trạng thái'
										options={resumeActiveEnum.map((item) => {
											return {
												value: item.value,
												label: item.label
											};
										})}
										control={control}
										name='resume_active'
										id='resume_active'
									/>
								</div>
							</div>
							<div className={sx('form-group', 'form-submit', 'btn-submit-top', 'form-hidden-advanced')}>
								<button className={sx('btn-gradient', 'btn-submit')} type='submit'>
									<em className={cx('material-icons')}>search</em>Tìm
								</button>
							</div>

							<div className={sx('form-wrap', 'form-wrap-advanced')}>
								<div className={sx('row')}>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Cấp bậc</label>
											<select name='level_id' id='level'>
												<option value={0} selected='selected'>
													Tất cả cấp bậc
												</option>
												<option value='sinh-vien-thuc-tap-sinh'>Sinh viên/ Thực tập sinh</option>
												<option value='moi-tot-nghiep'>Mới tốt nghiệp</option>
												<option value='nhan-vien'>Nhân viên</option>
												<option value='truong-nhom-giam-sat'>Trưởng nhóm / Giám sát</option>
												<option value='quan-ly'>Quản lý</option>
												<option value='quan-ly-cap-cao'>Quản lý cấp cao</option>
												<option value='dieu-hanh-cap-cao'>Điều hành cấp cao</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Bằng cấp</label>
											<select name='degree_id_from' id='degree_id_from'>
												<option value={-1} selected='selected'>
													Tất cả bằng cấp
												</option>
												<option value={0}>Chưa tốt nghiệp</option>
												<option value={1}>Trung học</option>
												<option value={2}>Trung cấp</option>
												<option value={3}>Cao đẳng</option>
												<option value={4}>Đại học</option>
												<option value={5}>Sau đại học</option>
												<option value={6}>Khác</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Đến</label>
											<select disabled='' name='degree_id_to' id='degree_id_to'></select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Hình thức</label>
											<select name='job_type' id='job_type'>
												<option value={0}>Tất cả</option>
												<option value={1}>Nhân viên chính thức</option>
												<option value={2}>Bán thời gian</option>
												<option value={3}>Thời vụ - Nghề tự do </option>
												<option value={4}>Thực tập</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Kinh nghiệm</label>
											<select name='experience' id='experience'>
												<option value={0} selected='selected'>
													Tất cả
												</option>
												<option value={1}>Có kinh nghiệm</option>
												<option value={2}>Chưa có kinh nghiệm</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to', 'form-text-ab')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Từ</label>
												<input
													type='text'
													name='experience_from'
													id='experience_from'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input
													type='text'
													name='experience_to'
													id='experience_to'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('text-ab')}>
												<p>năm</p>
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Giới tính</label>
											<select name='gender' id='gender'>
												<option value={0}>Tất cả</option>
												<option value={1}>Nam</option>
												<option value={2}>Nữ</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Ngoại ngữ</label>
											<select name='language' id='language'>
												<option value={0} selected='selected'>
													Chọn
												</option>
												<option value='TA'>Tiếng Anh</option>
												<option value='TP'>Tiếng Pháp</option>
												<option value='TD'>Tiếng Đức</option>
												<option value='TN'>Tiếng nga</option>
												<option value='TT'>Tiếng Hoa</option>
												<option value='TJ'>Tiếng Nhật</option>
												<option value='TH'>Tiếng Hàn</option>
												<option value='TK'>Tiếng Khác</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Trình độ</label>
											<select name='languagelevel' id='languagelevel'>
												<option value={0} selected='selected'>
													Chọn
												</option>
												<option value={1}>Bản ngữ</option>
												<option value={2}>Sơ cấp</option>
												<option value={3}>Trung cấp</option>
												<option value={4}>Cao cấp</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Mức lương</label>
											<select name='salary' id='salary'>
												<option value='all'>Chọn</option>
												<option value='ltt'>Thỏa thuận</option>
												<option value='vnd'>VND</option>
												<option value='usd'>USD</option>
											</select>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Từ</label>
												<input
													type='text'
													name='salary_from'
													id='salary_from'
													defaultValue=''
													disabled=''
												/>
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input type='text' name='salary_to' id='salary_to' defaultValue='' disabled='' />
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')} />
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-group', 'form-select')}>
											<label>Ngày truy cập / cập nhật</label>
											<select name='resume_date' id='resume_date'>
												<option value={1}>1 ngày trước</option>
												<option value={2}>2 ngày trước</option>
												<option value={3}>3 ngày trước</option>
												<option value={7}>1 tuần trước</option>
												<option value={14}>2 tuần trước</option>
												<option value={30}>1 tháng trước</option>
												<option value={90}>3 tháng trước</option>
												<option value={180}>6 tháng trước</option>
												<option value={270}>9 tháng trước</option>
												<option value={365}>1 năm trước</option>
												<option value={3650} selected='selected'>
													Tất cả hồ sơ
												</option>
											</select>
										</div>
										<div className={sx('form-group', 'form-radio')}>
											<div className={sx('group')}>
												<input
													type='radio'
													name='resume_time_kind'
													id='date-1'
													defaultValue='last_active'
													defaultChecked='checked'
												/>
												<label htmlFor='date-1'>Ngày truy cập </label>
											</div>
											<div className={sx('group')}>
												<input
													type='radio'
													name='resume_time_kind'
													id='date-2'
													defaultValue='last_modify'
												/>
												<label htmlFor='date-2'>Ngày cập nhật</label>
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')}>
										<div className={sx('form-from-to')}>
											<div className={sx('form-group', 'form-text')}>
												<label>Tuổi từ</label>
												<input type='text' name='from_age' id='from_age' defaultValue='' />
											</div>
											<div className={sx('form-group', 'form-text')}>
												<label>Đến</label>
												<input type='text' name='to_age' id='to_age' defaultValue='' />
											</div>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4', 'order-submit')}>
										<div className={sx('form-group', 'form-submit')}>
											<button className={sx('btn-gradient', 'btn-submit')} type='submit'>
												{' '}
												<em className={sx('material-icons')}>search</em>Tìm
											</button>
										</div>
									</div>
									<div className={sx('col-md-6', 'col-xl-4', 'col-cus-xxl-4')} />
								</div>
								<div className={sx('col-lg-12')}>
									<div className={sx('form-group', 'form-link-advanced')}>
										<a
											className={sx('btn-history')}
											href='https://careerbuilder.vn/vi/employers/hrcentral/search-history'>
											<em className={sx('material-icons')}>update</em>
											<span>Lịch Sử Tìm Kiếm</span>
										</a>
										<a
											className={sx('btn-advanced', 'btn-less', '', '')}
											href='javascript:void(0)'
											id='expand_search'>
											<em className={sx('material-icons')}>zoom_out</em>
											<span>Thu gọn tìm kiếm</span>
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className={sx('box-resume-search-search-result')}>
					<div className={sx('search-result-top')}>
						<div className={sx('top')}>
							<p className={sx('success')}>
								Chúng tôi đã tìm thấy <strong> {listResume?.length}</strong> <strong>hồ sơ phù hợp</strong> theo
								như tiêu chí tìm kiếm của quý khách
							</p>
						</div>
					</div>
					<div className={sx('main-jobs-posting')}>
						<div className={sx('boding-jobs-posting')}>
							<div className={sx('table', 'table-jobs-posting')}>
								<table>
									<thead>
										<tr>
											<th width='48%'>Ứng Viên</th>
											<th width='10%'>Kinh nghiệm</th>
											<th width='10%'>Lương</th>
											<th width='10%'>Nơi làm việc</th>
											<th width='10%'>Thao tác</th>
										</tr>
									</thead>
									<tbody>
										{isServiceJobPostExits &&
											listResume?.map((resume) => {
												return (
													<>
														<tr key={resume.id}>
															<td>
																<div className={sx('title')}>
																	<div className={sx('job-name')}>
																		<Link
																			className={sx('job-title')}
																			to={`/employers/resumeinfo/${resume.id}`}
																			title={resume?.resume_title?.title}>
																			<b>{resume?.resume_title?.title}</b>
																		</Link>
																	</div>
																	<div className={sx('status')}></div>
																	<Link
																		className={sx('name')}
																		to={`/employers/resumeinfo/${resume.id}`}>
																		{resume.user_account.lastname +
																			' ' +
																			resume.user_account.firstname}
																	</Link>
																	<ul className={sx('info-list')}>
																		<li>
																			<p>
																				{' '}
																				<strong>Học vấn: </strong>
																				{degree?.[resume?.attachments[0]?.job_degree_value]}
																			</p>
																		</li>
																		<li>
																			<p>
																				{' '}
																				<strong>Cấp bậc: </strong>
																				{LevelArray.map((value) => {
																					if (
																						resume?.resume_desired_job?.position_id ===
																						value.value
																					) {
																						return value.label;
																					}
																				})}
																			</p>
																		</li>
																	</ul>
																</div>
															</td>
															<td>
																<p>
																	{resume?.attachments[0]?.yearOfExperience
																		? resume?.attachments[0]?.yearOfExperience + ' Năm'
																		: 'Chưa có kinh nghiệm'}
																</p>
															</td>
															<td>
																<p style={{ width: '200px' }}>
																	{formatVND(resume?.resume_desired_job?.salary_from)} -{' '}
																	{formatVND(resume?.resume_desired_job?.salary_to)} VND
																</p>
															</td>
															<td>
																{listProvinces?.map((item) => {
																	if (resume?.resume_desired_job?.provinces === item?.code) {
																		return <p>{item?.name}</p>;
																	}
																})}
															</td>
															<td>
																<ul className={sx('list-manipulation')}>
																	<li>
																		<a
																			onClick={() => handleSaveToFolder(resume.id)}
																			className={sx('btn-save-folder')}
																			style={{ cursor: 'pointer' }}
																			title='Lưu vào thư mục'>
																			<em className={cx('material-icons')}>folder_shared </em>
																		</a>
																	</li>
																</ul>
															</td>
														</tr>
													</>
												);
											})}
										{isServiceJobPostExits && listResume?.length === 0 && (
											<tr>
												<td colSpan={5} style={{ textAlign: 'center' }}>
													Không tìm kiếm được hồ sơ phụ hợp
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FindJobSeeker;
