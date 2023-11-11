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
const sx = classNames.bind(styles);

const ResumeInfo = ({ cx }) => {
	const [sendMail] = useSendMailJobSeekerMutation();
	const user = useSelector((state) => state.auth.user);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm({});

	const { id } = useParams();
	const { data } = useGetOneResumeQuery(id);

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

	useEffect(() => {
		console.log(data);
	}, [data]);
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
														href='javascript:void(0);'
														onclick="showFoldersSelected('35C9210A', 'listresumes[]');"
														title='Lưu thư mục'>
														Lưu thư mục
													</a>
												</li>
												<li>
													<em className={cx('material-icons')}>account_box</em>
													<a
														href='javascript:void(0);'
														onclick="showResumeForInvite('35BFE874','35C9210A');return false;"
														title='Xem hồ sơ tương tự'>
														Xem hồ sơ tương tự
													</a>
												</li>
												<li>
													<em className={cx('material-icons')}>picture_as_pdf </em>

													<a onClick={() => exportPdf(data?.attachments?.file)} href='javascript:void(0)'>
														Xuất file PDF
													</a>
												</li>
												<li>
													<em className={cx('material-icons')}>highlight_off</em>
													<a className={cx('btn-hidden-resume')} style={{ cursor: 'pointer' }}>
														Ẩn hồ sơ
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
															<div className={cx('col-lg-6', 'colRight')}>
																<div className={cx('buyService')}>
																	<div className={sx('top')}>
																		<p>
																			Để xem hồ sơ hoàn chỉnh của ứng viên, quý khách vui lòng sử
																			dụng dịch vụ
																		</p>{' '}
																		<strong>&quot; Tìm hồ sơ &ldquo;</strong>
																	</div>
																	<div className={sx('btn_submit')}>
																		<button type='button'>Mua dịch vụ</button>
																	</div>
																</div>
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
		</section>
	);
};

export default ResumeInfo;
