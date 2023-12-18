import * as yup from 'yup';
export const serviceTypeSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập loại tên dịch vụ')
});
