import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './applyJob.module.css';
import { useSelector } from 'react-redux';
import { useGetOneUserQuery } from '~/App/providers/apis/userApi';
import { useGetAllMyAttachQuery } from '~/App/providers/apis/myAttachApi';
import { useGetAllResumeQuery } from '~/App/providers/apis/resumeApi';
import InputFieldControl from '~/Core/components/common/FormControl/InputFieldControl';
import { useForm } from 'react-hook-form';
import CheckBoxFieldControl from '~/Core/components/common/FormControl/CheckBoxFieldControl';
import routesPath from '~/App/config/routesPath';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateJobPostActivityApiMutation } from '~/App/providers/apis/jobPostActivityApi';
import { useParams } from 'react-router-dom';
import { useGetOneJobPostQuery } from '~/App/providers/apis/jobPostApi';
import { useGetAllProvincesQuery } from '~/App/providers/apis/listProvincesApi';
import formatDate from '~/Core/utils/formatDate';

const sx = classNames.bind(styles);

const ApplyJob = ({ cx }) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [resumeId, setResumeId] = useState(null);
	const user = useSelector((state) => state.auth?.user);
	const { data } = useGetOneUserQuery(user?.id);
	const { data: jobPost } = useGetOneJobPostQuery(id);

	const { data: resume } = useGetAllResumeQuery({
		params: { user_account_id: user?.id, isDeleted: false, resume_type_id: 1 }
	});
	const { data: myAttach } = useGetAllMyAttachQuery(user?.id);
	const [createMutation] = useCreateJobPostActivityApiMutation();
	const [provinces, setProvinces] = useState('');
	const { data: listProvinces } = useGetAllProvincesQuery();

	const { control, handleSubmit, setValue, register } = useForm({});

	const handleChooseResume = (e, item) => {
		const resumeId = e.target.value;
		setResumeId(resumeId);
		setValue('resume_type', item.resume_type_id);
	};
	const handleApplyJob = (data) => {
		if (!resumeId) {
			toast.error('Vui lòng chọn hồ sơ để ứng tuyển');
			return;
		}

		createMutation({
			resume_id: resumeId,
			user_account_id: user?.id,
			job_id: id,
			resume_type: data.resume_type
		}).then((result) => {
			if (result.status == 200) {
				toast.success('Bạn đã nộp cv thành công');
			}
			navigate(routesPath.JobseekerPaths.jobApplied);
		});
	};
	useEffect(() => {
		console.log(jobPost);
		return listProvinces?.map((item) => {
			if (item.code == jobPost?.provinces) {
				setProvinces(item.name);
			}
		});
	}, [jobPost, listProvinces]);
	return (
		<section className={cx('member', 'cb-section')}>
			<div className={cx('container')}>
				<div className={cx('cb-title', 'cb-title-center')}>
					<h2>Nộp hồ sơ ứng tuyển</h2>
				</div>
				<div className={cx('row', 'cus-row')}>
					<div className={cx('col-lg-7', 'cus-col')}>
						<div className={sx('member-form')}>
							<div className={sx('main-form')}>
								<div className={sx('title-h3')}>
									<h3>Nộp hồ sơ ứng tuyển:</h3>
									<Link className={sx('name', 'detail')} to={`/tim-viec-lam/${jobPost?.id}`}>
										{jobPost?.job_title}
									</Link>
								</div>
								<div className={sx('please-fill')}>
									<p>Điền thông tin liên hệ của bạn và chọn hồ sơ để ứng tuyển:</p>
								</div>
								<form
									onSubmit={handleSubmit(handleApplyJob)}
									method='post'
									name='frmApplyjob'
									id='frmApplyjob'
									encType='multipart/form-data'>
									<div className={sx('title-h4')}>
										<h4>Thông tin liên hệ của bạn</h4>
									</div>
									<div className={sx('form-wrap')}>
										<div className={sx('form-group', 'form-text')}>
											<label htmlFor=''>Họ tên</label>
											<input type='text' defaultValue={data?.firstname + ' ' + data?.lastname} readOnly />
										</div>
										<div className={sx('form-group', 'form-text')}>
											<label htmlFor=''>Email</label>
											<input type='text' defaultValue={data?.email} readOnly />
										</div>
									</div>
									<div className={sx('title-h4')}>
										<h4>Hồ sơ của bạn</h4>
									</div>
									<div className={sx('upload-resume')}>
										<div className={sx('form-group', 'form-radio')}>
											<input type='radio' defaultValue={1} id='choose-resumes' name='your_resume' />
											<label htmlFor='choose-resumes' className={sx('lb-choose-resumes')}>
												Chọn từ hồ sơ của bạn
											</label>
											<div className={sx('list-radio')}>
												{resume?.map((item) => (
													<div className={sx('form-group', 'form-radio')}>
														<input
															type='radio'
															name='resume_id'
															id={`resume_${item.id}`}
															defaultValue={item.id}
															onChange={(e) => handleChooseResume(e, item)}
														/>
														<label htmlFor={`resume_${item.id}`}>
															{item?.resume_title?.title}
															<Link to={routesPath.JobseekerPaths.dashboard}>[Xem]</Link>
														</label>
													</div>
												))}
												{myAttach?.map((resume) => (
													<div className={sx('form-group', 'form-radio')}>
														<input
															type='radio'
															name='resume_id'
															id={`resume_${resume.id}`}
															defaultValue={resume.id}
															onChange={(e) => handleChooseResume(e, resume)}
														/>
														<label htmlFor={`resume_${resume.id}`}>
															{resume?.resume_title?.title}
															<Link to={`/ho-so-cua-toi/ho-so-dinh-kem/` + resume?.id}>[Xem]</Link>
														</label>
													</div>
												))}

												{/* <div className={sx('form-group', 'form-radio')}>
													<input
														type='radio'
														name='resume_id'
														id='resume_18151080'
														defaultValue={18151080}
													/>
													<input
														type='radio'
														name='resume_kind'
														id='resume_kind_18151080'
														defaultValue={2}
														style={{ display: 'none' }}
													/>
													<label htmlFor='resume_18151080'>
														123
														<a
															href='https://careerbuilder.vn/vi/quan-ly-nghe-nghiep/ho-so-cua-toi/ho-so-dinh-kem/123-18151080'
															target='_blank'>
															[Xem]
														</a>
													</label>
												</div> */}

												<span className={sx('err_resume_id')} style={{ display: 'none' }} />
												<p>
													Bạn muốn
													<Link style={{ paddingLeft: 3 }} to={routesPath.JobseekerPaths.dashboard}>
														Tạo hồ sơ mới!{' '}
													</Link>
												</p>
											</div>
										</div>
										{/* <div className={sx('form-group', 'form-radio')}>
											<input type='radio' id='upload-resume' defaultValue={2} name='your_resume' />
											<label htmlFor='upload-resume'>
												Upload hồ sơ: Hỗ trợ định dạng *.doc, *.dosx, *.pdf và không quá 5MB
											</label>
											<div className={sx('list-radio')}>
											
												<div className={sx('list-choose')}>
													<div className={sx('choose-mycomputer')}>
														<label htmlFor='attach_file'>
															<em className={sx('mdi', 'mdi-folder-outline')} />
															Chọn từ máy tính
														</label>
														<input
															className={sx('d-none', 'file')}
															type='file'
															name='attach_file'
															id='attach_file'
															defaultValue=''
															accept='.doc,.dosx,.pdf,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-office'
														/>
														<input
															type='hidden'
															name='ieattach_file'
															id='ieattach_file'
															defaultValue=''
														/>
														<input
															type='hidden'
															name='ieattach_file_type'
															id='ieattach_file_type'
															defaultValue=''
														/>
														<input
															type='hidden'
															name='ieattach_file_title'
															id='ieattach_file_title'
															defaultValue=''
														/>
														<input
															type='hidden'
															name='ieattach_file_size'
															id='ieattach_file_size'
															defaultValue=''
														/>
													</div>
													<button
														type='button'
														className={sx('choose-dropbox', 'button', 'file')}
														name='dropbox_button'
														id='dropbox_button'>
														<img src='./img/quick-upload-resume/Dropbox_Logo.png' alt='' />
														Chọn file từ Dropbox
													</button>
													<input type='hidden' name='dropbox_file' id='dropbox_file' defaultValue='' />
													<input type='hidden' name='dfile_title' id='dfile_title' defaultValue='' />
													<input type='hidden' name='dfile_size' id='dfile_size' defaultValue='' />
													<p>
														<span
															className={sx('err_session_file', 'err_attach')}
															style={{ display: 'none' }}
														/>
														<span
															className={sx('err_attach_file', 'err_attach')}
															style={{ display: 'none' }}
														/>
														<span
															className={sx('err_dropbox_file', 'err_attach')}
															style={{ display: 'none' }}
														/>
													</p>
													<span className={sx('imgload')} style={{ display: 'none' }}>
														<img
															src='https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/icon_animated_busy2.gif'
															alt='Loading'
														/>
													</span>
													<div className={sx('form-show-file', '')}>
														<em className={sx('material-icons')}>picture_as_pdf</em>
														<input type='text' id='uploadFile' defaultValue='' />
														<a tabIndex={0} role='button' onclick='removeFile()'>
															<em className={sx('material-icons')}>highlight_off</em>Xóa
														</a>
													</div>
													<p>
														Bạn chưa có hồ sơ? Tạo ngay hồ sơ chuyên nghiệp miễn phí tại
														<a
															target='_blank'
															href='https://careerbuilder.vn/cv-hay/?utm_source=CBApply&utm_medium=CVHay&utm_campaign=CBApply_CVHay'
															style={{ color: '#0078c9' }}>
															CVHay.vn
														</a>
														<a
															href='https://images.careerbuilder.vn/resumes/resume_template.doc'
															target='_blank'
															id='download_link'></a>
													</p>
												</div>
												<div className={sx('notice', 'box-noti')}>
													<p className={sx('name')}>
														<strong>Lưu ý:</strong>
													</p>
													<p>
														Trong trường hợp bạn gặp phải bất kỳ vấn đề gì trong quá trình thực hiện như
														tải hồ sơ không thành công hoặc không nhấn được nút Gửi hồ sơ, vui lòng kiểm
														tra lại nguyên nhân và thử các bước gợi ý sau.
													</p>
													<ul>
														<li>
															Hệ thống hiện chỉ hỗ trợ một tập tin được tải lên có các
															<strong>định dạng .doc, .dosx hoặc .pdf</strong>
														</li>
														<li>
															Nếu bạn có nhiều loại bằng cấp hay giấy tờ khác muốn đính kèm thêm,
															<strong>
																vui lòng gộp chung vào một tập tin theo đúng định dạng với tổng dung
																lượng không vượt quá 5MB
															</strong>
														</li>
														<li>
															<strong>Nâng cấp trình duyệt đang sử dụng lên phiên bản mới nhất</strong>
															(Firefox: 57 trở lên, Cốc Cốc: 75 trở lên, Microsoft Edge: MEdge 44 trở
															lên, Internet Explorer: 11 trở lên, Safari: 13.1 trở lên)
														</li>
														<li>
															Vào phần thiết lập của trình duyệt để
															<strong> tắt chức năng chặn quảng cáo (Ads Block)</strong>
														</li>
														<li>
															Chụp ảnh màn hình cùng mô tả cụ thể và gửi về bộ phận chăm sóc ứng viên của
															CareerBuilder:
															<a href='mailto:support@careerbuilder.vn' className={sx('passChk')}>
																<b style={{ fontSize: 14, fontWeight: 'normal' }}>
																	support@careerbuilder.vn
																	<b />
																</b>
															</a>
															để được hỗ trợ thêm
														</li>
													</ul>
												</div>
											</div>
											<span className={sx('err_your_resume')} style={{ display: 'none' }} />
										</div> */}
										<div className={sx('form-group', 'form-checkbox')}>
											<input type='checkbox' name='chksendletter' id='chksendletter' defaultValue={1} />
											{/* <div className={sx('checkbox-group')}>
												<label htmlFor='chksendletter'>Sử dụng thư tự giới thiệu?</label>
												<ul className={sx('list-sample')}>
													<li>
														<a tabIndex={0} role='button' className={sx('sample-vn')}>
															[Mẫu <b>tiếng Việt</b>]
														</a>
													</li>
													<li>
														<a tabIndex={0} role='button' className={sx('sample-en')}>
															[Mẫu <b>tiếng Anh</b>]
														</a>
													</li>
												</ul>
											</div> */}
											{/* <textarea name='letter_content' id='letter_content' defaultValue={''} />
											<span className={sx('err_letter_content')} style={{ display: 'none' }} /> */}
											{/* <div className={sx('notice')}>
												<p>Vui lòng không nhập quá 5000 ký tự</p>
											</div> */}
										</div>
									</div>
									<div className={sx('switch-box')} style={{ display: 'none' }}>
										<p>
											Tăng hơn 80% cơ hội tìm việc, <strong>Bạn có muốn lưu hồ sơ này không?</strong>
										</p>
										<label htmlFor='save-resume'>
											<input type='checkbox' id='save-resume' defaultValue='allow' />
											<span className={sx('slider')}>
												<i className={sx('icon', 'mdi', 'mdi-close')} />
											</span>
										</label>
									</div>
									<div className={sx('status-area')} id='status_resume_17722295' style={{ display: 'none' }}>
										<p>Chế độ tìm việc của hồ sơ</p>
										<div
											className={sx('switch-status', 'switch-status-element')}
											id='cv_searchable_17722295'
											data-id={17722295}
											data-complete={1}>
											<a
												tabIndex={0}
												role='button'
												data-type={1}
												className={sx('lock', 'switch-status-element-1', 'active')}>
												<em className={sx('mdi', 'mdi-lock')} />
												Khóa
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={2}
												className={sx('public', 'switch-status-element-2', '')}>
												<em className={sx('mdi', 'mdi-web')} />
												Công khai
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={3}
												className={sx('flash', 'switch-status-element-3', '')}>
												<em className={sx('mdi', 'mdi-flash')} />
												Khẩn cấp
											</a>
										</div>
										<div className={sx('swap-content-1')}>
											<p className={sx('content-1', '', 'active', '')}>
												Bạn đang vô hiệu hóa hồ sơ này. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
											</p>
											<p className={sx('content-2', '')}>
												Hồ sơ của bạn đang ở trạng thái Công Khai. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
												của bạn.
											</p>
											<p className={sx('content-3', '')}>
												Hồ sơ của bạn sẽ được ưu tiên hiển thị cho các nhà tuyển dụng khi tìm kiếm ứng viên.
											</p>
										</div>
									</div>
									<div className={sx('status-area')} id='status_resume_18151080' style={{ display: 'none' }}>
										<p>Chế độ tìm việc của hồ sơ</p>
										<div
											className={sx('switch-status', 'switch-status-element')}
											id='cv_searchable_18151080'
											data-id={18151080}
											data-complete={1}>
											<a
												tabIndex={0}
												role='button'
												data-type={1}
												className={sx('lock', 'switch-status-element-1', 'active')}>
												<em className={sx('mdi', 'mdi-lock')} />
												Khóa
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={2}
												className={sx('public', 'switch-status-element-2', '')}>
												<em className={sx('mdi', 'mdi-web')} />
												Công khai
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={3}
												className={sx('flash', 'switch-status-element-3', '')}>
												<em className={sx('mdi', 'mdi-flash')} />
												Khẩn cấp
											</a>
										</div>
										<div className={sx('swap-content-1')}>
											<p className={sx('content-1', '', 'active', '')}>
												Bạn đang vô hiệu hóa hồ sơ này. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
											</p>
											<p className={sx('content-2', '')}>
												Hồ sơ của bạn đang ở trạng thái Công Khai. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
												của bạn.
											</p>
											<p className={sx('content-3', '')}>
												Hồ sơ của bạn sẽ được ưu tiên hiển thị cho các nhà tuyển dụng khi tìm kiếm ứng viên.
											</p>
										</div>
									</div>
									<div className={sx('status-area')} id='status_resume_18149049' style={{ display: 'none' }}>
										<p>Chế độ tìm việc của hồ sơ</p>
										<div
											className={sx('switch-status', 'switch-status-element')}
											id='cv_searchable_18149049'
											data-id={18149049}
											data-complete={1}>
											<a
												tabIndex={0}
												role='button'
												data-type={1}
												className={sx('lock', 'switch-status-element-1', 'active')}>
												<em className={sx('mdi', 'mdi-lock')} />
												Khóa
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={2}
												className={sx('public', 'switch-status-element-2', '')}>
												<em className={sx('mdi', 'mdi-web')} />
												Công khai
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={3}
												className={sx('flash', 'switch-status-element-3', '')}>
												<em className={sx('mdi', 'mdi-flash')} />
												Khẩn cấp
											</a>
										</div>
										<div className={sx('swap-content-1')}>
											<p className={sx('content-1', '', 'active', '')}>
												Bạn đang vô hiệu hóa hồ sơ này. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
											</p>
											<p className={sx('content-2', '')}>
												Hồ sơ của bạn đang ở trạng thái Công Khai. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
												của bạn.
											</p>
											<p className={sx('content-3', '')}>
												Hồ sơ của bạn sẽ được ưu tiên hiển thị cho các nhà tuyển dụng khi tìm kiếm ứng viên.
											</p>
										</div>
									</div>
									<div className={sx('status-area')} id='status_resume_18006664' style={{ display: 'none' }}>
										<p>Chế độ tìm việc của hồ sơ</p>
										<div
											className={sx('switch-status', 'switch-status-element')}
											id='cv_searchable_18006664'
											data-id={18006664}
											data-complete={1}>
											<a
												tabIndex={0}
												role='button'
												data-type={1}
												className={sx('lock', 'switch-status-element-1', 'active')}>
												<em className={sx('mdi', 'mdi-lock')} />
												Khóa
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={2}
												className={sx('public', 'switch-status-element-2', '')}>
												<em className={sx('mdi', 'mdi-web')} />
												Công khai
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={3}
												className={sx('flash', 'switch-status-element-3', '')}>
												<em className={sx('mdi', 'mdi-flash')} />
												Khẩn cấp
											</a>
										</div>
										<div className={sx('swap-content-1')}>
											<p className={sx('content-1', '', 'active', '')}>
												Bạn đang vô hiệu hóa hồ sơ này. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
											</p>
											<p className={sx('content-2', '')}>
												Hồ sơ của bạn đang ở trạng thái Công Khai. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
												của bạn.
											</p>
											<p className={sx('content-3', '')}>
												Hồ sơ của bạn sẽ được ưu tiên hiển thị cho các nhà tuyển dụng khi tìm kiếm ứng viên.
											</p>
										</div>
									</div>
									<div className={sx('status-area')} id='status_resume' style={{ display: 'none' }}>
										<p>Chế độ tìm việc của hồ sơ</p>
										<div
											className={sx('switch-status', 'switch-status-element-replace')}
											id=''
											data-id=''
											data-complete=''>
											<a
												tabIndex={0}
												role='button'
												data-type={1}
												className={sx('lock', 'switch-status-element-1', 'active')}>
												<em className={sx('mdi', 'mdi-lock')} />
												Khóa
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={2}
												className={sx('public', 'switch-status-element-2')}>
												<em className={sx('mdi', 'mdi-web')} />
												Công khai
											</a>
											<a
												tabIndex={0}
												role='button'
												data-type={3}
												className={sx('flash', 'switch-status-element-3', '')}>
												<em className={sx('mdi', 'mdi-flash')} />
												Khẩn cấp
											</a>
										</div>
										<div className={sx('swap-content-1')}>
											<p className={sx('content-1', 'active')}>
												Bạn đang vô hiệu hóa hồ sơ này. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.
											</p>
											<p className={sx('content-2')}>
												Hồ sơ của bạn đang ở trạng thái Công Khai. Nhà tuyển dụng có thể tìm thấy Hồ sơ này
												của bạn.
											</p>
											<p className={sx('content-3')}>
												Hồ sơ của bạn sẽ được ưu tiên hiển thị cho các nhà tuyển dụng khi tìm kiếm ứng viên.
											</p>
										</div>
									</div>

									<div
										className={sx('choose-profile-modal')}
										id='chooseresume'
										style={{ display: 'none', overflow: 'hidden' }}>
										<span id='resume1'>Bạn đã có 5 hồ sơ trong hệ thống.</span>
										<p id='resume2'>Vui lòng lựa chọn 1 hồ sơ mà bạn muốn thay thế.</p>
										<div className={sx('list-radio-area')} id='lstResume'></div>
										<ul>
											<li>
												<button className={sx('btn', 'btn-replace')} id='btn-replace'>
													Lưu thay đổi
												</button>
											</li>
											<li>
												<button className={sx('btn', 'btn-cancel')}>Không thay đổi</button>
											</li>
											<input type='hidden' defaultValue={0} id='resume-replace' name='resume_replace' />
										</ul>
									</div>
									<div className={sx('noti-modal')} id='on_status' style={{ display: 'none' }}>
										<strong>js_urgentjob_resume_noti_title</strong>
										<p>js_urgentjob_resume_noti</p>
										<ul>
											<li>
												<button className={sx('btn', 'btn-update')} onclick='$.fancybox.close();'>
													js_urgentjob_resume_change_status
												</button>
											</li>
											<li>
												<button className={sx('btn', 'btn-cancel')} id='btn-cancel-modal'>
													js_urgentjob_resume_skip
												</button>
											</li>
										</ul>
									</div>
									<div className={sx('form-group', 'form-submit')}>
										<button className={sx('btn-gradient')} name='btnsubmit' id='btnsubmit' type='submit'>
											Nộp Ứng Tuyển
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className={cx('col-md-5', 'cus-col')}>
						<div className={sx('apply-form-job-detail')}>
							<div className={sx('title-h3')}>
								<h3>Thông tin việc làm</h3>
							</div>
							<div className={sx('table')}>
								<table>
									<tbody>
										<tr>
											<td>Vị trí / Chức danh:</td>
											<td>{jobPost?.job_title}</td>
										</tr>
										<tr>
											<td>Công ty ứng tuyển:</td>
											<td>{jobPost?.company?.company_name}</td>
										</tr>
										<tr>
											<td>Nơi làm việc</td>
											<td>{provinces}</td>
										</tr>
										<tr>
											<td>Người liên hệ</td>
											<td>{jobPost?.company?.contact_name}</td>
										</tr>
										<tr>
											<td>Hết hạn nộp</td>
											<td>{formatDate(jobPost?.expiry_date)}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className={sx('employer')}>
								<p>
									<strong>Hình thức ứng tuyển:</strong> Hồ sơ trực tuyến
									<br /> Nhà tuyển dụng sẽ nhận trực tiếp hồ sơ thông qua hệ thống ngay khi hoàn tất ứng tuyển.
									Ứng viên vui lòng không liên hệ qua email và số điện thoại.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ApplyJob;
