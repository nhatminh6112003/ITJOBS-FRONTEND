import * as yup from 'yup';
export const resumeSkillSchema = yup.object({
	skill_name: yup.string().required('Vui lòng nhập trường này'),
	skill_content: yup.string().required('Vui lòng nhập trường này'),
	skill_level: yup.string('Vui lòng chọn cấp bậc skill')
});
