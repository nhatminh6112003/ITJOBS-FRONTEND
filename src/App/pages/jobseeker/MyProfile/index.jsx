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
												<Link to='/jobseekers/changetemplate'>
													{' '}
													<em className={cx('material-icons')}>
														<EditIcon fontSize='normal' />
													</em>
													<span>Chỉnh Mẫu Hồ Sơ</span>
												</Link>
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
												Job Hunters Profile
											</a>
										</div>
										<div className={cx('toggle-menu')}>
											<em className={cx('material-icons')}>list</em>
										</div>
									</div>
									<ul className={cx('list-shortchut')}>
										<li className={cx('active')}>
											<a className={cx('active')} data-href='#widget-11'>
												Job Hunters Profile
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
