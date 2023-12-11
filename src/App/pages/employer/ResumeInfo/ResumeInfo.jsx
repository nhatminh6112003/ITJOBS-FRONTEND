import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { DegreeArray } from '~/App/constants/degreeArray';
import GenderEnum from '~/App/constants/genderEnum';
import { marialStatusEnum } from '~/App/constants/marialStatusEnum';
import { useGetAllDistrictsQuery } from '~/App/providers/apis/districtsApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import { useGetOneResumeQuery } from '~/App/providers/apis/resumeApi';
import exportPdf from '~/Core/utils/exportPdf';
import formatDate from '~/Core/utils/formatDate';
import formatVND from '~/Core/utils/formatVND';
import styles from './ResumeInfo.module.css';
import { useSendMailJobSeekerMutation } from '~/App/providers/apis/jobPostActivityApi';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LevelArray } from '~/App/constants/levelEnum';
import { useCreateEmployerResumeApiMutation } from '~/App/providers/apis/employerResumeApi';
const sx = classNames.bind(styles);
import { toast } from 'react-toastify';
import useModal from '~/App/hooks/useModal';
import TextAreaFieldControl from '~/Core/components/common/FormControl/TextAreaFieldControl';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import ReactModal from 'react-modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendEmailSchema } from '~/App/schemas/sendEmailSchema';

