import * as yup from 'yup';
export const resumeLanguageSchema = yup.object({
	resume_id: yup.string().required(),
	rs_language: yup.string().required('Vui lòng chọn ngôn ngữ'),
	rs_language_level: yup.string().required('Vui lòng chọn trình độ ngoại ngữ'),
	rs_language_certify: yup
		.string()
		.required('Vui lòng nhập chứng chỉ ngoại ngữ')
		.trim('Vui lòng không nhập khoảng trắng')
});
