import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import useModal from '~/App/hooks/useModal';
import styles from '~/App/pages/Jobseeker/ChangeTemplate/changetemplate.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { colorsEnum, fontSize, fontsEnum } from '~/App/constants/resumeTemplateEnum';
import { useGetOneQuery, useUpdateUiMutation } from '~/App/providers/apis/resumeTemplateApi';
import { useGetOneResumeQuery } from '~/App/providers/apis/resumeApi';
import { languages } from '~/App/constants/resumeLanguageEnum';
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
	console.log('TCL: ResumeStyle -> resumeData', resumeData);

	useEffect(() => {
		changeLanguage(myResume?.cv_language);
		changeFont(myResume?.cv_font);
		changeFontSize(myResume?.cv_size);
	}, [myResume]);

	useEffect(() => {
		const allSkill = document.querySelectorAll('._skill_1hw82_1616');
		for (const itemSkill of allSkill) {
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
					<div className={sx('col-xs-12', 'step-content', 'cv-mode-finish')} style={{ marginTop: 0 }}>
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
