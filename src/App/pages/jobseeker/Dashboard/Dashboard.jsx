//library
import classNames from 'classnames/bind';

import styles from './Dashboard.module.css';
import SideBar from '~/App/layouts/components/Jobseeker/SideBar';

import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';
import { useGetAllMyAttachQuery, useDeleteMyAttachMutation } from '~/App/providers/apis/myAttachApi';
import { useUpdateResumeMutation } from '~/App/providers/apis/resumeApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDialog from '~/Core/components/common/Modal/ConfirmDialog';
import formatDate from '~/Core/utils/formatDate';
import exportPdf from '~/Core/utils/exportPdf';

const cx = classNames.bind(styles);

const Dashboard = () => {
	const user_account_id = useSelector((state) => state.auth?.user?.id);
	let count = 0;
	const { data: getAllMyAttach, refetch } = useGetAllMyAttachQuery(user_account_id);
	const [deleteMyAttach] = useDeleteMyAttachMutation();
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
											<h3>Careerbuilder Profile</h3>
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
														{/* <div className={cx('edit-image', 'dropdown')}>
															<div className={cx('dropdown-menu')}>
																<ul>
																	<li className={cx('upload-pro')}>
																		<a href='' onClick='choose_file();'>
																			<span>Tải hình ảnh</span>
																		</a>
																	</li>
																	<li className={cx('view-pro')}>
																		<a href='' onClick='removeAvarta();'>
																			{' '}
																			<span>Xóa hình ảnh</span>
																		</a>
																	</li>
																</ul>
															</div>
														</div> */}
													</div>
													<div className={cx('mobile-show')}>
														<div className={cx('cb-name')}>
															<h2>Lop Minh</h2>
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
													<h2>Lop Minh</h2>
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
											{/* <div className={cx('col-lg-12')}>
												<div className={cx('progress-bar-status', 'not-approve')}>
													<div className={cx('profile-strength')}>
														<p>
															Mức độ hoàn thành: <span>Không được duyệt</span>
														</p>
													</div>
													<div className={cx('noti')}>
														<em className={cx('mdi', 'mdi-alert-circle-outline')} />
														<p>
															Không được duyệt - Hồ sơ của bạn không được duyệt nên vui lòng check mail
															và làm theo hướng dẫn.
														</p>
													</div>
													<div className={cx('progress-bar')}>
														<div className={cx('progress')}>
															<progress className={cx('progress-main')} max={7} value={2} />
														</div>
														<div className={cx('progress-row')}>
															{' '}
															<div className={cx('line', 'active')} />
															<div className={cx('line', 'active')} />
															<div className={cx('line', 'active')} />
															<div className={cx('line', '')} />
															<div className={cx('line', '')} />
															<div className={cx('line', '')} />
															<div className={cx('line', '')}>
																<span className={cx('success')} />
															</div>
														</div>
													</div>
												</div>
											</div> */}
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
															<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile#other-activity-section'>
																{/* <div className={cx('item-cvcht')}>
																	<div className={cx('col-sm-3', 'icon')}>
																		<img src='img/dash-board/i13.png' alt='' />
																	</div>
																	<div className={cx('col-sm-9', 'txt')}>Hoạt động khác</div>
																</div> */}
															</a>
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
											{/* <div className={cx('col-lg-12', 'function-bottom')}>
												<div className={cx('button-list')}>
													<div className={cx('item')}>
														<a title='Cập nhật hồ sơ' href='' className={cx('ac_refesh')} rel={17722295}>
															<span className={cx('mdi', 'mdi-rotate-3d-variant')} />
															Cập nhật hồ sơ
														</a>
													</div>
													<div className={cx('item')}>
														<a id='btn_view_cbprofile' href=''>
															<span className={cx('mdi', 'mdi-eye')} />
															Xem hồ sơ
														</a>
													</div>
													<div className={cx('item')}>
														<a href='' onClick='downloadCvProfile(17722295)'>
															<span className={cx('mdi', 'mdi-download')} />
															Tải hồ sơ
														</a>
													</div>
												</div>
												<div className={cx('edit-profile')}>
													<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate'>
														Chỉnh mẫu hồ sơ
													</a>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
							<div className={cx('col-lg-4')}>
								<div className={cx('widget-b', 'searchable-cv-widget')}>
									<h4>
										Cho phép tìm kiếm Profile CareerBuilder
										<div className={cx('tips', 'p1')} data-type={1}>
											<div className={cx('icon')}>
												<em className={cx('mdi', 'mdi-lightbulb')} />
											</div>
											<p>Tips</p>
										</div>
									</h4>
									<div
										className={cx('switch-status', 'group_searchable')}
										id='cv_searchable_17722295'
										data-id={17722295}
										data-complete={1}>
										<a href='javascript:;' data-type={2} className={cx('lock', '', 'active', '')}>
											<LockIcon sx={{ fontSize: '14.5px', marginRight: '5px' }} />
											Khóa
										</a>
										<a href='' data-type={1} className={cx('public', '')}>
											<LanguageIcon sx={{ fontSize: '14.5px', marginRight: '5px' }} />
											Công khai
										</a>
										<a href='' data-type={3} className={cx('flash', '')}>
											<BoltIcon sx={{ fontSize: '14.5px', marginRight: '5px' }} />
											Khẩn cấp
										</a>
									</div>
									<p>Bạn có thể cho phép nhà tuyển dụng tìm kiếm hồ sơ CareerBuilder</p>
								</div>
							</div>
						</div>
						<div className={cx('row')}>
							<div className={cx('col-sm-12', 'col-lg-12')}>
								<div className={cx('widget-1', 'b4')}>
									<div className={cx('widget-head')}>
										<p>0</p>
										<p>Việc làm đã nộp</p>
									</div>
									<div className={cx('widget-body')}>
										<div className={cx('item')}>
											<div className={cx('number')}>
												<a
													href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied'
													className={cx('x3')}>
													0
												</a>
											</div>
											<div>
												<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied'>
													Nộp ở trạng thái bình thường
												</a>
											</div>
										</div>
										<div className={cx('item')}>
											<div className={cx('number')}>
												<a
													href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied'
													className={cx('x4')}>
													0
												</a>
											</div>
											<div>
												<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied'>
													Nộp ở trạng thái Tìm việc khẩn cấp
												</a>
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
																		{/* <div className={cx('view-number')}>
																			<p>Lượt xem:</p>
																			<span>0</span>
																		</div> */}
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
