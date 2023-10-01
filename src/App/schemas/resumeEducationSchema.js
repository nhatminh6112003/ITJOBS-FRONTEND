import * as yup from 'yup';
export const resumeEducationSchema = yup.object({
	redu_name: yup.string().required('Vui lòng nhập Trường / khóa học').trim('Vui lòng không nhập khoảng trắng'),
	redu_degree: yup.string().required('Vui lòng chọn bằng cấp').oneOf(['0', '1', '2', '3', '4', '5', '6']),
	redu_date: yup.date(),
	redu_desc: yup.string()
});
