import * as yup from 'yup';
export const benefitSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập tên lợi ích'),
	description: yup.string().default('')
});
