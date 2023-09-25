import * as yup from 'yup';
export const professionSchema = yup.object({
	name: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập nghề nghiệp')
});
