import * as yup from 'yup';
export const resumeReferSchema = yup.object({
	ref_email: yup
		.string()
		.email('Không đúng định dạng email')
		.required('Xin vui lòng nhập email của bạn.')
		.trim('Vui lòng không nhập khoảng trắng'),
	ref_name: yup.string().required('Vui lòng nhập họ tên').trim('Vui lòng không nhập khoảng trắng'),
	ref_phone: yup.string().required('Vui lòng nhập số điện thoại').trim('Vui lòng không nhập khoảng trắng'),
	ref_title: yup.string().required('Vui lòng nhập chức vụ').trim('Vui lòng không nhập khoảng trắng'),
	ref_company: yup.string().required('Vui lòng nhập công ty').trim('Vui lòng không nhập khoảng trắng')
});
