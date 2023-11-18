import * as yup from 'yup';
export const feedBackSchema = yup.object({
	email: yup.string().required('Vui lòng nhập email').nullable(),
	reason: yup.string().required('Vui lòng chọn lý do').nullable().default('')
});
