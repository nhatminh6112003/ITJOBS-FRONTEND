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
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
	const [modalConfirmState, setModalConfirmState] = useState({ open: false, payload: null });

	const handleDeleteMyAttach = (id) => {
		console.log(id);
		deleteMyAttach(id)
			.unwrap()
			.then((r) => {
				if (r.status == 200) {
					toast.success(r?.message);
				}
			});
		setModalConfirmState({ open: false, payload: null });
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
										<a href='' data-type={2} className={cx('lock', '', 'active', '')}>
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
																		<div className={cx('view-number')}>
																			<p>Lượt xem:</p>
																			<span>0</span>
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
																			href=''
																			data-type={2}
																			className={
																				item.resume_active === '1'
																					? cx('lock', 'active')
																					: cx('lock')
																			}>
																			Khóa
																		</a>
																		<a
																			href=''
																			data-type={1}
																			className={
																				item.resume_active === '2'
																					? cx('public', 'active')
																					: cx('public')
																			}>
																			Công khai
																		</a>
																		<a
																			href=''
																			data-type={3}
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
						<div className={cx('row')}>
							<div className={cx('col-12')}>
								<div className={cx('widget', 'widget-6')}>
									<div className={cx('widget-head')}>
										<div className={cx('cb-title-h3')}>
											<h3>Việc Làm VIP ( $1000+)</h3>
										</div>
									</div>
									<div className={cx('apply-job-area')}>
										<div className={cx('row')}>
											<div className={cx('col-lg-4')}>
												<div className={cx('list-job', 'jobs-list-ajax')} id='jobs-list'>
													{' '}
													<div className={cx('item')}>
														<div className={cx('ckb-item')}>
															<label className={cx('container-ckb')}>
																<input
																	type='checkbox'
																	defaultChecked='checked'
																	name='jobchk[]'
																	defaultValue='35BB3FA0'
																/>
																<span className={cx('checkmark')} />
															</label>
														</div>
														<div className={cx('job-item', 'active')} id='job-item-35BB3FA0'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a
																		href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html'
																		target='_blank'
																		title='Công Ty TNHH Giầy Fuluh '
																		rel='noreferrer'>
																		<img
																			className={cx('lazy-bg')}
																			data-src='https://images.careerbuilder.vn/employer_folders/lot9/184979/79x79/101626logo.png'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='Công Ty TNHH Giầy Fuluh '
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3FA0'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/asst-manager-formulation-ce.35BB3FA0.html'
																			title='Asst. manager Formulation CE'
																			target='_blank'
																			rel='noreferrer'>
																			Asst. manager Formulation CE
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<a
																			className={cx('company-name')}
																			target='_blank'
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html'
																			title='Công Ty TNHH Giầy Fuluh '
																			rel='noreferrer'>
																			Công Ty TNHH Giầy Fuluh{' '}
																		</a>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> Cạnh Tranh
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li>Long An</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={cx('item')}>
														<div className={cx('ckb-item')}>
															<label className={cx('container-ckb')}>
																<input
																	type='checkbox'
																	defaultChecked='checked'
																	name='jobchk[]'
																	defaultValue='35BB3FA2'
																/>
																<span className={cx('checkmark')} />
															</label>
														</div>
														<div className={cx('job-item')} id='job-item-35BB3FA2'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a href='' title='Bảo mật'>
																		<img
																			className={cx('lazy-bg')}
																			data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='Bảo mật'
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3FA2'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-truyen-thong-va-marketing.35BB3FA2.html'
																			title='Giám đốc Truyền thông và Marketing'
																			target='_blank'
																			rel='noreferrer'>
																			Giám đốc Truyền thông và Marketing
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<div className={cx('company-name')}>Bảo mật</div>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> 66 Tr - 110 Tr VND
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li>Hà Nội</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={cx('item')}>
														<div className={cx('ckb-item')}>
															<label className={cx('container-ckb')}>
																<input
																	type='checkbox'
																	defaultChecked='checked'
																	name='jobchk[]'
																	defaultValue='35BB3F9F'
																/>
																<span className={cx('checkmark')} />
															</label>
														</div>
														<div className={cx('job-item')} id='job-item-35BB3F9F'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a href='' title='Bảo mật'>
																		<img
																			className={cx('lazy-bg')}
																			data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='Bảo mật'
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3F9F'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-nha-may-nhua.35BB3F9F.html'
																			title='Giám đốc Nhà máy Nhựa'
																			target='_blank'
																			rel='noreferrer'>
																			Giám đốc Nhà máy Nhựa
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<div className={cx('company-name')}>Bảo mật</div>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> Cạnh Tranh
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li>Hà Nội | Hưng Yên | Long An</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={cx('item')}>
														<div className={cx('ckb-item')}>
															<label className={cx('container-ckb')}>
																<input
																	type='checkbox'
																	defaultChecked='checked'
																	name='jobchk[]'
																	defaultValue='35BB3F9E'
																/>
																<span className={cx('checkmark')} />
															</label>
														</div>
														<div className={cx('job-item')} id='job-item-35BB3F9E'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a href='' title='Bảo mật'>
																		<img
																			className={cx('lazy-bg')}
																			data-src='https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='Bảo mật'
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3F9E'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-nha-may-son.35BB3F9E.html'
																			title='Giám đốc Nhà máy Sơn'
																			target='_blank'
																			rel='noreferrer'>
																			Giám đốc Nhà máy Sơn
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<div className={cx('company-name')}>Bảo mật</div>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> Cạnh Tranh
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li>Hà Nội | Hưng Yên | Hà Nam</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={cx('item')}>
														<div className={cx('ckb-item')}>
															<label className={cx('container-ckb')}>
																<input
																	type='checkbox'
																	defaultChecked='checked'
																	name='jobchk[]'
																	defaultValue='35BB3F9D'
																/>
																<span className={cx('checkmark')} />
															</label>
														</div>
														<div className={cx('job-item')} id='job-item-35BB3F9D'>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a
																		href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-lap-rap-tuan-nghia.35A8030D.html'
																		target='_blank'
																		title='Công ty TNHH Sản xuất, lắp ráp Tuấn Nghĩa'
																		rel='noreferrer'>
																		<img
																			className={cx('lazy-bg')}
																			data-src='https://images.careerbuilder.vn/employer_folders/lot7/203277/79x79/151251untitled.png'
																			src='../kiemviecv32/images/graphics/blank.gif'
																			alt='Công ty TNHH Sản xuất, lắp ráp Tuấn Nghĩa'
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3F9D'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-kinh-doanh-tai-ha-noi-quang-ninh-thanh-hoa-vinh-phuc-bac-giang-phu-tho-hung-yen-hai-phong-nam-dinh.35BB3F9D.html'
																			title='Trưởng nhóm Kinh Doanh tại Hà Nội, Quảng Ninh, Thanh Hoá, Vĩnh Phúc, Bắc Giang, Phú Thọ, Hưng Yên, Hải Phòng, Nam Định'
																			target='_blank'
																			rel='noreferrer'>
																			Trưởng nhóm Kinh Doanh tại Hà Nội, Quảng Ninh, Thanh Hoá, Vĩnh
																			Phúc, Bắc Giang, Phú Thọ, Hưng Yên, Hải Phòng, Nam Định
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<a
																			className={cx('company-name')}
																			target='_blank'
																			href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-lap-rap-tuan-nghia.35A8030D.html'
																			title='Công ty TNHH Sản xuất, lắp ráp Tuấn Nghĩa'
																			rel='noreferrer'>
																			Công ty TNHH Sản xuất, lắp ráp Tuấn Nghĩa
																		</a>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> 10 Tr - 30 Tr VND
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li>Quảng Ninh</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('action')}>
													<div className={cx('check-area')}>
														<a href='javascript:void(0)' id='check-uncheck'>
															Bỏ chọn tất cả
														</a>
													</div>
													<div className={cx('load-more')}>
														<a
															href='https://careerbuilder.vn/vi/jobseekers/dashboard?page=2'
															rel='nofollow,noindex'
															title='Xem thêm'>
															Xem thêm
															<span className={cx('mdi', 'mdi-arrow-right')} />
														</a>
													</div>
												</div>
											</div>
											<div className={cx('col-lg-8')} id='job-detail-template'>
												<div className={cx('detail-loading')} style={{ display: 'none' }}>
													<div className={cx('job-desc')}>
														<div className={cx('job-item')}>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a href='#'>
																		<img src='' alt='' />
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a href='#'>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<p className={cx('company-name', 'text-line', 'text-line-sm')} />
																		<p className={cx('salary', 'text-line', 'text-line-sm')} />
																		<div className={cx('location')}>
																			<ul>
																				<li>
																					<p className={cx('text-line', 'text-line-sm')} />
																				</li>
																				<li>
																					<p className={cx('text-line', 'text-line-sm')} />
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className={cx('job-detail')}>
															<div className={cx('row-detail')}>
																<h3>Thông tin việc làm</h3>
																<div className={cx('row', 'row-custom')}>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Đăng trong vòng</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Phương thức làm việc</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Cấp bậc</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Ngành nghề</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Kinh nghiệm</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Hết hạn nộp</h4>
																			<p className={cx('text-line', 'text-line-sm')} />
																		</div>
																	</div>
																</div>
															</div>
															<div className={cx('row-detail')}>
																<h3>Phúc lợi</h3>
																<ul className={cx('welfare-list')}>
																	<li>
																		<p className={cx('text-line', 'text-line-sm')} />
																	</li>
																	<li>
																		<p className={cx('text-line', 'text-line-sm')} />
																	</li>
																	<li>
																		<p className={cx('text-line', 'text-line-sm')} />
																	</li>
																</ul>
															</div>
															<div className={cx('row-detail')}>
																<h3>Mô tả công việc</h3>
																<div className={cx('text-desc')}>
																	<p className={cx('text-line', 'text-line-sm')} />
																	<p className={cx('text-line', 'text-line-sm')} />
																	<p className={cx('text-line', 'text-line-sm')} />
																</div>
															</div>
															<div className={cx('row-detail')}>
																<h3>Yêu cầu công việc</h3>
																<div className={cx('text-desc')}>
																	<p className={cx('text-line', 'text-line-sm')} />
																	<p className={cx('text-line', 'text-line-sm')} />
																	<p className={cx('text-line', 'text-line-sm')} />
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('detail-content')}>
													{' '}
													<div className={cx('job-desc')}>
														<div className={cx('job-item')}>
															<div className={cx('figure')}>
																<div className={cx('image')}>
																	<a
																		href='https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html'
																		target='_blank'
																		title='Công Ty TNHH Giầy Fuluh '
																		rel='noreferrer'>
																		<img
																			src='https://images.careerbuilder.vn/employer_folders/lot9/184979/67x67/101626logo.png'
																			alt='Công Ty TNHH Giầy Fuluh '
																		/>
																	</a>
																</div>
																<div className={cx('figcaption')}>
																	<div className={cx('title')}>
																		<a
																			className={cx('job_link')}
																			data-id='35BB3FA0'
																			href='https://careerbuilder.vn/vi/tim-viec-lam/asst-manager-formulation-ce.35BB3FA0.html'
																			target='_blank'
																			title='Asst. manager Formulation CE'
																			rel='noreferrer'>
																			Asst. manager Formulation CE
																		</a>
																	</div>
																	<div className={cx('caption')}>
																		<p className={cx('company-name')}>Công Ty TNHH Giầy Fuluh </p>
																		<p className={cx('salary')}>
																			<em className={cx('fa', 'fa-usd')} /> Cạnh tranh
																		</p>
																		<div className={cx('location')}>
																			<ul>
																				<li> Long An</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className={cx('job-detail')}>
															<div className={cx('row-detail')}>
																<h3>Thông tin việc làm</h3>
																<div className={cx('row', 'row-custom')}>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Ngày cập nhật</h4>
																			<span>18/01/2023</span>
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Hình thức</h4>
																			<span>Nhân viên chính thức</span>
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Cấp bậc</h4>
																			<span>Quản lý</span>
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Ngành nghề</h4>
																			<span>
																				{' '}
																				<a href='https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html'>
																					; Sản xuất / Vận hành sản xuất
																				</a>
																				,{' '}
																				<a href='https://careerbuilder.vn/viec-lam/hoa-hoc-c41-vi.html'>
																					; Hóa học
																				</a>
																				,{' '}
																				<a href='https://careerbuilder.vn/viec-lam/det-may-da-giay-thoi-trang-c39-vi.html'>
																					; Dệt may / Da giày / Thời trang
																				</a>
																			</span>
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Kinh nghiệm</h4>
																			<span> 3 - 0 Năm</span>
																		</div>
																	</div>
																	<div className={cx('col-lg-3')}>
																		<div className={cx('box-info')}>
																			<h4>Hết hạn nộp</h4>
																			<span>28/02/2023</span>
																		</div>
																	</div>
																</div>
															</div>
															<div className={cx('row-detail')}>
																<h2 className={cx('detail-title')}>Phúc lợi </h2>
																<ul className={cx('welfare-list')}>
																	<li>
																		<span className={cx('fa', 'fa-laptop')} /> Laptop
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-medkit')} /> Chế độ bảo hiểm
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-money')} /> Phụ cấp
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-taxi')} /> Xe đưa đón
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-usd')} /> Chế độ thưởng
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-user-md')} /> Chăm sóc sức khỏe
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-graduation-cap')} /> Đào tạo
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-line-chart')} /> Tăng lương
																	</li>
																	<li>
																		<span className={cx('fa', 'fa-briefcase')} /> Nghỉ phép năm
																	</li>
																</ul>
															</div>
															<div className={cx('row-detail')}>
																<h3>Mô tả Công việc</h3>
																<div className={cx('text-desc')}>
																	<p>
																		<strong>
																			Leading formulation development team, including innovation /
																			optimize / standarlized, study new color effect and share risk
																			assessment result / analysis . Then prepare written document to
																			share progress, milestone and project summary.
																		</strong>
																	</p>
																	<p>
																		<em>
																			<strong>PRIMARY RESPONSIBILITIES:</strong>
																		</em>
																	</p>
																	<p>
																		<strong>1.1</strong> Follow supervisor or organization's direction
																		to initiate a project and then share project plan, activity, task,
																		deliverable and objective w/ stakeholders regularly.
																	</p>
																	<p>
																		<em>
																			1.1.1 Prioritizing activty and task to meet agreed project
																			timeline and result.
																		</em>
																	</p>
																	<p>
																		<strong>1.2</strong> Apply DoE and analysis tool &lt;like fish
																		bone&gt; to identify causes and actions and then lead the team to
																		plan applicable prevention plan for formula development and
																		manufacturing.
																	</p>
																	<p>
																		<em>
																			1.2.1 Clearly list out correlation between new compound, mold
																			and bottom component making method and then set up quick
																			verfication method / database set-up.{' '}
																		</em>
																	</p>
																	<p>
																		<em>
																			1.2.2 Data capturing, record and analysis need to be performed.
																		</em>
																	</p>
																	<p>
																		<strong>1.3</strong> Join and engage cross function &lt;or w/
																		Nike&gt; meeting and training to equip proper process, R&amp;R,
																		technical knowledge and understanding.
																	</p>
																	<p>
																		<strong>1.4</strong> Lead and prepare written docutment in English
																		&lt;Vietnamese is an optional&gt; for tracking, training or used
																		as guideline, can be reported to leadership or Nike.
																	</p>
																	<p>
																		<strong>1.5</strong> Provide training material, training schedule
																		and assessment tool according to project type. Keep team
																		development and increase members capability / skill with regular
																		assessment.
																	</p>
																	<p>
																		<strong>1.6</strong> Follow manager's instruction to carry out
																		other management duties such as work plan adjustment, training,
																		assessment or necessary supportive task to ensure team successful.
																	</p>
																	<p>
																		<strong>1.7</strong> Lead bottom related vendor audit in term of
																		chemical process during development stage / new vendor approval
																	</p>
																</div>
															</div>
															<div className={cx('row-detail')}>
																<h3>Yêu Cầu Công Việc</h3>
																<div className={cx('text-desc')}>
																	<p>
																		First priority : &nbsp;Minimum 3 years of working experience as
																		formulation CE focus on rubber outsole or Eva midsole.
																	</p>
																	<p>
																		Second priority: Minimum 3 years of working experience in handling
																		the formulation of Rubber or Eva in non-shoe industry.
																	</p>
																	<p>
																		Third priority : With Master or PHD degree in Chemical Engineer
																		but with limited work experience
																	</p>
																	<p>
																		<br />
																		&nbsp;
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={cx('follow-area')}>
													<a
														href='https://careerbuilder.vn/viec-lam/muc-luong-20trvnd-s20-vi.html'
														className={cx('left-follow')}>
														Xem thêm
													</a>
													<div className={cx('right-follow')}>
														<a
															href='javascript:void(0)'
															className={cx('btn-apply-all', 'btn-gradient-1')}>
															Ứng tuyển các vị trí đã chọn&nbsp;
															<span id='countjob'>(5)</span>
														</a>
														<a href='javascript:void(0)' className={cx('btn-apply-now', 'btn-gradient')}>
															Ứng tuyển ngay
														</a>
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
			</div>
		</div>
	);
};

export default Dashboard;
