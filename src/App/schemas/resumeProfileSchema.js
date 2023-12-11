import * as yup from 'yup';
export const resumeProfileSchema = yup.object({
	firstname: yup.string().required('Vui lòng nhập họ và tên lót').nullable().trim('Vui lòng không nhập khoảng trắng'),
	lastname: yup.string().required('Vui lòng nhập tên').nullable().trim(),
	phone_number: yup
		.string()
		.matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 số')
		.default('')
		.required('Vui lòng nhập số điện thoại')
		.nullable()
		.trim('Vui lòng không nhập khoảng trắng'),
	birthday: yup.string().required('Vui lòng nhập ngày sinh').nullable(),
	address: yup
		.string()
		.default('')
		.required('Vui lòng nhập địa chỉ')
		.nullable()
		.trim('Vui lòng không nhập khoảng trắng'),
	provinces: yup.string().default('').required('Vui lòng nhập nơi làm việc').nullable(),
	districts: yup.string().default('').required('Vui lòng nhập quận').nullable(),
	marial_status: yup.string().required('Vui lòng nhập tình trạng hôn nhân').nullable(),
	gender: yup.string().default('').required('Vui lòng chọn giới tính').nullable()
});
