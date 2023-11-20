import React, { useEffect } from 'react';
import styles from '../JobApplied/JobApplied.module.css';
import classNames from 'classnames/bind';
import { cx } from '../MyProfile';
import SideBar from '~/App/layouts/components/Jobseeker/SideBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDeleteJobSavedMutation, useGetAllJobSavedQuery } from '~/App/providers/apis/jobSavedApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { toast } from 'react-toastify';
const sx = classNames.bind(styles);
const JobSaved = () => {
	const user = useSelector((state) => state.auth?.user);
	const { data: allJobSaved } = useGetAllJobSavedQuery(user?.id);
	const [deleteJobSaved] = useDeleteJobSavedMutation();
	const { data: allProvinces } = useGetAllProvincesQuery();

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
													<th className={sx('job-name')}>TÊN CÔNG VIỆC</th>
													<th>ĐỊA ĐIỂM</th>
													<th>TRẠNG THÁI</th>
												</tr>
											</thead>
											<tbody>
												{allJobSaved?.map((jobPostActivity) => (
													<>
														<tr>
															<td className={sx('job')}>
																<div className={sx('name')}>
																	<div className={sx('figure')}>
																		<div className={sx('image')}>
																			<Link
																				to={`/nha-tuyen-dung/${jobPostActivity?.job_post_saved?.company_id}`}>
																				<img
																					src={`${import.meta.env.VITE_IMAGE_URL}/${
																						jobPostActivity?.job_post_saved?.company?.logo
																					}`}
																					alt={
																						jobPostActivity?.job_post_saved?.company?.company_name
																					}
																					title={
																						jobPostActivity?.job_post_saved?.company?.company_name
																					}
																				/>{' '}
																			</Link>
																		</div>
																		<div className={sx('figcaption')}>
																			<h3>
																				<Link
																					to={`/tim-viec-lam/${jobPostActivity?.job_post_saved.id}`}>
																					{jobPostActivity?.job_post_saved?.job_title}
																				</Link>
																			</h3>
																			<p className={sx('company-name')}>
																				<Link
																					to={`/tim-viec-lam/${jobPostActivity?.job_post_saved.id}`}>
																					{jobPostActivity?.job_post_saved?.company?.company_name}
																				</Link>
																			</p>
																		</div>
																	</div>
																</div>
															</td>
															<td className={sx('location')}>
																<p>
																	{allProvinces?.map((value, index, array) => {
																		if (value.code == jobPostActivity?.job_post_saved?.provinces) {
																			return value.name;
																		}
																	})}
																</p>
															</td>
															<td className={sx('action')}>
																<ul
																	className={sx('list-action')}
																	style={{ display: 'flex', flexDirection: 'column' }}>
																	<li className={sx('apply-now-btn')} style={{ marginBottom: '8px' }}>
																		<Link
																			to={`/tim-viec-lam/${jobPostActivity?.job_post_saved.id}`}
																			className={sx('btn-gradient')}
																			style={{ width: '185px', padding: '4px 0px' }}>
																			Ứng tuyển
																		</Link>
																	</li>
																	<li>
																		<a
																			onClick={() => handleDeleteJobSaved(jobPostActivity?.id)}
																			style={{
																				width: '185px',
																				padding: '4px 0px',
																				cursor: 'pointer',
																				color: 'red'
																			}}>
																			<em className={cx('material-icons')}>highlight_off</em>
																			<span>Xóa</span>
																		</a>
																	</li>
																</ul>
															</td>
														</tr>
													</>
												))}
												<td colSpan={3} className={cx('record-tbl')}>
													{allJobSaved?.length === 0 && <div>Hiện tại chưa có dữ liệu</div>}
												</td>
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

export default JobSaved;
