import * as yup from 'yup';
export const resumeCertificateSchema = yup.object({
	cer_title: yup.string().required(),
	cer_form: yup.date().required(),
	cer_to: yup.date(),
	cer_by: yup.string().required(),
	cer_limit: yup.boolean()
});
