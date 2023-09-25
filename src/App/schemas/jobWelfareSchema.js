import * as yup from 'yup';
export const jobWelfareSchema = yup.object({
	welfare_type: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập phúc lợi')
});
