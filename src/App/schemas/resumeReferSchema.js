import * as yup from 'yup';
export const resumeReferSchema = yup.object({
	ref_email: yup.string().required().email(),
	ref_name: yup.string().required(),
	ref_phone: yup.string().required(),
	ref_title: yup.string().required(),
	ref_company: yup.string().required()
});


