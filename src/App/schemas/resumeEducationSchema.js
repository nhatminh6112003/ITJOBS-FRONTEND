import * as yup from 'yup';
export const resumeEducationSchema = yup.object({
	redu_name: yup.string().required(),
	redu_degree: yup.string().required().oneOf(['0', '1', '2', '3', '4', '5', '6']),
	redu_date: yup.date(),
	redu_desc: yup.string()
});
