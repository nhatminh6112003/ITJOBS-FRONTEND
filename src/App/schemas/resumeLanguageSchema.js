import * as yup from 'yup';
export const resumeLanguageSchema = yup.object({
	resume_id: yup.string().required(),
	rs_language: yup.string().required(),
	rs_language_level: yup.string().required(),
	rs_language_certify: yup.string().required()
});
