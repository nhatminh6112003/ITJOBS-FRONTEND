import * as yup from 'yup';
export const resumeReferSchema = yup.object({
	ref_email: yup
		.string()
		.email('Vui lòng nhập đúng định dạng email')
		.required('Vui lòng nhập email của bạn.')
		.trim('Vui lòng không nhập khoảng trắng'),
	ref_name: yup.string().required('Vui lòng nhập họ tên').trim('Vui lòng không nhập khoảng trắng'),
	ref_phone: yup
		.string()
		.matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số')
		.required('Vui lòng nhập số điện thoại')
		.trim(),
	ref_title: yup.string().required('Vui lòng nhập chức vụ').trim('Vui lòng không nhập khoảng trắng'),
	ref_company: yup.string().required('Vui lòng nhập công ty').trim('Vui lòng không nhập khoảng trắng')
});
