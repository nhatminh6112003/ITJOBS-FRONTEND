import React, { useEffect, useState } from 'react';
import styles from './DetailJobPost.module.css';
import classNames from 'classnames/bind';
import { useGetAllJobPostQuery, useGetOneJobPostQuery } from '~/App/providers/apis/jobPostApi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import formatDate from '~/Core/utils/formatDate';
import { experienceEnum } from '~/App/constants/experienceEnum';
import { LevelArray } from '~/App/constants/levelEnum';
import { DegreeArray } from '~/App/constants/degreeArray';
import GenderEnum from '~/App/constants/genderEnum';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';
import { useSelector } from 'react-redux';
import {
	useCreateJobSavedMutation,
	useDeleteJobSavedMutation,
	useGetAllJobSavedQuery
} from '~/App/providers/apis/jobSavedApi';
import { toast } from 'react-toastify';
import { FavoriteBorderIcon, OutlinedFlagIcon } from '~/Core/resources';
import useModal from '~/App/hooks/useModal';
import FeedBackModal from './components/FeedBackModal';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import routesPath from '~/App/config/routesPath';

const sx = classNames.bind(styles);

const DetailJobPost = ({ cx }) => {
	const { id } = useParams();
	const currentDate = new Date();
	const user = useSelector((state) => state.auth.user);
	const { data: detailJobPost } = useGetOneJobPostQuery(id);
	const { data: listProvinces } = useGetAllProvincesQuery();
	const [provinces, setProvinces] = useState('');
	const [districts, setDistricts] = useState('');
	const { data: allJobSaved } = useGetAllJobSavedQuery(user?.id);
	const jobExperienceLabel = experienceEnum[detailJobPost?.job_experience_value]?.label;
	const jobFormExperience = detailJobPost?.job_formExperience;
	const jobToExperience = detailJobPost?.job_ToExperience;
	const currentUrl = window.location.href;
	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: detailJobPost?.provinces
		},
		{
			skip: !detailJobPost?.provinces
		}
	);
	const [createJobSaved] = useCreateJobSavedMutation();
	const [deleteJobSaved] = useDeleteJobSavedMutation();
	const navigate = useNavigate();
	const { data: allJobPostActivity } = useGetAllJobPostActivityApiQuery(
		{
			params: {
				user_account_id: user?.id
			}
		},
		{ skip: !user?.id }
	);
	const { data: allJobPost } = useGetAllJobPostQuery({
		params: {
			isDeleted: false,
			limit: 10,
			status: jobPostStatusEnum.Publish,
			profession_id: detailJobPost?.jobProfessionDetail[0]?.profession_id
		}
	});
	const isIdInData = allJobPostActivity?.data.some((item) => item.job_id === id);
	const isJobExpiry = formatDate(currentDate) > formatDate(detailJobPost?.expiry_date);
	const { isShowing, toggle } = useModal({
		feedback: false
	});
	useEffect(() => {
		listProvinces?.map((item) => {
			if (item.code == detailJobPost?.provinces) {
				setProvinces(item.name);
			}
		});
		listDistricts?.districts?.map((item) => {
			if (item.code == detailJobPost?.districts) {
				setDistricts(item.name);
			}
		});
	}, [detailJobPost, listProvinces, listDistricts]);
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
	const handleCreateJobSaved = (id) => {
		if (!user.id) {
			navigate('/account/login');
			return;
		}
		const data = {
			user_account_id: user?.id,
			job_id: id
		};
		createJobSaved(data)
			.unwrap()
			.then((value) => {
				toast.success('Lưu thành công');
			})
			.catch((error) => {
				toast.error(error.data.message);
			});
	};
	const handleDeleteJobSaved = (id) => {
		deleteJobSaved(id)
			.unwrap()
			.then((res) => {
				toast.success('Xóa thành công');
			})
			.catch((err) => {
				toast.error(err.data?.message);
			});
	};
	const handleModelFeedBack = () => {
		if (!user.id) {
			navigate('/account/login');
			return;
		} else {
			toggle('feedback');
		}
	};
	return (
		<>
			<section className={sx('search-result-list-detail', 'template-2')}>
				<div className={cx('container')}>
					<div className={cx('row', 'no-gutters')}>
						<div className={cx('col-12', 'mb-15')}>
							<section className={sx('apply-now-banner', '', '')}>
								<div className={sx('image')}>
									<img
										src={
											detailJobPost?.company?.banner
												? `${import.meta.env.VITE_IMAGE_URL}/${detailJobPost.company.banner}`
												: 'https://images.careerbuilder.vn/employer_folders/lot6/181286/131718banner-doitac.jpg'
										}
										alt={detailJobPost?.company?.company_name}
									/>
								</div>
								<div className={sx('apply-now-content')}>
									<div className={sx('job-desc')}>
										<h1 className={sx('title')}>{detailJobPost?.job_title}</h1>
										<Link
											className={sx('employer', 'job-company-name')}
											to={`/nha-tuyen-dung/${detailJobPost?.company?.id}`}>
											{detailJobPost?.company?.company_name}
										</Link>
									</div>
									<div className={sx('apply-type')}>
										<div
											className={sx('apply-now-btn', isIdInData ? 'success' : isJobExpiry ? 'success' : '')}>
											{isIdInData || isJobExpiry ? (
												<a style={{ cursor: 'pointer' }} className={sx('btn-gradient', 'btnApplyClick')}>
													Nộp Đơn Ứng Tuyển
												</a>
											) : (
												<Link
													to={`/jobseekers/jobs/apply/${detailJobPost?.id}`}
													className={sx('btn-gradient', 'btnApplyClick')}>
													Nộp Đơn Ứng Tuyển
												</Link>
											)}
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className={sx('col-lg-7', 'col-custom-xxl-9')}>
							<div className={sx('tabs')}>
								<nav className={sx('job-result-nav')}>
									<ul className={sx('tabs-toggle')}>
										<li id='tabs-job-detail' style={{ cursor: 'pointer' }}>
											<a data-href='#tab-1' title='Chi tiết'>
												Chi tiết
											</a>
										</li>
										<li id='tabs-job-company'>
											<Link
												to={`/nha-tuyen-dung/${detailJobPost?.company?.id}`}
												data-href='#tab-2'
												title='Tổng quan công ty'>
												Tổng quan công ty
											</Link>
										</li>
									</ul>
									<input type='hidden' name='job_id_tmp' id='job_id_tmp' defaultValue={1649416} />
									<div className={sx('job-detail-tool')}>
										<ol className={sx('tabs-saved')}>
											<li>
												<a
													tabIndex={0}
													role='button'
													className={sx('toollips', 'save-job', 'chk_save_35BE1408', '')}
													data-id='35BE1408'
													onclick="savejob('35BE1408')">
													<i className={sx('mdi', 'mdi-heart-outline')} />
													<div className={sx('toolip')}>
														<p>Lưu việc làm</p>
													</div>
												</a>
											</li>
											<li>
												<div className={sx('dropdown')}>
													{' '}
													<i className={sx('mdi', 'mdi-share-variant')} />
													<div className={sx('dropdown-menu')}>
														<div className={sx('social-list')}>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://www.facebook.com/sharer/sharer.php?u=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&t=Kế Toán Nội Bộ'>
																<i className={sx('fa', 'fa-facebook')} />
															</a>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'>
																<i className={sx('fa', 'fa-linkedin')} />
															</a>
															<a
																rel='nofollow noreferrer'
																target='_blank'
																href='https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-noi-bo.35BE1408.html&pubid=ra-559220ee7f9c15d6&title=Kế Toán Nội Bộ&ct=1&pco=tbxnj-1.0'>
																<i className={sx('fa', 'fa-google')} />
															</a>
															<div
																className={sx('zalo-share-button')}
																data-href=''
																data-layout={2}
																data-color='white'
																data-customize='false'
															/>
														</div>
													</div>
												</div>
											</li>
											<li>
												<a tabIndex={0} role='button' className={sx('report-job', 'toollips')}>
													<i className={sx('fa', 'fa-flag-o')} />
													<div className={sx('toolip')}>
														<p> Báo xấu </p>
													</div>
												</a>{' '}
											</li>
										</ol>
									</div>
								</nav>
								<div className={sx('tab-content')} id='tab-1'>
									<section className={sx('job-detail-content')}>
										<div className={sx('bg-blue')}>
											<div className={sx('row')}>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box')}>
														<div className={sx('map')}>
															<strong>
																<em className={sx('mdi', 'mdi-map-marker')} />
																Địa điểm
															</strong>
															{detailJobPost?.is_address_work_hidden === 1 && (
																<>
																	<p style={{ marginBottom: 2, marginTop: 2 }}>{provinces}</p>
																	<p>Địa điểm chi tiết đã được bảo mật</p>
																</>
															)}
															{detailJobPost?.is_address_work_hidden === 0 && (
																<p>
																	<a href={`/tim-viec-lam/${detailJobPost?.id}`}>
																		{provinces} / {districts} / {detailJobPost?.address}
																	</a>
																</p>
															)}
														</div>
													</div>
												</div>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box', 'has-background')}>
														<ul>
															<li>
																{' '}
																<strong>
																	<em className={sx('mdi', 'mdi-update')}> </em>Ngày cập nhật
																</strong>
																<p>{formatDate(detailJobPost?.updatedAt)}</p>
															</li>
															<li>
																{' '}
																<strong>
																	{' '}
																	<em className={sx('mdi', 'mdi-briefcase')} />
																	Ngành nghề
																</strong>
																<p>
																	{detailJobPost?.jobProfessionDetail?.map((jobProfessionDetail) => {
																		return (
																			<>
																				{' '}
																				<Link to='/viec-lam/ke-toan-kiem-toan-c2-vi.html'>
																					{jobProfessionDetail?.profession?.name},
																				</Link>
																			</>
																		);
																	})}
																</p>
															</li>
															<li>
																{' '}
																<strong>
																	<em className={sx('mdi', 'mdi-briefcase-edit')}> </em>Hình thức
																</strong>
																{detailJobPost?.jobWorkTypeDetail?.map((jobWorkTypeDetail) => {
																	return (
																		<p style={{ marginBottom: '2px' }}>
																			{jobWorkTypeDetail?.work_type?.name}
																		</p>
																	);
																})}
															</li>
														</ul>
													</div>
												</div>
												<div className={sx('col-lg-4', 'col-sm-6', 'item-blue')}>
													<div className={sx('detail-box', 'has-background')}>
														<ul>
															<li>
																<strong>
																	<i className={sx('fa', 'fa-usd')} />
																	Lương
																</strong>
																<p>
																	{detailJobPost?.isAgreement === false ? (
																		<>
																			{' '}
																			Lương: {formatSalary(detailJobPost?.min_salary)} -{' '}
																			{formatSalary(detailJobPost?.max_salary)} VND
																		</>
																	) : (
																		<div>Thỏa thuận</div>
																	)}
																</p>
															</li>
															<li>
																<strong>
																	<i className={sx('fa', 'fa-briefcase')} />
																	Kinh nghiệm
																</strong>
																{jobExperienceLabel !== 'Có kinh nghiệm' && <p>{jobExperienceLabel}</p>}
																{jobExperienceLabel === 'Có kinh nghiệm' && (
																	<p>
																		{jobFormExperience} - {jobToExperience} Năm
																	</p>
																)}
															</li>
															<li>
																<strong>
																	<i className={sx('mdi', 'mdi-account')} />
																	Cấp bậc
																</strong>
																<p> {LevelArray[detailJobPost?.job_position_value]?.label}</p>
															</li>
															<li>
																<strong>
																	<i className={sx('mdi', 'mdi-calendar-check')} />
																	Hết hạn nộp
																</strong>
																<p>{formatDate(detailJobPost?.expiry_date)}</p>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className={sx('detail-row', 'reset-bullet')}>
											<h2 className={sx('detail-title')}>Phúc lợi </h2>
											<ul className={sx('welfare-list')}>
												{detailJobPost?.jobWelfare?.map((jobWelfare) => {
													return (
														<li>
															<span className={sx('fa', 'fa-medkit')} />{' '}
															{jobWelfare?.job_welfare?.welfare_type}
														</li>
													);
												})}
											</ul>
										</div>
										<div className={sx('detail-row', 'reset-bullet')}>
											<h2 className={sx('detail-title')}>Mô tả Công việc</h2>
											<div dangerouslySetInnerHTML={{ __html: detailJobPost?.job_desc }} />
										</div>
										<div className={sx('detail-row')} reset-bullet=''>
											<h2 className={sx('detail-title')}>Yêu Cầu Công Việc</h2>
											<div dangerouslySetInnerHTML={{ __html: detailJobPost?.job_request }} />
										</div>
										<div className={sx('detail-row')}>
											<h3 className={sx('detail-title')}>Thông tin khác</h3>
											<div className={sx('content_fck', '')}>
												<ul>
													<li> Bằng cấp: {DegreeArray[detailJobPost?.job_degree_value]?.label}</li>
													<li> Giới tính: {GenderEnum[detailJobPost?.gender]} </li>
													<li>
														{' '}
														Độ tuổi: {detailJobPost?.form_age} - {detailJobPost?.to_age}
													</li>
													<li>
														<span>
															{detailJobPost?.isAgreement === false ? (
																<>
																	<i className={sx('fa', 'fa-usd')} />
																	Luong: {formatSalary(detailJobPost?.min_salary)} -{' '}
																	{formatSalary(detailJobPost?.max_salary)} VND
																</>
															) : (
																<div>Lương: Thỏa thuận</div>
															)}
														</span>
													</li>
												</ul>
											</div>
										</div>
										{/* <div className={sx('detail-row', 'request')}>
											<h3 className={sx('detail-title')}>Gợi ý hồ sơ</h3>
											<div className={sx('list-item')}>
												<div className={sx('item', 'item-1')}>
													<a tabIndex={0} role='button'>
														<img src='images/icon-cv.png' />
														<span></span>
													</a>
													<a href='https://careerbuilder.vn/cv-hay' target='_blank' rel='noreferrer'>
														Thiết kế CV Ứng Tuyển
													</a>
												</div>
											</div>
										</div> */}
										<div className={sx('job-detail-bottom')}>
											<div className={sx('job-detail-bottom-wrapper')}>
												<div className={sx('apply-now-content')}>
													<div className={sx('job-desc')}>
														<a
															tabIndex={0}
															role='button'
															className={sx('toollips', 'save-job', 'chk_save_35BE1408', '')}
															onClick={
																allJobSaved?.length > 0 &&
																allJobSaved.some((item) => item.job_post_saved.id === detailJobPost?.id)
																	? () =>
																			handleDeleteJobSaved(
																				allJobSaved.find(
																					(item) => item.job_post_saved.id === detailJobPost?.id
																				).id
																			)
																	: () => handleCreateJobSaved(detailJobPost?.id)
															}
															style={{ cursor: 'pointer' }}>
															{allJobSaved?.length > 0 &&
															allJobSaved.some(
																(item) => item.job_post_saved.id === detailJobPost?.id
															) ? (
																<>
																	<FavoriteBorderIcon
																		fontSize='small'
																		style={{ color: '#e8c80d', marginRight: '8px' }}
																	/>
																	<span className={sx('text')} style={{ color: '#e8c80d' }}>
																		Việc làm đã lưu
																	</span>
																</>
															) : (
																<>
																	<FavoriteBorderIcon
																		fontSize='small'
																		style={{ marginRight: '8px' }}
																	/>
																	<span className={sx('text')}>Lưu việc làm</span>
																</>
															)}
														</a>
														<a
															onClick={() => handleModelFeedBack()}
															tabIndex={0}
															className={sx('report-job', 'toollips')}
															style={{ cursor: 'pointer' }}>
															<OutlinedFlagIcon fontSize='small' style={{ marginRight: '8px' }} />
															<span>Báo xấu</span>
														</a>
														<FeedBackModal
															isOpen={isShowing?.feedback}
															onRequestClose={() => toggle('feedback')}
															currentUrl={currentUrl}
															sx={sx}
															cx={cx}
														/>
													</div>
													<div
														className={sx(
															'apply-now-btn',
															isIdInData ? 'success' : isJobExpiry ? 'success' : ''
														)}>
														{isIdInData || isJobExpiry ? (
															<a
																style={{ cursor: 'pointer' }}
																className={sx('btn-gradient', 'btnApplyClick')}>
																Nộp Đơn Ứng Tuyển
															</a>
														) : (
															<Link
																to={`/jobseekers/jobs/apply/${detailJobPost?.id}`}
																className={sx('btn-gradient', 'btnApplyClick')}>
																Nộp Đơn Ứng Tuyển
															</Link>
														)}
													</div>
												</div>
											</div>
										</div>

										<div className={sx('job-detail-bottom-banner', '')} id=''>
											<div className={sx('adsBannerOA')} data-id={852} />
										</div>
									</section>
									<link
										href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css'
										rel='stylesheet'
									/>
								</div>
								<div className={sx('tab-content')} id='tab-2' />
							</div>
						</div>
						<div className={sx('col-lg-5', 'col-custom-xxl-3')}>
							<div className={sx('side-wrapper')}>
								<div className={sx('banner-ad')}></div>
								<div className={sx('similar-jobs')}>
									<p>Các công việc tương tự</p>
								</div>
								<section className={sx('jobs-side-list')}>
									<div className={sx('jobs-list')}>
										{allJobPost?.data?.map((item) => {
											if (item.id !== detailJobPost?.id) {
												return (
													<>
														<div className={sx('job-item')}>
															<div className={sx('figure')}>
																<div className={sx('image')}>
																	{' '}
																	<Link
																		to={`/nha-tuyen-dung/${item.company_id}`}
																		target='_blank'
																		title={item.company.company_name}
																		rel='noreferrer'>
																		{' '}
																		<img
																			className={sx('lazy-bg')}
																			src={`${import.meta.env.VITE_IMAGE_URL}/${item.company.logo}`}
																			alt={item.company.company_name}
																		/>{' '}
																	</Link>{' '}
																</div>
																<div className={sx('figcaption')}>
																	<div className={sx('timeago')} />
																	<div className={sx('title')}>
																		{' '}
																		<Link
																			className={sx('job_link')}
																			to={`/tim-viec-lam/${item.id}`}
																			target='_blank'
																			title={item.job_title}
																			rel='noreferrer'>
																			{' '}
																			{item.job_title}{' '}
																		</Link>{' '}
																	</div>
																	<div className={sx('caption')}>
																		<Link
																			className={sx('company-name')}
																			to={`/nha-tuyen-dung/${item.company_id}`}
																			target='_blank'
																			title={item.company.company_name}
																			rel='noreferrer'>
																			{item.company.company_name}
																		</Link>
																		<p className={sx('salary')}>
																			{item.isAgreement === false ? (
																				<>
																					<em className={cx('fa', 'fa-usd')} />
																					Lương: {formatSalary(item?.min_salary)} -{' '}
																					{formatSalary(item?.max_salary)} VND
																				</>
																			) : (
																				<>
																					<span className={sx('text')}>Thỏa thuận</span>
																				</>
																			)}
																		</p>
																		<div className={sx('location')}>
																			<em className={sx('mdi', 'mdi-map-marker')} />
																			<ul>
																				<li>
																					{listProvinces?.map((province) => {
																						if (province.code === item.provinces) {
																							return province.name;
																						}
																					})}
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className={sx('top-icon')} />
															</div>
														</div>
													</>
												);
											}
										})}
									</div>
									<div className={sx('load-more')}>
										<Link
											to={{
												pathname: routesPath.JobseekerPaths.allJob,
												search: `?profession_id=${detailJobPost?.jobProfessionDetail[0]?.profession_id}`
											}}
											title={'TẤT CẢ CÔNG VIỆC TƯƠNG TỰ'}>
											Xem tất cả
										</Link>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailJobPost;
