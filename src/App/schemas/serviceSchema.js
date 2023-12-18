import * as yup from 'yup';
export const serviceSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên dịch vụ'),
	service_type_id: yup
		.string()
		.default('')
		.trim('Vui lòng không nhập khoảng trắng')
		.required('Vui lòng chọn loại dịch vụ'),
	price: yup.string().default('').trim().required('Vui lòng nhập giá'),
	description: yup.string().default('')
});
