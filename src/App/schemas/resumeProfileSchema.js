import * as yup from 'yup';
export const resumeProfileSchema = yup.object({
	firstname: yup.string().required('Vui lòng nhập họ và tên lót').nullable(),
	lastname: yup.string().required('Vui lòng nhập tên').nullable(),
	phone_number: yup.string().default('').required('Vui lòng nhập số điện thoại').nullable(),
	birthday: yup.string().required('Vui lòng nhập ngày sinh').nullable(),
	address: yup.string().default('').required('Địa chỉ').nullable(),
	provinces: yup.string().default('').required('Vui lòng nhập nơi làm việc').nullable(),
	districts: yup.string().default('').required('Vui lòng nhập quận').nullable(),
	marial_status: yup.number().required('Vui lòng nhập tình trạng hôn nhân').nullable()
});
