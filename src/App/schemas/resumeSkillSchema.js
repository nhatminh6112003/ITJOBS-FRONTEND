import * as yup from 'yup';
export const resumeSkillSchema = yup.object({
	skill_name: yup.string().required('Vui lòng nhập kỹ năng, chuyên môn').trim(),
	skill_content: yup.string().required('Vui lòng nhập mô tả kỹ năng').trim(),
	skill_level: yup.string().required("'Vui lòng chọn cấp kỹ năng").trim()
});
