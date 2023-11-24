import classNames from 'classnames/bind';
import styles from './MyProfile.module.css';
import SideBar from '~/App/layouts/Components/jobseeker/SideBar';
import { LockIcon, EditIcon, RemoveRedEyeIcon } from '~/Core/resources';

import useModal from '~/App/hooks/useModal';
import ResumeTitle from './components/ResumeTitle';
import ResumeRefer from './components/ResumeRefer';
import ResumeEducation from './components/ResumeEducation';
import ResumeCertificate from './components/ResumeCertificate';
import ResumeObjective from './components/ResumeObjective';
import ResumeAddioninfo from './components/ResumeAddioninfo';
import ResumeActivity from './components/ResumeActivity';
import ResumeExperience from './components/ResumeExperience';
import ResumeSkill from './components/ResumeSkill';
import ResumeDesiredJob from './components/ResumeDesiredJob';
import ResumeLanguage from './components/ResumeLanguage';
import ResumeProfile from './components/ResumeProfile';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routesPath from '~/App/config/routesPath';

export const cx = classNames.bind(styles);

const MyProfile = () => {
	const user = useSelector((state) => state.auth?.user);

	const { isShowing, toggle } = useModal({
		resume_title: false,
		resume_refer: false,
		resume_certificate: false,
		resume_education: false,
		resume_objective: false,
		resume_activity: false,
		resume_experience: false,
		resume_skill: false,
		resume_desired_job: false,
		resume_language: false,
		update_resume_refer: false,
		update_resume_certificate: false,
		update_resume_education: false,
		update_resume_objective: false,
		update_resume_addioninfo: false,
		update_resume_activity: false,
		update_resume_experience: false,
		update_resume_desired_job: false,
		update_resume_language: false
	});
	return (
		<div className={cx('page-content', 'd-flex', 'align-items-stretch')}>
			<SideBar className={cx} />
			<div className={cx('content-inner')}>
				<div className={cx('container-fluid')}>
					<div className={cx('db-my-profile')}>
						<div className={cx('row')}>
							<div className={cx('col-lg-8', 'col-xl-9', 'main-widget')}>
								<div className={cx('widget', 'widget-2', 'widget-11')} id='widget-11'>
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
															<img
																id='img_mem_avatar'
																className={cx('cropped')}
																src='/avatar.webp'
																alt=''
															/>
														</div>
													</div>
													<div className={cx('mobile-show')}>
														<div className={cx('cb-name')}>
															<h2>Lop Minh</h2>
														</div>
														<div className={cx('information')}>
															<div className={cx('assistant')} id='titleresume_17722295'>
																Frontend Developer
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={cx('col-lg-8', 'col-xl-9')}>
												<div className={cx('cb-name')}>
													<h2 id='section_name'>Lop Minh</h2>
												</div>
												<div className={cx('information')}>
													<div className={cx('assistant')}>Frontend Developer</div>
												</div>
												<div id='complete_section'>
													{' '}
													<div className={cx('progress-bar-status', 'not-approve')}></div>
													<div
														className={cx('searchable-cv-widget', 'status-area', 'attached-status-area')}>
														<div
															className={cx('switch-status', 'group_searchable')}
															id='cv_searchable_17722295'
															data-id={17722295}
															data-complete={1}>
															<button data-type={2} className={cx('lock', 'active')}>
																<LockIcon fontSize='small' />
																Khóa
															</button>
															<button data-type={1} className={cx('public', '')}>
																<em className={cx('mdi', 'mdi-web')} />
																Công khai
															</button>
															<button data-type={3} className={cx('flash', '')}>
																<em className={cx('mdi', 'mdi-flash')} />
																Khẩn cấp
															</button>
														</div>
														<p className={cx('text-notes', 'text-notes-2', 'd-block')}>
															Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ không thấy được
															hồ sơ này của bạn.
														</p>
														<p className={cx('text-notes', 'text-notes-1', 'd-none')}>
															Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà tuyển dụng có
															thể tìm thấy Hồ sơ này của bạn.
														</p>
														<p className={cx('text-notes', 'text-notes-3', 'd-none')}>
															Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ
															được ưu tiên tìm thấy bởi các nhà tuyển dụng.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<ResumeTitle className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeProfile className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeObjective className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeDesiredJob className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeExperience className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeEducation className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeCertificate className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeAddioninfo className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeLanguage className={cx} isShowing={isShowing} toggle={toggle} />

								<div className={cx('widget', 'widget-17')} id='widget-17'>
									<ResumeSkill className={cx} isShowing={isShowing} toggle={toggle} />
								</div>

								<ResumeActivity className={cx} isShowing={isShowing} toggle={toggle} />

								<ResumeRefer className={cx} isShowing={isShowing} toggle={toggle} />
							</div>
							<div className={cx('col-lg-4', 'col-xl-3', 'main-menu')}>
								<div className={cx('menu-shortchut', 'active')}>
									<div className={cx('list-button')}>
										<ul>
											<li>
												<a href='https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate'>
													{' '}
													<em className={cx('material-icons')}>
														<EditIcon fontSize='normal' />
													</em>
													<span>Chỉnh Mẫu Hồ Sơ</span>
												</a>
											</li>
											<li>
												<a
													href={routesPath.BasePaths.ResumeStyle.replace(/:id/g, user.resume.id)}
													id='btn_view_cbprofile'>
													<em className={cx('material-icons')}>
														<RemoveRedEyeIcon fontSize='normal' />
													</em>
													<span>Xem CV Template</span>
												</a>
											</li>
										</ul>
									</div>
									<div className={cx('head-menu')}>
										<div className={cx('name-shortchut')}>
											<a className={cx('active')} href=''>
												Careerbuilder Profile
											</a>
										</div>
										<div className={cx('toggle-menu')}>
											<em className={cx('material-icons')}>list</em>
										</div>
									</div>
									<ul className={cx('list-shortchut')}>
										<li className={cx('active')}>
											<a className={cx('active')} href='' data-href='#widget-11'>
												Careerbuilder Profile
											</a>
										</li>
										<li>
											<Link to='#personalinfo-section'>Thông tin cá nhân</Link>
										</li>
										<li>
											<Link to='#widget-14'>Mục tiêu nghề nghiệp</Link>
										</li>
										<li>
											<Link to='#widget-18'>Thông tin nghề nghiệp</Link>
										</li>
										<li>
											<Link to='#widget-15' data-href='#widget-15'>
												Kinh nghiệm làm việc
											</Link>
										</li>
										<li>
											<Link to='#widget-16'>Học vấn</Link>
										</li>
										<li>
											<Link to='#certificate-section'>Chứng chỉ khác</Link>
										</li>
										<li>
											<Link to='#language-section'>Ngôn ngữ</Link>
										</li>
										<li>
											<Link to='#widget-17'>Kỹ năng chuyên môn</Link>
										</li>
										<li>
											<Link to='#other-activity-section'>Hoạt động khác</Link>
										</li>
										<li>
											<Link to='#widget-20'>Người tham khảo</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
