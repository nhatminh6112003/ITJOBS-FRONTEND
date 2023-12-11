import * as yup from 'yup';
export const sendEmailSchema = yup.object({
	title: yup.string().required('Vui lòng nhập tiêu đề').trim().max(150, 'Tiêu đề không được vượt quá 150 ký tự'),
	content: yup
		.string()
		.required('Vui lòng nhập nội dung')
		.trim()
		.min(10, 'Nội dung phải có ít nhất 10 kí tự')
		.max(3000, 'Nội dung không được quá 3000 kí tự')
});
