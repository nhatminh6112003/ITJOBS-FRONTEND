import React, { useEffect, useState } from 'react';
import styles from './detailCompany.module.css';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetOneCompanyQuery } from '~/App/providers/apis/companyApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { CompanyTypeArray } from '~/App/constants/companyEnum';
import { useGetAllJobPostQuery } from '~/App/providers/apis/jobPostApi';
import jobPostStatusEnum from '~/App/constants/jobPostStatusEnum';
import useCustomRouter from '~/App/hooks/useCustomRouter';
import formatDate from '~/Core/utils/formatDate';
import { FavoriteBorderIcon } from '~/Core/resources';
import {
	useCreateJobSavedMutation,
	useDeleteJobSavedMutation,
	useGetAllJobSavedQuery
} from '~/App/providers/apis/jobSavedApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';

const sx = classNames.bind(styles);

const DetailCompany = ({ cx }) => {
	const { id } = useParams();
	const { data: detailCompany } = useGetOneCompanyQuery(id);
	const { data: listProvinces } = useGetAllProvincesQuery();
	const user = useSelector((state) => state.auth.user);
	const { data: allJobSaved } = useGetAllJobSavedQuery(user?.id);
	const [createJobSaved] = useCreateJobSavedMutation();
	const [deleteJobSaved] = useDeleteJobSavedMutation();
	const navigate = useNavigate();
	const {
		query: { page }
	} = useCustomRouter();
	const { data: allJobPost } = useGetAllJobPostQuery({
		params: {
			status: jobPostStatusEnum.Publish,
			isDeleted: false,
			page: page || '',
			company_id: id || ''
		}
	});
	const { data: allJobPostActivity } = useGetAllJobPostActivityApiQuery(
		{
			params: {
				user_account_id: user?.id
			}
		},
		{ skip: !user?.id }
	);

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
		<section className={sx('jobsby-company', 'cb-section')}>
			<div className={cx('container')}>
				<div className={sx('company-introduction')}>
					<div className={sx('company-info')}>
						<div className={sx('info')}>
							<div className={sx('img')}>
								<img
									src={`${import.meta.env.VITE_IMAGE_URL}/${detailCompany?.data?.logo}`}
									alt={detailCompany?.data?.company_name}
								/>
							</div>
							<div className={sx('content')}>
								<h1 className={sx('name')}>{detailCompany?.data?.company_name}</h1>
								<strong>Địa điểm</strong>
								<p>
									{detailCompany?.data?.address}{' '}
									{listProvinces?.find((item) => item.code == detailCompany?.data?.provinces)?.name}
								</p>
								<hr />
								<strong>Thông tin công ty</strong>
								<ul>
									<li>
										{' '}
										<span className={sx('mdi', 'mdi-account-supervisor')} /> Qui mô công ty:{' '}
										{detailCompany?.data?.company_size}{' '}
									</li>
									<li>
										{' '}
										<span className={sx('mdi', 'mdi-gavel')} /> Loại hình hoạt động:{' '}
										{CompanyTypeArray[detailCompany?.data?.company_type]?.label}{' '}
									</li>
									<li>
										{' '}
										<span className={sx('mdi', 'mdi-link')} /> Website:{' '}
										{detailCompany?.data?.company_website_url}{' '}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={sx('intro-section', 'intro-section-1')}>
					<h3 className={sx('company-heading-title')}>Giới thiệu về công ty</h3>
					<div className={sx('box-text')}>
						<div className={sx('main-text')}>
							<p>{detailCompany?.data?.company_summary}</p>
						</div>
					</div>
				</div>
				<div className={sx('company-jobs-opening')}>
					<div className={sx('box-title')}>
						<h3 className={sx('company-heading-title')}>Việc làm đang tuyển</h3>
					</div>
					<div className={sx('list-job')}>
						{allJobPost?.data &&
							allJobPost.data.map((job_post) => {
								return (
									<>
										<div className={sx('job-item')}>
											<div className={sx('figure')}>
												<div className={sx('image')}>
													<a href={`/tim-viec-lam/${job_post?.id}`}>
														<img
															src={`${import.meta.env.VITE_IMAGE_URL}/${job_post?.company?.logo}`}
															alt={job_post?.job_title}
														/>
													</a>
												</div>
												<div className={sx('figcaption')}>
													<h3 className={sx('title')}>
														<a href={`/tim-viec-lam/${job_post?.id}`} title={job_post?.job_title}>
															{job_post?.job_title}
														</a>
													</h3>
													<div className={sx('caption')}>
														<p className={sx('company-name')}>{job_post?.company?.company_name}</p>
														{job_post?.isAgreement === false ? (
															<>
																<em className={cx('fa', 'fa-usd')} />
																Lương: {formatSalary(job_post?.min_salary)} -{' '}
																{formatSalary(job_post?.max_salary)} VND
															</>
														) : (
															<>
																<div>Lương: Thỏa thuận</div>
															</>
														)}
														<div>
															<em className='fa fa-clock-o' />
															<p>Hạn nộp: {formatDate(job_post?.expiry_date)}</p>
														</div>
														<div className={sx('location')}>
															<ul>
																<li>
																	{listProvinces?.map((value) => {
																		if (value.code == job_post?.provinces) {
																			return value.name;
																		}
																	})}
																</li>
															</ul>
														</div>
														<div className={sx('bot-info')}>
															<div className={sx('time')}>
																<time>
																	<em className={sx('mdi', 'mdi-calendar')}>
																		{formatDate(job_post?.updatedAt)}
																	</em>
																</time>
															</div>
														</div>
													</div>
													{allJobPostActivity?.data.some((item) => item.job_id === job_post?.id) ? (
														<Link
															style={{
																borderRadius: '3px',
																color: '#cfd9df',
																height: '32px',
																display: 'flex',
																alignItems: 'center',
																padding: '0 16px',
																position: 'absolute',
																top: 0,
																right: 0,
																backgroundColor: '#f0f0f0'
															}}>
															Đã ứng tuyển
														</Link>
													) : (
														<Link
															to={`/jobseekers/jobs/apply/${job_post?.id}`}
															className={sx('btn-apply', 'btnApplyClick')}>
															Ứng tuyển
														</Link>
													)}

													<div className={sx('right-action')}>
														<a
															className={cx('save-job chk_save_35BDECD0')}
															style={{ cursor: 'pointer' }}
															onClick={
																allJobSaved?.length > 0 &&
																allJobSaved.some((item) => item.job_post_saved.id === job_post?.id)
																	? () =>
																			handleDeleteJobSaved(
																				allJobSaved.find(
																					(item) => item.job_post_saved.id === job_post?.id
																				).id
																			)
																	: () => handleCreateJobSaved(job_post?.id)
															}>
															{allJobSaved?.length > 0 &&
															allJobSaved.some((item) => item.job_post_saved.id === job_post?.id) ? (
																<>
																	<FavoriteBorderIcon
																		fontSize='small'
																		style={{ color: '#2f4ba0', marginRight: '4px' }}
																	/>
																	<span className={sx('text', 'company_profile')}>Saved Job</span>
																</>
															) : (
																<>
																	<FavoriteBorderIcon
																		fontSize='small'
																		style={{ color: '#2f4ba0', marginRight: '4px' }}
																	/>
																	<span className={sx('text', 'company_profile')}>Save</span>
																</>
															)}
														</a>
													</div>
												</div>
											</div>
										</div>
									</>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailCompany;
