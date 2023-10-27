import React, { Frgament, useEffect } from 'react';
import styles from './jobApplied.module.css';
import classNames from 'classnames/bind';
import { cx } from '../MyProfile';
import SideBar from '~/App/layouts/components/Jobseeker/SideBar';
import { useGetAllJobPostActivityApiQuery } from '~/App/providers/apis/jobPostActivityApi';
import { Link, useSearchParams } from 'react-router-dom';
import useServerPagination from '~/App/hooks/useServerPagination';
import { useSelector } from 'react-redux';
import formatDate from '~/Core/utils/formatDate';
import routesPath from '~/App/config/routesPath';
const sx = classNames.bind(styles);
const JobApplied = () => {
	const user = useSelector((state) => state.auth?.user);
	const { data: allJobPostActivity } = useGetAllJobPostActivityApiQuery({
		params: {
			user_account_id: user?.id
		}
	});
	useEffect(() => {
		console.log(allJobPostActivity?.data);
	}, [allJobPostActivity]);
	return (
		<div className={cx('page-content', 'd-flex', 'align-items-stretch')}>
			<SideBar className={cx} />
			<div className={cx('content-inner')}>
				<div className={cx('container-fluid')}>
					<div className={sx('applied-jobs-wrap')}>
						<div className={sx('widget', 'widget-10')}>
							<div className={sx('widget-head')}>
								<div className={sx('cb-title-h3')}>
									<h3>Việc làm đã nộp</h3>
								</div>
							</div>
							<div className={sx('widget-body')}>
								<div className={sx('table')}>
									<form name='frmJobapplied' id='frmJobapplied' method='post' action=''>
										<input type='hidden' name='intIsHide' id='intIsHide' defaultValue={1} />
										<input type='hidden' name='jobapplied_id' id='jobapplied_id' />
										<table>
											<thead>
												<tr>
													<th className={sx('title')}>Chức danh</th>
													<th>Trạng thái</th>
													<th>Ngày nộp</th>
													<th>Hồ sơ ứng tuyển</th>
													<th>&nbsp;</th>
												</tr>
											</thead>
											<tbody>
												{allJobPostActivity?.data.map((jobPostActivity) => (
													<>
														<tr>
															<td className={sx('job')}>
																<div className={sx('name')}>
																	<div className={sx('figure')}>
																		<div className={sx('image')}>
																			<Link
																				to={`/nha-tuyen-dung/${jobPostActivity?.job_post?.company_id}`}>
																				<img
																					src={jobPostActivity?.job_post?.company?.logo}
																					alt={jobPostActivity?.job_post?.company?.company_name}
																					title={jobPostActivity?.job_post?.company?.company_name}
																				/>{' '}
																			</Link>
																		</div>
																		<div className={sx('figcaption')}>
																			<h3>
																				<Link to={`/tim-viec-lam/${jobPostActivity?.job_id}`}>
																					{jobPostActivity?.job_post?.job_title}
																				</Link>
																			</h3>
																			<p className={sx('company-name')}>
																				<Link
																					to={`/nha-tuyen-dung/${jobPostActivity?.job_post?.company_id}`}
																					title={jobPostActivity?.job_post?.company?.company_name}>
																					{jobPostActivity?.job_post?.company?.company_name}
																				</Link>
																			</p>
																		</div>
																	</div>
																</div>
															</td>
															<td>{jobPostActivity?.status}</td>
															<td className={sx('date')}>
																<p className={sx('mb-show')}>Ngày nộp: </p>
																<time>{formatDate(jobPostActivity?.apply_date)}</time>
															</td>
															<td className={sx('curriculum-vitae')}>
																<p>
																	{' '}
																	<Link to={routesPath.JobseekerPaths.myProfile}>
																		<span className={sx('mb-show')}>Hồ sơ ứng tuyển:</span>
																		{jobPostActivity?.resume?.resume_title?.title}
																	</Link>
																</p>
															</td>
															<td className={sx('action')}>
																<ul className={sx('list-action')}>
																	{/* <li className={sx('button-hidden')}></li> */}
																</ul>
															</td>
														</tr>
													</>
												))}
											</tbody>
										</table>
										<div className={sx('main-pagination')}> </div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobApplied;
