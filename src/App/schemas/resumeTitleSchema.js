import * as yup from 'yup';
export const resumeTitleSchema = yup.object({
	title: yup.string().default('').trim('Vui lòng không nhập khoảng trắng').required('Vui lòng nhập vị trí mong muốn.')
});