const ResumeInfo = ({ cx }) => {
	const [sendMail] = useSendMailJobSeekerMutation();
	const user = useSelector((state) => state.auth.user);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(sendEmailSchema)
	});
	const { id } = useParams();
	const { data } = useGetOneResumeQuery(id);
	const employer = useSelector((state) => state.auth?.employer);
	const [createEmployerResume] = useCreateEmployerResumeApiMutation();

	const { data: listProvinces } = useGetAllProvincesQuery();
	const { data: listDistricts } = useGetAllDistrictsQuery(
		{
			params: {
				depth: 2
			},
			code: data?.user_account?.resume_profile?.provinces
		},
		{
			skip: !data?.user_account?.resume_profile?.provinces
		}
	);
	const { isShowing, toggle } = useModal({
		mailModal: false
	});
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
				toast.error(err.data.message);
			});
	};
	const onSendMail = async (db) => {
		sendMail({
			user_account_id: data?.user_account_id,
			...db
		}).then((r) => {
			if (r?.data?.status == 200) {
				toast.success('Gửi mail thông báo thành công');
			}
		});
		toggle('mailModal');
		reset();
	};

	return (
		<section
			className={sx('manage-candidates-resume-applied', 'cb-section', 'bg-manage')}
			style={{ padding: '30px 0' }}>
			<div className={cx('container')}>
				<div className={sx('box-candidates-resume-applied')}>
					<div className={sx('main-tabslet')} data-toggle='tabslet'>
						<div className={sx('tabslet-content', 'active')} id='tab-1'>
							<div className={sx('main-resume-applied')}>
								<div className={sx('boding-resume-applied')}>
									<div className={sx('box-view-resume')}>
										<div className={sx('action')}>
											<ul className={sx('list-manipulation')}>
												<li>
													<em className={cx('material-icons')}>folder_shared </em>
													<a
														onClick={() => handleSaveToFolder(data.id)}
														title='Lưu thư mục'
														style={{ cursor: 'pointer' }}>
														Lưu thư mục
													</a>
												</li>
												<li>
													<em className={cx('material-icons')}>email </em>
													<a
														href='javascript:void(0);'
														onClick={() => toggle('mailModal')}
														title='Gửi thông báo'>
														Gửi thông báo
													</a>
												</li>
											</ul>
										</div>
										<div className={sx('view-resume-foot')}>
											<div className={sx('tabslet-content-detail', 'active')}>
												<div className={sx('box-flip-view')}>
													<div className={sx('flip-view-head')}>
														<p className={sx('name')}>
															Chức danh:
															<span className={sx('title-resume')}>{data?.resume_title?.title}</span>
														</p>
													</div>
													<div className={sx('flip-view-body')}>
														<div className={cx('row')}>
															<div className={cx('col-lg-6', 'colLeft')}>
																<div className={sx('info-left')}>
																	<div className={sx('image')}>
																		<img
																			id='img_mem_avatar'
																			src='https://static.careerbuilder.vn/themes/kiemviecv32/jobseekers/images/icons/avatar_120x160.png'
																		/>
																	</div>
																	<ul className={sx('info-list')}>
																		<li>
																			<p>
																				<strong>Ứng viên:</strong>
																			</p>
																			<p className={sx('name')}>
																				<strong>
																					{' '}
																					{data?.user_account?.firstname +
																						' ' +
																						data?.user_account?.lastname}
																				</strong>
																			</p>
																		</li>
																		<li>
																			<p>
																				<strong>Ngày sinh:</strong>
																			</p>
																			<p>
																				{formatDate(data?.user_account?.resume_profile?.birthday)}
																			</p>
																		</li>
																		<li>
																			<p>
																				<strong>Giới tính:</strong>
																			</p>
																			<p>
																				{GenderEnum[data?.user_account?.resume_profile?.gender]} -{' '}
																				{
																					marialStatusEnum[
																						data?.user_account?.resume_profile?.marial_status
																					]
																				}
																			</p>
																		</li>

																		<li>
																			<p>
																				<strong>Tỉnh/Thành Phố:</strong>
																			</p>
																			{listProvinces?.map((item) =>
																				item.code ===
																				data?.user_account?.resume_profile?.provinces ? (
																					<p>{item.name}</p>
																				) : null
																			)}
																		</li>
																		<li>
																			<p>
																				<strong>Quận/Huyện:</strong>
																			</p>
																			{listDistricts?.districts?.map((item) =>
																				item.code ===
																				data?.user_account?.resume_profile?.districts ? (
																					<p>{item.name}</p>
																				) : null
																			)}
																		</li>
																	</ul>
																</div>
																<div className={sx('tag-list')}> </div>
															</div>
														</div>
														<p className={sx('title-flip')}>Thông tin nghề nghiệp</p>
														<div className={sx('job-information')}>
															<ul className={sx('information-list')}>
																<li>
																	<p>
																		<strong>Năm kinh nghiệm:</strong>
																	</p>
																	<p>{data?.attachments?.yearOfExperience} Năm</p>
																</li>
																<li>
																	<p>
																		<strong>Bằng cấp cao nhất:</strong>
																	</p>
																	{DegreeArray?.map((item) =>
																		item.value == data?.attachments?.job_degree_value ? (
																			<p>{item.label}</p>
																		) : null
																	)}
																</li>
																<li>
																	<p>
																		<strong>Cấp bậc mong muốn:</strong>
																	</p>
																	<p>
																		{LevelArray.map((value) => {
																			if (value.value == data?.resume_desired_job?.position_id) {
																				return value.label;
																			}
																		})}
																	</p>
																</li>
																<li>
																	<p>
																		<strong>Mức lương mong muốn:</strong>
																	</p>
																	<p>
																		{' '}
																		{formatVND(data?.resume_desired_job?.salary_from)} -{' '}
																		{formatVND(data?.resume_desired_job?.salary_to)} VND
																	</p>
																</li>
																<li>
																	<p>
																		<strong>Ngành nghề mong muốn:</strong>
																	</p>

																	<p>
																		{' '}
																		{data?.profession_desired_job
																			?.map((item, index) => {
																				return item.profession.name;
																			})
																			.join(' - ')}
																	</p>
																</li>
																<li>
																	<p>
																		<strong>Địa điểm:</strong>
																	</p>
																	{listProvinces?.map((item) =>
																		item.code === data?.user_account?.resume_profile?.provinces ? (
																			<p>{item.name}</p>
																		) : null
																	)}
																</li>
																<li>
																	<p>
																		<strong>Hình thức:</strong>
																	</p>
																	<p>
																		{' '}
																		{data?.resume_work_type
																			?.map((item) => {
																				return item?.work_type?.name;
																			})
																			.join(', ')}
																	</p>
																</li>
																<li>
																	<p>
																		<strong>Phúc lợi:</strong>
																	</p>
																	<p>
																		{' '}
																		{data?.welfare_desired_job
																			?.map((item) => {
																				return item?.job_welfare?.welfare_type;
																			})
																			.join(', ')}
																	</p>
																</li>
																<li>
																	<p>
																		<strong>Cập nhật:</strong>
																	</p>
																	<p>{formatDate(data?.updatedAt)}</p>
																</li>
															</ul>
														</div>
														<p className={sx('title-flip')}>Nội dung hồ sơ</p>
														<div className={sx('profile-iframe')}>
															{data?.attachments?.file && (
																<iframe
																	id='frm_view_pdf'
																	frameBorder={0}
																	scrolling='no'
																	src={`${import.meta.env.VITE_IMAGE_URL}/${data.attachments.file}`}
																	height={934}
																	width='100%'
																/>
															)}
														</div>
													</div>
												</div>
											</div>
											<div
												className={sx('tabslet-content-detail')}
												data-content-detail={2}
												id='tabs-thugioithieu'>
												<div className={sx('full-content')}>Hồ sơ này không có thư giới thiệu</div>
											</div>
											<div className={sx('tabslet-content-detail')} data-content-detail={3}>
												<div id='tabs-ghichu' className={sx('box-note')}>
													<div id='list_note_resume'>&nbsp;</div>
													<div id='NotesResume' className={sx('note-form')}>
														<form id='frmResumeForNote' name='frmResumeForNote' action method='post'>
															<div className={sx('form-group')}>
																<label>Viết ghi chú</label>
																<input
																	type='text'
																	name='note_content'
																	id='note_content'
																	placeholder='Viết ghi chú'
																/>
																<span className={sx('noted')}>Lớn hơn 5 và nhỏ hơn 500 ký tự</span>
															</div>
															<div className={sx('form-group', 'form-submit')}>
																<button
																	className={sx('btn-gradient', 'btn-submit')}
																	type='button'
																	id='btn-create-note-resume'
																	onclick='createNoteForResume();'>
																	Lưu
																</button>
															</div>
															<input
																type='hidden'
																name='hexFolderID'
																id='hexFolderID'
																defaultValue='35BFE874'
															/>
															<input
																type='hidden'
																name='hexResumeID'
																id='hexResumeID'
																defaultValue='35C9210A'
															/>
															<input
																type='hidden'
																name='intResumeId'
																id='intResumeId'
																defaultValue={2373642}
															/>
														</form>
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
			<ReactModal
				isOpen={isShowing.mailModal}
				onRequestClose={() => toggle('mailModal')}
				style={{
					overlay: {
						zIndex: '9999',
						backgroundColor: '#343434'
					},
					content: {
						padding: 0,
						margin: 30,
						height: 450,
						backgroundColor: '#ffff',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)'
					}
				}}>
				<div
					style={{ border: 'transparent', display: 'flex', justifyContent: 'center', width: '100%' }}
					className={cx('jobs-posting-modal', 'jobs-posting-10-modal', 'fancybox-content')}
					id='jobs-posting-10-modal'>
					<div className={cx('modal-body')}>
						<form id='frmResumeForNotify' name='frmResumeForNotify' onSubmit={handleSubmit(onSendMail)}>
							<div className={cx('form-wrap')}>
								<div className={cx('row')}>
									<div className={cx('col-12')}>
										<div className={cx('form-group', 'form-text')}>
											<label>
												Tiêu đề <font style={{ color: 'red' }}>*</font>
											</label>

											<InputFieldControl
												type='text'
												placeholder='Nhập nội dung'
												name='title'
												id='title'
												control={control}
											/>
											{/* <span className={cx('noted')}>Tối đa 150 ký tự</span> */}
										</div>
									</div>
									<div className={cx('col-12')}>
										<div className={cx('form-group', 'form-textarea')}>
											<label>
												Nội dung <font style={{ color: 'red' }}>*</font>
											</label>

											<TextAreaFieldControl
												control={control}
												placeholder='Nhập nội dung'
												name='content'
												id='content'
												maxRows={5}
											/>

											{/* <span className={cx('noted')}>Lớn hơn 10 và nhỏ hơn 3.000 kí tự</span> */}
										</div>
									</div>
									{/* <div className={cx('col-12')}>
										<div className={cx('form-group', 'form-checkbox')}>
											<div className={cx('group')}>
												<input
													type='checkbox'
													defaultChecked='checked'
													defaultValue={1}
													id='update2mail'
													name='update2mail'
												/>
												<label htmlFor='sendmail'>Gửi một bản sao đến email của tôi</label>
											</div>
											<div className={cx('group')}>
												<input type='checkbox' id='update2my' name='update2my' defaultValue={1} />
												<label htmlFor='updateText'>Cập nhật lại nội dung thư thông báo này</label>
											</div>
										</div>
									</div> */}
								</div>
								<div className={cx('form-group', 'form-submit')}>
									{/* <a className={cx('btn-cancel')} href='javascript:;' onclick='resetNotifyMail();'>
										Bỏ qua
									</a> */}
									<button
										className={cx('btn-gradient', 'btn-submit')}
										id='resume_notify_mail_send'
										type='sunmit'
										onclick='sendNotifyMail();'>
										Gửi
									</button>
								</div>
							</div>
						</form>
					</div>
					<div
						className={cx('jobs-posting-modal', 'jobs-posting-17-modal')}
						id='NotifyAbout'
						style={{ display: 'none' }}>
						<div className={cx('modal-head')}>
							<p className={cx('title')}>Thư thông báo mẫu</p>
						</div>
						<div className={cx('modal-body')}>
							<div className={cx('preview-reply-letter')}>
								<div className={cx('title')}>
									<p>Tiêu đề: Thanks you for applying</p>
								</div>
								<div className={cx('full-content')}>
									<p>
										Dear <strong>[firstname] [lastname]</strong>,<br />
										We have received your resume submission for this position. We appreciate your interest and
										look forward to reviewing your resume.
										<br />
										We will contact you within seven days if your qualifications meet the requirements of the
										position.
										<br />
										Thanks you again for applying!
										<br />
										<br />
										Best regards,
										<br />
										<strong>[contact-name]</strong>
									</p>
								</div>
							</div>
							<div className={cx('form-group', 'form-submit')}>
								<a
									className={cx('btn-cancel')}
									href='javascript:void(0);'
									onclick="showNotifyMail('35BFE874', '35C9210A')">
									Trở lại
								</a>
							</div>
						</div>
					</div>
					<button
						type='button'
						data-fancybox-close=''
						className={cx('fancybox-button', 'fancybox-close-small')}
						title='Close'>
						<svg xmlns='http://www.w3.org/2000/svg' version={1} viewBox='0 0 24 24'>
							<path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z' />
						</svg>
					</button>
				</div>
			</ReactModal>
		</section>
	);
};

export default ResumeInfo;
