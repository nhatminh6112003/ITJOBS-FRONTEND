import * as yup from 'yup';
export const CompanySchema = yup.object({
	company_name: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập tên công ty'),
	company_type: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập loại hình công ty'),
	company_size: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập quy mô công ty'),
	tax_code: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập mã số thuế'),
	address: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập địa chỉ'),
	contact_name: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập tên người liên hê'),
	contact_phone: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng nhập số điện thoại người liên hệ'),
	position: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập vị trí')
});
