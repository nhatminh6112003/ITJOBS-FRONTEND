import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from '~/App/pages/jobseeker/ChangeTemplate/changetemplate.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { marialStatusEnum } from '~/App/constants/marialStatusEnum';
import { colorsEnum, fontSize, fontsEnum } from '~/App/constants/resumeTemplateEnum';
import { useGetOneResumeQuery } from '~/App/providers/apis/resumeApi';
import { useGetOneQuery } from '~/App/providers/apis/resumeTemplateApi';
import formatDate from '~/Core/utils/formatDate';
import { DegreeArray } from '~/App/constants/degreeArray';
import formatVND from '~/Core/utils/formatVND';
import { LevelArray } from '~/App/constants/levelEnum';
import { listProvinces } from '~/App/constants/provincesData';
import GenderEnum from '~/App/constants/genderEnum';
const sx = classNames.bind(styles);

const ResumeStyle = () => {
	const { id } = useParams();
	const { data } = useGetOneQuery(id);
	let [currentFont, changeFont] = useState('');
	let [currentFontSize, changeFontSize] = useState('fontCVsize14');
	let [language, changeLanguage] = useState('');
	let [cvColor, setCvColor] = useState('');
	const resume = useSelector((state) => state.auth?.user?.resume);

	const { data: myResume, refetch } = useGetOneQuery(resume?.id);
	const { data: resumeData } = useGetOneResumeQuery(resume?.id);

	useEffect(() => {
		changeLanguage(myResume?.cv_language);
		changeFont(myResume?.cv_font);
		changeFontSize(myResume?.cv_size);
	}, [myResume]);

	useEffect(() => {
		const titleBlock = document.querySelector('._col-xs-12_1hw82_2635 ._name_1hw82_1499 h2');
		if (titleBlock) {
			titleBlock.innerHTML = resumeData?.user_account?.firstname + ' ' + resumeData?.user_account?.lastname;
		}

		const headerBlock = document.querySelectorAll('._col-sm-6_1hw82_84 h3');
		const allSkill = document.querySelectorAll('._skill_1hw82_1616');
		const headerContentResume = document.querySelectorAll('._content_1hw82_1507 ._col-xs-12_1hw82_2635 h3');
		const resumeDesiredBlock = document.querySelector('._content_1hw82_1507 ._col-xs-12_1hw82_2635');
		const resumeTitle = document.querySelector('._col-xs-12_1hw82_2635 ._name_1hw82_1499 h4');
		if (resumeData?.resume_title?.title) {
			resumeTitle.innerHTML = resumeData?.resume_title?.title;
		}

		if (resumeDesiredBlock && resumeData?.resume_desired_job && listProvinces) {
			resumeDesiredBlock.insertAdjacentHTML(
				'beforebegin',
				`
				<div class="_col-xs-12_1hw82_2635">
				<h3><span>CÔNG VIỆC MONG MUỐN</span></h3>
				<div class="expected-job">
				<ul class="contact">
					<li>
					<label>Cấp bậc </label> : ${LevelArray.map((value) => {
						if (value.value === resumeData?.resume_desired_job?.position_id) {
							return value.label;
						}
					}).join('')}
											<li class="dbl-line">
											<label>Mức lương</label>:&nbsp;</>
											<span class="txt">				
				${
					resumeData?.resume_desired_job?.salary_from && resumeData?.resume_desired_job?.salary_to
						? formatVND(resumeData?.resume_desired_job?.salary_from) +
						  '-' +
						  formatVND(resumeData?.resume_desired_job?.salary_to) +
						  'VND'
						: ''
				}
					   
					  </span>
					  </li>
																										                    <li class="dbl-line"><label>Hình thức công việc</label><span>:&nbsp;</span><span class="txt">
												${resumeData?.work_type?.map((item) => item.name)}																				  </span></li>
                                        					<li class="dbl-line"><label>Ngành nghề</label><span>:&nbsp;</span><span class="txt">${resumeData?.professions?.map(
																			(item) => item.name
																		)}	</span></li>
					<li class="dbl-line"><label>Nơi làm việc</label><span>:&nbsp;</span><span class="txt"> ${listProvinces
						?.map((province) => {
							const desiredProvinceId = resumeData?.resume_desired_job?.provinces;
							const positionLabel = province.code === desiredProvinceId ? province.name : null;
							return positionLabel;
						})
						.join('')}
						  						  </span></li>
					
				</ul>
			</div>
				</div>
			`
			);
			resumeDesiredBlock.insertAdjacentHTML(
				'afterend',
				`
				<div class='_col-xs-12_1hw82_2635'>
				<h3><span>THÀNH TÍCH NỔI BẬT</span></h3>
				<div class="_text-edt_1hw82_3533">
								<div class="_text-edt_1hw82_3533">
								<div class="_title_1hw82_1464">${
									resumeData?.resume_addioninfo?.addioninfo ? resumeData?.resume_addioninfo?.addioninfo : ''
								}  </div>
				</div>
			`
			);
			resumeDesiredBlock.insertAdjacentHTML(
				'afterend',
				`
				<div class='_col-xs-12_1hw82_2635'>
				<h3><span>CHỨNG CHỈ</span></h3>
				<div class="_text-edt_1hw82_3533" style="margin-bottom:0px">
								<div class="_text-edt_1hw82_3533">
								<div class="_title_1hw82_1464">${resumeData?.resume_certificate
									?.map(
										(item, index, array) => `
								<div class="_text-edt_1hw82_3533">
								  <div class="_title_1hw82_1464">
									 ${item.cer_title}
									 </br>
									 ${item.cer_by}
									 </br>
								  </div>
								  <div class="_content_fck_1hw82_1507" style="margin-bottom:${index === array.length - 1 ? '0' : '10px'}">
									 <p>${formatDate(item.cer_form)}-${item.cer_limit ? 'Không giới hạn' : formatDate(item.cer_to)}</p>
								  </div>
								</div>`
									)
									.join('')}  </div>
				</div>
			`
			);
			resumeDesiredBlock.insertAdjacentHTML(
				'afterend',
				`
				<div class='_col-xs-12_1hw82_2635'>
				<h3><span>HOẠT ĐỘNG KHÁC</span></h3>
				<div class="_text-edt_1hw82_3533" style="margin-bottom:0px">
								<div class="_text-edt_1hw82_3533">
								<div class="_title_1hw82_1464">${resumeData?.resume_activities
									?.map(
										(item, index, array) => `
								<div class="_text-edt_1hw82_3533">
								  <div class="_title_1hw82_1464">
								  ${item?.role}
									 </br>
									 ${item?.activity_des ? item?.activity_des : ''}
									 </br>
								  </div>
								  <div class="_content_fck_1hw82_1507" style="margin-bottom:${index === array.length - 1 ? '0' : '10px'}">
									 <p>${formatDate(item.start_date)} - 
									 ${item.activity_current ? ' Hiện tại ' : formatDate(item.end_date)}</p>
								  </div>
								</div>`
									)
									.join('')}  </div>
				</div>
			`
			);
		}
		for (const itemContentResume of headerContentResume) {
			const lowerCaseText = itemContentResume.innerText.toLowerCase();
			const nextElementSibling = itemContentResume.nextElementSibling;
			if (lowerCaseText.includes('objectives') || lowerCaseText.includes('mục tiêu nghề nghiệp')) {
				nextElementSibling.innerHTML = `<div class="_content_fck_1hw82_1507">${
					resumeData?.resume_objective ? resumeData?.resume_objective?.objective_job : ''
				}</div>`;
			}
			if (lowerCaseText.includes('work experience') || lowerCaseText.includes('kinh nghiệm làm việc')) {
				nextElementSibling.innerHTML =
					resumeData?.resume_experiences && resumeData?.resume_experiences?.length > 0
						? resumeData?.resume_experiences
								?.map(
									(item) => `
									<div class="_title_1hw82_1464">		${formatDate(item.rexp_form)}-
									${item.experCurrent ? 'Hiện tại' : formatDate(item.rexp_to)}
									:
					${item?.rexp_title} - ${item?.rexp_company}
						 
					</div>
									<div class="_content_fck_1hw82_1507" style="margin-bottom:25px">${item?.rexp_workdesc}</div>
				`
								)
								.join('')
						: [];
				nextElementSibling.nextElementSibling.style = 'display:none';
			}
			if (lowerCaseText.includes('educations') || lowerCaseText.includes('học vấn')) {
				nextElementSibling.innerHTML =
					resumeData?.resume_education && resumeData?.resume_education?.length > 0
						? resumeData?.resume_education
								?.map(
									(item) => `
								<div class="_text-edt_1hw82_3533" style="margin-bottom:0px">
								<div class="_title_1hw82_1464">Tốt nghiệp ${formatDate(item?.redu_date)}</br>${DegreeArray?.map((degree) => {
										if (degree.value == item?.redu_degree) {
											return degree.label;
										}
									}).join('')} - ${item?.redu_name} </div>
								<div class="_content_fck_1hw82_1507" style="margin-bottom:25px">${item?.redu_desc}</div>`
								)
								.join('')
						: [];
			}
			if (lowerCaseText.includes('references') || lowerCaseText.includes('người tham khảo')) {
				nextElementSibling.innerHTML =
					resumeData?.resume_refer && resumeData?.resume_refer?.length > 0
						? resumeData?.resume_refer
								?.map(
									(item) => `
								<div class="text-edt" style="margin-bottom:25px">
				<div class="title">${item?.ref_name}</div>
				<div class="content_fck">
					<p>${item?.ref_title}, ${item?.ref_company}</p>
					<p>Phone: ${item?.ref_phone}</p>
					<p>Email: ${item?.ref_email}</p>				</div>
			</div>`
								)
								.join('')
						: [];
				nextElementSibling.nextElementSibling.style = 'display:none';
			}
		}
		for (const itemBlock of headerBlock) {
			const profileUser = resumeData?.user_account?.resume_profile;
			const lowerCaseText = itemBlock.innerText.toLowerCase();
			if (lowerCaseText.includes('contact') || lowerCaseText.includes('liên hệ')) {
				const ulBlock = itemBlock.parentElement.querySelector('._contact_1hw82_2730');

				const editTitle = ulBlock.parentElement.querySelector('h3 span');

				const liBlock = ulBlock.querySelector('li');
				const labelBlock = liBlock.querySelector('li label');
				if (editTitle.innerText === 'CONTACT') {
					editTitle.innerHTML = 'Thông tin liên lạc';
				}
				if (editTitle.innerText.toLowerCase() === 'liên hệ') {
					editTitle.innerText = 'Thông tin cá nhân';
				}
				if (labelBlock) {
					ulBlock.innerHTML = `
					<ul class="_contact_1hw82_2730">
					<li><label>Ngày sinh</label> : ${profileUser?.birthday ? formatDate(profileUser?.birthday) : 'MM/DD/YYYY'}</li>
					<li><label>Giới Tính</label> : ${profileUser?.gender ? GenderEnum[profileUser?.gender] : ''}</li>
					<li><label>Tình trạng hôn nhân</label> : ${
						profileUser?.marial_status != null &&
						profileUser?.marial_status != undefined &&
						profileUser?.marial_status
							? 'Đã kết hôn'
							: 'Độc thân'
					}</li>
					`;
				} else {
					ulBlock.innerHTML = `
					<ul class="_contact_1hw82_2730"><li>
					${profileUser?.phone_number ? profileUser?.phone_number : 'Số điện thoại'}</li>
					<li class="_dbl-line_1hw82_4872">
					 <span>${resumeData?.user_account?.email ? resumeData?.user_account?.email : ''}</span></li>
					<li class="_dbl-line_1hw82_4872">
					<span class="_txt_1hw82_2113">${profileUser?.address ? profileUser?.address : 'Địa chỉ'}</span></li>
					</ul>`;
				}
			}
		}

		for (const itemSkill of allSkill) {
			itemSkill.parentElement.className = '_col-xs-12_1hw82_2635';
			if (itemSkill.className == '_skill_1hw82_1616') {
				const resume_skill =
					resumeData?.resume_skills && resumeData?.resume_skills?.length > 0
						? resumeData?.resume_skills?.map(
								(item) =>
									`<li><label>${item.skill_content}</label><div class="_point_1hw82_3766"><span></span><span></span><span></span><span></span><span></span></div></li>`
						  )
						: null;

				if (resume_skill) {
					itemSkill.innerHTML = resume_skill;
				} else {
					itemSkill.parentElement.style.display = 'none';
				}
			} else {
				const resume_language =
					resumeData?.resume_language && resumeData?.resume_language?.length > 0
						? resumeData?.resume_language?.map(
								(item) =>
									`<li>
									<label>${item.rs_language_certify}</label>
								 </li>`
						  )
						: null;

				if (resume_language) {
					itemSkill.innerHTML = resume_language;
				} else {
					itemSkill.parentElement.style.display = 'none';
				}
			}
		}
	}, [resumeData]);
	return (
		<div id='uni_wrapper'>
			<div className={sx('swc-wrapper')}>
				<div className={sx('container-fluid')}>
					<div className={sx('col-xs-12', 'step-content', 'cv-mode-finish')}>
						<div className={sx('editCVtemplate-wrapper', 'editCVtemplate')}>
							<div className={sx('col-xs-12')}>
								{language == 'en' ? (
									<div
										id='ZoneShowCVTemplateEn'
										className={sx(
											'cv-template-wrapper',
											currentFont ? fontsEnum[currentFont] : '',
											currentFontSize ? fontSize[currentFontSize] : fontSize['fontCVsize14'],
											myResume?.default_template,
											colorsEnum[cvColor] ? colorsEnum[cvColor] : colorsEnum[myResume?.cv_color]
										)}
										dangerouslySetInnerHTML={{ __html: myResume?.cvTemplate?.html_template_en }}></div>
								) : (
									<div
										id='ZoneShowCVTemplateVi'
										className={sx(
											'cv-template-wrapper',
											currentFont ? fontsEnum[currentFont] : '',
											currentFontSize ? fontSize[currentFontSize] : fontSize['fontCVsize14'],
											myResume?.default_template,
											colorsEnum[cvColor] ? colorsEnum[cvColor] : colorsEnum[myResume?.cv_color]
										)}
										dangerouslySetInnerHTML={{ __html: myResume?.cvTemplate?.html_template_vi }}></div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeStyle;
