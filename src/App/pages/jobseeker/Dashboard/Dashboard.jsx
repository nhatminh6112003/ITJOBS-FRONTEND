//library
import classNames from 'classnames/bind';

import styles from './Dashboard.module.css';
import SideBar from '~/App/layouts/Components/jobseeker/SideBar';

import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useGetAllMyAttachQuery, useDeleteMyAttachMutation } from '~/App/providers/apis/myAttachApi';
import { useUpdateResumeMutation } from '~/App/providers/apis/resumeApi';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import formatDate from '~/Core/utils/formatDate';
import exportPdf from '~/Core/utils/exportPdf';
import { useAnalysisJobPostActivityQuery } from '~/App/providers/apis/jobPostActivityApi';
import { useAnalysisJobSavedQuery } from '~/App/providers/apis/jobSavedApi';
const cx = classNames.bind(styles);

const Dashboard = () => {
	const user_account_id = useSelector((state) => state.auth?.user?.id);
	const user = useSelector((state) => state.auth?.user);

	let count = 0;
	const { data: getAllMyAttach, refetch } = useGetAllMyAttachQuery(user_account_id);
	const [deleteMyAttach] = useDeleteMyAttachMutation();
	const { data: analysisJobPostActivity } = useAnalysisJobPostActivityQuery(user_account_id);
	const { data: analysisJobSaved } = useAnalysisJobSavedQuery(user_account_id);

	const [updateResumeStatus] = useUpdateResumeMutation();

	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });

	const handleDeleteMyAttach = (id) => {
		deleteMyAttach(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			});
		setModalConfirmState({ open: false, payload: null });
	};
	const updateStatusResume = async (id, resume_active) => {
		updateResumeStatus({ id, payload: { resume_active } })
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
					refetch();
				}
			});
	};
	return (
		<div className={cx('page-content', 'd-flex', 'align-items-stretch')}>
			<SideBar className={cx} />
			<div className={cx('content-inner')}>
				<div className={cx('container-fluid')}>
					<div className={cx('dash-board-wrap')}>
						<div className={cx('row', 'mergebox')}>
							<div className={cx('col-lg-8')}>
								<div className={cx('widget', 'widget-2')}>
									<div className={cx('widget-head')}>
										<div className={cx('cb-title-h3')}>
											<h3>Hồ sơ Profile</h3>
										</div>
									</div>
									<div className={cx('widget-body')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-4', 'col-xl-3')}>
												<div className={cx('img-info')}>
													<div className={cx('figure')}>
														<div className={cx('image', 'img-result', 'hide')}>
															<input
																style={{ display: 'none' }}
																onChange='return ajaxFileUpload();'
																type='file'
																className={cx('file')}
																id='fileAvatar'
																name='fileAvatar'
															/>
															<img
																id='img_mem_avatar'
																src='https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/1.png'
																alt='Lop Minh'
															/>
														</div>
													</div>
													<div className={cx('mobile-show')}>
														<div className={cx('cb-name')}>
															<h2>
																{user?.firstname} {user?.lastname}
															</h2>
														</div>
														<div className={cx('information')}>
															<div className={cx('assistant')}>
																<span id='titleresume_17722295'>Frontend Developer</span>{' '}
																<a
																	href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile'
																	style={{ marginLeft: 10 }}
																	title='Hồ sơ Careerbuilder'>
																	<em className={cx('material-icons')} style={{ fontSize: 16 }}>
																		create
																	</em>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={cx('col-lg-8', 'col-xl-9')}>
												<div className={cx('cb-name')}>
													<h2>
														{user?.firstname} {user?.lastname}
													</h2>
												</div>
												<div className={cx('information')}>
													<div className={cx('assistant')}>
														<span>Frontend Developer</span>{' '}
														<a
															href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile'
															style={{ marginLeft: 10 }}
															title='Hồ sơ Careerbuilder'>
															<EditIcon fontSize='small' />
														</a>
													</div>
													<ul className={cx('desired')}>
														<li>
															<p>Chưa có kinh nghiệm</p>
														</li>
														<li>
															<p>
																Cấp bậc mong muốn: <span>Sinh viên/ Thực tập sinh</span>
															</p>
														</li>
														<li>
															<p>
																Mức lương mong muốn: <span> 500,000 - 1,000,000 VND</span>
															</p>
														</li>
														<li style={{ position: 'relative' }}>
															<p id='date_17722295'>
																Ngày cập nhật: 27/12/2022
																<a
																	title='Cập nhật hồ sơ'
																	href=''
																	className={cx('ac_refesh')}
																	rel={17722295}></a>
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className={cx('col-lg-12', 'cvcht-slide')}>
												<div
													className={cx(
														'swiper-container',
														'swiper-container-initialized',
														'swiper-container-horizontal'
													)}>
													<div
														className={cx('swiper-wrapper')}
														style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
														<div
															className={cx('swiper-slide', 'swiper-slide-active')}
															style={{ width: '300.5px', marginRight: 15 }}>
															<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile#other-activity-section'></a>
														</div>
													</div>
													<span
														className={cx('swiper-notification')}
														aria-live='assertive'
														aria-atomic='true'
													/>
												</div>
												<div
													className={cx('swiper-next', 'swiper-button-disabled')}
													tabIndex={0}
													role='button'
													aria-label='Next slide'
													aria-disabled='true'>
													<span className={cx('lnr', 'lnr-chevron-right')} />
												</div>
												<div
													className={cx('swiper-prev', 'swiper-button-disabled')}
													tabIndex={0}
													role='button'
													aria-label='Previous slide'
													aria-disabled='true'>
													<span className={cx('lnr', 'lnr-chevron-left')} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('row')}>
							<div className={cx('col-sm-6', 'col-lg-6')}>
								<div className={cx('widget-1', 'b4')}>
									<div className={cx('widget-head')}>
										<p>{analysisJobPostActivity ? analysisJobPostActivity : 0}</p>
										<p>Việc làm đã nộp</p>
									</div>
									<div className={cx('widget-body')}>
										<div className={cx('item')}>
											<div className={cx('nonum')}>
												<Link to={routesPath.JobseekerPaths.jobApplied}>Xem thêm</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={cx('col-sm-6', 'col-lg-6')}>
								<div className={cx('widget-1', 'b4')}>
									<div className={cx('widget-head')}>
										<p>{analysisJobSaved ? analysisJobSaved : 0}</p>
										<p>Việc làm đã lưu</p>
									</div>
									<div className={cx('widget-body')}>
										<div className={cx('item')}>
											<div className={cx('nonum')}>
												<Link to={routesPath.JobseekerPaths.jobSaved}>Xem thêm</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={cx('row')}>
							<div className={cx('col-lg-12')}>
								<div className={cx('widget', 'widget-4', 'attached-resume')}>
									<div className={cx('widget-head')}>
										<div className={cx('cb-title-h3')}>
											<h3>Hồ sơ đính kèm</h3>
										</div>
										<p>
											Ngoài hồ sơ CareerBuilder, bạn có thể tạo hồ sơ đính kèm để ứng tuyển và tìm kiếm bởi
											nhà tuyển dụng
										</p>
									</div>
									<div className={cx('widget-body')}>
										{getAllMyAttach?.map((item, index) => {
											if (count < 4 && item.isDeleted === 0) {
												count++;
												return (
													<div className={cx('attached-item')}>
														<div className={cx('row')}>
															<div className={cx('col-12')}>
																<div className={cx('head-title')}>
																	<div className={cx('row')}>
																		<div className={cx('col-lg-5')}>
																			<div className={cx('title')}>
																				<h4 id='titleresume_18020074'>{item.resume_title.title}</h4>
																				<div className={cx('status', 'success')}>
																					<p>Hoàn Tất</p>
																				</div>
																			</div>
																		</div>
																		<div className={cx('col-lg-7')}>
																			<div className={cx('top-action')}>
																				<div className={cx('switch-box', 'jobalert-cv-widget')}>
																					<label htmlFor={`cv_jobalert_${item.id}`}>
																						Thông báo việc làm
																						<input
																							type='checkbox'
																							id={`cv_jobalert_${item.id}`}
																							className={cx('group_jobalert')}
																							data-id={item.id}
																						/>
																						<span className={cx('slider')} />
																					</label>
																				</div>
																				<div className={cx('action')}>
																					<ul>
																						<li className={cx('edit')}>
																							<Link
																								to={`/jobseekers/myresume/myattach/${item.id}`}
																								style={{
																									cursor: 'pointer',
																									fontWeight: '500'
																								}}>
																								Chỉnh sửa
																							</Link>
																						</li>
																						<li className={cx('delete')}>
																							<a
																								onClick={() =>
																									setModalConfirmState({
																										open: true,
																										payload: item.id
																									})
																								}
																								style={{
																									cursor: 'pointer',
																									fontWeight: '500'
																								}}>
																								Xóa
																							</a>
																							<ConfirmDialog
																								open={modalConfirmState.open}
																								onConfirm={() =>
																									handleDeleteMyAttach(
																										modalConfirmState.payload
																									)
																								}
																								onCancel={() =>
																									setModalConfirmState({
																										open: false,
																										payload: null
																									})
																								}
																							/>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className={cx('row')}>
															<div className={cx('col-lg-5')}>
																<div className={cx('figure')}>
																	<div className={cx('image')}>
																		<img
																			src='https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/ic-resume.png'
																			alt={123}
																		/>
																	</div>
																	<div className={cx('figcaption')}>
																		<div className={cx('time')}>
																			<p>Ngày cập nhật:</p>
																			<time id='date_18020074'>{formatDate(item.createdAt)}</time>
																			<a
																				className={cx('refresh', 'ac_refesh')}
																				title='Cập nhật hồ sơ'
																				href='javascript:;'
																				rel={18020074}></a>
																		</div>
																	</div>
																</div>
															</div>
															<div className={cx('col-lg-7')}>
																<div className={cx('attached-status-area')}>
																	<p>Cho phép tìm</p>
																	<div
																		className={cx('switch-status', 'group_searchable')}
																		id='cv_searchable_18020074'
																		data-complete={1}>
																		<a
																			onClick={() => updateStatusResume(item.id, '1')}
																			href='javascript:;'
																			data-type={2}
																			className={
																				item.resume_active === '1'
																					? cx('lock', 'active')
																					: cx('lock')
																			}>
																			Khóa
																		</a>
																		<a
																			href='javascript:;'
																			data-type={1}
																			onClick={() => updateStatusResume(item.id, '2')}
																			className={
																				item.resume_active === '2'
																					? cx('public', 'active')
																					: cx('public')
																			}>
																			Công khai
																		</a>
																		<a
																			href='javascript:;'
																			data-type={3}
																			onClick={() => updateStatusResume(item.id, '3')}
																			className={
																				item.resume_active === '3'
																					? cx('flash', 'active')
																					: cx('flash')
																			}>
																			Khẩn cấp
																		</a>
																	</div>
																	{item.resume_active === '1' && (
																		<p className={cx('text-notes', 'text-notes-2', 'd-block')}>
																			Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ
																			không thấy được hồ sơ này của bạn.
																		</p>
																	)}
																	{item.resume_active === '2' && (
																		<p className={cx('text-notes', 'text-notes-1', 'd-none')}>
																			Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà
																			tuyển dụng có thể tìm thấy Hồ sơ này của bạn.
																		</p>
																	)}
																	{item.resume_active === '3' && (
																		<p className={cx('text-notes', 'text-notes-3', 'd-none')}>
																			Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ
																			của bạn sẽ được ưu tiên tìm thấy bởi các nhà tuyển dụng.
																		</p>
																	)}
																	<div className={cx('right-action')}>
																		<ul>
																			<li>
																				<Link
																					to={`/ho-so-cua-toi/ho-so-dinh-kem/${item.id}`}
																					title='Xem'
																					className={cx('view')}>
																					<em className={cx('mdi', 'mdi-eye')} />
																					Xem
																				</Link>
																			</li>
																			<li>
																				<a
																					title='Tải hồ sơ'
																					className={cx('down')}
																					style={{ cursor: 'pointer' }}
																					href='javascript:void(0)'
																					onClick={() => exportPdf(item?.attachments?.file)}>
																					<em className={cx('mdi', 'mdi-download')} />
																					Tải hồ sơ
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												);
											}
										})}

										<div className={cx('row')}>
											<div className={cx('col-md-7', 'create-info')}>
												<p>Bạn có thể tạo tối đa 4 hồ sơ đính kèm</p>
											</div>
											<div className={cx('col-md-5', 'button-upload')} id='created-resume'>
												{count === 4 ? (
													''
												) : (
													<Link to={routesPath.JobseekerPaths.myAttach}>Tạo Hồ Sơ Ngay!</Link>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
