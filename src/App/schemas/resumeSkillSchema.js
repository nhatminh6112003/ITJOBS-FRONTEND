import * as yup from 'yup';
export const resumeSkillSchema = yup.object({
	skill_name: yup.string().required(),
	skill_content: yup.string().required(),
	skill_level: yup.string(),
});
		